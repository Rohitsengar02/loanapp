"use client";

import { useState } from "react";
import {
  CheckCircle2,
  TrendingUp,
  ShieldAlert,
  ArrowRight,
  Percent,
  Sliders,
  Sparkles,
  Building,
} from "lucide-react";

interface CheckEligibilityViewProps {
  onApplyNow: () => void;
}

export default function CheckEligibilityView({ onApplyNow }: CheckEligibilityViewProps) {
  const [salary, setSalary] = useState(75000);
  const [existingEmi, setExistingEmi] = useState(12000);
  const [creditScore, setCreditScore] = useState(782);

  // FOIR Calculation (Fixed Obligation to Income Ratio)
  // Max allowable EMI is typically 50% of net income
  const maxAllowableEmi = Math.max(0, salary * 0.5 - existingEmi);
  // Estimate loan at 10.5% for 5 years: Loan = maxEMI * 47 approx
  const eligibleLoanAmount = Math.round(maxAllowableEmi * 46.8);
  const foirPercent = Math.min(100, Math.round((existingEmi / salary) * 100));

  const partners = [
    { name: "Bajaj Finserv", maxLoan: "₹15,00,000", rate: "10.5%", match: "98% Match", badge: "Instant Sanction" },
    { name: "HDFC Bank", maxLoan: "₹25,00,000", rate: "10.25%", match: "95% Match", badge: "Salary Partner" },
    { name: "Tata Capital", maxLoan: "₹12,00,000", rate: "11.0%", match: "91% Match", badge: "Pre-Approved" },
    { name: "ICICI Bank", maxLoan: "₹20,00,000", rate: "10.75%", match: "89% Match", badge: "Fast Track" },
  ];

  return (
    <div style={{ width: "100%" }}>
      {/* Title */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.85rem)", fontWeight: 900, color: "#0F172A" }}>
          Instant Loan Eligibility Evaluator
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
          Calculated using real-time RBI Fixed Obligation to Income Ratio (FOIR) standards.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "24px",
          alignItems: "start",
        }}
        className="dashboard-two-col"
      >
        {/* Sliders Card */}
        <div
          className="clean-card"
          style={{
            background: "#ffffff",
            borderRadius: "22px",
            padding: "26px",
          }}
        >
          <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0F172A", marginBottom: "20px" }}>
            Adjust Your Financial Parameters
          </h3>

          {/* Salary Slider */}
          <div style={{ marginBottom: "26px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155" }}>
                Monthly Net Take-Home Salary
              </span>
              <span style={{ fontSize: "1.2rem", fontWeight: 900, color: "var(--primary)" }}>
                ₹{salary.toLocaleString("en-IN")}
              </span>
            </div>
            <input
              type="range"
              min={25000}
              max={300000}
              step={5000}
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "#64748B", marginTop: "6px" }}>
              <span>₹25,000</span>
              <span>₹1,50,000</span>
              <span>₹3,00,000</span>
            </div>
          </div>

          {/* Existing EMIs Slider */}
          <div style={{ marginBottom: "26px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155" }}>
                Current Monthly EMI Commitments
              </span>
              <span style={{ fontSize: "1.2rem", fontWeight: 900, color: "#EF4444" }}>
                ₹{existingEmi.toLocaleString("en-IN")}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={100000}
              step={2000}
              value={existingEmi}
              onChange={(e) => setExistingEmi(Number(e.target.value))}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "#64748B", marginTop: "6px" }}>
              <span>₹0 (Debt Free)</span>
              <span>₹50,000</span>
              <span>₹1,00,000</span>
            </div>
          </div>

          {/* Credit Score Slider */}
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155" }}>
                CIBIL / Experian Credit Score
              </span>
              <span style={{ fontSize: "1.2rem", fontWeight: 900, color: "#0F172A" }}>
                {creditScore} / 900
              </span>
            </div>
            <input
              type="range"
              min={550}
              max={900}
              step={5}
              value={creditScore}
              onChange={(e) => setCreditScore(Number(e.target.value))}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "#64748B", marginTop: "6px" }}>
              <span>550 (Fair)</span>
              <span>750 (Good)</span>
              <span>900 (Excellent)</span>
            </div>
          </div>

          {/* FOIR Meter */}
          <div
            style={{
              background: "#F8FAFC",
              borderRadius: "14px",
              padding: "14px 16px",
              border: "1px solid #E2E8F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0F172A" }}>
                Debt-to-Income (FOIR): <strong>{foirPercent}%</strong>
              </div>
              <div style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "2px" }}>
                {foirPercent <= 40 ? "Excellent health • Fast tracked approvals" : "Moderate • Standard approvals"}
              </div>
            </div>
            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 800,
                padding: "4px 10px",
                borderRadius: "99px",
                background: foirPercent <= 40 ? "#DCFCE7" : "#FEF3C7",
                color: foirPercent <= 40 ? "#15803D" : "#B45309",
              }}
            >
              {foirPercent <= 40 ? "Low Risk" : "Moderate Risk"}
            </span>
          </div>
        </div>

        {/* Output & Top Lenders */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Max Eligible Amount Banner */}
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
            <span style={{ fontSize: "0.82rem", opacity: 0.9, textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>
              Maximum Eligible Loan
            </span>
            <div style={{ fontSize: "2.5rem", fontWeight: 900, margin: "6px 0 2px 0" }}>
              ₹{eligibleLoanAmount.toLocaleString("en-IN")}
            </div>
            <p style={{ fontSize: "0.8rem", opacity: 0.9 }}>
              Available headroom EMI: <strong>₹{maxAllowableEmi.toLocaleString("en-IN")}/mo</strong>
            </p>

            <button
              onClick={onApplyNow}
              style={{
                marginTop: "18px",
                padding: "12px 24px",
                borderRadius: "99px",
                border: "none",
                background: "#ffffff",
                color: "var(--primary-dark)",
                fontSize: "0.9rem",
                fontWeight: 800,
                cursor: "pointer",
                width: "100%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              Apply with Pre-Approved Limit <ArrowRight size={16} />
            </button>
          </div>

          {/* Recommended Lenders */}
          <div
            className="clean-card"
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0F172A", marginBottom: "14px" }}>
              Matching Lenders for Rohit Kumar
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {partners.map((p, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderRadius: "12px",
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0F172A" }}>
                      {p.name}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#64748B" }}>
                      Up to {p.maxLoan} • {p.rate} p.a.
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      color: "#007A4D",
                      background: "#DCFCE7",
                      padding: "4px 8px",
                      borderRadius: "6px",
                    }}
                  >
                    {p.match}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
