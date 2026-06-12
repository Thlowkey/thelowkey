import Navbar from "@/components/Navbar";
import MissionControl from "@/components/MissionControl";
import FutureSimulator from "@/components/FutureSimulator";
import TheVault from "@/components/TheVault";
import LiveBrain from "@/components/LiveBrain";
import JourneyMap from "@/components/JourneyMap";
import RealTimeValue from "@/components/RealTimeValue";
import AchievementUniverse from "@/components/AchievementUniverse";
import HireMeOrDont from "@/components/HireMeOrDont";
import ChooseAdventure from "@/components/ChooseAdventure";
import FinalSection from "@/components/FinalSection";
import EasterEgg from "@/components/EasterEgg";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      <MissionControl />
      <FutureSimulator />
      <TheVault />
      <LiveBrain />
      <RealTimeValue />
      <JourneyMap />
      <AchievementUniverse />
      <HireMeOrDont />
      <ChooseAdventure />
      <FinalSection />
      <EasterEgg />
      <Footer />
    </div>
  );
}
