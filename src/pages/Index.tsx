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
import ClientTestimonials from "@/components/ClientTestimonials";
import ContactSection from "@/components/ContactSection";
import FinalSection from "@/components/FinalSection";
import EasterEgg from "@/components/EasterEgg";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function Index() {
  return (
    <div className="min-h-screen bg-background noise">
      <Seo
        title="Low Key — Digital Growth Architect Portfolio"
        description="Enter the mind of Low Key: an interactive OS-style portfolio with an AI roast lab, client future simulator, case-file vault and live strategy brain for growth brands."
        path="/"
      />
      <Navbar />
      <VisitorIntelligence />
      <MissionControl />
      <RoastLab />
      <FutureSimulator />
      <TheVault />
      <LiveBrain />
      <RealTimeValue />
      <JourneyMap />
      <InsightsBlog />
      <AchievementUniverse />
      <HireMeOrDont />
      <ClientTestimonials />
      <ChooseAdventure />
      <ContactSection />
      <FinalSection />
      <EasterEgg />
      <Footer />
    </div>
  );
}
