import SearchBar from "./SearchBar";

export default function HeroSection() {
  const onSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <div className="relative w-[90%] lg:w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8">
      <img src="/task1/hero-bg.png" className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl max-w-[720px] font-bold text-white">
          Search for words, phrases and meanings
        </h1>
        <SearchBar initialValue="" onSearch={onSearch} />
      </div>
    </div>
  );
}
