"use client";

import { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  FilePlus,
  CheckCircle,
  FileText,
  CreditCard,
  Receipt,
  FileCheck2,
  FolderOpen,
  Gift,
  Headphones,
  Bell,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Wallet,
  Calendar,
  Briefcase,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Percent,
  Upload,
  Clock,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

import ApplyLoanView from "./dashboard/ApplyLoanView";
import CheckEligibilityView from "./dashboard/CheckEligibilityView";
import MyApplicationsView from "./dashboard/MyApplicationsView";
import MyLoansView from "./dashboard/MyLoansView";
import EmiPaymentsView from "./dashboard/EmiPaymentsView";
import StatementsView from "./dashboard/StatementsView";
import CreditProfileView from "./dashboard/CreditProfileView";
import DocumentsView from "./dashboard/DocumentsView";
import OffersView from "./dashboard/OffersView";
import SupportView from "./dashboard/SupportView";

interface DashboardProps {
  onBackToHome: () => void;
  onOpenCalculator?: () => void;
}

export default function Dashboard({ onBackToHome, onOpenCalculator }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [kpiSlide, setKpiSlide] = useState(0);
  const [spendingView, setSpendingView] = useState<"trend" | "breakdown">("trend");
  const [activeBarIndex, setActiveBarIndex] = useState(5); // Default to May

  // Touch swipe handling for KPI Carousel
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Sidebar mouse wheel and trackpad scroll refs
  const sidebarNavRef = useRef<HTMLElement>(null);
  const sidebarAsideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const asideEl = sidebarAsideRef.current;
    if (!asideEl) return;

    const handleWheel = (e: WheelEvent) => {
      const navEl = sidebarNavRef.current;
      const target = navEl || asideEl;
      target.scrollBy({
        top: e.deltaY,
        behavior: "auto",
      });
    };

    asideEl.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      asideEl.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const sidebarNav = [
    { label: "Dashboard", icon: <LayoutDashboard size={19} /> },
    { label: "Apply for Loan", icon: <FilePlus size={19} /> },
    { label: "Check Eligibility", icon: <CheckCircle size={19} /> },
    { label: "My Applications", icon: <FileText size={19} /> },
    { label: "My Loans", icon: <Briefcase size={19} /> },
    { label: "EMI Payments", icon: <CreditCard size={19} /> },
    { label: "Statements", icon: <Receipt size={19} /> },
    { label: "Credit Profile", icon: <FileCheck2 size={19} /> },
    { label: "Documents", icon: <FolderOpen size={19} /> },
    { label: "Offers", icon: <Gift size={19} /> },
    { label: "Support", icon: <Headphones size={19} /> },
  ];

  const kpiStats = [
    {
      title: "Total Outstanding",
      value: "₹2,45,678",
      sub: "View Details →",
      subColor: "var(--primary)",
      icon: <Wallet size={22} color="var(--primary)" />,
      bg: "#ECFDF5",
      isAction: true,
      tag: "Active",
    },
    {
      title: "Total EMIs Due",
      value: "₹8,561",
      sub: "Due in next 30 days",
      subColor: "#EF4444",
      icon: <Calendar size={22} color="#7C3AED" />,
      bg: "#FAF5FF",
      tag: "Upcoming",
    },
    {
      title: "Total Loans",
      value: "3",
      sub: "Active Loans",
      subColor: "#64748B",
      icon: <Briefcase size={22} color="#D97706" />,
      bg: "#FFFBEB",
      tag: "Healthy",
    },
    {
      title: "Total Amount Paid",
      value: "₹1,84,320",
      sub: "View Statement →",
      subColor: "#2563EB",
      icon: <CreditCard size={22} color="#2563EB" />,
      bg: "#EFF6FF",
      isAction: true,
      tag: "On Track",
    },
  ];

  // Carousel touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && kpiSlide < kpiStats.length - 1) {
        setKpiSlide(kpiSlide + 1);
      } else if (diff < 0 && kpiSlide > 0) {
        setKpiSlide(kpiSlide - 1);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#F8FAFC",
        fontFamily: "var(--font-family)",
        color: "#0F172A",
        position: "relative",
      }}
    >
      {/* Mobile Drawer Backdrop */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(4px)",
            zIndex: 99,
          }}
        />
      )}

      {/* SIDEBAR (Desktop & Mobile Drawer) */}
      <aside
        ref={sidebarAsideRef}
        className={`dashboard-sidebar ${mobileSidebarOpen ? "open" : ""}`}
        style={{
          width: "260px",
          background: "#ffffff",
          borderRight: "1px solid #E2E8F0",
          display: "flex",
          flexDirection: "column",
          position: "sticky",
          top: 0,
          height: "100vh",
          maxHeight: "100vh",
          overflowY: "auto",
          overscrollBehavior: "contain",
          zIndex: 100,
          flexShrink: 0,
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Sidebar Header / Logo */}
        <div
          style={{
            padding: "20px 22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #F1F5F9",
            position: "sticky",
            top: 0,
            background: "#ffffff",
            zIndex: 10,
          }}
        >
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
                boxShadow: "0 4px 12px rgba(0, 166, 105, 0.3)",
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
              <div style={{ fontSize: "0.65rem", color: "#64748B", fontWeight: 600 }}>
                Smart Loans, Simple Process
              </div>
            </div>
          </div>

          {/* Mobile close button */}
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="mobile-close-btn"
            style={{
              background: "#F1F5F9",
              border: "none",
              borderRadius: "8px",
              padding: "6px",
              cursor: "pointer",
              color: "#64748B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Navigation Items */}
        <nav
          ref={sidebarNavRef}
          className="dashboard-sidebar-nav"
          style={{
            padding: "16px 14px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            overscrollBehavior: "contain",
          }}
        >
          {sidebarNav.map((item, idx) => {
            const isActive = activeTab === item.label;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(item.label);
                  setMobileSidebarOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "11px 14px",
                  borderRadius: "12px",
                  background: isActive ? "#E8F8F0" : "transparent",
                  color: isActive ? "#008753" : "#475569",
                  fontWeight: isActive ? 800 : 600,
                  fontSize: "0.88rem",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ color: isActive ? "var(--primary)" : "#64748B" }}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Refer & Earn Promo Card placed inside scrollable nav */}
          <div style={{ marginTop: "16px", padding: "4px 0" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
                border: "1px solid #BBF7D0",
                borderRadius: "18px",
                padding: "16px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <Gift size={18} color="var(--primary)" />
                <span style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>
                  Refer & Earn
                </span>
              </div>
              <p style={{ fontSize: "0.74rem", color: "#475569", lineHeight: 1.4, marginBottom: "12px" }}>
                Refer your friends and earn exciting rewards up to ₹2,500 cash!
              </p>

              <button
                onClick={() => alert("Referral link copied! Share with friends to earn ₹2,500 on their loan disbursal.")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#007A4D",
                  background: "#ffffff",
                  padding: "6px 14px",
                  borderRadius: "99px",
                  border: "1px solid rgba(0, 166, 105, 0.3)",
                  cursor: "pointer",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                }}
              >
                Refer Now <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, width: "100%" }}>
        {/* Responsive Top Header Navbar */}
        <header
          className="dashboard-header"
          style={{
            background: "#ffffff",
            borderBottom: "1px solid #E2E8F0",
            padding: "16px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            position: "sticky",
            top: 0,
            zIndex: 90,
          }}
        >
          {/* Welcome greeting & Mobile menu button */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="mobile-menu-toggle"
              style={{
                display: "none",
                background: "#F1F5F9",
                border: "none",
                borderRadius: "8px",
                padding: "8px",
                cursor: "pointer",
                color: "#0F172A",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>

            <div style={{ minWidth: 0 }}>
              <h2
                className="dashboard-welcome-title"
                style={{
                  fontSize: "clamp(1.15rem, 3.2vw, 1.35rem)",
                  fontWeight: 900,
                  color: "#0F172A",
                  lineHeight: 1.2,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {activeTab === "Dashboard" ? "Welcome back, Rohit 👋" : activeTab}
              </h2>
              <p className="dashboard-welcome-sub" style={{ fontSize: "0.8rem", color: "#64748B", marginTop: "1px", whiteSpace: "nowrap" }}>
                {activeTab === "Dashboard"
                  ? "Here's what's happening with your loans today."
                  : `LoanHub Borrower Portal • ${activeTab}`}
              </p>
            </div>
          </div>

          {/* Right Header Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
            {/* Search Input (Hidden on mobile) */}
            <div
              className="dashboard-search"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Search
                size={16}
                color="#94A3B8"
                style={{ position: "absolute", left: "12px", pointerEvents: "none" }}
              />
              <input
                type="text"
                placeholder="Search something..."
                style={{
                  padding: "9px 14px 9px 36px",
                  borderRadius: "10px",
                  border: "1px solid #E2E8F0",
                  fontSize: "0.85rem",
                  background: "#F8FAFC",
                  outline: "none",
                  width: "200px",
                }}
              />
            </div>

            {/* Notification Bell */}
            <div
              style={{
                position: "relative",
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                border: "1px solid #E2E8F0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                background: "#ffffff",
                flexShrink: 0,
              }}
              onClick={() => alert("You have 3 notifications: Upcoming EMI on May 12, Pre-approved loan offer of ₹5 Lakh, and April statement ready.")}
            >
              <Bell size={18} color="#475569" />
              <span
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  width: "16px",
                  height: "16px",
                  background: "#EF4444",
                  borderRadius: "50%",
                  fontSize: "0.62rem",
                  color: "#ffffff",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                3
              </span>
            </div>

            {/* User Profile */}
            <div
              className="dashboard-user-profile"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 8px 4px 4px",
                borderRadius: "12px",
                border: "1px solid #E2E8F0",
                background: "#ffffff",
                cursor: "pointer",
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=90&q=80"
                  alt="Rohit Kumar"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "8px",
                    height: "8px",
                    background: "#10B981",
                    borderRadius: "50%",
                    border: "1.5px solid #ffffff",
                  }}
                />
              </div>

              <div className="dashboard-user-info" style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0F172A", lineHeight: 1.1 }}>
                  Rohit Kumar
                </span>
                <span style={{ fontSize: "0.65rem", color: "#10B981", fontWeight: 700 }}>
                  Verified ✓
                </span>
              </div>
              <ChevronDown size={14} color="#64748B" className="dashboard-user-chevron" />
            </div>

            {/* Quick Exit to Website Button */}
            <button
              onClick={onBackToHome}
              className="dashboard-website-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "10px",
                background: "#F1F5F9",
                border: "1px solid #CBD5E1",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#334155",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              <ExternalLink size={14} />
              <span className="dashboard-website-text">Website</span>
            </button>
          </div>
        </header>

        {/* DASHBOARD CONTENT BODY */}
        <div className="dashboard-body" style={{ padding: "28px 32px", overflowY: "auto", flex: 1 }}>
          {/* TAB 2: Apply for Loan */}
          {activeTab === "Apply for Loan" && (
            <ApplyLoanView onGoToDashboard={() => setActiveTab("Dashboard")} />
          )}

          {/* TAB 3: Check Eligibility */}
          {activeTab === "Check Eligibility" && (
            <CheckEligibilityView onApplyNow={() => setActiveTab("Apply for Loan")} />
          )}

          {/* TAB 4: My Applications */}
          {activeTab === "My Applications" && (
            <MyApplicationsView onApplyNew={() => setActiveTab("Apply for Loan")} />
          )}

          {/* TAB 5: My Loans */}
          {activeTab === "My Loans" && (
            <MyLoansView
              onPayEmi={() => setActiveTab("EMI Payments")}
              onOpenCalculator={() => onOpenCalculator?.()}
            />
          )}

          {/* TAB 6: EMI Payments */}
          {activeTab === "EMI Payments" && (
            <EmiPaymentsView />
          )}

          {/* TAB 7: Statements */}
          {activeTab === "Statements" && (
            <StatementsView />
          )}

          {/* TAB 8: Credit Profile */}
          {activeTab === "Credit Profile" && (
            <CreditProfileView />
          )}

          {/* TAB 9: Documents */}
          {activeTab === "Documents" && (
            <DocumentsView />
          )}

          {/* TAB 10: Offers */}
          {activeTab === "Offers" && (
            <OffersView onClaimLoanOffer={() => setActiveTab("Apply for Loan")} />
          )}

          {/* TAB 11: Support */}
          {activeTab === "Support" && (
            <SupportView />
          )}

          {/* TAB 1: Main Dashboard Overview */}
          {activeTab === "Dashboard" && (
            <>
              {/* ROW 1: 4 Top KPI Metric Cards (Desktop Grid & Mobile Animated Carousel) */}
              
              {/* Desktop Grid (Hidden on screens <= 768px) */}
              <div className="dashboard-kpi-desktop-grid">
                {kpiStats.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      if (item.title.includes("Outstanding") || item.title.includes("Loans")) setActiveTab("My Loans");
                      else if (item.title.includes("EMIs")) setActiveTab("EMI Payments");
                      else if (item.title.includes("Paid")) setActiveTab("Statements");
                    }}
                    className="clean-card"
                    style={{
                      padding: "22px 24px",
                      borderRadius: "18px",
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      cursor: "pointer",
                    }}
                  >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: item.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <span style={{ fontSize: "0.78rem", color: "#64748B", fontWeight: 600 }}>
                    {item.title}
                  </span>
                  <div style={{ fontSize: "1.55rem", fontWeight: 900, color: "#0F172A", margin: "3px 0 6px 0" }}>
                    {item.value}
                  </div>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: item.subColor,
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      cursor: item.isAction ? "pointer" : "default",
                    }}
                  >
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Animated Carousel for Stats Cards (Active on screens <= 768px) */}
          <div
            className="dashboard-kpi-mobile-carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Carousel Header with Navigation Arrows */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
                padding: "0 4px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Financial Overview
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    padding: "2px 8px",
                    borderRadius: "99px",
                    background: "#E8F8F0",
                    color: "var(--primary-dark)",
                  }}
                >
                  {kpiSlide + 1} / {kpiStats.length}
                </span>
              </div>

              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  onClick={() => setKpiSlide(Math.max(0, kpiSlide - 1))}
                  disabled={kpiSlide === 0}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "1px solid #CBD5E1",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: kpiSlide === 0 ? "not-allowed" : "pointer",
                    opacity: kpiSlide === 0 ? 0.4 : 1,
                  }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setKpiSlide(Math.min(kpiStats.length - 1, kpiSlide + 1))}
                  disabled={kpiSlide === kpiStats.length - 1}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "1px solid #CBD5E1",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: kpiSlide === kpiStats.length - 1 ? "not-allowed" : "pointer",
                    opacity: kpiSlide === kpiStats.length - 1 ? 0.4 : 1,
                  }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Slider Track with animated transition */}
            <div style={{ overflow: "hidden", borderRadius: "18px", width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: `translateX(-${kpiSlide * 100}%)`,
                  width: "100%",
                }}
              >
                {kpiStats.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      minWidth: "100%",
                      width: "100%",
                      boxSizing: "border-box",
                      padding: "0 2px",
                    }}
                  >
                    <div
                      className="clean-card"
                      style={{
                        padding: "20px 22px",
                        borderRadius: "18px",
                        background: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        boxShadow: "0 8px 24px rgba(0, 166, 105, 0.08)",
                        border: "1.5px solid #E6ECE8",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "14px",
                            background: item.bg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                          }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <span style={{ fontSize: "0.78rem", color: "#64748B", fontWeight: 600 }}>
                            {item.title}
                          </span>
                          <div style={{ fontSize: "1.65rem", fontWeight: 900, color: "#0F172A", margin: "2px 0 4px 0" }}>
                            {item.value}
                          </div>
                          <span
                            style={{
                              fontSize: "0.78rem",
                              color: item.subColor,
                              fontWeight: 700,
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            {item.sub}
                          </span>
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 800,
                          background: item.bg,
                          color: "#0F172A",
                          padding: "4px 10px",
                          borderRadius: "99px",
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Pagination Dots */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
                marginTop: "12px",
              }}
            >
              {kpiStats.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setKpiSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: idx === kpiSlide ? "22px" : "8px",
                    height: "8px",
                    borderRadius: "99px",
                    background: idx === kpiSlide ? "var(--primary)" : "#CBD5E1",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ROW 2: Active Loan Overview (Left) & Quick Actions / Credit Score (Right) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.45fr 1fr",
              gap: "24px",
              marginBottom: "28px",
            }}
            className="dashboard-two-col"
          >
            {/* Left Card: Active Loan Overview */}
            <div
              className="clean-card"
              style={{
                padding: "24px",
                borderRadius: "20px",
                background: "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0F172A" }}>
                  Active Loan Overview
                </h3>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#64748B",
                    background: "#F1F5F9",
                    padding: "4px 12px",
                    borderRadius: "99px",
                  }}
                >
                  2 Active Loans
                </span>
              </div>

              {/* Body: Donut Progress & Loan Details */}
              <div className="active-loan-body" style={{ display: "flex", alignItems: "center", gap: "26px", marginBottom: "20px" }}>
                {/* Circular Donut Progress (63% Completed) */}
                <div style={{ position: "relative", width: "115px", height: "115px", flexShrink: 0 }}>
                  <svg viewBox="0 0 100 100" width="115" height="115">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#00A669"
                      strokeWidth="10"
                      strokeDasharray="251.2"
                      strokeDashoffset="92.9"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ fontSize: "1.15rem", fontWeight: 900, color: "#0F172A" }}>
                      63%
                    </span>
                    <span style={{ fontSize: "0.62rem", color: "#64748B", fontWeight: 600 }}>
                      Completed
                    </span>
                  </div>
                </div>

                {/* Loan Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A" }}>
                      Personal Loan
                    </h4>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        color: "#166534",
                        background: "#DCFCE7",
                        padding: "2px 10px",
                        borderRadius: "99px",
                      }}
                    >
                      Active
                    </span>
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#64748B", marginTop: "2px" }}>
                    Bajaj Finserv
                  </div>

                  {/* 3 Metrics */}
                  <div
                    className="loan-metrics-grid"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "12px",
                      marginTop: "14px",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "0.68rem", color: "#64748B" }}>Outstanding</div>
                      <div style={{ fontSize: "0.98rem", fontWeight: 800, color: "#0F172A" }}>
                        ₹1,45,678
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.68rem", color: "#64748B" }}>Next EMI</div>
                      <div style={{ fontSize: "0.98rem", fontWeight: 800, color: "#0F172A" }}>
                        ₹12,007
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.68rem", color: "#64748B" }}>Due Date</div>
                      <div style={{ fontSize: "0.98rem", fontWeight: 800, color: "#0F172A" }}>
                        12 May 2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar and Subtext */}
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    background: "#E2E8F0",
                    borderRadius: "99px",
                    overflow: "hidden",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "63%",
                      height: "100%",
                      background: "linear-gradient(90deg, #00A669 0%, #10B981 100%)",
                      borderRadius: "99px",
                    }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#64748B", fontWeight: 600 }}>
                  <span>You've paid 17 of 24 EMIs</span>
                  <span>7 EMIs Remaining</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="active-loan-actions" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button
                  onClick={() => alert("Redirecting to payment gateway for ₹12,007 EMI payment...")}
                  className="btn-primary"
                  style={{
                    padding: "10px 22px",
                    fontSize: "0.85rem",
                    borderRadius: "10px",
                  }}
                >
                  Pay EMI
                </button>
                <button
                  onClick={() => alert("Showing details for Bajaj Finserv Personal Loan: Sanctioned ₹2,00,000 at 10.5% p.a.")}
                  style={{
                    padding: "10px 20px",
                    fontSize: "0.85rem",
                    borderRadius: "10px",
                    border: "1px solid #CBD5E1",
                    background: "#ffffff",
                    color: "#334155",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Loan Details
                </button>
                <button
                  onClick={() => alert("Opening EMI Repayment Amortization Schedule...")}
                  style={{
                    padding: "10px 20px",
                    fontSize: "0.85rem",
                    borderRadius: "10px",
                    border: "1px solid #CBD5E1",
                    background: "#ffffff",
                    color: "#334155",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  EMI Schedule
                </button>
              </div>
            </div>

            {/* Right Column: Quick Actions + Credit Score */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Quick Actions */}
              <div
                className="clean-card"
                style={{
                  padding: "18px 20px",
                  borderRadius: "20px",
                  background: "#ffffff",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <h3 style={{ fontSize: "0.98rem", fontWeight: 800, color: "#0F172A" }}>
                    Quick Actions
                  </h3>
                  <span style={{ fontSize: "0.76rem", color: "var(--primary)", fontWeight: 700, cursor: "pointer" }}>
                    View All
                  </span>
                </div>

                <div
                  className="quick-actions-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: "6px",
                    textAlign: "center",
                  }}
                >
                  {[
                    { label: "Apply Loan", icon: <FilePlus size={18} color="#00A669" />, bg: "#ECFDF5" },
                    { label: "Check Elig.", icon: <CheckCircle size={18} color="#7C3AED" />, bg: "#F5F3FF" },
                    { label: "EMI Calc", icon: <Percent size={18} color="#D97706" />, bg: "#FFFBEB" },
                    { label: "Pay EMI", icon: <CreditCard size={18} color="#2563EB" />, bg: "#EFF6FF" },
                    { label: "Upload Docs", icon: <Upload size={18} color="#059669" />, bg: "#ECFDF5" },
                  ].map((action, aIdx) => (
                    <div
                      key={aIdx}
                      onClick={() => {
                        if (action.label === "EMI Calc") onOpenCalculator?.();
                        else alert(`Action opened: ${action.label}`);
                      }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "12px",
                          background: action.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "6px",
                          transition: "transform 0.2s",
                        }}
                      >
                        {action.icon}
                      </div>
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#334155", lineHeight: 1.15 }}>
                        {action.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Your Credit Score */}
              <div
                className="clean-card"
                style={{
                  padding: "18px 20px",
                  borderRadius: "20px",
                  background: "#ffffff",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3 style={{ fontSize: "0.98rem", fontWeight: 800, color: "#0F172A" }}>
                    Your Credit Score
                  </h3>
                  <span style={{ fontSize: "0.7rem", color: "#64748B" }}>
                    Updated 02 May 2024
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "10px" }}>
                  <span style={{ fontSize: "1.9rem", fontWeight: 900, color: "#0F172A" }}>
                    782
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "#94A3B8", fontWeight: 700 }}>
                    / 900
                  </span>
                  <span
                    style={{
                      background: "#DCFCE7",
                      color: "#15803D",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      padding: "2px 8px",
                      borderRadius: "6px",
                      marginLeft: "4px",
                    }}
                  >
                    Excellent
                  </span>
                </div>

                {/* Rainbow Score Bar */}
                <div style={{ position: "relative", marginBottom: "10px", padding: "4px 0" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "8px",
                      borderRadius: "99px",
                      background: "linear-gradient(90deg, #EF4444 0%, #F59E0B 35%, #10B981 75%, #059669 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "2px",
                      left: "86%",
                      transform: "translateX(-50%)",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#ffffff",
                      border: "3px solid #059669",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                    }}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ fontSize: "0.74rem", color: "#475569" }}>
                    Better than 82% of borrowers.
                  </span>
                  <span
                    onClick={() => alert("Opening full credit analysis report...")}
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 800,
                      color: "var(--primary)",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "2px",
                    }}
                  >
                    Full Report <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3: Recent Activity, Spending Summary, Upcoming EMIs & Offers */}
          {/* ROW 3: Recent Activity & Spending Summary (2 Sections on Desktop) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              marginBottom: "28px",
            }}
            className="dashboard-two-col"
          >
            {/* Col 1: Recent Activity */}
            <div
              className="clean-card"
              style={{
                padding: "22px",
                borderRadius: "20px",
                background: "#ffffff",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A" }}>
                  Recent Activity
                </h3>
                <span style={{ fontSize: "0.76rem", color: "var(--primary)", fontWeight: 700, cursor: "pointer" }}>
                  View All
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  {
                    title: "EMI Payment Successful",
                    sub: "Paid ₹12,007 for Personal Loan",
                    amount: "- ₹12,007",
                    icon: <CheckCircle size={16} color="var(--primary)" />,
                    iconBg: "#ECFDF5",
                  },
                  {
                    title: "Loan Disbursed",
                    sub: "Personal Loan from Bajaj Finserv",
                    amount: "+ ₹2,00,000",
                    icon: <ArrowUpRight size={16} color="#2563EB" />,
                    iconBg: "#EFF6FF",
                  },
                  {
                    title: "Application Approved",
                    sub: "Your Home Loan application approved",
                    amount: "+ ₹50,00,000",
                    icon: <CheckCircle size={16} color="var(--primary)" />,
                    iconBg: "#ECFDF5",
                  },
                  {
                    title: "Document Uploaded",
                    sub: "PAN Card uploaded successfully",
                    amount: "›",
                    icon: <FileText size={16} color="#7C3AED" />,
                    iconBg: "#F5F3FF",
                  },
                ].map((act, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
                      <div
                        style={{
                          width: "34px",
                          height: "34px",
                          borderRadius: "10px",
                          background: act.iconBg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {act.icon}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {act.title}
                        </div>
                        <div style={{ fontSize: "0.7rem", color: "#64748B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{act.sub}</div>
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: act.amount === "›" ? "1.2rem" : "0.82rem",
                        fontWeight: 800,
                        color: act.amount.startsWith("+") || act.amount.startsWith("-") ? "#16A34A" : "#64748B",
                        flexShrink: 0,
                        marginLeft: "8px",
                      }}
                    >
                      {act.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2: Spending Summary with Animated Linear Gradient Bar Graph */}
            <div
              className="clean-card"
              style={{
                padding: "22px",
                borderRadius: "20px",
                background: "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              {/* Header with Title and Mode Switcher */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", gap: "10px", flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A", lineHeight: 1.2 }}>
                    Spending Summary
                  </h3>
                  <span style={{ fontSize: "0.72rem", color: "#64748B" }}>
                    Track monthly outflow & EMIs
                  </span>
                </div>

                {/* View Switcher: Bar Trend vs Breakdown */}
                <div style={{ display: "flex", background: "#F1F5F9", padding: "3px", borderRadius: "10px", gap: "2px" }}>
                  <button
                    onClick={() => setSpendingView("trend")}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "8px",
                      border: "none",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      background: spendingView === "trend" ? "#ffffff" : "transparent",
                      color: spendingView === "trend" ? "var(--primary-dark)" : "#64748B",
                      boxShadow: spendingView === "trend" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    Bars
                  </button>
                  <button
                    onClick={() => setSpendingView("breakdown")}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "8px",
                      border: "none",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      background: spendingView === "breakdown" ? "#ffffff" : "transparent",
                      color: spendingView === "breakdown" ? "var(--primary-dark)" : "#64748B",
                      boxShadow: spendingView === "breakdown" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    Donut
                  </button>
                </div>
              </div>

              {/* Total Spending Metric Banner */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "14px", padding: "0 2px" }}>
                <div>
                  <div style={{ fontSize: "1.55rem", fontWeight: 900, color: "#0F172A", lineHeight: 1 }}>
                    ₹28,450
                  </div>
                  <span style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "2px", display: "inline-block" }}>
                    Total Spent in May (₹12,007 in EMIs)
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    color: "#059669",
                    background: "#ECFDF5",
                    padding: "3px 8px",
                    borderRadius: "99px",
                    border: "1px solid #A7F3D0",
                  }}
                >
                  -14% vs Apr
                </span>
              </div>

              {/* VIEW 1: ANIMATED LINEAR GRADIENT BAR GRAPH */}
              {spendingView === "trend" ? (
                <div style={{ marginBottom: "12px" }}>
                  {/* Bar Graph Canvas */}
                  <div
                    style={{
                      height: "140px",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      gap: "8px",
                      padding: "16px 8px 0 8px",
                      position: "relative",
                      borderBottom: "1.5px solid #F1F5F9",
                    }}
                  >
                    {[
                      { month: "Dec", amount: "₹18,500", height: "55%", emi: "₹12,007" },
                      { month: "Jan", amount: "₹22,100", height: "68%", emi: "₹12,007" },
                      { month: "Feb", amount: "₹16,400", height: "50%", emi: "₹12,007" },
                      { month: "Mar", amount: "₹24,800", height: "76%", emi: "₹12,007" },
                      { month: "Apr", amount: "₹19,200", height: "60%", emi: "₹12,007" },
                      { month: "May", amount: "₹28,450", height: "94%", emi: "₹12,007", isCurrent: true },
                    ].map((item, bIdx) => {
                      const isActive = activeBarIndex === bIdx;
                      return (
                        <div
                          key={bIdx}
                          onClick={() => setActiveBarIndex(bIdx)}
                          onMouseEnter={() => setActiveBarIndex(bIdx)}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            flex: 1,
                            height: "100%",
                            justifyContent: "flex-end",
                            cursor: "pointer",
                            position: "relative",
                          }}
                        >
                          {/* Floating Tooltip above Active Bar */}
                          {isActive && (
                            <div
                              style={{
                                position: "absolute",
                                top: "-28px",
                                background: "#0F172A",
                                color: "#ffffff",
                                padding: "3px 8px",
                                borderRadius: "8px",
                                fontSize: "0.7rem",
                                fontWeight: 800,
                                whiteSpace: "nowrap",
                                zIndex: 10,
                                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                animation: "tooltipPop 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                              }}
                            >
                              {item.amount}
                              {/* Little triangle arrow */}
                              <div
                                style={{
                                  position: "absolute",
                                  bottom: "-4px",
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  width: 0,
                                  height: 0,
                                  borderLeft: "4px solid transparent",
                                  borderRight: "4px solid transparent",
                                  borderTop: "4px solid #0F172A",
                                }}
                              />
                            </div>
                          )}

                          {/* Bar Pill Container Track */}
                          <div
                            style={{
                              width: "100%",
                              maxWidth: "34px",
                              height: "100%",
                              background: isActive ? "rgba(0, 166, 105, 0.08)" : "#F8FAFC",
                              borderRadius: "14px 14px 4px 4px",
                              display: "flex",
                              alignItems: "flex-end",
                              overflow: "hidden",
                              padding: "2px",
                              boxSizing: "border-box",
                              transition: "background 0.2s",
                            }}
                          >
                            {/* Inner Bar with Linear Gradient & Rise Animation */}
                            <div
                              style={{
                                width: "100%",
                                height: item.height,
                                borderRadius: "12px 12px 2px 2px",
                                background: isActive
                                  ? "linear-gradient(180deg, #00F59B 0%, #00A669 45%, #00683F 100%)"
                                  : "linear-gradient(180deg, #6EE7B7 0%, #10B981 55%, #047857 100%)",
                                boxShadow: isActive
                                  ? "0 4px 16px rgba(0, 166, 105, 0.45), inset 0 1px 1px rgba(255,255,255,0.6)"
                                  : "inset 0 1px 1px rgba(255,255,255,0.4)",
                                transformOrigin: "bottom",
                                animation: `barRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${bIdx * 0.08}s both`,
                                transition: "all 0.25s ease",
                              }}
                            />
                          </div>

                          {/* Month Label below bar */}
                          <span
                            style={{
                              fontSize: "0.72rem",
                              fontWeight: isActive ? 800 : 600,
                              color: isActive ? "var(--primary-dark)" : "#64748B",
                              marginTop: "8px",
                              transition: "color 0.2s",
                            }}
                          >
                            {item.month}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Category Pills Breakdown */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                      marginTop: "14px",
                    }}
                  >
                    {[
                      { label: "EMI Payments", pct: "42%", val: "₹12,007", color: "#00A669", bg: "#ECFDF5" },
                      { label: "Shopping", pct: "24%", val: "₹6,800", color: "#F59E0B", bg: "#FFFBEB" },
                      { label: "Bills & Utils", pct: "15%", val: "₹4,250", color: "#7C3AED", bg: "#FAF5FF" },
                      { label: "Others", pct: "19%", val: "₹5,393", color: "#3B82F6", bg: "#EFF6FF" },
                    ].map((cat, cIdx) => (
                      <div
                        key={cIdx}
                        style={{
                          background: cat.bg,
                          borderRadius: "10px",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: "0.72rem",
                        }}
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#334155", fontWeight: 700 }}>
                          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: cat.color }} />
                          {cat.label}
                        </span>
                        <strong style={{ color: "#0F172A" }}>{cat.pct}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* VIEW 2: ORIGINAL DONUT BREAKDOWN VIEW */
                <div className="spending-summary-body" style={{ display: "flex", alignItems: "center", gap: "16px", margin: "8px 0" }}>
                  <div style={{ position: "relative", width: "105px", height: "105px", flexShrink: 0 }}>
                    <svg viewBox="0 0 100 100" width="105" height="105">
                      <circle cx="50" cy="50" r="38" fill="none" stroke="#00A669" strokeWidth="12" strokeDasharray="100.5 238.7" strokeDashoffset="0" transform="rotate(-90 50 50)" />
                      <circle cx="50" cy="50" r="38" fill="none" stroke="#F59E0B" strokeWidth="12" strokeDasharray="57.4 238.7" strokeDashoffset="-100.5" transform="rotate(-90 50 50)" />
                      <circle cx="50" cy="50" r="38" fill="none" stroke="#7C3AED" strokeWidth="12" strokeDasharray="35.9 238.7" strokeDashoffset="-157.9" transform="rotate(-90 50 50)" />
                      <circle cx="50" cy="50" r="38" fill="none" stroke="#3B82F6" strokeWidth="12" strokeDasharray="45.3 238.7" strokeDashoffset="-193.8" transform="rotate(-90 50 50)" />
                    </svg>
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "0.58rem", color: "#64748B" }}>Total Spent</span>
                      <span style={{ fontSize: "0.92rem", fontWeight: 900, color: "#0F172A" }}>
                        ₹28,450
                      </span>
                    </div>
                  </div>

                  {/* Legend List */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1, fontSize: "0.72rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00A669" }} />
                        EMI Payments
                      </span>
                      <strong>42%</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F59E0B" }} />
                        Shopping
                      </span>
                      <strong>24%</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#7C3AED" }} />
                        Bills
                      </span>
                      <strong>15%</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#3B82F6" }} />
                        Others
                      </span>
                      <strong>19%</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom motivational banner */}
              <div
                style={{
                  background: "#ECFDF5",
                  borderRadius: "10px",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.72rem",
                  color: "#065F46",
                  fontWeight: 700,
                  marginTop: "8px",
                }}
              >
                <TrendingUp size={15} color="var(--primary)" />
                <span>Keep it up! 14% lower than last month • On track.</span>
              </div>
            </div>
          </div>

          {/* ROW 4: Upcoming EMIs & Exclusive Offers (Moved Down as Requested) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1fr",
              gap: "24px",
              marginBottom: "28px",
            }}
            className="dashboard-two-col"
          >
            {/* Upcoming EMIs Card */}
            <div
              className="clean-card"
              style={{
                padding: "22px 24px",
                borderRadius: "20px",
                background: "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <h3 style={{ fontSize: "0.98rem", fontWeight: 800, color: "#0F172A" }}>
                    Upcoming EMIs
                  </h3>
                  <span style={{ fontSize: "0.74rem", color: "var(--primary)", fontWeight: 700, cursor: "pointer" }}>
                    View All
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {/* Item 1 */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "40px",
                          borderRadius: "10px",
                          background: "#F1F5F9",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.58rem",
                          fontWeight: 800,
                          color: "#64748B",
                        }}
                      >
                        <span style={{ color: "#00A669" }}>MAY</span>
                        <span style={{ fontSize: "0.95rem", color: "#0F172A" }}>12</span>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#0F172A" }}>
                          Personal Loan - Bajaj
                        </div>
                        <div style={{ fontSize: "0.7rem", color: "#EF4444", fontWeight: 700 }}>
                          ₹12,007 • Due 5 days
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => alert("Paying ₹12,007 for Bajaj Finserv Personal Loan")}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "99px",
                        border: "1.5px solid var(--primary)",
                        background: "#ffffff",
                        color: "var(--primary)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Pay Now
                    </button>
                  </div>

                  {/* Item 2 */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "40px",
                          borderRadius: "10px",
                          background: "#F1F5F9",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.58rem",
                          fontWeight: 800,
                          color: "#64748B",
                        }}
                      >
                        <span style={{ color: "#3B82F6" }}>MAY</span>
                        <span style={{ fontSize: "0.95rem", color: "#0F172A" }}>20</span>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#0F172A" }}>
                          Home Loan - HDFC
                        </div>
                        <div style={{ fontSize: "0.7rem", color: "#64748B" }}>
                          ₹8,561 • Due 13 days
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => alert("Paying ₹8,561 for HDFC Home Loan")}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "99px",
                        border: "1.5px solid var(--primary)",
                        background: "#ffffff",
                        color: "var(--primary)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Exclusive Offers */}
              <div
                className="clean-card"
                style={{
                  padding: "16px 18px",
                  borderRadius: "20px",
                  background: "#ffffff",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0F172A" }}>
                    Exclusive Offers
                  </h3>
                  <span style={{ fontSize: "0.72rem", color: "var(--primary)", fontWeight: 700, cursor: "pointer" }}>
                    View All
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderRadius: "14px",
                    background: "#FFF1F2",
                    border: "1px solid #FFE4E6",
                    gap: "8px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "#E11D48",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        fontWeight: 800,
                        fontSize: "0.9rem",
                        flexShrink: 0,
                      }}
                    >
                      %
                    </div>
                    <div>
                      <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0F172A" }}>
                        Pre-approved Loan
                      </div>
                      <div style={{ fontSize: "0.68rem", color: "#64748B" }}>
                        Get up to ₹5 Lakh!
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenCalculator?.()}
                    style={{
                      padding: "5px 10px",
                      borderRadius: "99px",
                      border: "1px solid #E2E8F0",
                      background: "#ffffff",
                      color: "#0F172A",
                      fontSize: "0.68rem",
                      fontWeight: 800,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Check →
                  </button>
                </div>
              </div>
            </div>

          {/* BOTTOM PROMOTIONAL BANNER */}
          <div
            className="dashboard-promo-banner"
            style={{
              background: "linear-gradient(135deg, #EFFBF4 0%, #D8F3E5 100%)",
              border: "1.5px solid #BBF7D0",
              borderRadius: "22px",
              padding: "24px 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: "#0F172A", marginBottom: "4px" }}>
                You are eligible for a higher loan amount!
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#475569", marginBottom: "14px" }}>
                Check your pre-approved eligibility and get up to ₹5,00,000 instantly.
              </p>

              <button
                onClick={() => setActiveTab("Check Eligibility")}
                className="btn-primary"
                style={{
                  padding: "10px 24px",
                  fontSize: "0.88rem",
                  borderRadius: "99px",
                }}
              >
                Check Eligibility <ArrowRight size={15} />
              </button>
            </div>

            {/* Money Bags Illustration */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg width="120" height="70" viewBox="0 0 160 90" fill="none">
                <ellipse cx="40" cy="70" rx="20" ry="8" fill="#EAB308" />
                <ellipse cx="40" cy="65" rx="20" ry="8" fill="#FACC15" />
                <ellipse cx="40" cy="60" rx="20" ry="8" fill="#FEF08A" />
                <path d="M90 75C65 75 60 55 70 38C75 30 78 28 85 28L95 28C102 28 105 30 110 38C120 55 115 75 90 75Z" fill="#10B981" />
                <path d="M78 28C78 25 82 22 90 22C98 22 102 25 102 28Z" fill="#047857" />
                <text x="84" y="55" fill="#ffffff" fontSize="18" fontWeight="bold">₹</text>
                <path d="M125 78C110 78 105 62 112 48C115 42 118 40 123 40L127 40C132 40 135 42 138 48C145 62 140 78 125 78Z" fill="#059669" />
                <text x="120" y="62" fill="#ffffff" fontSize="14" fontWeight="bold">₹</text>
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
      </div>

      <style jsx>{`
        @keyframes barRise {
          0% {
            transform: scaleY(0);
            opacity: 0.3;
          }
          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes tooltipPop {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Desktop grid for KPI cards */
        .dashboard-kpi-desktop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 28px;
        }

        /* Mobile carousel container - hidden by default on desktop */
        .dashboard-kpi-mobile-carousel {
          display: none;
          margin-bottom: 24px;
        }

        @media (max-width: 768px) {
          .dashboard-kpi-desktop-grid {
            display: none !important;
          }
          .dashboard-kpi-mobile-carousel {
            display: block !important;
          }
          .dashboard-header {
            padding: 12px 16px !important;
          }
          .dashboard-welcome-sub {
            display: none !important;
          }
          .dashboard-search {
            display: none !important;
          }
          .dashboard-user-info {
            display: none !important;
          }
          .dashboard-user-chevron {
            display: none !important;
          }
          .dashboard-website-text {
            display: none !important;
          }
          .dashboard-website-btn {
            padding: 8px 10px !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
          .dashboard-body {
            padding: 16px 14px !important;
          }
          .dashboard-two-col {
            grid-template-columns: 1fr !important;
          }
          .dashboard-three-col {
            grid-template-columns: 1fr !important;
          }
          .active-loan-body {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }
          .active-loan-actions {
            flex-direction: column !important;
          }
          .active-loan-actions button {
            width: 100% !important;
            text-align: center !important;
          }
          .spending-summary-body {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .dashboard-promo-banner {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 20px 16px !important;
          }
        }

        /* Custom sleek scrollbar for sidebar mouse wheel and trackpad */
        .dashboard-sidebar,
        .dashboard-sidebar-nav {
          overflow-y: auto !important;
          overscroll-behavior: contain !important;
          scrollbar-width: thin !important;
          scrollbar-color: rgba(0, 166, 105, 0.35) transparent !important;
          -webkit-overflow-scrolling: touch !important;
        }

        .dashboard-sidebar::-webkit-scrollbar,
        .dashboard-sidebar-nav::-webkit-scrollbar {
          width: 5px !important;
        }

        .dashboard-sidebar::-webkit-scrollbar-track,
        .dashboard-sidebar-nav::-webkit-scrollbar-track {
          background: transparent !important;
        }

        .dashboard-sidebar::-webkit-scrollbar-thumb,
        .dashboard-sidebar-nav::-webkit-scrollbar-thumb {
          background: rgba(0, 166, 105, 0.25) !important;
          border-radius: 99px !important;
        }

        .dashboard-sidebar::-webkit-scrollbar-thumb:hover,
        .dashboard-sidebar-nav::-webkit-scrollbar-thumb:hover {
          background: var(--primary) !important;
        }

        @media (max-width: 900px) {
          .dashboard-sidebar {
            position: fixed !important;
            top: 0 !important;
            bottom: 0 !important;
            left: 0 !important;
            transform: translateX(-100%);
            box-shadow: 0 0 35px rgba(0, 0, 0, 0.35) !important;
            z-index: 1000 !important;
          }
          .dashboard-sidebar.open {
            transform: translateX(0) !important;
          }
          .mobile-close-btn {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
