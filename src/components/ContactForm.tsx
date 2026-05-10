"use client";

import { useState } from "react";

export default function ContactForm() {

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    setSuccess(false);

    try {

      const res = await fetch("/api/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {

        setSuccess(true);

        setForm({
          name: "",
          email: "",
          message: "",
        });
      }

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);
    }
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <input
        type="text"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
        className="w-full bg-[#2e2824] border border-[#3b342f] rounded-xl p-4"
      />

      <input
        type="email"
        placeholder="Email Address"
        required
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
        className="w-full bg-[#2e2824] border border-[#3b342f] rounded-xl p-4"
      />

      <textarea
        placeholder="Tell us about your project..."
        rows={5}
        required
        value={form.message}
        onChange={(e) =>
          setForm({
            ...form,
            message: e.target.value,
          })
        }
        className="w-full bg-[#2e2824] border border-[#3b342f] rounded-xl p-4"
      />

      <button
        disabled={loading}
        className="bg-[#c78665] hover:bg-[#ad6f51] transition px-8 py-4 rounded-full w-full"
      >

        {loading
          ? "Sending..."
          : "Send Message"}

      </button>

      {success && (

        <p className="text-green-400">
          Message sent successfully!
        </p>

      )}

    </form>
  );
}