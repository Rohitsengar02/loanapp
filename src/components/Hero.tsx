"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ShieldCheck, Zap, Percent, ArrowRight, CheckCircle2, Star, Sparkles, CreditCard, Clock, UserCheck } from "lucide-react";

interface HeroProps {
  onOpenCalculator: () => void;
  onGetStarted?: () => void;
}

export default function Hero({ onOpenCalculator, onGetStarted }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const floatBadge1 = useRef<HTMLDivElement>(null);
  const floatBadge2 = useRef<HTMLDivElement>(null);

  // Phone Mockup multi-screen interactive animated walkthrough
  const [phoneScreen, setPhoneScreen] = useState<0 | 1 | 2>(0);
  const [simulatedClick, setSimulatedClick] = useState(false);
  const [emiPaid, setEmiPaid] = useState(false);

  useEffect(() => {
    // Auto-cycle through the 3 mobile screens with simulated clicks & loading transitions
    const timer = setInterval(() => {
      setSimulatedClick(true);
      setTimeout(() => {
        setSimulatedClick(false);
        setPhoneScreen((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
      }, 450);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const phone = phoneRef.current;
    const ring1 = ring1Ref.current;
    const ring2 = ring2Ref.current;
    const b1 = floatBadge1.current;
    const b2 = floatBadge2.current;

    if (!hero || !phone) return;

    let handleMouseMove: (e: MouseEvent) => void;

    const ctx = gsap.context(() => {
      // 3D Parallax on mouse movement
      handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;

        gsap.to(phone, {
          rotationY: xPercent * 10,
          rotationX: -yPercent * 8,
          x: xPercent * 12,
          y: yPercent * 10,
          duration: 0.5,
          ease: "power2.out",
          transformPerspective: 1000,
        });

        if (ring1) {
          gsap.to(ring1, {
            x: -xPercent * 25,
            y: -yPercent * 25,
            duration: 0.7,
            ease: "power2.out",
          });
        }
        if (ring2) {
          gsap.to(ring2, {
            x: xPercent * 25,
            y: yPercent * 25,
            duration: 0.8,
            ease: "power2.out",
          });
        }
        if (b1) {
          gsap.to(b1, {
            x: xPercent * 16,
            y: -yPercent * 14,
            duration: 0.6,
            ease: "power2.out",
          });
        }
        if (b2) {
          gsap.to(b2, {
            x: -xPercent * 14,
            y: yPercent * 18,
            duration: 0.6,
            ease: "power2.out",
          });
        }
      };

      hero.addEventListener("mousemove", handleMouseMove);

      // Subtle entrance animation that guarantees 100% opacity target
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-content-elem",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.08 }
      ).fromTo(
        phone,
        { y: 40, opacity: 0, scale: 0.94 },
        { y: 0, opacity: 1, scale: 1, duration: 0.85 },
        "-=0.5"
      );
    }, hero);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        position: "relative",
        paddingTop: "135px",
        paddingBottom: "85px",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 85% 15%, rgba(167, 243, 208, 0.45) 0%, rgba(236, 253, 245, 0.3) 40%, rgba(250, 252, 250, 1) 75%)",
      }}
    >
      {/* Background Decorative Glowing Orbs */}
      <div
        className="glow-orb glow-orb-primary"
        style={{ top: "8%", right: "8%", pointerEvents: "none" }}
      />
      <div
        className="glow-orb glow-orb-mint"
        style={{ bottom: "5%", left: "-4%", pointerEvents: "none" }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            alignItems: "center",
            gap: "50px",
          }}
        >
          {/* Left Column: Headline & Hero Content */}
          <div style={{ maxWidth: "580px" }}>
            {/* Pill Tag */}
            <div
              className="hero-content-elem"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 18px",
                background: "rgba(0, 166, 105, 0.1)",
                border: "1px solid rgba(0, 166, 105, 0.25)",
                borderRadius: "999px",
                color: "#007A4D",
                fontSize: "0.85rem",
                fontWeight: 700,
                marginBottom: "20px",
                boxShadow: "0 2px 8px rgba(0, 166, 105, 0.12)",
              }}
            >
              <Sparkles size={16} color="var(--primary)" /> Smart Loans for a Better Tomorrow
            </div>

            {/* Main Headline */}
            <h1
              className="hero-content-elem"
              style={{
                fontSize: "clamp(2.4rem, 4.3vw, 3.8rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "-0.035em",
                color: "#0F172A",
                marginBottom: "20px",
              }}
            >
              Get Instant Loans{" "}
              <span
                style={{
                  display: "block",
                  color: "#00A669",
                  background: "linear-gradient(135deg, #00A669 0%, #007849 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Anytime, Anywhere
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="hero-content-elem"
              style={{
                fontSize: "1.08rem",
                lineHeight: 1.65,
                color: "#475569",
                marginBottom: "32px",
              }}
            >
              LoanHub helps you get quick, transparent, and hassle-free loans tailored to your needs.
              Experience a 100% paperless digital journey with instant disbursal.
            </p>

            {/* 3 Core Value Props Checkmarks */}
            <div
              className="hero-content-elem"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "18px",
                marginBottom: "36px",
              }}
            >
              {/* Feature 1 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "10px",
                    background: "rgba(0, 166, 105, 0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Zap size={18} color="#008753" />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0F172A" }}>
                    Quick Approval
                  </h4>
                  <p style={{ fontSize: "0.8rem", color: "#64748B", marginTop: "2px" }}>
                    In just a few minutes
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "10px",
                    background: "rgba(0, 166, 105, 0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Percent size={18} color="#008753" />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0F172A" }}>
                    Lowest Interest
                  </h4>
                  <p style={{ fontSize: "0.8rem", color: "#64748B", marginTop: "2px" }}>
                    Best rates in the market
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "10px",
                    background: "rgba(0, 166, 105, 0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <ShieldCheck size={18} color="#008753" />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0F172A" }}>
                    100% Secure
                  </h4>
                  <p style={{ fontSize: "0.8rem", color: "#64748B", marginTop: "2px" }}>
                    Bank-level security
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs with animated mouse click & mobile touch indicator */}
            <div
              className="hero-content-elem hero-cta-group"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                flexWrap: "wrap",
                marginBottom: "36px",
                position: "relative",
              }}
            >
              {/* Primary Get Started Button with Animated Mouse Click & Tap Indicator */}
              <div className="hero-btn-click-wrapper" style={{ position: "relative", display: "inline-block" }}>
                <button
                  onClick={onGetStarted || onOpenCalculator}
                  className="btn-primary hero-btn-animated-click"
                  style={{
                    padding: "16px 36px",
                    fontSize: "1.02rem",
                    fontWeight: 800,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  Get Started <ArrowRight size={18} />
                  {/* Subtle inner animated sheen wave */}
                  <span className="hero-btn-click-wave" />
                </button>

                {/* Animated Mouse Pointer & Tap Hand Indicator */}
                <div className="hero-mouse-click-indicator">
                  {/* Tap Ripple Rings */}
                  <span className="hero-tap-ripple ripple-1" />
                  <span className="hero-tap-ripple ripple-2" />

                  {/* Mouse Pointer Cursor Icon */}
                  <div className="hero-cursor-icon">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.36z"
                        fill="#0F172A"
                        stroke="#ffffff"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>

                  {/* Micro Tap Badge */}
                  <div className="hero-tap-badge">
                    <span>Click</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenCalculator}
                className="btn-secondary hero-btn-secondary"
                style={{
                  padding: "16px 32px",
                  fontSize: "1rem",
                  fontWeight: 700,
                }}
              >
                Apply for Loan
              </button>
            </div>

            {/* Social Proof & Ratings */}
            <div
              className="hero-content-elem"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=90&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=90&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=90&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=90&q=80",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Happy LoanHub Customer"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "2.5px solid #ffffff",
                      marginLeft: i > 0 ? "-12px" : "0",
                      objectFit: "cover",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
                    }}
                  />
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0F172A" }}>
                  Trusted by 50,000+ customers
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                  <span style={{ fontSize: "0.8rem", color: "#475569", marginLeft: "4px", fontWeight: 600 }}>
                    4.8 / 5.0 (12,400+ reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Phone Mockup with Floating Badges */}
          <div
            className="phone-mockup-wrapper"
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Background Decorative Rings */}
            <div
              ref={ring1Ref}
              className="floating-ring"
              style={{
                width: "120px",
                height: "120px",
                top: "8%",
                right: "-25px",
                borderColor: "#A7F3D0",
              }}
            />
            <div
              ref={ring2Ref}
              className="floating-ring"
              style={{
                width: "90px",
                height: "90px",
                bottom: "12%",
                left: "-35px",
                borderColor: "#6EE7B7",
                borderStyle: "dashed",
              }}
            />

            {/* Floating Trust Badge 1 (Left) */}
            <div
              ref={floatBadge1}
              style={{
                position: "absolute",
                top: "22%",
                left: "-35px",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(12px)",
                padding: "10px 16px",
                borderRadius: "14px",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 166, 105, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                zIndex: 40,
                whiteSpace: "nowrap",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  background: "#ECFDF5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckCircle2 size={16} color="var(--primary)" />
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0F172A" }}>
                  ₹5 Lakh Approved
                </div>
                <div style={{ fontSize: "0.68rem", color: "#64748B" }}>In just 12 minutes</div>
              </div>
            </div>

            {/* Floating Trust Badge 2 (Right) */}
            <div
              ref={floatBadge2}
              style={{
                position: "absolute",
                bottom: "24%",
                right: "-30px",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(12px)",
                padding: "10px 16px",
                borderRadius: "14px",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 166, 105, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                zIndex: 40,
                whiteSpace: "nowrap",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  background: "#EFF6FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Percent size={16} color="#2563EB" />
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0F172A" }}>
                  From 8.5% p.a.
                </div>
                <div style={{ fontSize: "0.68rem", color: "#64748B" }}>Zero Hidden Charges</div>
              </div>
            </div>

            {/* Dot Matrix Pattern */}
            <div
              style={{
                position: "absolute",
                top: "4%",
                right: "-35px",
                width: "100px",
                height: "100px",
                backgroundImage: "radial-gradient(#00A669 1.8px, transparent 1.8px)",
                backgroundSize: "13px 13px",
                opacity: 0.35,
                pointerEvents: "none",
              }}
            />

            {/* The Phone Chassis */}
            <div ref={phoneRef} className="phone-mockup">
              {/* Dynamic Island */}
              <div className="phone-island">
                <div className="phone-lens" />
              </div>

              {/* Inside Screen Content */}
              <div className="phone-screen">
                {/* Status Bar */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 18px 4px 18px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#0F172A",
                  }}
                >
                  <span>11:31</span>
                  <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                    <span>5G</span>
                    <div
                      style={{
                        width: "18px",
                        height: "9px",
                        border: "1.5px solid #0F172A",
                        borderRadius: "2.5px",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        padding: "1px",
                      }}
                    >
                      <div
                        style={{
                          width: "80%",
                          height: "100%",
                          background: "#00A669",
                          borderRadius: "1px",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* App Top Bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px 16px 6px 16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "6px",
                        background: "var(--primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Zap size={12} color="#fff" />
                    </div>
                    <span style={{ fontSize: "0.88rem", fontWeight: 900, color: "#0F172A" }}>
                      LoanHub
                    </span>
                  </div>
                  {/* Hamburger menu */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px", width: "16px" }}>
                    <span style={{ height: "2px", background: "#334155", borderRadius: "2px" }} />
                    <span style={{ height: "2px", background: "#334155", borderRadius: "2px" }} />
                    <span style={{ height: "2px", background: "#334155", borderRadius: "2px" }} />
                  </div>
                </div>

                {/* Screen Navigation Story Tabs */}
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    padding: "6px 14px 2px 14px",
                  }}
                >
                  {[
                    { label: "1. Offer", screen: 0 },
                    { label: "2. Disbursal", screen: 1 },
                    { label: "3. EMI Pay", screen: 2 },
                  ].map((tab, idx) => {
                    const isCur = phoneScreen === tab.screen;
                    return (
                      <div
                        key={idx}
                        onClick={() => setPhoneScreen(tab.screen as 0 | 1 | 2)}
                        style={{
                          flex: 1,
                          height: "3px",
                          borderRadius: "99px",
                          background: isCur ? "var(--primary)" : "#E2E8F0",
                          cursor: "pointer",
                          transition: "background 0.3s ease",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        {isCur && (
                          <div
                            className="phone-tab-progress"
                            style={{
                              position: "absolute",
                              inset: 0,
                              background: "linear-gradient(90deg, #00A669, #10B981)",
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* SCREEN 0: Offer & Dashboard Overview */}
                {phoneScreen === 0 && (
                  <div className="phone-screen-fade" style={{ display: "flex", flexDirection: "column", flex: 1, position: "relative" }}>
                    {/* Greeting */}
                    <div style={{ padding: "8px 16px 6px 16px" }}>
                      <div style={{ fontSize: "0.98rem", fontWeight: 800, color: "#0F172A" }}>
                        Hello, Rohit 👋
                      </div>
                      <div style={{ fontSize: "0.74rem", color: "#64748B", marginTop: "1px" }}>
                        Pre-approved limit ready for disbursal
                      </div>
                    </div>

                    {/* Green Eligible Loan Card */}
                    <div style={{ padding: "0 14px" }}>
                      <div
                        style={{
                          background: "linear-gradient(135deg, #00A669 0%, #007849 100%)",
                          borderRadius: "18px",
                          padding: "16px",
                          color: "#ffffff",
                          boxShadow: "0 12px 24px -6px rgba(0, 166, 105, 0.45)",
                          position: "relative",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: "0.75rem", opacity: 0.95, fontWeight: 500 }}>
                            Eligible Loan Amount
                          </span>
                          <span
                            style={{
                              fontSize: "0.62rem",
                              background: "rgba(255, 255, 255, 0.28)",
                              padding: "2px 8px",
                              borderRadius: "10px",
                              fontWeight: 700,
                            }}
                          >
                            Pre-approved
                          </span>
                        </div>

                        <div
                          style={{
                            fontSize: "1.75rem",
                            fontWeight: 900,
                            margin: "8px 0 12px 0",
                            letterSpacing: "-0.02em",
                            color: "#ffffff",
                          }}
                        >
                          ₹5,00,000
                        </div>

                        <button
                          onClick={() => setPhoneScreen(1)}
                          style={{
                            width: "100%",
                            background: "#ffffff",
                            color: "#007849",
                            border: "none",
                            borderRadius: "99px",
                            padding: "8px",
                            fontSize: "0.78rem",
                            fontWeight: 800,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            transform: simulatedClick ? "scale(0.95)" : "scale(1)",
                            transition: "transform 0.15s ease",
                          }}
                        >
                          Instant Disbursal <ArrowRight size={13} />
                        </button>

                        {/* Animated Simulated Finger Tap Cursor */}
                        <div
                          className="phone-screen-finger-cursor"
                          style={{
                            position: "absolute",
                            bottom: "8px",
                            right: "30%",
                            pointerEvents: "none",
                            zIndex: 20,
                          }}
                        >
                          <span className={`phone-tap-wave ${simulatedClick ? "active" : ""}`} />
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.36z"
                              fill="#0F172A"
                              stroke="#ffffff"
                              strokeWidth="1.8"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div style={{ padding: "12px 14px 6px 14px" }}>
                      <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", marginBottom: "8px" }}>
                        Quick Actions
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                        {[
                          { label: "Apply Loan", icon: "📝", bg: "#ECFDF5", target: 1 },
                          { label: "EMI Calc", icon: "🧮", bg: "#EFF6FF", target: 2 },
                          { label: "Eligibility", icon: "✓", bg: "#FDF4FF", target: 0 },
                          { label: "Pay EMI", icon: "💳", bg: "#FEF3C7", target: 2 },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => setPhoneScreen(item.target as 0 | 1 | 2)}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              textAlign: "center",
                              cursor: "pointer",
                            }}
                          >
                            <div
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "12px",
                                background: item.bg,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "0.95rem",
                                marginBottom: "4px",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                              }}
                            >
                              {item.icon}
                            </div>
                            <span style={{ fontSize: "0.6rem", color: "#334155", fontWeight: 700, lineHeight: 1.1 }}>
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Credit Score Gauge Card */}
                    <div style={{ padding: "0 14px 12px 14px", marginTop: "auto" }}>
                      <div
                        style={{
                          background: "#ffffff",
                          borderRadius: "16px",
                          padding: "10px 14px",
                          border: "1px solid #E2E8F0",
                          boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
                        }}
                      >
                        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#475569" }}>
                          Your Credit Health
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "4px" }}>
                          <div style={{ position: "relative", width: "80px", height: "44px" }}>
                            <svg viewBox="0 0 100 55" width="80" height="44">
                              <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round" />
                              <path d="M 10 50 A 40 40 0 0 1 76 18" fill="none" stroke="url(#phoneGaugeGrad)" strokeWidth="10" strokeLinecap="round" />
                              <defs>
                                <linearGradient id="phoneGaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#EF4444" />
                                  <stop offset="50%" stopColor="#F59E0B" />
                                  <stop offset="100%" stopColor="#10B981" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#0F172A" }}>
                              782 <span style={{ fontSize: "0.72rem", color: "#94A3B8", fontWeight: 600 }}>/ 900</span>
                            </div>
                            <span style={{ display: "inline-block", background: "#DCFCE7", color: "#15803D", fontSize: "0.62rem", fontWeight: 800, padding: "2px 7px", borderRadius: "6px" }}>
                              Excellent
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREEN 1: Instant Verification & Disbursal Flow */}
                {phoneScreen === 1 && (
                  <div className="phone-screen-fade" style={{ display: "flex", flexDirection: "column", flex: 1, padding: "8px 14px", position: "relative" }}>
                    {/* Status Badge */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                      <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0F172A" }}>
                        Instant Disbursal Flow
                      </span>
                      <span style={{ fontSize: "0.62rem", fontWeight: 800, color: "#007A4D", background: "#DCFCE7", padding: "3px 8px", borderRadius: "99px" }}>
                        ● Live Underwriting
                      </span>
                    </div>

                    {/* Bank A/C Target Card */}
                    <div
                      style={{
                        background: "#F8FAFC",
                        border: "1.5px solid #E2E8F0",
                        borderRadius: "14px",
                        padding: "10px 12px",
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "0.68rem", color: "#64748B" }}>Disbursal Bank Account</div>
                        <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0F172A" }}>
                          HDFC Bank A/C ...1045
                        </div>
                      </div>
                      <span style={{ fontSize: "0.62rem", fontWeight: 800, color: "#00A669", background: "#ECFDF5", padding: "2px 8px", borderRadius: "6px" }}>
                        Matched ✓
                      </span>
                    </div>

                    {/* 3 Verification Checks */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "14px" }}>
                      {[
                        { title: "PAN Card ABCDE1234F", sub: "Verified via NSDL Server", done: true },
                        { title: "UIDAI Aadhaar e-KYC", sub: "Authenticated & Sealed", done: true },
                        { title: "Bank Penny-Drop Test", sub: "₹1 Credited & Name Verified", done: true },
                      ].map((chk, cIdx) => (
                        <div
                          key={cIdx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 10px",
                            background: "#ffffff",
                            border: "1px solid #E2E8F0",
                            borderRadius: "10px",
                            fontSize: "0.72rem",
                          }}
                        >
                          <CheckCircle2 size={16} color="var(--primary)" />
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 800, color: "#0F172A" }}>{chk.title}</div>
                            <div style={{ fontSize: "0.62rem", color: "#64748B" }}>{chk.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Disbursal Progress Animation Card */}
                    <div
                      style={{
                        background: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
                        border: "1px solid #A7F3D0",
                        borderRadius: "14px",
                        padding: "12px",
                        marginTop: "auto",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", fontWeight: 800, color: "#065F46", marginBottom: "6px" }}>
                        <span>Transferring to Account</span>
                        <span>100% Success</span>
                      </div>
                      <div style={{ height: "6px", background: "#A7F3D0", borderRadius: "99px", overflow: "hidden", marginBottom: "8px" }}>
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(90deg, #00A669, #059669)",
                            borderRadius: "99px",
                            animation: "disbursalFill 2s ease forwards",
                          }}
                        />
                      </div>
                      <div style={{ fontSize: "0.82rem", fontWeight: 900, color: "#065F46", textAlign: "center" }}>
                        🎉 ₹5,00,000 Disbursed via IMPS!
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREEN 2: Monthly EMI Repayments & Autopay */}
                {phoneScreen === 2 && (
                  <div className="phone-screen-fade" style={{ display: "flex", flexDirection: "column", flex: 1, padding: "8px 14px", position: "relative" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                      <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0F172A" }}>
                        EMI Repayment Portal
                      </span>
                      <span style={{ fontSize: "0.62rem", fontWeight: 800, color: "#2563EB", background: "#EFF6FF", padding: "3px 8px", borderRadius: "99px" }}>
                        ● Autopay Active
                      </span>
                    </div>

                    {/* Active Loan Summary */}
                    <div
                      style={{
                        background: "#ffffff",
                        border: "1.5px solid #E2E8F0",
                        borderRadius: "16px",
                        padding: "14px",
                        marginBottom: "12px",
                      }}
                    >
                      <div style={{ fontSize: "0.68rem", color: "#64748B" }}>Active Facility</div>
                      <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0F172A", margin: "2px 0 6px 0" }}>
                        Personal Loan - Bajaj Finserv
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #F1F5F9", paddingTop: "8px" }}>
                        <div>
                          <div style={{ fontSize: "0.64rem", color: "#64748B" }}>Next Installment</div>
                          <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "#EF4444" }}>
                            ₹12,007
                          </div>
                        </div>
                        <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#DC2626", background: "#FEE2E2", padding: "4px 8px", borderRadius: "99px" }}>
                          Due in 5 Days
                        </span>
                      </div>
                    </div>

                    {/* Simulated 1-Click Pay Button with Finger Tap */}
                    <div style={{ position: "relative", marginBottom: "12px" }}>
                      <button
                        onClick={() => {
                          setEmiPaid(true);
                          setTimeout(() => setEmiPaid(false), 2500);
                        }}
                        style={{
                          width: "100%",
                          padding: "12px",
                          borderRadius: "12px",
                          background: emiPaid ? "#059669" : "var(--primary)",
                          color: "#ffffff",
                          border: "none",
                          fontSize: "0.82rem",
                          fontWeight: 800,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          boxShadow: "0 4px 12px rgba(0, 166, 105, 0.3)",
                          transform: simulatedClick ? "scale(0.96)" : "scale(1)",
                          transition: "all 0.2s ease",
                        }}
                      >
                        {emiPaid ? (
                          <>✓ Payment Successful • Ref #89102</>
                        ) : (
                          <>Pay EMI Now (₹12,007) →</>
                        )}
                      </button>

                      {/* Animated Pointer Click */}
                      <div
                        className="phone-screen-finger-cursor"
                        style={{
                          position: "absolute",
                          bottom: "4px",
                          right: "25%",
                          pointerEvents: "none",
                          zIndex: 20,
                        }}
                      >
                        <span className={`phone-tap-wave ${simulatedClick ? "active" : ""}`} />
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.36z"
                            fill="#0F172A"
                            stroke="#ffffff"
                            strokeWidth="1.8"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Autopay confirmation */}
                    <div
                      style={{
                        background: "#F8FAFC",
                        borderRadius: "12px",
                        padding: "8px 10px",
                        fontSize: "0.68rem",
                        color: "#475569",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginTop: "auto",
                      }}
                    >
                      <CheckCircle2 size={14} color="var(--primary)" />
                      <span>NACH Mandate configured on HDFC A/C ...1045</span>
                    </div>
                  </div>
                )}
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
