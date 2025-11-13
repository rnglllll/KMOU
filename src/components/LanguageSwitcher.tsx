"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const isKor = pathname.startsWith("/kor");
  const isEng = pathname.startsWith("/eng");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg border border-black/5 backdrop-blur">
        <div className="flex items-center gap-1 text-xs font-medium">
          <Link
            href="/kor"
            className={`
              px-2 py-1 rounded-full hover:bg-[#0553fe]/10 text-[#0553fe]
              ${isKor ? "font-bold" : "font-normal"}
            `}
          >
            KOR
          </Link>

          <span className="text-gray-300">|</span>

          <Link
            href="/eng"
            className={`
              px-2 py-1 rounded-full hover:bg-[#0553fe]/10 text-[#0553fe]
              ${isEng ? "font-bold" : "font-normal"}
            `}
          >
            ENG
          </Link>
        </div>
      </div>
    </div>
  );
}
