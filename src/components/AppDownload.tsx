"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Apple, Play, CheckCircle2, Star, Sparkles } from "lucide-react";

export default function AppDownload() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="about-us"
      style={{
        padding: "70px 0 90px 0",
        background: "#ffffff",
      }}
    >
      <div className="container">
        <div
          ref={containerRef}
          style={{
            background: "linear-gradient(135deg, #EFFBF4 0%, #E0F5EB 100%)",
            border: "1.5px solid #CAEED9",
            borderRadius: "32px",
            padding: "48px 48px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            alignItems: "center",
            gap: "42px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 45px -10px rgba(0, 166, 105, 0.1)",
          }}
        >
          {/* Left: Interactive Phone Screen Preview */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "230px",
                height: "380px",
                background: "#0F172A",
                borderRadius: "36px",
                padding: "8px",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
                transform: "rotate(-3deg)",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg) scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "rotate(-3deg) scale(1)")}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#FAFBFA",
                  borderRadius: "28px",
                  overflow: "hidden",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Mini Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ fontSize: "0.74rem", fontWeight: 900, color: "#00A669" }}>
                    LoanHub App
                  </div>
                  <div style={{ width: "34px", height: "4px", background: "#E2E8F0", borderRadius: "4px" }} />
                </div>

                {/* Active Loan Card */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #00A669 0%, #007A4D 100%)",
                    borderRadius: "14px",
                    padding: "12px",
                    color: "#ffffff",
                    marginBottom: "10px",
                    boxShadow: "0 4px 12px rgba(0, 166, 105, 0.3)",
                  }}
                >
                  <div style={{ fontSize: "0.58rem", opacity: 0.9 }}>Active Personal Loan</div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 900, margin: "3px 0" }}>
                    ₹5,00,000
                  </div>
                  <div
                    style={{
                      fontSize: "0.52rem",
                      background: "rgba(255,255,255,0.25)",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      display: "inline-block",
                      fontWeight: 700,
                    }}
                  >
                    Auto-Debit Active
                  </div>
                </div>

                {/* Upcoming EMI list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[
                    { title: "Upcoming EMI (Oct)", val: "₹14,250", status: "Due 5th" },
                    { title: "Free CIBIL Report", val: "782 / 900", status: "Updated" },
                    { title: "Eligible Top-Up", val: "₹1,50,000", status: "Claim" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#ffffff",
                        border: "1px solid #EEF2EE",
                        borderRadius: "10px",
                        padding: "7px 10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "0.62rem",
                        fontWeight: 600,
                        color: "#334155",
                      }}
                    >
                      <div>
                        <div>{item.title}</div>
                        <div style={{ fontSize: "0.52rem", color: "#64748B" }}>{item.status}</div>
                      </div>
                      <span style={{ color: "#00A669", fontWeight: 800 }}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Content & App store buttons */}
          <div>
            <span
              className="section-tag"
              style={{ background: "#DCFCE7", color: "#007A4D", borderColor: "rgba(0, 166, 105, 0.3)" }}
            >
              <Sparkles size={14} /> LOANHUB MOBILE APP
            </span>

            <h3
              style={{
                fontSize: "clamp(1.8rem, 2.6vw, 2.3rem)",
                fontWeight: 900,
                color: "#0F172A",
                lineHeight: 1.25,
                margin: "12px 0 16px 0",
                letterSpacing: "-0.025em",
              }}
            >
              Manage your loans on the go with LoanHub App
            </h3>

            <p
              style={{
                fontSize: "0.98rem",
                color: "#475569",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}
            >
              Experience seamless loan tracking, one-click EMI repayments, instant top-up approvals,
              and monthly credit score updates right on your fingertips.
            </p>

            {/* Feature Bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
              {[
                "Track live application status with real-time push notifications",
                "1-click UPI autopay setup & statement downloads",
                "Exclusive pre-approved top-up offers at reduced interest rates",
              ].map((text, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={16} color="var(--primary)" />
                  <span style={{ fontSize: "0.85rem", color: "#334155", fontWeight: 600 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Store Download Buttons */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
              {/* App Store */}
              <a
                href="#download"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#0F172A",
                  color: "#ffffff",
                  padding: "11px 20px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <Apple size={22} color="#ffffff" />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.62rem", textTransform: "uppercase", opacity: 0.8 }}>
                    Download on the
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800, lineHeight: 1 }}>
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#download"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#0F172A",
                  color: "#ffffff",
                  padding: "11px 20px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <Play size={20} fill="#ffffff" color="#ffffff" />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.62rem", textTransform: "uppercase", opacity: 0.8 }}>
                    GET IT ON
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800, lineHeight: 1 }}>
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: QR Code Box */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                padding: "20px",
                borderRadius: "24px",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.06)",
                border: "1px solid #DCEFE3",
                display: "inline-block",
              }}
            >
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" fill="#ffffff" />
                <rect x="10" y="10" width="30" height="30" rx="4" fill="#0F172A" />
                <rect x="16" y="16" width="18" height="18" rx="2" fill="#ffffff" />
                <rect x="21" y="21" width="8" height="8" rx="1" fill="#00A669" />

                <rect x="60" y="10" width="30" height="30" rx="4" fill="#0F172A" />
                <rect x="66" y="16" width="18" height="18" rx="2" fill="#ffffff" />
                <rect x="71" y="21" width="8" height="8" rx="1" fill="#00A669" />

                <rect x="10" y="60" width="30" height="30" rx="4" fill="#0F172A" />
                <rect x="16" y="66" width="18" height="18" rx="2" fill="#ffffff" />
                <rect x="21" y="71" width="8" height="8" rx="1" fill="#00A669" />

                <rect x="46" y="12" width="6" height="6" fill="#0F172A" />
                <rect x="46" y="24" width="6" height="6" fill="#00A669" />
                <rect x="46" y="36" width="6" height="6" fill="#0F172A" />
                <rect x="12" y="46" width="6" height="6" fill="#0F172A" />
                <rect x="24" y="46" width="6" height="6" fill="#0F172A" />
                <rect x="36" y="46" width="6" height="6" fill="#00A669" />
                <rect x="48" y="48" width="8" height="8" fill="#00A669" />
                <rect x="60" y="48" width="6" height="6" fill="#0F172A" />
                <rect x="72" y="48" width="6" height="6" fill="#00A669" />
                <rect x="84" y="48" width="6" height="6" fill="#0F172A" />
                <rect x="48" y="62" width="6" height="6" fill="#0F172A" />
                <rect x="60" y="62" width="8" height="8" fill="#00A669" />
                <rect x="74" y="62" width="6" height="6" fill="#0F172A" />
                <rect x="84" y="62" width="6" height="6" fill="#0F172A" />
                <rect x="48" y="76" width="6" height="6" fill="#00A669" />
                <rect x="62" y="76" width="6" height="6" fill="#0F172A" />
                <rect x="74" y="76" width="8" height="8" fill="#00A669" />
                <rect x="84" y="84" width="6" height="6" fill="#0F172A" />
              </svg>
            </div>

            <div style={{ marginTop: "12px" }}>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "#0F172A",
                  fontWeight: 800,
                  lineHeight: 1.3,
                  display: "block",
                }}
              >
                Scan to Download
              </span>
              <span style={{ fontSize: "0.72rem", color: "#64748B", fontWeight: 600 }}>
                iOS & Android Compatible
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
