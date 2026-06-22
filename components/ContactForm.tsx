"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const set = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full font-sans text-[16px] text-brown bg-warm-light border border-brown/15 rounded-sm px-4 py-[14px] outline-none focus:border-burgundy transition-colors placeholder:text-mid-light/60";
  const labelClass =
    "block text-[11px] font-extrabold tracking-[0.18em] uppercase text-mid mb-2";

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-8">
        <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-burgundy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="font-serif text-[26px] font-semibold text-brown leading-tight mb-2">
            Message received!
          </p>
          <p className="text-mid text-[15px] leading-relaxed">
            Thank you for reaching out. Doris or her team will be in touch shortly.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-[12px] font-bold tracking-[0.12em] uppercase text-burgundy border-b border-burgundy pb-0.5"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className={labelClass}>Name</label>
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={set("name")}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Email</label>
        <input
          type="email"
          placeholder="you@email.com"
          value={form.email}
          onChange={set("email")}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Message</label>
        <textarea
          rows={5}
          placeholder="Tell us about booking, collaborations, or anything else…"
          value={form.message}
          onChange={set("message")}
          required
          className={`${inputClass} resize-y min-h-[130px]`}
        />
      </div>
      {status === "error" && (
        <p className="text-[13px] text-red-600">
          Something went wrong — please try again or email us directly at{" "}
          <a href="mailto:simplymusic@verizon.net" className="underline">
            simplymusic@verizon.net
          </a>
        </p>
      )}
      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase text-cream bg-burgundy hover:bg-burgundy-deep disabled:opacity-60 px-8 py-4 rounded-sm transition-colors duration-200"
        >
          {status === "loading" ? (
            <>
              <span className="w-3 h-3 border-2 border-cream/40 border-t-cream rounded-full animate-spin" />
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
}
