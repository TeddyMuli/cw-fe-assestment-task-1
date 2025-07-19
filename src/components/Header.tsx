import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#121417] border-b border-[#9EABB8]">
      <div className="flex items-center gap-2">
        <img src="/task1/logo.png" alt="Logo" className="w-10 h-10" />
        <div className="text-white font-semibold text-lg">Wortionary</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-[2px] items-center p-3 bg-[#293038] w-[160px] h-[40px] rounded-xl">
          <Search className="text-gray-400 text-sm" />
          <Input
            type="text"
            value=""
            placeholder="Search"
            className="text-[#9EABB8] border-none focus:ring-0 rounded-full placeholder:text-[16px] placeholder:text-[#9EABB8]"
          />
        </div>
        <Avatar style={{ width: "32px", height: "32px" }}>
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
