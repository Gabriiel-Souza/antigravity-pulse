import { Navbar } from "@/features/landing-page/components/Navbar";
import { HeroSection } from "@/features/landing-page/components/HeroSection";
import { LineupSection } from "@/features/landing-page/components/LineupSection";
import { StagesSection } from "@/features/landing-page/components/StagesSection";
import { TicketsSection } from "@/features/landing-page/components/TicketsSection";
import { Footer } from "@/features/landing-page/components/Footer";
import { AudioPlayer } from "@/features/landing-page/components/AudioPlayer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LineupSection />
      <StagesSection />
      <TicketsSection />
      <Footer />
      <AudioPlayer />
    </main>
  );
}
