"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ShieldCheck, Phone } from "lucide-react";

interface NavbarProps {
  onOpenCalculator?: () => void;
  onOpenRegistration?: () => void;
  onGoToDashboard?: () => void;
}

export default function Navbar({
  onOpenCalculator,
  onOpenRegistration,
  onGoToDashboard,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", active: true },
    { label: "Features", href: "#features" },
    { label: "Loan Types", href: "#loan-types" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Eligibility", href: "#eligibility" },
    { label: "FAQ", href: "#faq" },
    { label: "Dashboard", href: "#dashboard", isDashboard: true },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          background: isScrolled
            ? "rgba(255, 255, 255, 0.94)"
            : "rgba(255, 255, 255, 0.82)",
          backdropFilter: "blur(16px)",
          borderBottom: isScrolled
            ? "1px solid rgba(0, 166, 105, 0.16)"
            : "1px solid rgba(226, 232, 240, 0.7)",
          boxShadow: isScrolled ? "0 4px 24px rgba(0, 0, 0, 0.05)" : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "76px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #00A669 0%, #007A4D 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 16px rgba(0, 166, 105, 0.35)",
              }}
            >
              <svg
                width="22"
                height="22"
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
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 900,
                  color: "#0F172A",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                Loan<span style={{ color: "var(--primary)" }}>Hub</span>
              </span>
              <span
                style={{
                  fontSize: "0.68rem",
                  color: "#64748B",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                Smart Loans, Simple Process
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link, idx) => (
              <div
                key={idx}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {link.isDashboard ? (
                  <button
                    onClick={onGoToDashboard}
                    style={{
                      background: "rgba(0, 166, 105, 0.08)",
                      border: "1px solid rgba(0, 166, 105, 0.2)",
                      borderRadius: "99px",
                      padding: "5px 14px",
                      fontSize: "0.85rem",
                      fontWeight: 800,
                      color: "var(--primary-dark)",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>Dashboard</span>
                    <span style={{ fontSize: "0.68rem", background: "var(--primary)", color: "#fff", padding: "1px 6px", borderRadius: "99px" }}>
                      App
                    </span>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: link.active ? 700 : 500,
                      color: link.active ? "var(--primary)" : "#334155",
                      padding: "6px 0",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = link.active ? "var(--primary)" : "#334155")
                    }
                  >
                    {link.label}
                  </Link>
                )}
                {link.active && !link.isDashboard && (
                  <span
                    style={{
                      width: "22px",
                      height: "3px",
                      borderRadius: "99px",
                      backgroundColor: "var(--primary)",
                      position: "absolute",
                      bottom: "-2px",
                    }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: "18px" }}
          >
            <button
              onClick={onGoToDashboard || onOpenCalculator}
              style={{
                background: "none",
                border: "none",
                fontSize: "0.92rem",
                fontWeight: 600,
                color: "#1E293B",
                cursor: "pointer",
                padding: "8px 12px",
                borderRadius: "8px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--primary)";
                e.currentTarget.style.background = "rgba(0, 166, 105, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#1E293B";
                e.currentTarget.style.background = "none";
              }}
            >
              Log In
            </button>

            <button
              onClick={onOpenRegistration || onOpenCalculator}
              className="btn-primary"
              style={{
                padding: "10px 24px",
                fontSize: "0.9rem",
                borderRadius: "999px",
              }}
            >
              Get Started <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              padding: "8px",
              cursor: "pointer",
              color: "#0F172A",
              borderRadius: "8px",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer"
          style={{
            position: "fixed",
            top: "76px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            zIndex: 999,
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            overflowY: "auto",
            animation: "modalSlideUp 0.25s ease-out",
          }}
        >
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.1rem",
                fontWeight: link.active ? 700 : 600,
                color: link.active ? "var(--primary)" : "#0F172A",
                padding: "12px 14px",
                borderRadius: "10px",
                background: link.active ? "var(--primary-light)" : "transparent",
                borderBottom: "1px solid #F1F5F9",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{link.label}</span>
              {link.active && <span style={{ color: "var(--primary)", fontSize: "0.8rem" }}>●</span>}
            </Link>
          ))}

          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                (onOpenRegistration || onOpenCalculator)?.();
              }}
              className="btn-primary"
              style={{ width: "100%", padding: "14px", fontSize: "1rem" }}
            >
              Get Started <ArrowRight size={18} />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                (onGoToDashboard || onOpenCalculator)?.();
              }}
              className="btn-secondary"
              style={{ width: "100%", padding: "14px", fontSize: "1rem" }}
            >
              Dashboard / Log In
            </button>
          </div>
        </div>
      )}
    </>
  );
}
