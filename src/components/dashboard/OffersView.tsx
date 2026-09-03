"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Gift,
  Sparkles,
  Percent,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Copy,
  Clock,
  Zap,
} from "lucide-react";

interface OffersViewProps {
  onClaimLoanOffer: () => void;
}

export default function OffersView({ onClaimLoanOffer }: OffersViewProps) {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleClaim = (offerTitle: string) => {
    confetti({
      particleCount: 110,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#00A669", "#10B981", "#F59E0B", "#EF4444"],
    });
    alert(`Offer Claimed: ${offerTitle}! Redirecting to instant pre-approval...`);
    onClaimLoanOffer();
  };

  const offers = [
    {
      title: "Pre-Approved Personal Loan",
      badge: "Exclusive Prime Borrower",
      benefit: "₹5,00,000 at 8.99% p.a.",
      desc: "Instant paperless disbursal in 2 hours with zero physical documentation required.",
      expiry: "Valid till 31 May 2024",
      bg: "linear-gradient(135deg, #ECFDF5 0%, #DCFCE7 100%)",
      border: "#A7F3D0",
      actionText: "Claim ₹5 Lakh Now",
      icon: <Sparkles size={24} color="#00A669" />,
    },
    {
      title: "LoanHub Infinite Credit Card",
      badge: "Lifetime Free Card",
      benefit: "₹1,50,000 Limit + 5% Cashback",
      desc: "Complimentary airport lounge access, 5% cashback on all loan EMI payments, and zero annual fee.",
      expiry: "Pre-Approved for Rohit Kumar",
      bg: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
      border: "#BFDBFE",
      actionText: "Activate Card Instant",
      icon: <CreditCard size={24} color="#2563EB" />,
    },
    {
      title: "Home Loan Balance Transfer",
      badge: "Save ₹1,850 Every Month",
      benefit: "Switch to 8.15% ROI",
      desc: "Transfer your HDFC Bank loan to save up to ₹4.2 Lakhs in interest over your remaining tenure.",
      expiry: "Free Legal & Technical Valuation",
      bg: "linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)",
      border: "#E9D5FF",
      actionText: "Calculate Savings",
      icon: <Percent size={24} color="#7C3AED" />,
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      {/* Title */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.85rem)", fontWeight: 900, color: "#0F172A" }}>
          Exclusive Pre-Approved Offers
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
          Tailored credit deals based on your 782 CIBIL score and verified income.
        </p>
      </div>

      {/* Festive Promo Voucher Card */}
      <div
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          borderRadius: "22px",
          padding: "24px",
          color: "#ffffff",
          marginBottom: "28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.2)",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              background: "#F59E0B",
              color: "#000000",
              padding: "3px 10px",
              borderRadius: "99px",
              textTransform: "uppercase",
            }}
          >
            Limited Festive Deal
          </span>
          <h3 style={{ fontSize: "1.35rem", fontWeight: 900, marginTop: "6px" }}>
            100% Processing Fee Waiver (Save up to ₹7,500)
          </h3>
          <p style={{ fontSize: "0.82rem", color: "#94A3B8", marginTop: "2px" }}>
            Apply for any new personal or business loan and pay zero processing charges.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              border: "1.5px dashed #10B981",
              background: "rgba(16, 185, 129, 0.15)",
              padding: "10px 18px",
              borderRadius: "12px",
              fontFamily: "monospace",
              fontSize: "1.1rem",
              fontWeight: 900,
              color: "#34D399",
              letterSpacing: "0.1em",
            }}
          >
            ZEROFEES2024
          </div>
          <button
            onClick={handleCopyCode}
            style={{
              padding: "11px 18px",
              borderRadius: "12px",
              background: "#10B981",
              color: "#ffffff",
              border: "none",
              fontWeight: 800,
              fontSize: "0.85rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {copiedCode ? (
              <>
                <CheckCircle2 size={16} /> Copied!
              </>
            ) : (
              <>
                <Copy size={16} /> Copy Code
              </>
            )}
          </button>
        </div>
      </div>

      {/* Offers Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "20px",
        }}
      >
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="clean-card"
            style={{
              background: offer.bg,
              border: `1.5px solid ${offer.border}`,
              borderRadius: "22px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    background: "#ffffff",
                    color: "#0F172A",
                    padding: "4px 10px",
                    borderRadius: "99px",
                    border: `1px solid ${offer.border}`,
                  }}
                >
                  {offer.badge}
                </span>
                <div style={{ background: "#ffffff", padding: "8px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  {offer.icon}
                </div>
              </div>

              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A", marginBottom: "4px" }}>
                {offer.title}
              </h3>
              <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#0F172A", margin: "6px 0 10px 0" }}>
                {offer.benefit}
              </div>
              <p style={{ fontSize: "0.78rem", color: "#475569", lineHeight: 1.5, marginBottom: "20px" }}>
                {offer.desc}
              </p>
            </div>

            <div>
              <div style={{ fontSize: "0.72rem", color: "#64748B", marginBottom: "10px", display: "flex", alignItems: "center", gap: "4px" }}>
                <Clock size={13} /> {offer.expiry}
              </div>
              <button
                onClick={() => handleClaim(offer.title)}
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "0.9rem",
                  borderRadius: "12px",
                }}
              >
                {offer.actionText} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
