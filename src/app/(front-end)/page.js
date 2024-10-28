import Hero from "@/components/frontend/Hero";
import HomeCategory from "@/components/frontend/HomeCategory";
import HomeProduct from "@/components/frontend/HomeProduct";
import CommunityBlog from "@/components/frontend/CommunityBlog";
import getData from "@/lib/getData";

export default async function Home() {
  const categories = await getData("categories");
  return (
    <div className="min-h-screen">
      <Hero />
      <HomeCategory />
      {categories.map((item, i) => {
        return (
          <div className="" key={i}>
            <HomeProduct item={item} />
          </div>
        );
      })}
      <CommunityBlog />
    </div>
  );
}
