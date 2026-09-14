"use client";

import { useId, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, PhoneCall } from "lucide-react";
import { FormField, inputClassName } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error" | "not_configured";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  frequency: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  preferredDate: string;
  message: string;
  company: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9()+\-.\s]{7,20}$/;

const initialValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  serviceType: "",
  frequency: "",
  propertyType: "",
  bedrooms: "",
  bathrooms: "",
  preferredDate: "",
  message: "",
  company: "",
};

export function EstimateForm() {
  const t = useTranslations("contact.form");
  const tServices = useTranslations("services");
  const tFrequency = useTranslations("frequency");
  const formId = useId();

  const serviceOptions = tServices.raw("items") as { title: string }[];
  const frequencyOptions = tFrequency.raw("options") as { name: string }[];

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim()) nextErrors.name = t("errors.required");
    if (!values.phone.trim()) {
      nextErrors.phone = t("errors.required");
    } else if (!PHONE_RE.test(values.phone.trim())) {
      nextErrors.phone = t("errors.invalidPhone");
    }
    if (!values.email.trim()) {
      nextErrors.email = t("errors.required");
    } else if (!EMAIL_RE.test(values.email.trim())) {
      nextErrors.email = t("errors.invalidEmail");
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { ok: boolean; reason?: string };

      if (data.ok) {
        setStatus("success");
        setValues(initialValues);
      } else if (data.reason === "not_configured") {
        setStatus("not_configured");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-2xl border border-rose/40 bg-surface p-10 text-center"
        role="status"
      >
        <CheckCircle2 className="h-9 w-9 text-rose" aria-hidden="true" />
        <h3 className="font-heading text-xl text-foreground">{t("successTitle")}</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">{t("successMessage")}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label={t("name")} htmlFor={`${formId}-name`} error={errors.name} required>
          <input
            id={`${formId}-name`}
            name="name"
            autoComplete="name"
            placeholder={t("namePlaceholder")}
            className={inputClassName}
            value={values.name}
            aria-invalid={Boolean(errors.name)}
            onChange={(e) => update("name", e.target.value)}
          />
        </FormField>

        <FormField label={t("phone")} htmlFor={`${formId}-phone`} error={errors.phone} required>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t("phonePlaceholder")}
            className={inputClassName}
            value={values.phone}
            aria-invalid={Boolean(errors.phone)}
            onChange={(e) => update("phone", e.target.value)}
          />
        </FormField>
      </div>

      <FormField label={t("email")} htmlFor={`${formId}-email`} error={errors.email} required>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t("emailPlaceholder")}
          className={inputClassName}
          value={values.email}
          aria-invalid={Boolean(errors.email)}
          onChange={(e) => update("email", e.target.value)}
        />
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label={t("serviceType")} htmlFor={`${formId}-service`}>
          <select
            id={`${formId}-service`}
            name="serviceType"
            className={cn(inputClassName, "appearance-none")}
            value={values.serviceType}
            onChange={(e) => update("serviceType", e.target.value)}
          >
            <option value="">{t("serviceTypePlaceholder")}</option>
            {serviceOptions.map((option) => (
              <option key={option.title} value={option.title}>
                {option.title}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label={t("frequency")} htmlFor={`${formId}-frequency`}>
          <select
            id={`${formId}-frequency`}
            name="frequency"
            className={cn(inputClassName, "appearance-none")}
            value={values.frequency}
            onChange={(e) => update("frequency", e.target.value)}
          >
            <option value="">{t("frequencyPlaceholder")}</option>
            {frequencyOptions.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <FormField label={t("propertyType")} htmlFor={`${formId}-property`} className="sm:col-span-1">
          <select
            id={`${formId}-property`}
            name="propertyType"
            className={cn(inputClassName, "appearance-none")}
            value={values.propertyType}
            onChange={(e) => update("propertyType", e.target.value)}
          >
            <option value="">{t("propertyTypePlaceholder")}</option>
            <option value="house">{t("propertyTypeOptions.house")}</option>
            <option value="apartment">{t("propertyTypeOptions.apartment")}</option>
            <option value="townhome">{t("propertyTypeOptions.townhome")}</option>
          </select>
        </FormField>

        <FormField label={t("bedrooms")} htmlFor={`${formId}-bedrooms`}>
          <select
            id={`${formId}-bedrooms`}
            name="bedrooms"
            className={cn(inputClassName, "appearance-none")}
            value={values.bedrooms}
            onChange={(e) => update("bedrooms", e.target.value)}
          >
            <option value="">—</option>
            {["1", "2", "3", "4", "5+"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label={t("bathrooms")} htmlFor={`${formId}-bathrooms`}>
          <select
            id={`${formId}-bathrooms`}
            name="bathrooms"
            className={cn(inputClassName, "appearance-none")}
            value={values.bathrooms}
            onChange={(e) => update("bathrooms", e.target.value)}
          >
            <option value="">—</option>
            {["1", "2", "3", "4+"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label={t("preferredDate")} htmlFor={`${formId}-date`}>
        <input
          id={`${formId}-date`}
          name="preferredDate"
          type="date"
          className={cn(inputClassName, "[color-scheme:dark]")}
          value={values.preferredDate}
          onChange={(e) => update("preferredDate", e.target.value)}
        />
      </FormField>

      <FormField label={t("message")} htmlFor={`${formId}-message`}>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          placeholder={t("messagePlaceholder")}
          className={cn(inputClassName, "resize-none")}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </FormField>

      {/* Honeypot — hidden from real visitors, catches simple bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input
          id={`${formId}-company`}
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </div>

      {status === "error" || status === "not_configured" ? (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-400/30 bg-red-400/5 p-4 text-sm text-red-300"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-medium">{status === "not_configured" ? t("notConfiguredTitle") : t("errorTitle")}</p>
            <p className="mt-1 text-red-300/80">
              {status === "not_configured" ? t("notConfiguredMessage") : t("errorMessage")}
            </p>
            <a href={site.phoneHref} className="mt-2 inline-flex items-center gap-1.5 font-medium text-champagne">
              <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? t("submitting") : t("submit")}
      </Button>
    </form>
  );
}
