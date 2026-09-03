"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#ffffff",
        borderTop: "1px solid #E2E8F0",
        paddingTop: "75px",
        paddingBottom: "35px",
        color: "var(--text-main)",
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "36px",
            marginBottom: "50px",
          }}
        >
          {/* Column 1: Brand & Social */}
          <div style={{ maxWidth: "320px" }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #00A669 0%, #007A4D 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0, 166, 105, 0.3)",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <span
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 900,
                    color: "#0F172A",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                  }}
                >
                  Loan<span style={{ color: "var(--primary)" }}>Hub</span>
                </span>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "#64748B",
                    fontWeight: 600,
                  }}
                >
                  Smart Loans, Simple Process
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.86rem",
                color: "#64748B",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}
            >
              LoanHub is India's trusted digital lending marketplace committed to providing quick,
              transparent, and paperless credit solutions to help millions achieve their dreams.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                  href: "#",
                  label: "Facebook",
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                    </svg>
                  ),
                  href: "#",
                  label: "Twitter",
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                  href: "#",
                  label: "LinkedIn",
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                  href: "#",
                  label: "Instagram",
                },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#F1F5F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#475569",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--primary)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#F1F5F9";
                    e.currentTarget.style.color = "#475569";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A", marginBottom: "18px" }}>
              Loan Products
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "#64748B" }}>
              {[
                { name: "Personal Loan", href: "#loan-types" },
                { name: "Home Loan", href: "#loan-types" },
                { name: "Business Loan", href: "#loan-types" },
                { name: "Education Loan", href: "#loan-types" },
                { name: "Gold Loan", href: "#loan-types" },
                { name: "Car & EV Loan", href: "#loan-types" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    style={{ transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A", marginBottom: "18px" }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "#64748B" }}>
              {[
                { name: "About Us", href: "#about-us" },
                { name: "Careers", href: "#about-us" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Our Lending Partners", href: "#features" },
                { name: "Customer Testimonials", href: "#about-us" },
                { name: "Press & Media", href: "#about-us" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    style={{ transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support & Legal */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A", marginBottom: "18px" }}>
              Support & Legal
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "#64748B" }}>
              {[
                { name: "Help Center & FAQs", href: "#faq" },
                { name: "Eligibility Calculator", href: "#eligibility" },
                { name: "Loan Terms & Charges", href: "#faq" },
                { name: "Privacy Policy", href: "#faq" },
                { name: "Terms & Conditions", href: "#faq" },
                { name: "Grievance Redressal", href: "#faq" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    style={{ transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A", marginBottom: "18px" }}>
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.88rem", color: "#64748B" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#ECFDF5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={16} color="var(--primary)" />
                </div>
                <span>+91 98765 43210</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#ECFDF5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={16} color="var(--primary)" />
                </div>
                <span>support@loanhub.com</span>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#ECFDF5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <MapPin size={16} color="var(--primary)" />
                </div>
                <span>123, Finance Street, BKC,<br />Mumbai - 400051</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div
          style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: "14px",
            padding: "16px 20px",
            fontSize: "0.76rem",
            lineHeight: 1.6,
            color: "#64748B",
            marginBottom: "24px",
          }}
        >
          <strong>Regulatory Disclaimer:</strong> LoanHub functions as an authorized lending service provider (LSP) facilitating loan applications in partnership with Reserve Bank of India (RBI) regulated Banks and Non-Banking Financial Companies (NBFCs). Interest rates, loan eligibility, tenure, and sanction parameters are solely evaluated by our regulated lending partners based on borrower creditworthiness and underwriting criteria.
        </div>

        {/* Bottom Copyright Row */}
        <div
          style={{
            borderTop: "1px solid #EEF2EE",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "0.82rem",
            color: "#64748B",
          }}
        >
          <div>© 2024-2025 LoanHub Technologies Pvt. Ltd. All rights reserved.</div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="#faq">Privacy Policy</Link>
            <Link href="#faq">Terms of Service</Link>
            <Link href="#faq">Security & Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
