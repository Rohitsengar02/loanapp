"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
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
  Home,
  FileText,
  BadgeCheck,
} from "lucide-react";

interface RegisterPageProps {
  onBackToHome: () => void;
  onGoToDashboard: () => void;
}

export default function RegisterPage({
  onBackToHome,
  onGoToDashboard,
}: RegisterPageProps) {
  const [step, setStep] = useState(1);

  // Step 1: Profile Details
  const [fullName, setFullName] = useState("Rohit Kumar");
  const [email, setEmail] = useState("rohit.kumar@example.com");
  const [phone, setPhone] = useState("9876543210");
  const [employment, setEmployment] = useState("Salaried");
  const [income, setIncome] = useState("75000");

  // Step 2: PAN Details
  const [panNumber, setPanNumber] = useState("ABCDE1234F");
  const [panFlipped, setPanFlipped] = useState(false);
  const [panScanning, setPanScanning] = useState(false);
  const [panVerified, setPanVerified] = useState(false);

  // Step 3: Aadhaar Details
  const [aadhaarNumber, setAadhaarNumber] = useState("5489 2310 9874");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [aadhaarVerified, setAadhaarVerified] = useState(false);

  // Step 4: Bank Details
  const [bankName, setBankName] = useState("HDFC Bank");
  const [accountNumber, setAccountNumber] = useState("50100234891045");
  const [ifsc, setIfsc] = useState("HDFC0000123");
  const [bankVerifying, setBankVerifying] = useState(false);
  const [bankVerified, setBankVerified] = useState(false);

  const handleVerifyPan = () => {
    setPanScanning(true);
    setTimeout(() => {
      setPanScanning(false);
      setPanVerified(true);
    }, 1400);
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
    }, 1500);
  };

  const handleFinish = () => {
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#00A669", "#10B981", "#34D399", "#FBBF24"],
    });
    setTimeout(() => {
      onGoToDashboard();
    }, 800);
  };

  const stepsList = [
    { num: 1, title: "Borrower Profile", desc: "Personal & income information" },
    { num: 2, title: "PAN Card Verification", desc: "Tax ID & income validation" },
    { num: 3, title: "Aadhaar e-KYC", desc: "DigiLocker paperless auth" },
    { num: 4, title: "Bank Account Setup", desc: "Disbursal & autopay verification" },
    { num: 5, title: "Approval & Dashboard", desc: "Instant pre-approved quota" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #FAFCFA 0%, #F1F7F3 100%)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-family)",
        color: "#0F172A",
      }}
    >
      {/* Top Brand Bar */}
      <header
        className="register-header"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #E2E8F0",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {/* Logo */}
        <div
          onClick={onBackToHome}
          style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #00A669 0%, #007A4D 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0, 166, 105, 0.35)",
              flexShrink: 0,
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#0F172A", lineHeight: 1.1 }}>
              Loan<span style={{ color: "var(--primary)" }}>Hub</span>
            </div>
            <div className="register-header-sub" style={{ fontSize: "0.68rem", color: "#64748B", fontWeight: 600 }}>
              Borrower Onboarding Portal
            </div>
          </div>
        </div>

        {/* Security badge and exit button */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            className="register-sec-badge"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#008753",
              background: "#ECFDF5",
              padding: "6px 14px",
              borderRadius: "99px",
              border: "1px solid #A7F3D0",
              whiteSpace: "nowrap",
            }}
          >
            <ShieldCheck size={16} /> 256-Bit Bank Grade Encryption
          </div>

          <button
            onClick={onBackToHome}
            className="register-back-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 14px",
              borderRadius: "10px",
              border: "1.5px solid #CBD5E1",
              background: "#ffffff",
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "#334155",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            <Home size={15} />
            <span className="register-back-text">Back to Website</span>
            <span className="register-back-mobile-text">Back</span>
          </button>
        </div>
      </header>

      {/* Main Registration Area */}
      <div
        className="container"
        style={{
          flex: 1,
          paddingTop: "36px",
          paddingBottom: "60px",
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "36px",
          alignItems: "start",
        }}
        id="register-grid"
      >
        {/* Left Column: Progress Sidebar (Automatically hidden on Mobile) */}
        <div className="register-steps-sidebar" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Steps Timeline Card */}
          <div
            className="clean-card"
            style={{
              background: "#ffffff",
              borderRadius: "22px",
              padding: "24px 20px",
              border: "1.5px solid #E2E8F0",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h4
              style={{
                fontSize: "0.82rem",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#64748B",
                marginBottom: "20px",
              }}
            >
              Registration Steps
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {stepsList.map((s, idx) => {
                const isCompleted = step > s.num;
                const isCurrent = step === s.num;
                return (
                  <div key={idx} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: isCompleted
                          ? "var(--primary)"
                          : isCurrent
                          ? "linear-gradient(135deg, #00A669 0%, #007A4D 100%)"
                          : "#F1F5F9",
                        color: isCompleted || isCurrent ? "#ffffff" : "#64748B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.85rem",
                        fontWeight: 800,
                        flexShrink: 0,
                        boxShadow: isCurrent ? "0 4px 12px rgba(0, 166, 105, 0.35)" : "none",
                      }}
                    >
                      {isCompleted ? <Check size={17} strokeWidth={3} /> : s.num}
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "0.92rem",
                          fontWeight: isCurrent ? 800 : 600,
                          color: isCurrent ? "var(--primary-dark)" : isCompleted ? "#0F172A" : "#64748B",
                        }}
                      >
                        {s.title}
                      </div>
                      <div style={{ fontSize: "0.74rem", color: "#64748B", marginTop: "1px" }}>
                        {s.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Privacy Badge */}
          <div
            style={{
              background: "linear-gradient(135deg, #ECFDF5 0%, #DCFCE7 100%)",
              border: "1px solid #BBF7D0",
              borderRadius: "18px",
              padding: "18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <BadgeCheck size={18} color="var(--primary)" />
              <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0F172A" }}>
                100% Guaranteed Privacy
              </span>
            </div>
            <p style={{ fontSize: "0.76rem", color: "#475569", lineHeight: 1.5 }}>
              Your credentials are processed directly through Government DigiLocker and NSDL channels.
            </p>
          </div>
        </div>

        {/* Right Column: Active Step Screen */}
        <div
          className="clean-card register-form-card"
          style={{
            background: "#ffffff",
            borderRadius: "26px",
            padding: "36px 40px",
            border: "1.5px solid #E2E8F0",
            boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.05)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* STEP 1: Profile Creation */}
          {step === 1 && (
            <div>
              <div style={{ marginBottom: "26px" }}>
                <span className="section-tag" style={{ background: "#DCFCE7", color: "#007A4D" }}>
                  STEP 1 OF 5 • PERSONAL PROFILE
                </span>
                <h2 style={{ fontSize: "clamp(1.35rem, 4vw, 1.65rem)", fontWeight: 900, color: "#0F172A", marginTop: "8px" }}>
                  Let's create your borrower account
                </h2>
                <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
                  Please enter your profile details exactly as printed on your government documents.
                </p>
              </div>

              <div className="register-form-grid">
                <div className="grid-full-col">
                  <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Full Name (As per PAN Card) *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Rohit Kumar"
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.98rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rohit.kumar@example.com"
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.92rem",
                      color: "#0F172A",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Mobile Number (Aadhaar Linked) *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210"
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      color: "#0F172A",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Employment Status *
                  </label>
                  <select
                    value={employment}
                    onChange={(e) => setEmployment(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.92rem",
                      color: "#0F172A",
                      outline: "none",
                      background: "#ffffff",
                    }}
                  >
                    <option value="Salaried">Salaried Corporate / Govt</option>
                    <option value="Self-Employed">Self-Employed Business / Trader</option>
                    <option value="Professional">Doctor / CA / Lawyer</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Monthly Net Salary (₹) *
                  </label>
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="75000"
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.98rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className="step-nav-buttons single-btn">
                <button
                  onClick={() => setStep(2)}
                  className="btn-primary step-nav-next-btn"
                  style={{ padding: "14px 36px", fontSize: "0.98rem", fontWeight: 800 }}
                >
                  Proceed to PAN Verification <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: 3D PAN Card Verification with Responsive Card & Actions */}
          {step === 2 && (
            <div>
              <div style={{ marginBottom: "24px" }}>
                <span className="section-tag" style={{ background: "#DCFCE7", color: "#007A4D" }}>
                  STEP 2 OF 5 • PAN CARD VERIFICATION
                </span>
                <h2 style={{ fontSize: "clamp(1.35rem, 4vw, 1.65rem)", fontWeight: 900, color: "#0F172A", marginTop: "8px" }}>
                  Verify your Permanent Account Number (PAN)
                </h2>
                <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
                  Tap the card to flip it and click below to run NSDL automated verification.
                </p>
              </div>

              {/* Responsive 3D PAN Card Element */}
              <div className="pan-card-wrapper">
                <div
                  onClick={() => setPanFlipped(!panFlipped)}
                  className="pan-card"
                  style={{
                    background: "linear-gradient(135deg, #1E3A8A 0%, #172554 100%)",
                    color: "#ffffff",
                    boxShadow: "0 20px 40px -10px rgba(30, 58, 138, 0.45)",
                    position: "relative",
                    overflow: "hidden",
                    border: "1.5px solid rgba(255, 255, 255, 0.25)",
                    cursor: "pointer",
                    transition: "transform 0.6s",
                    transform: panFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Hologram Circle */}
                  <div
                    className="pan-hologram"
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "16px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, #FDE047 0%, #D97706 60%, #B45309 100%)",
                      opacity: 0.9,
                      boxShadow: "0 0 12px rgba(253, 224, 71, 0.7)",
                    }}
                  />

                  {/* Header text */}
                  <div className="pan-card-header" style={{ fontWeight: 800, letterSpacing: "0.06em", opacity: 0.9 }}>
                    INCOME TAX DEPARTMENT • GOVT. OF INDIA
                  </div>

                  {/* Card Content */}
                  <div style={{ marginTop: "18px", display: "flex", gap: "14px", alignItems: "center" }}>
                    {/* User Photo */}
                    <div
                      className="pan-photo"
                      style={{
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

                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: "0.62rem", color: "#93C5FD", fontWeight: 700 }}>
                        PERMANENT ACCOUNT NUMBER
                      </div>
                      <div
                        className="pan-card-number"
                        style={{
                          fontWeight: 900,
                          letterSpacing: "0.08em",
                          fontFamily: "monospace",
                          color: "#F8FAFC",
                          margin: "2px 0 4px 0",
                        }}
                      >
                        {panNumber}
                      </div>

                      <div style={{ fontSize: "0.62rem", color: "#93C5FD" }}>NAME</div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 800, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {fullName}
                      </div>
                    </div>
                  </div>

                  {/* Footer Details */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "16px",
                      right: "16px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.65rem",
                      color: "#93C5FD",
                    }}
                  >
                    <span>DOB: 15/08/1992</span>
                    <span style={{ fontFamily: "cursive", fontStyle: "italic", fontSize: "0.78rem", color: "#F1F5F9" }}>
                      {fullName}
                    </span>
                  </div>

                  {/* Animated Laser Scanning Line */}
                  {panScanning && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: "#10B981",
                        boxShadow: "0 0 18px 6px #10B981",
                        animation: "panLaser 1.2s infinite ease-in-out alternate",
                      }}
                    />
                  )}
                </div>
              </div>

              {/* PAN Form Input */}
              <div style={{ maxWidth: "420px", margin: "0 auto" }}>
                <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "8px" }}>
                  Enter 10-Digit PAN Number
                </label>
                <div className="responsive-input-group">
                  <input
                    type="text"
                    maxLength={10}
                    value={panNumber}
                    onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                    style={{
                      flex: 1,
                      padding: "13px 16px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "1.05rem",
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
                    style={{ padding: "13px 20px", fontSize: "0.88rem", whiteSpace: "nowrap" }}
                  >
                    {panScanning ? "Scanning..." : panVerified ? "Verified ✓" : "Verify PAN"}
                  </button>
                </div>

                {panVerified && (
                  <div
                    style={{
                      marginTop: "14px",
                      background: "#ECFDF5",
                      border: "1px solid #A7F3D0",
                      borderRadius: "12px",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.82rem",
                      color: "#065F46",
                      fontWeight: 700,
                    }}
                  >
                    <CheckCircle2 size={18} color="#059669" />
                    <span>PAN successfully authenticated with Income Tax Records!</span>
                  </div>
                )}
              </div>

              {/* Navigation buttons - Clean, non-overlapping on mobile */}
              <div className="step-nav-buttons">
                <button
                  onClick={() => setStep(1)}
                  className="step-nav-back-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "none",
                    border: "none",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#64748B",
                    cursor: "pointer",
                  }}
                >
                  <ArrowLeft size={16} /> Back
                </button>

                <button
                  onClick={() => {
                    if (!panVerified) setPanVerified(true);
                    setStep(3);
                  }}
                  className="btn-primary step-nav-next-btn"
                  style={{ padding: "14px 28px", fontSize: "0.95rem", fontWeight: 800 }}
                >
                  Proceed to Aadhaar e-KYC <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Aadhaar e-KYC Verification */}
          {step === 3 && (
            <div>
              <div style={{ marginBottom: "24px" }}>
                <span className="section-tag" style={{ background: "#DCFCE7", color: "#007A4D" }}>
                  STEP 3 OF 5 • AADHAAR E-KYC
                </span>
                <h2 style={{ fontSize: "clamp(1.35rem, 4vw, 1.65rem)", fontWeight: 900, color: "#0F172A", marginTop: "8px" }}>
                  DigiLocker Aadhaar Authentication
                </h2>
                <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
                  Simulated Aadhaar OTP verification to safely authenticate your registered address.
                </p>
              </div>

              <div
                style={{
                  background: "#F8FAFC",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "20px",
                  padding: "24px 20px",
                  maxWidth: "500px",
                  width: "100%",
                  margin: "0 auto",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: "#EEF2FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Smartphone size={20} color="#4F46E5" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0F172A" }}>
                      UIDAI DigiLocker Gateway
                    </div>
                    <div style={{ fontSize: "0.74rem", color: "#64748B" }}>
                      Direct secure handshake with UIDAI
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    12-Digit Aadhaar Number
                  </label>
                  <div className="responsive-input-group">
                    <input
                      type="text"
                      value={aadhaarNumber}
                      onChange={(e) => setAadhaarNumber(e.target.value)}
                      placeholder="XXXX XXXX XXXX"
                      style={{
                        flex: 1,
                        padding: "13px 16px",
                        borderRadius: "12px",
                        border: "1.5px solid #CBD5E1",
                        fontSize: "0.98rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        outline: "none",
                      }}
                    />
                    <button
                      onClick={handleSendOtp}
                      disabled={otpSent}
                      style={{
                        padding: "12px 18px",
                        borderRadius: "12px",
                        background: otpSent ? "#E2E8F0" : "var(--primary-light)",
                        border: "1px solid rgba(0, 166, 105, 0.3)",
                        color: otpSent ? "#64748B" : "#007A4D",
                        fontSize: "0.85rem",
                        fontWeight: 800,
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {otpSent ? "OTP Sent ✓" : "Send OTP"}
                    </button>
                  </div>
                </div>

                {otpSent && (
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                      Enter 4-Digit OTP (Demo Code: <strong>4829</strong>)
                    </label>
                    <div className="responsive-input-group">
                      <input
                        type="text"
                        maxLength={4}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="4829"
                        style={{
                          width: "120px",
                          padding: "12px 16px",
                          borderRadius: "12px",
                          border: "1.5px solid #CBD5E1",
                          fontSize: "1.15rem",
                          fontWeight: 900,
                          textAlign: "center",
                          letterSpacing: "0.2em",
                          outline: "none",
                        }}
                      />
                      <button
                        onClick={handleVerifyAadhaar}
                        className="btn-primary"
                        style={{ padding: "12px 20px", fontSize: "0.88rem", fontWeight: 800, whiteSpace: "nowrap" }}
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
                      borderRadius: "12px",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.82rem",
                      color: "#065F46",
                      fontWeight: 700,
                    }}
                  >
                    <CheckCircle2 size={18} color="#059669" />
                    <span>Aadhaar authenticated via DigiLocker!</span>
                  </div>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="step-nav-buttons">
                <button
                  onClick={() => setStep(2)}
                  className="step-nav-back-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "none",
                    border: "none",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#64748B",
                    cursor: "pointer",
                  }}
                >
                  <ArrowLeft size={16} /> Back
                </button>

                <button
                  onClick={() => {
                    if (!aadhaarVerified) setAadhaarVerified(true);
                    setStep(4);
                  }}
                  className="btn-primary step-nav-next-btn"
                  style={{ padding: "14px 28px", fontSize: "0.95rem", fontWeight: 800 }}
                >
                  Proceed to Bank Setup <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Bank Account Setup */}
          {step === 4 && (
            <div>
              <div style={{ marginBottom: "24px" }}>
                <span className="section-tag" style={{ background: "#DCFCE7", color: "#007A4D" }}>
                  STEP 4 OF 5 • BANK ACCOUNT SETUP
                </span>
                <h2 style={{ fontSize: "clamp(1.35rem, 4vw, 1.65rem)", fontWeight: 900, color: "#0F172A", marginTop: "8px" }}>
                  Disbursal Bank Account Details
                </h2>
                <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
                  Link your primary salary account for automated Penny-Drop verification.
                </p>
              </div>

              <div className="register-form-grid">
                <div className="grid-full-col">
                  <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Select Bank Institution *
                  </label>
                  <select
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      outline: "none",
                      background: "#ffffff",
                    }}
                  >
                    <option value="HDFC Bank">HDFC Bank Limited</option>
                    <option value="State Bank of India">State Bank of India (SBI)</option>
                    <option value="ICICI Bank">ICICI Bank Limited</option>
                    <option value="Axis Bank">Axis Bank Limited</option>
                    <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    Account Number *
                  </label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    placeholder="50100234891045"
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.98rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "6px" }}>
                    IFSC Code *
                  </label>
                  <input
                    type="text"
                    value={ifsc}
                    onChange={(e) => setIfsc(e.target.value.toUpperCase())}
                    placeholder="HDFC0000123"
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      borderRadius: "12px",
                      border: "1.5px solid #CBD5E1",
                      fontSize: "0.98rem",
                      fontWeight: 700,
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Penny drop button */}
              <div style={{ marginTop: "22px" }}>
                <button
                  onClick={handleVerifyBank}
                  disabled={bankVerifying || bankVerified}
                  className="penny-drop-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "14px 24px",
                    borderRadius: "14px",
                    background: bankVerified ? "#ECFDF5" : "#0F172A",
                    color: bankVerified ? "#065F46" : "#ffffff",
                    border: bankVerified ? "1.5px solid #A7F3D0" : "none",
                    fontSize: "0.88rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  {bankVerifying ? (
                    <>
                      <RefreshCw size={18} className="animate-spin" /> Performing Automated ₹1.00 Penny-Drop...
                    </>
                  ) : bankVerified ? (
                    <>
                      <CheckCircle2 size={18} color="#059669" /> ₹1.00 Penny-Drop Verified • Matches Rohit Kumar
                    </>
                  ) : (
                    <>
                      <Building size={18} /> Run Automated ₹1 Penny-Drop Verification
                    </>
                  )}
                </button>
              </div>

              {/* Navigation buttons */}
              <div className="step-nav-buttons">
                <button
                  onClick={() => setStep(3)}
                  className="step-nav-back-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "none",
                    border: "none",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#64748B",
                    cursor: "pointer",
                  }}
                >
                  <ArrowLeft size={16} /> Back
                </button>

                <button
                  onClick={() => {
                    if (!bankVerified) setBankVerified(true);
                    setStep(5);
                  }}
                  className="btn-primary step-nav-next-btn"
                  style={{ padding: "14px 30px", fontSize: "0.95rem", fontWeight: 800 }}
                >
                  Complete Registration <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: All Set & Pre-Approved Dashboard Access */}
          {step === 5 && (
            <div style={{ textAlign: "center", padding: "12px 0" }}>
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
                <Sparkles size={38} color="var(--primary)" />
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 2rem)",
                  fontWeight: 900,
                  color: "#0F172A",
                  marginBottom: "8px",
                }}
              >
                Congratulations, Rohit! 🎉
              </h2>

              <p style={{ fontSize: "0.92rem", color: "#64748B", maxWidth: "520px", margin: "0 auto 24px auto", lineHeight: 1.55 }}>
                Your KYC authentication, PAN validation, and disbursal bank account setup are 100% complete.
                Your custom customer dashboard is ready.
              </p>

              {/* Pre-Approved Quota Card */}
              <div
                style={{
                  background: "linear-gradient(135deg, #00A669 0%, #007A4D 100%)",
                  borderRadius: "22px",
                  padding: "24px 20px",
                  color: "#ffffff",
                  maxWidth: "480px",
                  width: "100%",
                  margin: "0 auto 24px auto",
                  boxShadow: "0 15px 35px -5px rgba(0, 166, 105, 0.45)",
                  textAlign: "left",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.78rem", opacity: 0.9 }}>Your Pre-Approved Loan Quota</span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      background: "rgba(255, 255, 255, 0.25)",
                      padding: "3px 10px",
                      borderRadius: "99px",
                      fontWeight: 800,
                    }}
                  >
                    Active Status
                  </span>
                </div>

                <div style={{ fontSize: "clamp(1.8rem, 6vw, 2.4rem)", fontWeight: 900, margin: "10px 0 14px 0" }}>
                  ₹5,00,000
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", opacity: 0.95, flexWrap: "wrap", gap: "6px" }}>
                  <span>Interest: <strong>From 8.5% p.a.</strong></span>
                  <span>Tenure: <strong>Up to 60 Months</strong></span>
                </div>
              </div>

              {/* Verified Badges Table */}
              <div
                style={{
                  background: "#F8FAFC",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "18px",
                  padding: "18px 20px",
                  maxWidth: "480px",
                  width: "100%",
                  margin: "0 auto 28px auto",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  boxSizing: "border-box",
                }}
              >
                {[
                  { label: "DigiLocker Aadhaar KYC", val: "Verified & Sealed" },
                  { label: "NSDL PAN Authentication", val: "Valid • Verified" },
                  { label: "Verified Bank Account", val: "HDFC Bank (A/C ...1045)" },
                  { label: "Credit Bureau Status", val: "782 / 900 (Excellent)" },
                ].map((row, rIdx) => (
                  <div key={rIdx} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", gap: "10px" }}>
                    <span style={{ color: "#64748B" }}>{row.label}</span>
                    <span style={{ fontWeight: 800, color: "#008753", textAlign: "right" }}>✓ {row.val}</span>
                  </div>
                ))}
              </div>

              <div style={{ maxWidth: "480px", margin: "0 auto" }}>
                <button
                  onClick={handleFinish}
                  className="btn-primary"
                  style={{
                    padding: "16px 36px",
                    fontSize: "1.05rem",
                    fontWeight: 900,
                    borderRadius: "99px",
                    width: "100%",
                  }}
                >
                  Open My Dashboard <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes panLaser {
          0% {
            top: 0%;
          }
          100% {
            top: 98%;
          }
        }

        .pan-card-wrapper {
          perspective: 1000px;
          display: flex;
          justify-content: center;
          margin: 20px 0 28px 0;
          width: 100%;
        }

        .pan-card {
          width: 100%;
          max-width: 380px;
          min-height: 220px;
          border-radius: 20px;
          padding: 20px;
          box-sizing: border-box;
        }

        .pan-hologram {
          width: 40px;
          height: 40px;
        }

        .pan-card-header {
          font-size: 0.7rem;
        }

        .pan-photo {
          width: 64px;
          height: 76px;
        }

        .pan-card-number {
          font-size: 1.35rem;
        }

        .register-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .grid-full-col {
          grid-column: span 2;
        }

        .responsive-input-group {
          display: flex;
          gap: 10px;
        }

        .step-nav-buttons {
          margin-top: 36px;
          display: flex;
          align-items: center;
          justifyContent: space-between;
          gap: 14px;
        }

        .step-nav-buttons.single-btn {
          justify-content: flex-end;
        }

        @media (max-width: 900px) {
          .register-steps-sidebar {
            display: none !important;
          }
          #register-grid {
            grid-template-columns: 1fr !important;
            padding-top: 14px !important;
            padding-bottom: 40px !important;
            padding-left: 12px !important;
            padding-right: 12px !important;
            gap: 0 !important;
          }
          .register-header {
            padding: 12px 16px !important;
          }
          .register-sec-badge {
            display: none !important;
          }
          .register-header-sub {
            display: none !important;
          }
          .register-back-text {
            display: none !important;
          }
          .register-back-mobile-text {
            display: inline !important;
          }
          .register-form-card {
            padding: 22px 18px !important;
            border-radius: 20px !important;
          }
        }

        @media (max-width: 580px) {
          .register-form-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .grid-full-col {
            grid-column: span 1 !important;
          }

          .pan-card {
            max-width: 320px !important;
            min-height: 195px !important;
            padding: 14px !important;
          }
          .pan-hologram {
            width: 30px !important;
            height: 30px !important;
            top: 12px !important;
            right: 12px !important;
          }
          .pan-card-header {
            font-size: 0.58rem !important;
          }
          .pan-photo {
            width: 52px !important;
            height: 64px !important;
          }
          .pan-card-number {
            font-size: 1.12rem !important;
          }

          .step-nav-buttons {
            flex-direction: column-reverse !important;
            align-items: stretch !important;
            gap: 12px !important;
            margin-top: 28px !important;
          }
          .step-nav-next-btn {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
            padding: 14px !important;
          }
          .step-nav-back-btn {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
            padding: 10px !important;
          }
        }

        @media (max-width: 440px) {
          .responsive-input-group {
            flex-direction: column !important;
          }
          .responsive-input-group button {
            width: 100% !important;
          }
          .responsive-input-group input {
            width: 100% !important;
          }
        }

        @media (min-width: 901px) {
          .register-back-mobile-text {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
