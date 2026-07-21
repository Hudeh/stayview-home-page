"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function DemoForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    rooms: "",
    message: "",
    website: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !data.success) {
        setState("error");
        setErrorMessage(data.message || "Could not submit your request. Please try again.");
        return;
      }

      setState("success");
    } catch {
      setState("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 text-xl font-semibold text-green-900">Request received</h3>
        <p className="mt-2 text-green-800">
          We sent a confirmation to <strong>{form.email}</strong>. Our team will contact you
          within one business day to schedule your StayView demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {state === "error" && errorMessage && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMessage}
        </div>
      )}

      {/* Honeypot — hidden from users, bots may fill it */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Full name *</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none ring-brand focus:ring-2"
            placeholder="Ada Okonkwo"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Work email *</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none ring-brand focus:ring-2"
            placeholder="gm@yourhotel.com"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Phone</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none ring-brand focus:ring-2"
            placeholder="+234 …"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Property name *</span>
          <input
            required
            type="text"
            value={form.property}
            onChange={(e) => setForm({ ...form, property: e.target.value })}
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none ring-brand focus:ring-2"
            placeholder="Lagos Grand Hotel"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium">Number of rooms</span>
        <select
          value={form.rooms}
          onChange={(e) => setForm({ ...form, rooms: e.target.value })}
          className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none ring-brand focus:ring-2"
        >
          <option value="">Select range</option>
          <option value="1-30">1 – 30</option>
          <option value="31-50">31 – 50</option>
          <option value="51-70">51 – 70</option>
          <option value="71-120">71 – 120</option>
          <option value="120+">120+</option>
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-medium">What would you like to see?</span>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-2 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none ring-brand focus:ring-2"
          placeholder="Night audit, F&B POS, multi-property setup…"
        />
      </label>
      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-primary w-full disabled:opacity-60 sm:w-auto sm:min-w-[12rem]"
      >
        {state === "submitting" ? "Sending…" : "Request demo"}
      </button>
      <p className="text-xs text-muted">
        By submitting, you agree to be contacted about StayView. We respect your privacy.
      </p>
    </form>
  );
}
