"use client";

import { useState } from "react";
import {
  FolderOpen,
  FileCheck2,
  Upload,
  Download,
  CheckCircle2,
  ShieldCheck,
  Eye,
  Trash2,
  FileText,
  AlertCircle,
} from "lucide-react";

export default function DocumentsView() {
  const [docs, setDocs] = useState([
    {
      name: "Permanent Account Number (PAN Card)",
      type: "Tax Identity",
      number: "ABCDE1234F",
      uploaded: "03 May 2024",
      status: "Verified via NSDL",
      size: "1.2 MB (PDF)",
      verified: true,
    },
    {
      name: "Aadhaar e-KYC Identity",
      type: "UIDAI DigiLocker Paperless",
      number: "XXXX XXXX 9874",
      uploaded: "03 May 2024",
      status: "Authenticated",
      size: "2.4 MB (PDF)",
      verified: true,
    },
    {
      name: "Bank Account Statement (6 Months)",
      type: "HDFC Bank Operating Account",
      number: "A/C ...1045",
      uploaded: "03 May 2024",
      status: "Penny-Drop Matched",
      size: "4.8 MB (PDF)",
      verified: true,
    },
    {
      name: "Latest Salary Slips (Q1 2024)",
      type: "Employment Proof",
      number: "3 Months (Feb, Mar, Apr)",
      uploaded: "03 May 2024",
      status: "Verified",
      size: "1.9 MB (PDF)",
      verified: true,
    },
    {
      name: "Income Tax Form 16 (Part A & B)",
      type: "ITR Verification",
      number: "Assessment Year 2023-24",
      uploaded: "03 May 2024",
      status: "Verified",
      size: "3.1 MB (PDF)",
      verified: true,
    },
  ]);

  const [isUploading, setIsUploading] = useState(false);

  const handleUploadNew = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      alert("New document successfully encrypted and added to your secure LoanHub vault!");
    }, 1400);
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1 style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.85rem)", fontWeight: 900, color: "#0F172A" }}>
            Secure Document Vault
          </h1>
          <p style={{ fontSize: "0.88rem", color: "#64748B", marginTop: "4px" }}>
            Bank-grade 256-bit encrypted KYC vault shared seamlessly with loan underwriters.
          </p>
        </div>

        <button
          onClick={handleUploadNew}
          disabled={isUploading}
          className="btn-primary"
          style={{ padding: "10px 22px", borderRadius: "12px", fontSize: "0.85rem" }}
        >
          <Upload size={16} /> {isUploading ? "Encrypting & Uploading..." : "Upload New Document"}
        </button>
      </div>

      {/* Documents List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {docs.map((d, idx) => (
          <div
            key={idx}
            className="clean-card"
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              padding: "20px 22px",
              border: "1.5px solid #E2E8F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: "260px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "#ECFDF5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary)",
                  flexShrink: 0,
                }}
              >
                <FileCheck2 size={22} />
              </div>
              <div>
                <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0F172A" }}>
                  {d.name}
                </div>
                <div style={{ fontSize: "0.74rem", color: "#64748B", marginTop: "2px" }}>
                  {d.type} • <strong>{d.number}</strong> • {d.size}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: "#059669",
                  background: "#DCFCE7",
                  padding: "4px 12px",
                  borderRadius: "99px",
                }}
              >
                ✓ {d.status}
              </span>

              <button
                onClick={() => alert(`Previewing verified document: ${d.name}`)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "7px 12px",
                  borderRadius: "8px",
                  border: "1.5px solid #CBD5E1",
                  background: "#ffffff",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#334155",
                  cursor: "pointer",
                }}
              >
                <Eye size={14} /> Preview
              </button>

              <button
                onClick={() => alert(`Downloading ${d.name} from vault...`)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "7px 12px",
                  borderRadius: "8px",
                  border: "1.5px solid #CBD5E1",
                  background: "#ffffff",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#334155",
                  cursor: "pointer",
                }}
              >
                <Download size={14} /> Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
