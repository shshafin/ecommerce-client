import Header from "@/components/ui/Header";
import TopCategories from "@/components/modules/home/category/TopCategories";
import Navbar from "@/components/ui/navbar/Navbar";
import MainContent from "@/components/modules/home/hero-section/MainContent";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="max-w-7xl mx-auto py-2">
        <MainContent />
        <TopCategories />
      </main>
    </div>
  );
}
