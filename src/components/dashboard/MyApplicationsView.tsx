"use client";

import { useState } from "react";
import {
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface MyApplicationsViewProps {
  onApplyNew: () => void;
}

export default function MyApplicationsView({ onApplyNew }: MyApplicationsViewProps) {
  const [filter, setFilter] = useState("All");

  const applications = [
    {
      id: "LN-2024-89210",
      category: "Personal Loan",
      lender: "Bajaj Finserv",
      amount: "₹2,00,000",
      appliedDate: "10 Apr 2024",
      status: "Disbursed",
      statusColor: "#059669",
      statusBg: "#DCFCE7",
      progress: 100,
      stepLabel: "Amount Disbursed to A/C ...1045",
    },
    {
      id: "LN-2024-94102",
      category: "Home Loan",
      lender: "HDFC Bank",
      amount: "₹50,00,000",
      appliedDate: "28 Apr 2024",
      status: "Approved",
      statusColor: "#2563EB",
      statusBg: "#EFF6FF",
      progress: 80,
      stepLabel: "Sanction Letter Issued • Awaiting Agreement e-Sign",
    },
    {
      id: "LN-2024-97812",
      category: "Vehicle Loan",
      lender: "Axis Bank",
      amount: "₹8,50,000",
      appliedDate: "02 May 2024",
      status: "Under Review",
      statusColor: "#D97706",
      statusBg: "#FFFBEB",
      progress: 45,
      stepLabel: "Document Verification In Progress",
    },
    {
      id: "LN-2024-99015",
      category: "Education Loan",
      lender: "State Bank of India",
      amount: "₹15,00,000",
      appliedDate: "03 May 2024",
      status: "Processing",
      statusColor: "#7C3AED",
      statusBg: "#F5F3FF",
      progress: 25,
      stepLabel: "Credit Underwriting Evaluation",
    },
  ];

  const filtered = applications.filter((app) => {
    if (filter === "All") return true;
    return app.status.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div style={{ width: "100%" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1 style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.85rem)", fontWeight: 900, color: "#0F172A" }}>
            My Loan Applications
          </h1>
          <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
            Real-time status tracking across all partner bank applications.
          </p>
        </div>

        <button
          onClick={onApplyNew}
          className="btn-primary"
          style={{ padding: "10px 22px", borderRadius: "12px", fontSize: "0.85rem" }}
        >
          + New Loan Application
        </button>
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "24px",
          overflowX: "auto",
          paddingBottom: "4px",
        }}
      >
        {["All", "Approved", "Under Review", "Disbursed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            style={{
              padding: "8px 18px",
              borderRadius: "10px",
              border: filter === tab ? "2px solid var(--primary)" : "1.5px solid #CBD5E1",
              background: filter === tab ? "var(--primary)" : "#ffffff",
              color: filter === tab ? "#ffffff" : "#475569",
              fontSize: "0.82rem",
              fontWeight: 800,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.15s",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Applications Cards List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {filtered.map((app, idx) => (
          <div
            key={idx}
            className="clean-card"
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "22px 24px",
              border: "1.5px solid #E2E8F0",
              boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
            }}
          >
            {/* Top row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "14px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "#F1F5F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                  }}
                >
                  <FileText size={22} />
                </div>
                <div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0F172A" }}>
                    {app.category} • {app.lender}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#64748B" }}>
                    Ref: <strong>{app.id}</strong> • Applied on {app.appliedDate}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    padding: "6px 14px",
                    borderRadius: "99px",
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    color: app.statusColor,
                    background: app.statusBg,
                  }}
                >
                  ● {app.status}
                </span>
                <span style={{ fontSize: "1.35rem", fontWeight: 900, color: "#0F172A" }}>
                  {app.amount}
                </span>
              </div>
            </div>

            {/* Progress Bar & Stage description */}
            <div style={{ marginBottom: "16px" }}>
              <div
                style={{
                  width: "100%",
                  height: "7px",
                  background: "#E2E8F0",
                  borderRadius: "99px",
                  overflow: "hidden",
                  marginBottom: "6px",
                }}
              >
                <div
                  style={{
                    width: `${app.progress}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, #00A669 0%, #10B981 100%)",
                    borderRadius: "99px",
                  }}
                />
              </div>
              <div style={{ fontSize: "0.75rem", color: "#475569", fontWeight: 600 }}>
                Current Stage: <strong style={{ color: "#0F172A" }}>{app.stepLabel}</strong>
              </div>
            </div>

            {/* Action buttons */}
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
              {app.status === "Approved" && (
                <button
                  onClick={() => alert(`Downloading Sanction Letter for ${app.id}...`)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "10px",
                    border: "1.5px solid var(--primary)",
                    background: "#ECFDF5",
                    color: "#007A4D",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  <Download size={15} /> Download Sanction Letter
                </button>
              )}

              <button
                onClick={() => alert(`Opening tracking timeline for application ${app.id}...`)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "10px",
                  border: "1.5px solid #CBD5E1",
                  background: "#ffffff",
                  color: "#334155",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Track Live <ChevronRight size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
