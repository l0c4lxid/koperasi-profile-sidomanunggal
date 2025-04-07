"use client";

import { useState } from "react";
import emailjs from "emailjs-com"; // Mengimpor EmailJS
import { PlaceholderImage } from "../data/data"; // Mengimpor komponen placeholder untuk gambar

// Mendapatkan variabel lingkungan
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
  throw new Error("EmailJS environment variables are not properly set.");
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  // Handle form input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ success: false, message: "Email tidak valid." });
      setIsSubmitting(false);
      return;
    }

    // Persiapkan template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      title: formData.title,
      message: formData.message,
      to_email: "",
    };

    // Menggunakan EmailJS untuk mengirim email
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setSubmitStatus({
          success: true,
          message: "Terima kasih! Pesan Anda telah terkirim.",
        });
        setFormData({ name: "", email: "", title: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setSubmitStatus({
          success: false,
          message:
            "Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 md:mb-16 text-center">
          Hubungi Kami
        </h2>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Kirim Pertanyaan Anda
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder="Contoh: Joko Susilo"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder="Contoh: joko@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subjek
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder="Contoh: Pertanyaan tentang layanan"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Pesan atau Pertanyaan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                ></textarea>
              </div>

              {/* Status message */}
              {submitStatus.message && (
                <div
                  className={`p-3 rounded-md ${
                    submitStatus.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
                } text-white font-semibold px-6 py-3 rounded-md transition duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Informasi Kontak & Lokasi
            </h3>

            {/* Alamat */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 mt-1 text-blue-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Alamat Kantor:</h4>
                <p className="text-gray-600 text-base">
                  Jl. Kesejahteraan No. 123, Desa Manunggal, Kec. Sejahtera,
                  Kabupaten Maju Jaya, Kode Pos 54321
                </p>
              </div>
            </div>

            {/* Telepon */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 mt-1 text-blue-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Telepon:</h4>
                <p className="text-gray-600 text-base">
                  (021) 123-4567 | 0812-3456-7890 (WhatsApp)
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 mt-1 text-blue-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Email:</h4>
                <p className="text-gray-600 text-base">
                  info@koperasisidomanunggal.co.id
                </p>
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 mt-1 text-blue-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">
                  Jam Operasional Kantor:
                </h4>
                <p className="text-gray-600 text-base">
                  Senin - Jumat: 08.00 - 16.00 WIB
                </p>
                <p className="text-gray-600 text-base">
                  Sabtu: 08.00 - 12.00 WIB
                </p>
                <p className="text-gray-600 text-base">
                  Minggu & Hari Libur Nasional: Tutup
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-800 mb-3">Lokasi Kami:</h4>
              <PlaceholderImage className="w-full h-64 rounded-lg shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
