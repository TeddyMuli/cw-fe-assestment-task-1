import { Badge } from "./ui/badge";

interface props {
  title: string
  tags: string[]
}

export default function TagList({ title, tags }: props) {
  return (
    <div className="mt-8 px-6 max-w-5xl mx-auto">
      <div className="text-white text-lg font-semibold mb-4">{title}</div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-[#293038] text-[#9EABB8] hover:bg-gray-700 text-[14px] cursor-pointer h-[32px]"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
