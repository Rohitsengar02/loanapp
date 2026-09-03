"use client";

import { useState } from "react";
import {
  Headphones,
  Phone,
  Mail,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export default function SupportView() {
  const [topic, setTopic] = useState("EMI Payment Query");
  const [message, setMessage] = useState("");
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    setTicketSubmitted(true);
    setTimeout(() => {
      setMessage("");
      setTicketSubmitted(false);
      alert("Support Ticket #TKT-89410 created! Priya Sharma from LoanHub Priority Desk will respond within 2 hours.");
    }, 1500);
  };

  const faqs = [
    {
      q: "How can I change my primary EMI deduction bank account?",
      a: "Go to your 'Documents' or 'EMI Payments' tab and select 'Update e-Mandate'. You can authenticate the new bank account instantly using NetBanking or Debit Card OTP.",
    },
    {
      q: "Are there any prepayment or foreclosure penalties?",
      a: "Per RBI regulatory guidelines, all floating rate loans have 0% foreclosure and zero part-prepayment charges. Fixed rate loans carry a nominal 1.5% fee if closed within 12 months.",
    },
    {
      q: "How do I get my annual loan interest tax certificate (Section 24 / 80C)?",
      a: "Visit the 'Statements' tab in your sidebar. Click 'Download Certificate (PDF)' under Section 24(b) or Section 80C to instantly generate your digitally signed certificate.",
    },
    {
      q: "How fast is loan disbursal after application approval?",
      a: "For pre-approved prime borrowers like Rohit Kumar, disbursal occurs via IMPS/NEFT straight into your verified bank account within 2 to 4 hours of digital e-Sign.",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      {/* Title */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.85rem)", fontWeight: 900, color: "#0F172A" }}>
          Priority Support & Help Desk
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
          Dedicated 24/7 borrower assistance with priority concierge desk.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "24px",
          alignItems: "start",
          marginBottom: "32px",
        }}
        className="dashboard-two-col"
      >
        {/* Contact Relationship Manager Card */}
        <div
          className="clean-card"
          style={{
            background: "#ffffff",
            borderRadius: "22px",
            padding: "26px",
            border: "1.5px solid #E2E8F0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=140&q=80"
                alt="Priya Sharma"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid var(--primary)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: "2px",
                  right: "2px",
                  width: "14px",
                  height: "14px",
                  background: "#10B981",
                  borderRadius: "50%",
                  border: "2.5px solid #ffffff",
                }}
              />
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 900, color: "#0F172A" }}>
                  Priya Sharma
                </h3>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#007A4D", background: "#DCFCE7", padding: "2px 8px", borderRadius: "99px" }}>
                  Dedicated RM
                </span>
              </div>
              <div style={{ fontSize: "0.78rem", color: "#64748B", marginTop: "2px" }}>
                Senior Relationship Manager • Prime Lending Desk
              </div>
            </div>
          </div>

          <p style={{ fontSize: "0.82rem", color: "#475569", lineHeight: 1.5, marginBottom: "20px" }}>
            "Hello Rohit! As your dedicated LoanHub concierge manager, I am available to assist you with rate reductions, foreclosure waivers, and fast-track disbursals."
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a
              href="tel:18001234567"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 14px",
                borderRadius: "12px",
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                color: "#0F172A",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 700,
              }}
            >
              <Phone size={18} color="var(--primary)" />
              <span>1800-123-LOAN (Toll Free, 24/7)</span>
            </a>

            <a
              href="mailto:priority@loanhub.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 14px",
                borderRadius: "12px",
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                color: "#0F172A",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 700,
              }}
            >
              <Mail size={18} color="#2563EB" />
              <span>priya.sharma@loanhub.in (Direct RM Email)</span>
            </a>

            <div
              onClick={() => alert("Opening instant encrypted WhatsApp chat with Priya Sharma...")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 14px",
                borderRadius: "12px",
                background: "#ECFDF5",
                border: "1px solid #A7F3D0",
                color: "#065F46",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: 800,
              }}
            >
              <MessageSquare size={18} color="#059669" />
              <span>Chat on WhatsApp (+91 98765 43210)</span>
            </div>
          </div>
        </div>

        {/* Raise a Support Ticket Card */}
        <div
          className="clean-card"
          style={{
            background: "#ffffff",
            borderRadius: "22px",
            padding: "26px",
            border: "1.5px solid #E2E8F0",
          }}
        >
          <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0F172A", marginBottom: "16px" }}>
            Submit an Inquiry Ticket
          </h3>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                Select Category
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  borderRadius: "12px",
                  border: "1.5px solid #CBD5E1",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  outline: "none",
                  background: "#ffffff",
                }}
              >
                <option value="EMI Payment Query">EMI Payment / NACH Autopay</option>
                <option value="Sanction Letter">Sanction Letter / Loan Agreement</option>
                <option value="Interest Rate Reduction">ROI Reduction / Balance Transfer</option>
                <option value="Foreclosure">Foreclosure & NOC Request</option>
                <option value="Other">Other Customer Service Query</option>
              </select>
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                Describe Your Request
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Explain how our concierge team can help you today..."
                required
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  border: "1.5px solid #CBD5E1",
                  fontSize: "0.85rem",
                  outline: "none",
                  fontFamily: "inherit",
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={ticketSubmitted}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "0.9rem",
                borderRadius: "12px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Send size={16} /> {ticketSubmitted ? "Creating Ticket..." : "Submit Priority Request"}
            </button>
          </form>
        </div>
      </div>

      {/* FAQs Section */}
      <div>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A", marginBottom: "16px" }}>
          Frequently Asked Questions
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="clean-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  border: "1.5px solid #E2E8F0",
                  cursor: "pointer",
                }}
                onClick={() => setOpenFaq(isOpen ? null : idx)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0F172A" }}>
                    {faq.q}
                  </span>
                  {isOpen ? <ChevronUp size={18} color="var(--primary)" /> : <ChevronDown size={18} color="#64748B" />}
                </div>

                {isOpen && (
                  <p style={{ fontSize: "0.82rem", color: "#475569", marginTop: "10px", lineHeight: 1.5, borderTop: "1px solid #F1F5F9", paddingTop: "10px" }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
