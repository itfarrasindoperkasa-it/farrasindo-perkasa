"use client";

import React, { useState } from "react";
import { contactInfo } from "@/lib/datas/contact";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Locale } from "@/lib/datas/global";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm({
  locale,
  contactData,
}: {
  locale: Locale;
  contactData: any;
}) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format pesan untuk WhatsApp
    const message = `*New Contact Form Submission*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Message:*
${formData.message}`;

    // Encode message untuk URL
    const encodedMessage = encodeURIComponent(message);

    // Buka WhatsApp Web
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const contactInfoData = contactData.sectionContactInfo;
  const contactFormData = contactData.sectionContactForm;

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {contactInfoData.title}
              </h2>
              <p className="text-gray-600">{contactInfoData.description}</p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Hotline */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Farrasindo Hotline
                  </h3>
                  <p className="text-gray-600">{contactInfo.hotline}</p>
                </div>
              </div>

              {/* Head Office */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Farrasindo Head Office
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {contactInfo.headOffice.address}
                  </p>
                  <p className="text-gray-600">
                    Phone: {contactInfo.headOffice.phone}
                  </p>
                  <p className="text-gray-600">
                    Fax: {contactInfo.headOffice.fax}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-lg text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                {locale == "id" ? `Ikuti kami` : `Follow us`}
              </h3>
              <div className="flex gap-4">
                {/* Facebook */}
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                {/* TikTok */}
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {contactFormData.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale == "id" ? "Nama Depan *" : "First Name *"}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale == "id" ? "Nama Belakang *" : "Last Name *"}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="john.doe@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {locale == "id" ? `Nomor Telepon *` : `Phone Number *`}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="+62 812 3456 7890"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {locale == "id" ? `Pesan *` : `Message *`}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                {locale == "id" ? `Kirim via WhatsApp` : `Submit via WhatsApp`}
              </button>

              <p className="text-sm text-gray-500 text-center">
                {contactFormData.description}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
