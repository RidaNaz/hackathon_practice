import Hero from "@/components/Hero";
import NewArrival from "@/components/landing page/Arrival";
import Category from "@/components/landing page/Category";
import Explore from "@/components/landing page/Explore";
import ImageSection from "@/components/landing page/Image";
import FlashSales from "@/components/landing page/Sales";
import Selling from "@/components/landing page/Selling";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="px-12 lg:px-24 xl:px-32">
        <Hero />
        <FlashSales />
        <Category />
        <Selling />
        <ImageSection />
        <Explore />
        <NewArrival />
      </main>
    </div>
  );
}
