"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });

  const set = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", role: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full font-sans text-[16px] text-cream bg-white/8 border border-cream/25 rounded-sm px-4 py-[14px] outline-none focus:border-gold-light transition-colors placeholder:text-cream/35";
  const labelClass =
    "block text-[11px] font-extrabold tracking-[0.18em] uppercase text-cream/55 mb-2";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <div className="w-14 h-14 rounded-full bg-gold-light/20 flex items-center justify-center">
          <svg className="w-7 h-7 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="font-serif text-[30px] font-semibold text-cream leading-tight mb-3">
            Application received!
          </p>
          <p className="text-cream/70 text-[16px] leading-relaxed max-w-md mx-auto">
            Thank you for applying to be featured on Simply Music Inc. Doris or her team will
            review your application and be in touch soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </div>
      <div>
        <label className={labelClass}>What do you create?</label>
        <input
          type="text"
          placeholder="Musician, author, podcaster, entrepreneur…"
          value={form.role}
          onChange={set("role")}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Tell us about your work</label>
        <textarea
          rows={4}
          placeholder="Share a bit about your story, your work, and why you'd like to be featured…"
          value={form.message}
          onChange={set("message")}
          className={`${inputClass} resize-y min-h-[110px]`}
        />
      </div>
      {status === "error" && (
        <p className="text-[13px] text-red-300">
          Something went wrong — please try again or email{" "}
          <a href="mailto:simplymusic@verizon.net" className="underline">
            simplymusic@verizon.net
          </a>
        </p>
      )}
      <div className="flex justify-center mt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase text-burgundy-deep bg-gold-light hover:bg-gold-pale disabled:opacity-60 px-10 py-4 rounded-sm transition-colors duration-200"
        >
          {status === "loading" ? (
            <>
              <span className="w-3 h-3 border-2 border-burgundy-deep/40 border-t-burgundy-deep rounded-full animate-spin" />
              Submitting…
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </div>
    </form>
  );
}
