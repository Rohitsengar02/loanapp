"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterPage from "@/components/RegisterPage";
import Dashboard from "@/components/Dashboard";

export default function RegisterRoute() {
  const [view, setView] = useState<"register" | "dashboard">("register");
  const router = useRouter();

  if (view === "dashboard") {
    return (
      <Dashboard
        onBackToHome={() => router.push("/")}
        onOpenCalculator={() => {}}
      />
    );
  }

  return (
    <RegisterPage
      onBackToHome={() => router.push("/")}
      onGoToDashboard={() => setView("dashboard")}
    />
  );
}
