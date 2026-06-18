import Navbar from "@/components/Navbar";
import VisitorIntelligence from "@/components/VisitorIntelligence";
import MissionControl from "@/components/MissionControl";
import RoastLab from "@/components/RoastLab";
import FutureSimulator from "@/components/FutureSimulator";
import TheVault from "@/components/TheVault";
import LiveBrain from "@/components/LiveBrain";
import JourneyMap from "@/components/JourneyMap";
import InsightsBlog from "@/components/InsightsBlog";
import RealTimeValue from "@/components/RealTimeValue";
import AchievementUniverse from "@/components/AchievementUniverse";
import HireMeOrDont from "@/components/HireMeOrDont";
import ChooseAdventure from "@/components/ChooseAdventure";
import ContactSection from "@/components/ContactSection";
import FinalSection from "@/components/FinalSection";
import EasterEgg from "@/components/EasterEgg";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      <VisitorIntelligence />
      <MissionControl />
      <RoastLab />
      <FutureSimulator />
      <TheVault />
      <FeaturedInspiration />
      <LiveBrain />
      <RealTimeValue />
      <JourneyMap />
      <InsightsBlog />
      <AchievementUniverse />
      <HireMeOrDont />
      <ChooseAdventure />
      <ContactSection />
      <FinalSection />
      <EasterEgg />
      <Footer />
    </div>
  );
}
