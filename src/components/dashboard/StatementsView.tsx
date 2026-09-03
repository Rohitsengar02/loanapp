"use client";

import { useState } from "react";
import {
  FileText,
  Download,
  Calendar,
  Filter,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function StatementsView() {
  const [selectedLoan, setSelectedLoan] = useState("All Accounts");
  const [selectedYear, setSelectedYear] = useState("FY 2023-2024");

  const statements = [
    {
      period: "April 2024",
      loan: "Personal Loan (Bajaj Finserv)",
      account: "ACC-PL-89210",
      opening: "₹1,56,800",
      repaid: "₹12,007",
      closing: "₹1,45,678",
      date: "01 May 2024",
    },
    {
      period: "March 2024",
      loan: "Personal Loan (Bajaj Finserv)",
      account: "ACC-PL-89210",
      opening: "₹1,67,900",
      repaid: "₹12,007",
      closing: "₹1,56,800",
      date: "01 Apr 2024",
    },
    {
      period: "April 2024",
      loan: "Home Loan (HDFC Bank)",
      account: "ACC-HL-44120",
      opening: "₹48,27,000",
      repaid: "₹8,561",
      closing: "₹48,20,000",
      date: "01 May 2024",
    },
    {
      period: "Q4 Summary",
      loan: "Consumer Durable (Tata Capital)",
      account: "ACC-CD-11094",
      opening: "₹23,000",
      repaid: "₹10,500",
      closing: "₹12,500",
      date: "15 Apr 2024",
    },
  ];

  const taxCerts = [
    {
      title: "Section 24(b) Home Loan Interest Certificate",
      desc: "Tax exemption proof for interest paid up to ₹2,00,000 for FY 2023-24.",
      eligible: "₹1,42,800 Deductible",
      loan: "Home Loan - HDFC Bank (ACC-HL-44120)",
    },
    {
      title: "Section 80C Principal Repayment Certificate",
      desc: "Principal reduction deduction certificate for ITR-1 filing.",
      eligible: "₹65,400 Deductible",
      loan: "Home Loan - HDFC Bank (ACC-HL-44120)",
    },
    {
      title: "Consolidated Annual Interest Statement",
      desc: "Full fiscal year breakdown of all interest accrued and repaid.",
      eligible: "All 3 Active Credit Accounts",
      loan: "Consolidated LoanHub Statement",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      {/* Title */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.85rem)", fontWeight: 900, color: "#0F172A" }}>
          Statements & Tax Certificates
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
          Download regulatory account statements and official IT Act deduction certificates.
        </p>
      </div>

      {/* Tax Certificates Banner */}
      <div style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0F172A", marginBottom: "14px" }}>
          Tax Deduction Certificates (ITR Filing)
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {taxCerts.map((cert, idx) => (
            <div
              key={idx}
              className="clean-card"
              style={{
                background: "#ffffff",
                borderRadius: "18px",
                padding: "20px",
                border: "1.5px solid #E2E8F0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <FileCheck2 size={18} color="var(--primary)" />
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#007A4D", background: "#DCFCE7", padding: "2px 8px", borderRadius: "99px" }}>
                    {cert.eligible}
                  </span>
                </div>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0F172A", marginBottom: "4px", lineHeight: 1.3 }}>
                  {cert.title}
                </h4>
                <p style={{ fontSize: "0.76rem", color: "#64748B", marginBottom: "16px", lineHeight: 1.4 }}>
                  {cert.desc}
                </p>
              </div>

              <button
                onClick={() => alert(`Downloading verified PDF for ${cert.title}...`)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "9px 14px",
                  borderRadius: "10px",
                  border: "1.5px solid var(--primary)",
                  background: "#ECFDF5",
                  color: "var(--primary-dark)",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                <Download size={14} /> Download Certificate (PDF)
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Statements */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0F172A" }}>
            Monthly Account Statements
          </h3>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <select
              value={selectedLoan}
              onChange={(e) => setSelectedLoan(e.target.value)}
              style={{
                padding: "8px 12px",
                borderRadius: "10px",
                border: "1px solid #CBD5E1",
                fontSize: "0.82rem",
                fontWeight: 600,
                background: "#ffffff",
                outline: "none",
              }}
            >
              <option value="All Accounts">All Credit Accounts</option>
              <option value="Personal Loan">Personal Loan (Bajaj)</option>
              <option value="Home Loan">Home Loan (HDFC)</option>
              <option value="Consumer Durable">Consumer Durable (Tata)</option>
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                padding: "8px 12px",
                borderRadius: "10px",
                border: "1px solid #CBD5E1",
                fontSize: "0.82rem",
                fontWeight: 600,
                background: "#ffffff",
                outline: "none",
              }}
            >
              <option value="FY 2023-2024">FY 2023-2024</option>
              <option value="FY 2022-2023">FY 2022-2023</option>
            </select>
          </div>
        </div>

        <div
          className="clean-card"
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "20px",
            overflowX: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "550px" }}>
            {statements.map((s, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0F172A" }}>
                    {s.period} Statement • {s.loan}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "2px" }}>
                    A/C: {s.account} • Generated on {s.date}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <div style={{ textAlign: "right", fontSize: "0.78rem" }}>
                    <div style={{ color: "#64748B" }}>Closing: <strong>{s.closing}</strong></div>
                    <div style={{ color: "#059669", fontWeight: 700 }}>Paid: {s.repaid}</div>
                  </div>

                  <button
                    onClick={() => alert(`Downloading PDF Statement for ${s.period} (${s.account})...`)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 14px",
                      borderRadius: "10px",
                      border: "1.5px solid #CBD5E1",
                      background: "#ffffff",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "#334155",
                      cursor: "pointer",
                    }}
                  >
                    <Download size={14} /> PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
