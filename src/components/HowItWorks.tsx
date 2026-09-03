"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowDown, UserCheck, FileUp, CheckCircle, Clock } from "lucide-react";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const steps = stepsRef.current;
    if (!section || !steps) return;

    const stepCards = steps.querySelectorAll(".step-item");

    gsap.fromTo(
      stepCards,
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const steps = [
    {
      stepNumber: "1",
      title: "Check Eligibility",
      desc: "Enter basic details like PAN and monthly income to instantly view your pre-approved loan quota.",
      time: "Takes 2 Minutes",
      icon: <UserCheck size={24} color="#ffffff" />,
      iconBg: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    },
    {
      stepNumber: "2",
      title: "Apply Online",
      desc: "Select tenure and verify your KYC securely with 100% paperless digital verification.",
      time: "Paperless KYC",
      icon: <FileUp size={24} color="#ffffff" />,
      iconBg: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    },
    {
      stepNumber: "3",
      title: "Get Disbursed",
      desc: "Digital e-Sign agreement and enjoy direct NEFT/IMPS bank transfer within minutes.",
      time: "Instant Disbursal",
      icon: <CheckCircle size={24} color="#ffffff" />,
      iconBg: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      style={{
        padding: "100px 0",
        background: "#FAFCFA",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "65px" }}>
          <span className="section-tag">HOW IT WORKS</span>
          <h2 className="section-title">
            Get your loan in 3 simple steps
          </h2>
          <p className="section-subtitle">
            Say goodbye to endless physical documentation and branch queues.
            Our lightning-fast lending pipeline puts money into your account in minutes.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div
          ref={stepsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="step-item gradient-card"
              style={{
                background: "#ffffff",
                padding: "36px 30px",
                borderRadius: "26px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 10px 25px -4px rgba(0,0,0,0.04)",
                border: "1.5px solid #E6ECE8",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Giant Faded Step Number */}
              <span
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "15px",
                  fontSize: "6.5rem",
                  fontWeight: 900,
                  color: "#F1F6F3",
                  lineHeight: 1,
                  userSelect: "none",
                  zIndex: 0,
                  letterSpacing: "-0.05em",
                }}
              >
                {step.stepNumber}
              </span>

              <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Top Row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "22px" }}>
                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "16px",
                      background: step.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 18px rgba(0, 166, 105, 0.25)",
                    }}
                  >
                    {step.icon}
                  </div>

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "99px",
                      background: "#F1F5F9",
                      color: "#475569",
                    }}
                  >
                    <Clock size={12} /> {step.time}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "#0F172A",
                    marginBottom: "10px",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "#475569",
                    flex: 1,
                  }}
                >
                  {step.desc}
                </p>

                <div
                  style={{
                    marginTop: "24px",
                    paddingTop: "16px",
                    borderTop: "1px solid #F1F5F9",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Step 0{step.stepNumber} • Zero Collateral
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
