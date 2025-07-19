import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function SearchBar({
  initialValue,
  onSearch,
}: {
  initialValue: string;
  onSearch: (search: string) => void;
}) {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    onSearch(innerValue);
  }, [innerValue, onSearch]);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  return (
    <div className="flex items-center bg-[#1C2126] px-2 rounded-xl w-full max-w-[480px] h-[64px] mt-6 shadow-lg">
      <Search className="text-gray-400" />
      <Input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-[#9EABB8] placeholder:text-[16px] focus:ring-0"
      />
      <Button className="bg-[#1A80E5] hover:bg-blue-500 text-white ml-4 text-[16px] w-[96px] h-[48px]" >
        Search
      </Button>
    </div>
  );
}
