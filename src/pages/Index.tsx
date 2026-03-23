import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Background3D = lazy(() => import("@/components/Background3D"));

export default function Index() {
  return (
    <div className="relative min-h-screen">
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
