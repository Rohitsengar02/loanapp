"use client";

import { useState, useMemo } from "react";
import confetti from "canvas-confetti";
import { X, CheckCircle, Calculator, Sparkles, ArrowRight } from "lucide-react";

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLoanType?: string;
}

export default function EligibilityModal({ isOpen, onClose, defaultLoanType = "Personal Loan" }: EligibilityModalProps) {
  const [loanType, setLoanType] = useState(defaultLoanType);
  const [amount, setAmount] = useState(500000);
  const [tenureMonths, setTenureMonths] = useState(36);
  const [annualRate, setAnnualRate] = useState(10.5);
  const [isApproved, setIsApproved] = useState(false);

  // Calculate EMI
  const { emi, totalInterest, totalAmount } = useMemo(() => {
    const monthlyRate = annualRate / 12 / 100;
    const emiVal = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    const calculatedEmi = Math.round(emiVal);
    const totalPay = calculatedEmi * tenureMonths;
    const totalInt = totalPay - amount;
    return {
      emi: calculatedEmi,
      totalInterest: totalInt,
      totalAmount: totalPay,
    };
  }, [amount, tenureMonths, annualRate]);

  const handleApply = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00A669", "#10B981", "#34D399", "#FBBF24"],
    });
    setIsApproved(true);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div
          style={{
            padding: "24px 28px",
            borderBottom: "1px solid #EDF2EE",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "#ECFDF5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Calculator size={20} color="var(--primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-main)" }}>
                Loan Eligibility & EMI Calculator
              </h3>
              <p style={{ fontSize: "0.78rem", color: "var(--text-sub)" }}>
                Instant calculation • Zero hidden fees
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "#F1F5F2",
              border: "none",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#64748B",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "28px" }}>
          {isApproved ? (
            <div style={{ textAlign: "center", padding: "30px 10px" }}>
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "#DCFCE7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                }}
              >
                <CheckCircle size={40} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "8px" }}>
                Congratulations!
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "20px" }}>
                Your <strong style={{ color: "var(--primary)" }}>{loanType}</strong> application for{" "}
                <strong>₹{amount.toLocaleString("en-IN")}</strong> has been pre-approved at <strong>{annualRate}% p.a.</strong>
              </p>
              <div
                style={{
                  background: "#F8FAFC",
                  border: "1px dashed #CBD5E1",
                  borderRadius: "14px",
                  padding: "16px",
                  maxWidth: "340px",
                  margin: "0 auto 24px auto",
                  fontSize: "0.82rem",
                  color: "#475569",
                }}
              >
                Application Reference: <strong>LH-{Math.floor(100000 + Math.random() * 900000)}</strong>
                <br />
                A relationship manager will contact Rohit shortly.
              </div>

              <button
                onClick={() => {
                  setIsApproved(false);
                  onClose();
                }}
                className="btn-primary"
                style={{ padding: "12px 32px" }}
              >
                Back to Overview
              </button>
            </div>
          ) : (
            <div>
              {/* Loan Type Selector */}
              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#334155", marginBottom: "8px" }}>
                  Select Loan Type
                </label>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {["Personal Loan", "Home Loan", "Business Loan", "Education Loan", "Car Loan"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setLoanType(type)}
                      style={{
                        padding: "7px 14px",
                        borderRadius: "99px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        border: loanType === type ? "1.5px solid var(--primary)" : "1px solid #E2E8F0",
                        background: loanType === type ? "#ECFDF5" : "#ffffff",
                        color: loanType === type ? "#008753" : "#475569",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Loan Amount Slider */}
              <div style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#334155" }}>Loan Amount</span>
                  <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary)" }}>
                    ₹{amount.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={5000000}
                  step={25000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "#94a3b8", marginTop: "4px" }}>
                  <span>₹50,000</span>
                  <span>₹50,00,000</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div style={{ marginBottom: "28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#334155" }}>Tenure (Months)</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-main)" }}>
                    {tenureMonths} Months <span style={{ fontSize: "0.8rem", color: "#64748b" }}>({(tenureMonths / 12).toFixed(1)} yrs)</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={84}
                  step={6}
                  value={tenureMonths}
                  onChange={(e) => setTenureMonths(Number(e.target.value))}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "#94a3b8", marginTop: "4px" }}>
                  <span>6 Mo</span>
                  <span>84 Mo</span>
                </div>
              </div>

              {/* Calculated EMI Display Box */}
              <div
                style={{
                  background: "linear-gradient(135deg, #F0FDF4 0%, #E6F8EE 100%)",
                  border: "1.5px solid #C4F1D6",
                  borderRadius: "18px",
                  padding: "20px",
                  marginBottom: "24px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#065F46", fontWeight: 600 }}>
                    Monthly EMI
                  </div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#065F46", marginTop: "2px" }}>
                    ₹{emi.toLocaleString("en-IN")}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#047857" }}>
                    Interest Rate: {annualRate}% p.a.
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "4px", fontSize: "0.78rem", color: "#166534" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Total Interest:</span>
                    <strong>₹{totalInterest.toLocaleString("en-IN")}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Total Payable:</span>
                    <strong>₹{totalAmount.toLocaleString("en-IN")}</strong>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                onClick={handleApply}
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "16px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  borderRadius: "14px",
                }}
              >
                <Sparkles size={18} /> Get Instant Pre-Approval Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
