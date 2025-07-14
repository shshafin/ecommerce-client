import TopCategories from "@/components/modules/home/category/TopCategories";
import MainContent from "@/components/modules/home/hero-section/MainContent";
import CategoryProducts from "@/components/modules/home/category/CategoryProducts";
import { NewsletterSubscriber } from "@/components/ui/news-letter/news-letter";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto py-2">
      <MainContent />
      <TopCategories />
      <CategoryProducts name={"New Arrivals"} />
      <CategoryProducts name={"Coming Soon"} />
      <CategoryProducts name={"Best Sellers"} />
      <CategoryProducts name={"Trending Now"} />
      <CategoryProducts name={"Special Offers"} />
      <CategoryProducts name={"Top Rated"} />
      <NewsletterSubscriber />
    </main>
  );
}
