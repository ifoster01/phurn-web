"use client";

import { useEffect } from "react";
import { Navbar } from './(components)/navbar';
import { Hero } from './(components)/hero';
import { Features } from './(components)/features';
import { About } from './(components)/about';
import { MobileApp } from './(components)/mobile-app';
import { FAQ } from './(components)/faq';
import { Contact } from './(components)/contact';
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PhurnLogo from "~/assets/logos/phurn.svg"

export default function LandingPage() {

  useEffect(() => {
    // Check if there's a scroll target in sessionStorage
    const scrollTarget = sessionStorage.getItem("scrollTarget");
    if (scrollTarget) {
      // Clear the scroll target
      sessionStorage.removeItem("scrollTarget");
      // Wait for the page to fully render
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-row items-center justify-center space-x-1">
        <Image src={PhurnLogo} alt="Phurn" width={40} height={40} />
        <h1 className="text-2xl font-bold text-[#ea3a00]">PHURN</h1>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Legal</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
      {/* <Navbar />
      <Hero />
      <Features />
      <About />
      <MobileApp />
      <FAQ />
      <Contact /> */}
    </main>
  );
}