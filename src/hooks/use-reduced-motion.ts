"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia(QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Reads `prefers-reduced-motion` via useSyncExternalStore rather than
 * Framer Motion's own hook, which only checks the media query once on
 * first mount and can end up stuck reflecting a stale server-side value.
 * useSyncExternalStore keeps the server-safe default during SSR and
 * updates correctly the moment the client mounts, staying in sync if the
 * OS-level setting changes afterwards.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
