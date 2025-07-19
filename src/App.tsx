import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TagList from "./components/TagList";

const tags = [
  "NFT",
  "Metaverse",
  "Sustainable",
  "Sonder",
  "FOMO",
  "Ghosting",
];

export default function App() {
  return (
    <main className="bg-[#121417] min-h-screen text-white">
      <Header />
      <HeroSection />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}
