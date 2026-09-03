"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  CreditCard,
  Calendar,
  CheckCircle2,
  Download,
  ArrowRight,
  ShieldCheck,
  Check,
  RefreshCw,
  Smartphone,
  AlertCircle,
} from "lucide-react";

export default function EmiPaymentsView() {
  const [selectedPay, setSelectedPay] = useState<{ loan: string; emi: string } | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const dues = [
    {
      loan: "Personal Loan - Bajaj Finserv",
      emi: "₹12,007",
      due: "12 May 2024",
      daysLeft: "5 Days Left",
      isUrgent: true,
      account: "ACC-PL-89210",
    },
    {
      loan: "Home Loan - HDFC Bank",
      emi: "₹8,561",
      due: "20 May 2024",
      daysLeft: "13 Days Left",
      isUrgent: false,
      account: "ACC-HL-44120",
    },
    {
      loan: "Consumer Durable - Tata Capital",
      emi: "₹3,500",
      due: "05 Jun 2024",
      daysLeft: "29 Days Left",
      isUrgent: false,
      account: "ACC-CD-11094",
    },
  ];

  const history = [
    {
      date: "12 Apr 2024",
      loan: "Personal Loan (Bajaj Finserv)",
      amount: "₹12,007",
      mode: "NACH Autopay (HDFC Bank ...1045)",
      status: "Successful",
      ref: "UTR-892103418290",
    },
    {
      date: "20 Apr 2024",
      loan: "Home Loan (HDFC Bank)",
      amount: "₹8,561",
      mode: "UPI Auto-Debit",
      status: "Successful",
      ref: "UTR-771920391024",
    },
    {
      date: "12 Mar 2024",
      loan: "Personal Loan (Bajaj Finserv)",
      amount: "₹12,007",
      mode: "NACH Autopay",
      status: "Successful",
      ref: "UTR-661902839102",
    },
  ];

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00A669", "#10B981", "#34D399"],
      });
      setTimeout(() => {
        setPaymentSuccess(false);
        setSelectedPay(null);
      }, 2500);
    }, 1500);
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.85rem)", fontWeight: 900, color: "#0F172A" }}>
          EMI Repayments & Autopay
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
          Never miss a due date with automated e-Mandate NACH debits.
        </p>
      </div>

      {/* Autopay Active Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #ECFDF5 0%, #DCFCE7 100%)",
          border: "1.5px solid #A7F3D0",
          borderRadius: "18px",
          padding: "16px 20px",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "var(--primary)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShieldCheck size={22} />
          </div>
          <div>
            <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#065F46" }}>
              NACH e-Mandate Active
            </div>
            <div style={{ fontSize: "0.78rem", color: "#047857" }}>
              Linked Primary Account: HDFC Bank A/C ...1045 (Rohit Kumar)
            </div>
          </div>
        </div>
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 800,
            background: "#ffffff",
            color: "#065F46",
            padding: "4px 12px",
            borderRadius: "99px",
            border: "1px solid #A7F3D0",
          }}
        >
          ✓ Autopay Enabled
        </span>
      </div>

      {/* Upcoming EMIs Section */}
      <div style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A", marginBottom: "16px" }}>
          Upcoming Monthly Dues
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "18px",
          }}
        >
          {dues.map((due, idx) => (
            <div
              key={idx}
              className="clean-card"
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "22px",
                border: due.isUrgent ? "2px solid #FCA5A5" : "1.5px solid #E2E8F0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: due.isUrgent ? "0 8px 20px rgba(239, 68, 68, 0.08)" : "none",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: due.isUrgent ? "#DC2626" : "#475569",
                      background: due.isUrgent ? "#FEE2E2" : "#F1F5F9",
                      padding: "3px 10px",
                      borderRadius: "99px",
                    }}
                  >
                    ● {due.daysLeft}
                  </span>
                  <span style={{ fontSize: "0.74rem", color: "#64748B" }}>{due.due}</span>
                </div>

                <div style={{ fontSize: "0.98rem", fontWeight: 800, color: "#0F172A", marginBottom: "4px" }}>
                  {due.loan}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#64748B" }}>
                  Account: <strong>{due.account}</strong>
                </div>

                <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#0F172A", margin: "14px 0" }}>
                  {due.emi}
                </div>
              </div>

              <button
                onClick={() => setSelectedPay({ loan: due.loan, emi: due.emi })}
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.88rem",
                  borderRadius: "10px",
                }}
              >
                Pay Now ({due.emi})
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment History Section */}
      <div>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A", marginBottom: "16px" }}>
          Past Repayment Receipts
        </h3>

        <div
          className="clean-card"
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "20px",
            overflowX: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "500px" }}>
            {history.map((h, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>
                    {h.loan}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "2px" }}>
                    {h.date} • {h.mode} • Ref: {h.ref}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "0.95rem", fontWeight: 900, color: "#059669" }}>
                      {h.amount}
                    </div>
                    <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#059669" }}>
                      ✓ {h.status}
                    </span>
                  </div>

                  <button
                    onClick={() => alert(`Downloading payment receipt for ${h.ref}...`)}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "8px",
                      border: "1px solid #CBD5E1",
                      background: "#ffffff",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#334155",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Download size={13} /> Receipt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simulated Payment Modal */}
      {selectedPay && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(4px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <div
            className="clean-card"
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              padding: "28px",
              maxWidth: "440px",
              width: "100%",
            }}
          >
            {paymentSuccess ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <CheckCircle2 size={54} color="var(--primary)" style={{ margin: "0 auto 14px auto" }} />
                <h3 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#0F172A", marginBottom: "6px" }}>
                  Payment Successful!
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#64748B" }}>
                  Your EMI of {selectedPay.emi} has been credited. Receipt sent to your email.
                </p>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: "#0F172A", marginBottom: "4px" }}>
                  Pay EMI Installment
                </h3>
                <p style={{ fontSize: "0.82rem", color: "#64748B", marginBottom: "18px" }}>
                  {selectedPay.loan}
                </p>

                <div
                  style={{
                    background: "#F1F5F9",
                    borderRadius: "14px",
                    padding: "14px 16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontSize: "0.82rem", color: "#475569", fontWeight: 600 }}>Amount Due</span>
                  <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary-dark)" }}>
                    {selectedPay.emi}
                  </span>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ fontSize: "0.8rem", fontWeight: 800, color: "#334155", display: "block", marginBottom: "8px" }}>
                    Select Payment Method
                  </label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {[
                      { id: "UPI", label: "Instant UPI (GPay / PhonePe / Paytm)" },
                      { id: "NetBanking", label: "NetBanking (HDFC Bank ...1045)" },
                      { id: "DebitCard", label: "Debit Card" },
                    ].map((m) => (
                      <div
                        key={m.id}
                        onClick={() => setPaymentMethod(m.id)}
                        style={{
                          padding: "10px 14px",
                          borderRadius: "12px",
                          border: paymentMethod === m.id ? "2px solid var(--primary)" : "1.5px solid #CBD5E1",
                          background: paymentMethod === m.id ? "#ECFDF5" : "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          cursor: "pointer",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: "#0F172A",
                        }}
                      >
                        <span>{m.label}</span>
                        {paymentMethod === m.id && <Check size={16} color="var(--primary)" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() => setSelectedPay(null)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      background: "#ffffff",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handlePay}
                    disabled={isProcessing}
                    className="btn-primary"
                    style={{
                      flex: 2,
                      padding: "12px",
                      borderRadius: "12px",
                      fontWeight: 800,
                    }}
                  >
                    {isProcessing ? "Processing Repayment..." : `Authorize ${selectedPay.emi}`}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
