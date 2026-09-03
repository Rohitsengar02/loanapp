"use client";

import { useState } from "react";
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Clock,
  CreditCard,
  Layers,
  Sparkles,
} from "lucide-react";

export default function CreditProfileView() {
  const factors = [
    {
      title: "On-Time Payment History",
      impact: "High Impact",
      score: "100%",
      status: "Excellent",
      statusColor: "#059669",
      statusBg: "#DCFCE7",
      desc: "Zero missed EMI or credit card payments across 36 billing cycles.",
      icon: <CheckCircle2 size={20} color="#059669" />,
    },
    {
      title: "Credit Card Utilization",
      impact: "High Impact",
      score: "18%",
      status: "Excellent",
      statusColor: "#059669",
      statusBg: "#DCFCE7",
      desc: "Well below the recommended 30% threshold (₹27,000 used of ₹1,50,000 limit).",
      icon: <CreditCard size={20} color="#059669" />,
    },
    {
      title: "Credit History Age",
      impact: "Medium Impact",
      score: "4.8 Yrs",
      status: "Good",
      statusColor: "#2563EB",
      statusBg: "#EFF6FF",
      desc: "Oldest credit line opened in August 2019 (HDFC Bank).",
      icon: <Clock size={20} color="#2563EB" />,
    },
    {
      title: "Total Credit Accounts",
      impact: "Low Impact",
      score: "5 Accounts",
      status: "Healthy Mix",
      statusColor: "#7C3AED",
      statusBg: "#FAF5FF",
      desc: "Balanced portfolio with 3 secured loans, 1 personal loan, 1 card.",
      icon: <Layers size={20} color="#7C3AED" />,
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      {/* Title */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.85rem)", fontWeight: 900, color: "#0F172A" }}>
          Experian & CIBIL Credit Profile
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
          Comprehensive credit bureau analysis updated as of 02 May 2024.
        </p>
      </div>

      {/* Top Row: Score Dial & Past Trend */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "24px",
          marginBottom: "28px",
        }}
        className="dashboard-two-col"
      >
        {/* Score Card */}
        <div
          className="clean-card"
          style={{
            background: "#ffffff",
            borderRadius: "22px",
            padding: "26px",
            border: "1.5px solid #E2E8F0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <div>
              <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#64748B", textTransform: "uppercase" }}>
                Official Bureau Score
              </span>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "4px" }}>
                <span style={{ fontSize: "2.8rem", fontWeight: 900, color: "#0F172A", lineHeight: 1 }}>
                  782
                </span>
                <span style={{ fontSize: "1.1rem", color: "#94A3B8", fontWeight: 700 }}>
                  / 900
                </span>
                <span
                  style={{
                    background: "#DCFCE7",
                    color: "#15803D",
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    padding: "3px 10px",
                    borderRadius: "99px",
                  }}
                >
                  ● Excellent
                </span>
              </div>
            </div>
            <ShieldCheck size={36} color="var(--primary)" />
          </div>

          {/* Rainbow Score Bar */}
          <div style={{ position: "relative", margin: "14px 0 20px 0" }}>
            <div
              style={{
                width: "100%",
                height: "10px",
                borderRadius: "99px",
                background: "linear-gradient(90deg, #EF4444 0%, #F59E0B 35%, #10B981 75%, #059669 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "1px",
                left: "86%",
                transform: "translateX(-50%)",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: "#ffffff",
                border: "3.5px solid #059669",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "#64748B", marginTop: "6px" }}>
              <span>300 (Poor)</span>
              <span>650 (Fair)</span>
              <span>750 (Good)</span>
              <span>900 (Excellent)</span>
            </div>
          </div>

          <div
            style={{
              background: "#F8FAFC",
              borderRadius: "14px",
              padding: "12px 16px",
              fontSize: "0.8rem",
              color: "#334155",
              lineHeight: 1.5,
            }}
          >
            🎉 Your credit score puts you in the top <strong>18% of prime borrowers</strong> in India, qualifying you for the lowest interest rate tiers across all partner banks.
          </div>
        </div>

        {/* Past Trend Chart */}
        <div
          className="clean-card"
          style={{
            background: "#ffffff",
            borderRadius: "22px",
            padding: "26px",
            border: "1.5px solid #E2E8F0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A" }}>
              6-Month Score Trajectory
            </h3>
            <span style={{ fontSize: "0.72rem", color: "#059669", fontWeight: 800, background: "#DCFCE7", padding: "3px 8px", borderRadius: "99px" }}>
              +32 Pts
            </span>
          </div>

          {/* Mini line trend simulation */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", height: "110px", padding: "10px 0", borderBottom: "1px solid #F1F5F9" }}>
            {[
              { m: "Nov", s: 750, h: "60%" },
              { m: "Dec", s: 756, h: "68%" },
              { m: "Jan", s: 762, h: "74%" },
              { m: "Feb", s: 768, h: "80%" },
              { m: "Mar", s: 775, h: "88%" },
              { m: "Apr", s: 782, h: "98%", cur: true },
            ].map((t, idx) => (
              <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: t.cur ? "var(--primary-dark)" : "#64748B" }}>
                  {t.s}
                </span>
                <div
                  style={{
                    width: "20px",
                    height: t.h,
                    background: t.cur
                      ? "linear-gradient(180deg, #00A669 0%, #007A4D 100%)"
                      : "#E2E8F0",
                    borderRadius: "6px",
                  }}
                />
                <span style={{ fontSize: "0.68rem", color: "#64748B" }}>{t.m}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px", fontSize: "0.76rem", color: "#475569" }}>
            <TrendingUp size={16} color="var(--primary)" />
            <span>Consistently rising due to on-time Bajaj Finserv EMI clearing.</span>
          </div>
        </div>
      </div>

      {/* 4 Key Factors */}
      <div>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A", marginBottom: "16px" }}>
          Key Factors Impacting Your Score
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {factors.map((f, idx) => (
            <div
              key={idx}
              className="clean-card"
              style={{
                background: "#ffffff",
                borderRadius: "18px",
                padding: "20px",
                border: "1.5px solid #E2E8F0",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {f.icon}
                  <span style={{ fontSize: "0.72rem", color: "#64748B", fontWeight: 700 }}>
                    {f.impact}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    color: f.statusColor,
                    background: f.statusBg,
                    padding: "2px 8px",
                    borderRadius: "99px",
                  }}
                >
                  {f.status}
                </span>
              </div>

              <div style={{ fontSize: "1.35rem", fontWeight: 900, color: "#0F172A", marginBottom: "4px" }}>
                {f.score}
              </div>
              <h4 style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0F172A", marginBottom: "6px" }}>
                {f.title}
              </h4>
              <p style={{ fontSize: "0.75rem", color: "#64748B", lineHeight: 1.4 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
