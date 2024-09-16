"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebaseConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingPage from "../loading";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/SignIn");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  if (!user) {
    return null; // or a loading component
  }

  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
