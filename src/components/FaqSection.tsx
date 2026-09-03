"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the minimum eligibility criteria for a LoanHub loan?",
      a: "Any Indian citizen aged 21 to 58 years with a minimum monthly net income of ₹15,000 (salaried or self-employed) is eligible. We require basic identity proof (PAN & Aadhaar) and recent bank statement verification.",
    },
    {
      q: "How fast is the loan approved and disbursed into my bank account?",
      a: "Our automated credit assessment approves eligible borrowers within 60 seconds. Once your digital agreement is signed (e-Sign), funds are electronically transferred via IMPS/NEFT directly into your registered bank account within 15 to 30 minutes.",
    },
    {
      q: "Does checking my eligibility affect my CIBIL credit score?",
      a: "No! Our eligibility check uses a soft bureau inquiry that has zero impact on your credit score. You can freely check your eligible loan quantum and calculate EMIs without any negative credit footprint.",
    },
    {
      q: "Are there any hidden charges or foreclosure penalties?",
      a: "LoanHub operates with 100% pricing transparency. All processing fees (typically 1.5% to 2.5%) and interest rates are clearly itemized upfront in your loan sanction letter. Prepayments and full foreclosure are allowed with zero penalty after 6 completed EMIs.",
    },
    {
      q: "What documents are required to complete the digital application?",
      a: "You only need your PAN card, Aadhaar card for instant DigiLocker e-KYC, and 3 months of net-banking verified bank statements. The entire process is 100% digital with zero physical paperwork.",
    },
    {
      q: "Can I customize my monthly EMI and repayment tenure?",
      a: "Yes! You can choose flexible repayment tenures ranging from 6 months up to 84 months. Use our built-in Loan EMI Calculator to adjust your desired principal and tenure to match your exact monthly budget.",
    },
  ];

  return (
    <section
      id="faq"
      style={{
        padding: "90px 0 100px 0",
        background: "#ffffff",
        position: "relative",
      }}
    >
      <div className="container" style={{ maxWidth: "860px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="section-tag">
            <Sparkles size={14} /> FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="section-title">
            Got questions? We've got answers
          </h2>
          <p className="section-subtitle">
            Find everything you need to know about our instant loan approval process, interest rates,
            and digital verification.
          </p>
        </div>

        {/* Accordion list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  background: isOpen ? "#F9FDFB" : "#ffffff",
                  border: isOpen ? "1.5px solid var(--primary)" : "1px solid #E2E8F0",
                  borderRadius: "18px",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  boxShadow: isOpen ? "0 8px 24px rgba(0, 166, 105, 0.08)" : "0 2px 8px rgba(0,0,0,0.02)",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.02rem",
                      fontWeight: 700,
                      color: isOpen ? "var(--primary-dark)" : "#0F172A",
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isOpen ? "var(--primary-light)" : "#F1F5F9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "transform 0.25s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown size={18} color={isOpen ? "var(--primary)" : "#64748B"} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px 24px",
                      fontSize: "0.92rem",
                      lineHeight: 1.65,
                      color: "#475569",
                      borderTop: "1px dashed rgba(0, 166, 105, 0.2)",
                      paddingTop: "14px",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
