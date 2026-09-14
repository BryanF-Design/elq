import { NextResponse } from "next/server";

export type EstimateRequestPayload = {
  name: string;
  phone: string;
  email: string;
  serviceType?: string;
  frequency?: string;
  propertyType?: string;
  bedrooms?: string;
  bathrooms?: string;
  preferredDate?: string;
  message?: string;
  /** Honeypot field — real visitors never fill this in. */
  company?: string;
};

function buildPlainTextSummary(payload: EstimateRequestPayload) {
  return [
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Service type: ${payload.serviceType ?? "—"}`,
    `Frequency: ${payload.frequency ?? "—"}`,
    `Property type: ${payload.propertyType ?? "—"}`,
    `Bedrooms: ${payload.bedrooms ?? "—"}`,
    `Bathrooms: ${payload.bathrooms ?? "—"}`,
    `Preferred date: ${payload.preferredDate ?? "—"}`,
    `Message: ${payload.message ?? "—"}`,
  ].join("\n");
}

export async function POST(request: Request) {
  let payload: EstimateRequestPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid_body" }, { status: 400 });
  }

  // Silently accept spam-bot submissions that filled the honeypot field.
  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  if (!payload.name || !payload.phone || !payload.email) {
    return NextResponse.json({ ok: false, reason: "missing_fields" }, { status: 400 });
  }

  // --- TODO: connect a real delivery provider ------------------------------
  // Set ONE of the following in the environment to make this endpoint live:
  //
  // 1) Formspree — set FORMSPREE_ENDPOINT to your form's endpoint URL
  //    (https://formspree.io/f/xxxxxxx). This route will forward the payload.
  //
  // 2) Resend — set RESEND_API_KEY and RESEND_TO_EMAIL. This route will call
  //    the Resend REST API directly (no extra dependency required).
  //
  // 3) Supabase — swap this block for an insert into a `leads` table using
  //    the Supabase REST API or JS client once a project is provisioned.
  // ---------------------------------------------------------------------------

  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendToEmail = process.env.RESEND_TO_EMAIL;

  try {
    if (formspreeEndpoint) {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Formspree responded with ${response.status}`);
      return NextResponse.json({ ok: true });
    }

    if (resendApiKey && resendToEmail) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "ELQ Cleaning Website <onboarding@resend.dev>",
          to: resendToEmail,
          subject: `New estimate request from ${payload.name}`,
          text: buildPlainTextSummary(payload),
        }),
      });
      if (!response.ok) throw new Error(`Resend responded with ${response.status}`);
      return NextResponse.json({ ok: true });
    }
  } catch (error) {
    console.error("[api/estimate] Delivery provider error:", error);
    return NextResponse.json({ ok: false, reason: "provider_error" }, { status: 502 });
  }

  console.info("[api/estimate] No delivery provider configured. Received:\n" + buildPlainTextSummary(payload));
  return NextResponse.json({ ok: false, reason: "not_configured" });
}
