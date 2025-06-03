import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 text-neutral-900">
      <Hero />
      <Footer />
    </main>
  );
}
