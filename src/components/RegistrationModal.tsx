"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  X,
  Check,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  Building,
  User,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Lock,
  Smartphone,
  RefreshCw,
} from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
  onComplete,
}: RegistrationModalProps) {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("Rohit Kumar");
  const [email, setEmail] = useState("rohit.kumar@example.com");
  const [phone, setPhone] = useState("9876543210");
  const [employment, setEmployment] = useState("Salaried");
  const [income, setIncome] = useState("75000");

  // PAN state
  const [panNumber, setPanNumber] = useState("ABCDE1234F");
  const [panFlipped, setPanFlipped] = useState(false);
  const [panScanning, setPanScanning] = useState(false);
  const [panVerified, setPanVerified] = useState(false);

  // Aadhaar state
  const [aadhaarNumber, setAadhaarNumber] = useState("5489 2310 9874");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [aadhaarVerified, setAadhaarVerified] = useState(false);

  // Bank state
  const [bankName, setBankName] = useState("HDFC Bank");
  const [accountNumber, setAccountNumber] = useState("50100234891045");
  const [ifsc, setIfsc] = useState("HDFC0000123");
  const [bankVerifying, setBankVerifying] = useState(false);
  const [bankVerified, setBankVerified] = useState(false);

  if (!isOpen) return null;

  const handleVerifyPan = () => {
    setPanScanning(true);
    setTimeout(() => {
      setPanScanning(false);
      setPanVerified(true);
    }, 1500);
  };

  const handleSendOtp = () => {
    setOtpSent(true);
    setOtp("4829");
  };

  const handleVerifyAadhaar = () => {
    setAadhaarVerified(true);
  };

  const handleVerifyBank = () => {
    setBankVerifying(true);
    setTimeout(() => {
      setBankVerifying(false);
      setBankVerified(true);
    }, 1600);
  };

  const handleFinish = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#00A669", "#10B981", "#34D399", "#FBBF24"],
    });
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  const stepsList = [
    { num: 1, title: "Profile" },
    { num: 2, title: "PAN Card" },
    { num: 3, title: "Aadhaar" },
    { num: 4, title: "Bank Setup" },
    { num: 5, title: "All Set" },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "680px",
          width: "95%",
          maxHeight: "92vh",
          padding: "0",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 28px",
            background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
            borderBottom: "1px solid #E2E8F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "var(--primary)",
                  background: "var(--primary-light)",
                  padding: "3px 10px",
                  borderRadius: "99px",
                  border: "1px solid rgba(0, 166, 105, 0.25)",
                }}
              >
                100% PAPERLESS ONBOARDING
              </span>
              <span style={{ fontSize: "0.74rem", color: "#64748B" }}>
                Step {step} of 5
              </span>
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 900,
                color: "#0F172A",
                marginTop: "4px",
              }}
            >
              LoanHub Borrower Registration
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "#ffffff",
              border: "1px solid #CBD5E1",
              borderRadius: "50%",
              width: "34px",
              height: "34px",
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

        {/* Step Indicator Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 28px",
            background: "#ffffff",
            borderBottom: "1px solid #EEF2EE",
          }}
        >
          {stepsList.map((s, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                opacity: step >= s.num ? 1 : 0.45,
              }}
            >
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background:
                    step > s.num
                      ? "var(--primary)"
                      : step === s.num
                      ? "linear-gradient(135deg, #00A669 0%, #007A4D 100%)"
                      : "#E2E8F0",
                  color: step >= s.num ? "#ffffff" : "#64748B",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    step === s.num
                      ? "0 2px 8px rgba(0, 166, 105, 0.4)"
                      : "none",
                }}
              >
                {step > s.num ? <Check size={14} strokeWidth={3} /> : s.num}
              </div>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: step === s.num ? 800 : 600,
                  color: step === s.num ? "#0F172A" : "#64748B",
                  display: "none",
                }}
                className="step-title-desktop"
              >
                {s.title}
              </span>
            </div>
          ))}
        </div>

        {/* Content Body */}
        <div style={{ padding: "26px 28px", overflowY: "auto", flex: 1 }}>
          {/* STEP 1: Profile Creation */}
          {step === 1 && (
            <div>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A" }}>
                  Let's set up your Borrower Profile
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#64748B", marginTop: "2px" }}>
                  Please enter your basic information as per your official government IDs.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ gridColumn: "span 2" }}>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Full Name (As per PAN Card)
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Rohit Kumar"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#0F172A",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.95rem",
                      color: "#0F172A",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.95rem",
                      color: "#0F172A",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Employment Type
                  </label>
                  <select
                    value={employment}
                    onChange={(e) => setEmployment(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.92rem",
                      color: "#0F172A",
                      outline: "none",
                      background: "#ffffff",
                    }}
                  >
                    <option value="Salaried">Salaried Employee</option>
                    <option value="Self-Employed">Self-Employed / Business</option>
                    <option value="Professional">Doctor / CA / Lawyer</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Monthly Net Income (₹)
                  </label>
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="75000"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#0F172A",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.78rem",
                  color: "#64748B",
                }}
              >
                <Lock size={16} color="var(--primary)" />
                <span>Your information is encrypted with 256-bit SSL and never shared.</span>
              </div>
            </div>
          )}

          {/* STEP 2: Animated PAN Card Verification */}
          {step === 2 && (
            <div>
              <div style={{ marginBottom: "16px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A" }}>
                  PAN Card Verification
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#64748B", marginTop: "2px" }}>
                  Verify your Permanent Account Number for instant income tax validation.
                </p>
              </div>

              {/* Realistic 3D Animated PAN Card */}
              <div
                style={{
                  perspective: 1000,
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px 0 20px 0",
                }}
              >
                <div
                  onClick={() => setPanFlipped(!panFlipped)}
                  style={{
                    width: "360px",
                    height: "215px",
                    borderRadius: "18px",
                    background: "linear-gradient(135deg, #1E3A8A 0%, #172554 100%)",
                    color: "#ffffff",
                    padding: "18px",
                    boxShadow: "0 18px 35px -8px rgba(30, 58, 138, 0.45)",
                    position: "relative",
                    overflow: "hidden",
                    border: "1.5px solid rgba(255, 255, 255, 0.2)",
                    cursor: "pointer",
                    transition: "transform 0.5s",
                    transform: panFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Hologram Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "16px",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, #FDE047 0%, #D97706 60%, #B45309 100%)",
                      opacity: 0.85,
                      boxShadow: "0 0 10px rgba(253, 224, 71, 0.6)",
                    }}
                  />

                  {/* Header text */}
                  <div style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.08em", opacity: 0.9 }}>
                    INCOME TAX DEPARTMENT • GOVT. OF INDIA
                  </div>

                  {/* Card Body */}
                  <div style={{ marginTop: "22px", display: "flex", gap: "14px", alignItems: "center" }}>
                    {/* User Photo Thumbnail */}
                    <div
                      style={{
                        width: "60px",
                        height: "72px",
                        borderRadius: "8px",
                        background: "#ffffff",
                        overflow: "hidden",
                        border: "1.5px solid #CBD5E1",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                        alt="Photo"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>

                    <div>
                      <div style={{ fontSize: "0.62rem", color: "#93C5FD", fontWeight: 700 }}>
                        PERMANENT ACCOUNT NUMBER
                      </div>
                      <div
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 900,
                          letterSpacing: "0.1em",
                          fontFamily: "monospace",
                          color: "#F8FAFC",
                          margin: "2px 0 6px 0",
                        }}
                      >
                        {panNumber}
                      </div>

                      <div style={{ fontSize: "0.62rem", color: "#93C5FD" }}>NAME</div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 800 }}>{fullName}</div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "18px",
                      right: "18px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.65rem",
                      color: "#93C5FD",
                    }}
                  >
                    <span>DOB: 15/08/1992</span>
                    <span style={{ fontFamily: "cursive", fontStyle: "italic", fontSize: "0.75rem", color: "#F1F5F9" }}>
                      {fullName}
                    </span>
                  </div>

                  {/* Animated Scanner Laser */}
                  {panScanning && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: "#10B981",
                        boxShadow: "0 0 15px 4px #10B981",
                        animation: "panScan 1.2s infinite ease-in-out alternate",
                      }}
                    />
                  )}
                </div>
              </div>

              {/* PAN Input & Action */}
              <div style={{ maxWidth: "380px", margin: "0 auto" }}>
                <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                  Enter 10-Digit PAN Number
                </label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="text"
                    maxLength={10}
                    value={panNumber}
                    onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                    style={{
                      flex: 1,
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "1rem",
                      fontWeight: 800,
                      fontFamily: "monospace",
                      letterSpacing: "0.08em",
                      outline: "none",
                    }}
                  />
                  <button
                    onClick={handleVerifyPan}
                    disabled={panScanning || panVerified}
                    className="btn-primary"
                    style={{
                      padding: "12px 20px",
                      fontSize: "0.88rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {panScanning ? "Scanning..." : panVerified ? "Verified ✓" : "Verify PAN"}
                  </button>
                </div>

                {panVerified && (
                  <div
                    style={{
                      marginTop: "12px",
                      background: "#ECFDF5",
                      border: "1px solid #A7F3D0",
                      borderRadius: "10px",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.82rem",
                      color: "#065F46",
                      fontWeight: 700,
                    }}
                  >
                    <CheckCircle2 size={16} color="#059669" />
                    <span>PAN verified with NSDL Income Tax Database!</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: Aadhaar DigiLocker Verification */}
          {step === 3 && (
            <div>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A" }}>
                  Aadhaar e-KYC Verification
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#64748B", marginTop: "2px" }}>
                  Direct automated verification via Government DigiLocker gateway.
                </p>
              </div>

              <div
                style={{
                  background: "#F8FAFC",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "18px",
                  padding: "24px",
                  maxWidth: "460px",
                  margin: "0 auto",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "#EEF2FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Smartphone size={18} color="#4F46E5" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#0F172A" }}>
                      UIDAI DigiLocker Gateway
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#64748B" }}>
                      OTP will be sent to Aadhaar linked mobile
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    12-Digit Aadhaar Number
                  </label>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <input
                      type="text"
                      value={aadhaarNumber}
                      onChange={(e) => setAadhaarNumber(e.target.value)}
                      placeholder="XXXX XXXX XXXX"
                      style={{
                        flex: 1,
                        padding: "12px 14px",
                        borderRadius: "12px",
                        border: "1.5px solid #CBD5E1",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        outline: "none",
                      }}
                    />
                    <button
                      onClick={handleSendOtp}
                      disabled={otpSent}
                      style={{
                        padding: "12px 16px",
                        borderRadius: "12px",
                        background: otpSent ? "#E2E8F0" : "var(--primary-light)",
                        border: "1px solid rgba(0, 166, 105, 0.3)",
                        color: otpSent ? "#64748B" : "#007A4D",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      {otpSent ? "OTP Sent" : "Get OTP"}
                    </button>
                  </div>
                </div>

                {otpSent && (
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                      Enter 4-Digit OTP (Simulated: 4829)
                    </label>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <input
                        type="text"
                        maxLength={4}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="4829"
                        style={{
                          width: "120px",
                          padding: "12px 14px",
                          borderRadius: "12px",
                          border: "1.5px solid #CBD5E1",
                          fontSize: "1.1rem",
                          fontWeight: 800,
                          textAlign: "center",
                          letterSpacing: "0.2em",
                          outline: "none",
                        }}
                      />
                      <button
                        onClick={handleVerifyAadhaar}
                        className="btn-primary"
                        style={{ padding: "12px 24px", fontSize: "0.88rem" }}
                      >
                        {aadhaarVerified ? "Verified ✓" : "Confirm OTP"}
                      </button>
                    </div>
                  </div>
                )}

                {aadhaarVerified && (
                  <div
                    style={{
                      background: "#ECFDF5",
                      border: "1px solid #A7F3D0",
                      borderRadius: "10px",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.82rem",
                      color: "#065F46",
                      fontWeight: 700,
                    }}
                  >
                    <CheckCircle2 size={16} color="#059669" />
                    <span>Aadhaar e-KYC authenticated with DigiLocker!</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 4: Bank Account Details */}
          {step === 4 && (
            <div>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A" }}>
                  Disbursal Bank Account Setup
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#64748B", marginTop: "2px" }}>
                  Where approved loan funds will be transferred and EMIs auto-debited.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ gridColumn: "span 2" }}>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Select Bank
                  </label>
                  <select
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#0F172A",
                      outline: "none",
                      background: "#ffffff",
                    }}
                  >
                    <option value="HDFC Bank">HDFC Bank</option>
                    <option value="State Bank of India">State Bank of India (SBI)</option>
                    <option value="ICICI Bank">ICICI Bank</option>
                    <option value="Axis Bank">Axis Bank</option>
                    <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Account Number
                  </label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    placeholder="50100234891045"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    value={ifsc}
                    onChange={(e) => setIfsc(e.target.value.toUpperCase())}
                    placeholder="HDFC0000123"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <button
                  onClick={handleVerifyBank}
                  disabled={bankVerifying || bankVerified}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    background: bankVerified ? "#ECFDF5" : "#0F172A",
                    color: bankVerified ? "#065F46" : "#ffffff",
                    border: bankVerified ? "1px solid #A7F3D0" : "none",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {bankVerifying ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" /> Performing ₹1 Penny Drop...
                    </>
                  ) : bankVerified ? (
                    <>
                      <CheckCircle2 size={16} color="#059669" /> ₹1.00 Penny-Drop Successful • Account Verified
                    </>
                  ) : (
                    <>
                      <Building size={16} /> Penny-Drop Verify Bank Account
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: All Set Celebration */}
          {step === 5 && (
            <div style={{ textAlign: "center", padding: "10px 0" }}>
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                  boxShadow: "0 10px 25px rgba(0, 166, 105, 0.3)",
                }}
              >
                <Sparkles size={36} color="var(--primary)" />
              </div>

              <h3
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 900,
                  color: "#0F172A",
                  marginBottom: "8px",
                }}
              >
                You're All Set, Rohit! 🎉
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#64748B", maxWidth: "440px", margin: "0 auto 24px auto" }}>
                Your identity, income, and bank credentials have been verified with bank-grade security.
                Your personalized LoanHub Dashboard is ready.
              </p>

              {/* Verified Badges Summary */}
              <div
                style={{
                  background: "#F8FAFC",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "18px",
                  padding: "18px 24px",
                  maxWidth: "440px",
                  margin: "0 auto 26px auto",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {[
                  { label: "KYC Status", val: "Verified via UIDAI DigiLocker" },
                  { label: "PAN Authentication", val: "Valid • Verified (NSDL)" },
                  { label: "Bank Account", val: "HDFC Bank (A/C ...1045)" },
                  { label: "Eligible Credit Limit", val: "Up to ₹5,00,000 (Pre-approved)" },
                ].map((row, rIdx) => (
                  <div key={rIdx} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                    <span style={{ color: "#64748B" }}>{row.label}</span>
                    <span style={{ fontWeight: 700, color: "#0F172A" }}>{row.val}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleFinish}
                className="btn-primary"
                style={{
                  padding: "16px 42px",
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  borderRadius: "99px",
                }}
              >
                Go to My Dashboard <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        {step < 5 && (
          <div
            style={{
              padding: "16px 28px",
              background: "#F8FAFC",
              borderTop: "1px solid #E2E8F0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "none",
                  border: "none",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  color: "#64748B",
                  cursor: "pointer",
                }}
              >
                <ArrowLeft size={16} /> Back
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={() => {
                if (step === 2 && !panVerified) {
                  setPanVerified(true);
                }
                if (step === 3 && !aadhaarVerified) {
                  setAadhaarVerified(true);
                }
                if (step === 4 && !bankVerified) {
                  setBankVerified(true);
                }
                setStep(step + 1);
              }}
              className="btn-primary"
              style={{
                padding: "12px 28px",
                fontSize: "0.92rem",
                fontWeight: 700,
              }}
            >
              Continue <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes panScan {
          0% {
            top: 0%;
          }
          100% {
            top: 98%;
          }
        }
        @media (min-width: 640px) {
          .step-title-desktop {
            display: inline-block !important;
          }
        }
      `}</style>
    </div>
  );
}
