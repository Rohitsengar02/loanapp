"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Percent,
  Calendar,
  Wallet,
  ShieldCheck,
  Building,
  User,
  Briefcase,
  GraduationCap,
  Car,
  Home,
} from "lucide-react";

interface ApplyLoanViewProps {
  onGoToDashboard: () => void;
}

export default function ApplyLoanView({ onGoToDashboard }: ApplyLoanViewProps) {
  const [loanCategory, setLoanCategory] = useState("Personal Loan");
  const [loanAmount, setLoanAmount] = useState(350000);
  const [tenureMonths, setTenureMonths] = useState(36);
  const [loanPurpose, setLoanPurpose] = useState("Debt Consolidation");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Interest rates map
  const rateMap: Record<string, number> = {
    "Personal Loan": 10.5,
    "Home Loan": 8.5,
    "Business Loan": 12.0,
    "Education Loan": 9.2,
    "Vehicle Loan": 8.9,
  };

  const annualRate = rateMap[loanCategory] || 10.5;
  const monthlyRate = annualRate / 12 / 100;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1)
  );
  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - loanAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#00A669", "#10B981", "#34D399", "#FBBF24"],
      });
    }, 1200);
  };

  const categories = [
    { name: "Personal Loan", icon: <User size={20} />, rate: "10.5%" },
    { name: "Home Loan", icon: <Home size={20} />, rate: "8.5%" },
    { name: "Business Loan", icon: <Briefcase size={20} />, rate: "12.0%" },
    { name: "Education Loan", icon: <GraduationCap size={20} />, rate: "9.2%" },
    { name: "Vehicle Loan", icon: <Car size={20} />, rate: "8.9%" },
  ];

  if (submitted) {
    return (
      <div style={{ padding: "20px 0", textAlign: "center" }}>
        <div
          className="clean-card"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "40px 30px",
            borderRadius: "24px",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              width: "76px",
              height: "76px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px auto",
              boxShadow: "0 10px 25px rgba(0, 166, 105, 0.3)",
            }}
          >
            <CheckCircle2 size={42} color="var(--primary)" />
          </div>

          <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#0F172A", marginBottom: "8px" }}>
            Application Submitted Successfully!
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#64748B", marginBottom: "26px", lineHeight: 1.5 }}>
            Application Reference: <strong>#LN-2024-{Math.floor(100000 + Math.random() * 900000)}</strong>
            <br />
            Our credit underwriting team has initiated automated instant approval for Rohit Kumar.
          </p>

          <div
            style={{
              background: "#F8FAFC",
              border: "1.5px solid #E2E8F0",
              borderRadius: "18px",
              padding: "20px",
              marginBottom: "28px",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
              <span style={{ color: "#64748B" }}>Loan Type</span>
              <strong>{loanCategory}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
              <span style={{ color: "#64748B" }}>Loan Amount</span>
              <strong style={{ color: "var(--primary-dark)" }}>₹{loanAmount.toLocaleString("en-IN")}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
              <span style={{ color: "#64748B" }}>Tenure</span>
              <strong>{tenureMonths} Months</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
              <span style={{ color: "#64748B" }}>Estimated Monthly EMI</span>
              <strong style={{ color: "#0F172A" }}>₹{emi.toLocaleString("en-IN")}/mo</strong>
            </div>
          </div>

          <button
            onClick={onGoToDashboard}
            className="btn-primary"
            style={{ padding: "14px 36px", fontSize: "1rem", borderRadius: "99px", width: "100%" }}
          >
            Return to Dashboard <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: "100%" }}>
      {/* Page Title */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.85rem)", fontWeight: 900, color: "#0F172A" }}>
          Apply for a New Loan
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
          Instant disbursal within 24 hours with pre-approved NBFC partner rates.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "24px",
          alignItems: "start",
        }}
        className="dashboard-two-col"
      >
        {/* Form Column */}
        <div
          className="clean-card"
          style={{
            background: "#ffffff",
            borderRadius: "22px",
            padding: "26px",
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* 1. Category Selection */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ fontSize: "0.82rem", fontWeight: 800, color: "#334155", display: "block", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                1. Select Loan Category
              </label>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: "10px",
                }}
              >
                {categories.map((cat, idx) => {
                  const isSel = loanCategory === cat.name;
                  return (
                    <div
                      key={idx}
                      onClick={() => setLoanCategory(cat.name)}
                      style={{
                        padding: "12px 14px",
                        borderRadius: "14px",
                        border: isSel ? "2px solid var(--primary)" : "1.5px solid #E2E8F0",
                        background: isSel ? "#ECFDF5" : "#F8FAFC",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "6px",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ color: isSel ? "var(--primary)" : "#64748B" }}>{cat.icon}</div>
                      <span style={{ fontSize: "0.78rem", fontWeight: 800, color: isSel ? "#065F46" : "#0F172A" }}>
                        {cat.name}
                      </span>
                      <span style={{ fontSize: "0.68rem", color: "#64748B" }}>From {cat.rate}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Amount Slider */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 800, color: "#334155", textTransform: "uppercase" }}>
                  2. Required Loan Amount
                </label>
                <span style={{ fontSize: "1.3rem", fontWeight: 900, color: "var(--primary)" }}>
                  ₹{loanAmount.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                type="range"
                min={50000}
                max={5000000}
                step={25000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "#64748B", marginTop: "6px" }}>
                <span>₹50,000</span>
                <span>₹25,00,000</span>
                <span>₹50,00,000</span>
              </div>
            </div>

            {/* 3. Tenure Selection */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 800, color: "#334155", textTransform: "uppercase" }}>
                  3. Repayment Tenure
                </label>
                <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A" }}>
                  {tenureMonths} Months ({Math.round(tenureMonths / 12)} Years)
                </span>
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {[12, 24, 36, 48, 60, 84].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setTenureMonths(m)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "10px",
                      border: tenureMonths === m ? "2px solid var(--primary)" : "1.5px solid #CBD5E1",
                      background: tenureMonths === m ? "var(--primary)" : "#ffffff",
                      color: tenureMonths === m ? "#ffffff" : "#334155",
                      fontWeight: 800,
                      fontSize: "0.82rem",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {m} M
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Purpose Selection */}
            <div style={{ marginBottom: "28px" }}>
              <label style={{ fontSize: "0.82rem", fontWeight: 800, color: "#334155", display: "block", marginBottom: "8px", textTransform: "uppercase" }}>
                4. Primary Loan Purpose
              </label>
              <select
                value={loanPurpose}
                onChange={(e) => setLoanPurpose(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  border: "1.5px solid #CBD5E1",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  outline: "none",
                  background: "#ffffff",
                }}
              >
                <option value="Debt Consolidation">Debt Consolidation / Clear High Interest EMIs</option>
                <option value="Home Renovation">Home Improvement & Renovation</option>
                <option value="Business Expansion">Working Capital & Business Expansion</option>
                <option value="Medical Emergency">Medical Emergency Hospitalization</option>
                <option value="Wedding / Celebration">Wedding & Family Celebration</option>
                <option value="Education">Higher Education & Global Tuition</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "16px",
                fontSize: "1.05rem",
                borderRadius: "14px",
                fontWeight: 900,
              }}
            >
              {isSubmitting ? "Processing Pre-Approval..." : "Submit Application for Instant Approval →"}
            </button>
          </form>
        </div>

        {/* Live Estimation Card */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            className="clean-card"
            style={{
              background: "linear-gradient(135deg, #00A669 0%, #007A4D 100%)",
              borderRadius: "22px",
              padding: "26px",
              color: "#ffffff",
              boxShadow: "0 15px 35px -5px rgba(0, 166, 105, 0.4)",
            }}
          >
            <span style={{ fontSize: "0.82rem", opacity: 0.9, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700 }}>
              Live Calculation
            </span>
            <div style={{ fontSize: "2.4rem", fontWeight: 900, margin: "8px 0 2px 0" }}>
              ₹{emi.toLocaleString("en-IN")}
              <span style={{ fontSize: "1rem", fontWeight: 600, opacity: 0.85 }}> /month</span>
            </div>
            <p style={{ fontSize: "0.78rem", opacity: 0.9 }}>Estimated Monthly EMI at {annualRate}% p.a.</p>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(8px)",
                borderRadius: "14px",
                padding: "16px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "0.82rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Principal Amount</span>
                <strong>₹{loanAmount.toLocaleString("en-IN")}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Total Interest</span>
                <strong>₹{totalInterest.toLocaleString("en-IN")}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "8px" }}>
                <span>Total Payable</span>
                <strong style={{ fontSize: "0.95rem" }}>₹{totalPayment.toLocaleString("en-IN")}</strong>
              </div>
            </div>
          </div>

          {/* Partner Assurance */}
          <div
            className="clean-card"
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <ShieldCheck size={22} color="var(--primary)" />
              <span style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>
                RBI Regulated NBFC Lending
              </span>
            </div>
            <p style={{ fontSize: "0.76rem", color: "#64748B", lineHeight: 1.5 }}>
              Zero prepayment penalty on floating rates. Direct disbursement straight into your verified HDFC Bank account (...1045).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
