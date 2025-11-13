"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const isKor = pathname.startsWith("/kor");
  const isEng = pathname.startsWith("/eng");

  return (
    <div className="fixed bottom-4 right-4 z-50 
                    sm:bottom-6 sm:right-6">
      <div
        className="
          flex items-center gap-1
          rounded-full bg-white/90 
          px-3 py-1.5 
          shadow-lg border border-black/5 backdrop-blur
          
          /* sm 이상일 때 조금 넓게 */
          sm:px-4 sm:py-2 sm:gap-2
        "
      >
        <div
          className="
            flex items-center gap-1 
            text-[10px] 

            /* sm 이상에서 text-sm */
            sm:text-xs sm:gap-1.5
          "
        >
          <Link
            href="/kor"
            className={`
              px-1.5 py-0.5 rounded-full
              hover:bg-[#0553fe]/10 text-[#0553fe]

              /* sm 이상 */
              sm:px-2 sm:py-1

              ${isKor ? "font-bold" : "font-normal"}
            `}
          >
            KOR
          </Link>

          <span className="text-gray-300">|</span>

          <Link
            href="/eng"
            className={`
              px-1.5 py-0.5 rounded-full
              hover:bg-[#0553fe]/10 text-[#0553fe]

              /* sm 이상 */
              sm:px-2 sm:py-1

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
