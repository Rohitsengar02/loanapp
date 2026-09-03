"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import LoanTypes from "@/components/LoanTypes";
import EligibilityChecker from "@/components/EligibilityChecker";
import HowItWorks from "@/components/HowItWorks";
import AppDownload from "@/components/AppDownload";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import EligibilityModal from "@/components/EligibilityModal";
import RegisterPage from "@/components/RegisterPage";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const [view, setView] = useState<"landing" | "register" | "dashboard">("landing");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState("Personal Loan");

  const handleOpenCalculator = (loanType?: string) => {
    if (loanType) setSelectedLoan(loanType);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // 1. FULL REGISTER PAGE VIEW (No pop-up, all steps on page)
  if (view === "register") {
    return (
      <SmoothScroll>
        <CustomCursor />
        <RegisterPage
          onBackToHome={() => {
            setView("landing");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onGoToDashboard={() => {
            setView("dashboard");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </SmoothScroll>
    );
  }

  // 2. FULL CUSTOMER DASHBOARD VIEW (Identical to reference screenshot)
  if (view === "dashboard") {
    return (
      <SmoothScroll>
        <CustomCursor />
        <Dashboard
          onBackToHome={() => {
            setView("landing");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onOpenCalculator={() => handleOpenCalculator()}
        />

        {/* Loan Calculator Modal accessible from Dashboard */}
        <EligibilityModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          defaultLoanType={selectedLoan}
        />
      </SmoothScroll>
    );
  }

  // 3. LANDING PAGE VIEW
  return (
    <SmoothScroll>
      <CustomCursor />

      <main style={{ minHeight: "100vh", position: "relative" }}>
        {/* Navigation */}
        <Navbar
          onOpenCalculator={() => handleOpenCalculator()}
          onOpenRegistration={() => {
            setView("register");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onGoToDashboard={() => {
            setView("dashboard");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        {/* Hero Section with "Get Started" CTA */}
        <Hero
          onOpenCalculator={() => handleOpenCalculator()}
          onGetStarted={() => {
            setView("register");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        {/* Why Choose Us - 6 Value Proposition Cards */}
        <WhyChooseUs />

        {/* Loan Types - 6 Enriched Loan Categories with Rates */}
        <LoanTypes onOpenCalculator={handleOpenCalculator} />

        {/* Eligibility Checker - Interactive Dial & Salary Slider */}
        <EligibilityChecker onOpenCalculator={handleOpenCalculator} />

        {/* How It Works - 3 Step Flow */}
        <HowItWorks />

        {/* Mobile App Download Banner */}
        <AppDownload />

        {/* Numbers That Build Trust */}
        <StatsCounter />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Accordion Section */}
        <FaqSection />

        {/* Bottom CTA Banner */}
        <CtaBanner
          onOpenCalculator={() => {
            setView("register");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        {/* Complete Footer */}
        <Footer />
      </main>

      {/* Interactive Loan Eligibility & EMI Calculator Modal */}
      <EligibilityModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultLoanType={selectedLoan}
      />
    </SmoothScroll>
  );
}
