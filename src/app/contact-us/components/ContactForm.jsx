"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID , PUBLIC_KEY } from "@/constant";

export default function ContactForm() {
    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        mobile: "",
        email: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    patient_name: form.name,
                    mobile: form.mobile,
                    email: form.email,
                },
                PUBLIC_KEY
            )
            .then(() => {
                setLoading(false);
                setForm({ name: "", mobile: "", email: "" });
                router.push("/thank-you");
            })
            .catch((err) => {
                setLoading(false);
                alert("Failed to send. Please try again.");
                console.log(err);
            });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md"
        >
            <h2 className="text-2xl font-semibold mb-6">
                Request a Call Back
            </h2>

            <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mb-4 p-3 border rounded-lg"
            />

            <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                required
                className="w-full mb-4 p-3 border rounded-lg"
            />

            <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mb-6 p-3 border rounded-lg"
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
                {loading ? "Sending..." : "Submit Request"}
            </button>
        </form>
    );
}
