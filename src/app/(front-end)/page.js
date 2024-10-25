import Hero from "@/components/frontend/Hero";
import HomeCategory from "@/components/frontend/HomeCategory";
import HomeProduct from "@/components/frontend/HomeProduct";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HomeCategory />
      <HomeProduct />
    </div>
  );
}
