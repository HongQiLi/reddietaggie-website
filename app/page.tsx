import Hero from "./components/Hero";
import Footer from "./components/Footer";
import DollFits from "./components/PhoneCases"; // 导入DollFits卡片组件
import PhoneCases from "./components/PhoneCases"; // 导入PhoneCases卡片组件
import CharmsShine from "./components/PhoneCases"; // 导入CharmsShine卡片组件
import SnowdayPicks from "./components/PhoneCases"; // 导入SnowdayPicks卡片组件

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 text-neutral-900">
      <Hero />
      <DollFits />
      <PhoneCases />
      <CharmsShine />
      <SnowdayPicks />
      <Footer />
    </main>
  );
}
