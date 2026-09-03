"use client";

import { useState } from "react";
import {
  Briefcase,
  CheckCircle2,
  Calendar,
  Percent,
  Download,
  ArrowRight,
  TrendingDown,
  ShieldCheck,
} from "lucide-react";

interface MyLoansViewProps {
  onPayEmi: (loanTitle: string, amount: string) => void;
  onOpenCalculator: () => void;
}

export default function MyLoansView({ onPayEmi, onOpenCalculator }: MyLoansViewProps) {
  const [tab, setTab] = useState<"active" | "closed">("active");

  const activeLoans = [
    {
      id: "ACC-PL-89210",
      type: "Personal Loan",
      lender: "Bajaj Finserv",
      sanctioned: "₹2,00,000",
      outstanding: "₹1,45,678",
      rate: "10.5% p.a.",
      nextEmi: "₹12,007",
      dueDate: "12 May 2024",
      paidEmis: 17,
      totalEmis: 24,
      progress: 71,
    },
    {
      id: "ACC-HL-44120",
      type: "Home Loan",
      lender: "HDFC Bank",
      sanctioned: "₹50,00,000",
      outstanding: "₹48,20,000",
      rate: "8.50% p.a.",
      nextEmi: "₹8,561",
      dueDate: "20 May 2024",
      paidEmis: 8,
      totalEmis: 240,
      progress: 3.5,
    },
    {
      id: "ACC-CD-11094",
      type: "Consumer Durable Loan",
      lender: "Tata Capital",
      sanctioned: "₹45,000",
      outstanding: "₹12,500",
      rate: "0% No-Cost EMI",
      nextEmi: "₹3,500",
      dueDate: "05 Jun 2024",
      paidEmis: 4,
      totalEmis: 6,
      progress: 67,
    },
  ];

  const closedLoans = [
    {
      id: "ACC-AL-10029",
      type: "Two-Wheeler Loan",
      lender: "Hero Fincorp",
      sanctioned: "₹85,000",
      closedDate: "15 Jan 2024",
      status: "NOC Issued • 100% Repaid",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      {/* Title */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.85rem)", fontWeight: 900, color: "#0F172A" }}>
          My Active Loans & Repayments
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
          Total outstanding balance: <strong>₹49,78,178</strong> across 3 active credit facilities.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        <button
          onClick={() => setTab("active")}
          style={{
            padding: "8px 20px",
            borderRadius: "10px",
            border: tab === "active" ? "2px solid var(--primary)" : "1.5px solid #CBD5E1",
            background: tab === "active" ? "var(--primary)" : "#ffffff",
            color: tab === "active" ? "#ffffff" : "#475569",
            fontWeight: 800,
            fontSize: "0.85rem",
            cursor: "pointer",
          }}
        >
          Active Loans (3)
        </button>
        <button
          onClick={() => setTab("closed")}
          style={{
            padding: "8px 20px",
            borderRadius: "10px",
            border: tab === "closed" ? "2px solid var(--primary)" : "1.5px solid #CBD5E1",
            background: tab === "closed" ? "var(--primary)" : "#ffffff",
            color: tab === "closed" ? "#ffffff" : "#475569",
            fontWeight: 800,
            fontSize: "0.85rem",
            cursor: "pointer",
          }}
        >
          Closed Loans (1)
        </button>
      </div>

      {/* Active Loans List */}
      {tab === "active" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {activeLoans.map((loan, idx) => (
            <div
              key={idx}
              className="clean-card"
              style={{
                background: "#ffffff",
                borderRadius: "22px",
                padding: "24px",
                border: "1.5px solid #E2E8F0",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "18px",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0F172A" }}>
                      {loan.type}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        color: "#007A4D",
                        background: "#DCFCE7",
                        padding: "2px 8px",
                        borderRadius: "99px",
                      }}
                    >
                      Active
                    </span>
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#64748B", marginTop: "2px" }}>
                    {loan.lender} • A/C No: <strong>{loan.id}</strong>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.72rem", color: "#64748B" }}>Outstanding Balance</div>
                  <div style={{ fontSize: "1.45rem", fontWeight: 900, color: "#0F172A" }}>
                    {loan.outstanding}
                  </div>
                </div>
              </div>

              {/* 4 Metric Pills */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: "12px",
                  background: "#F8FAFC",
                  padding: "16px",
                  borderRadius: "16px",
                  marginBottom: "18px",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.7rem", color: "#64748B" }}>Sanctioned Amount</div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0F172A" }}>{loan.sanctioned}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "#64748B" }}>Interest Rate</div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--primary-dark)" }}>{loan.rate}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "#64748B" }}>Upcoming EMI</div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#EF4444" }}>{loan.nextEmi}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "#64748B" }}>EMI Due Date</div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0F172A" }}>{loan.dueDate}</div>
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ marginBottom: "18px" }}>
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    background: "#E2E8F0",
                    borderRadius: "99px",
                    overflow: "hidden",
                    marginBottom: "6px",
                  }}
                >
                  <div
                    style={{
                      width: `${loan.progress}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, #00A669 0%, #10B981 100%)",
                      borderRadius: "99px",
                    }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#64748B", fontWeight: 600 }}>
                  <span>Repaid: {loan.paidEmis} of {loan.totalEmis} EMIs</span>
                  <span>{loan.totalEmis - loan.paidEmis} EMIs remaining</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                  flexWrap: "wrap",
                  borderTop: "1px solid #F1F5F9",
                  paddingTop: "14px",
                }}
              >
                <button
                  onClick={() => alert(`Opening loan agreement for ${loan.id}...`)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "10px",
                    border: "1.5px solid #CBD5E1",
                    background: "#ffffff",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#334155",
                    cursor: "pointer",
                  }}
                >
                  <Download size={14} /> Agreement PDF
                </button>

                <button
                  onClick={() => onPayEmi(loan.type, loan.nextEmi)}
                  className="btn-primary"
                  style={{ padding: "8px 20px", fontSize: "0.85rem", borderRadius: "10px" }}
                >
                  Pay Next EMI ({loan.nextEmi})
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Closed Loans List */
        <div
          className="clean-card"
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "24px",
          }}
        >
          {closedLoans.map((cl, idx) => (
            <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0F172A" }}>
                  {cl.type} • {cl.lender}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#64748B" }}>
                  Account: {cl.id} • Closed on {cl.closedDate}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "0.8rem", color: "#059669", fontWeight: 800, background: "#DCFCE7", padding: "4px 12px", borderRadius: "99px" }}>
                  ✓ {cl.status}
                </span>
                <button
                  onClick={() => alert(`Downloading No Objection Certificate (NOC) for ${cl.id}...`)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "10px",
                    border: "1.5px solid #CBD5E1",
                    background: "#ffffff",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Download NOC
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
