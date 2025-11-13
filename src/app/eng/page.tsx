import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0553fe] font-sans">
      <div className="relative flex min-h-screen w-full max-w-[1600px] flex-col items-center bg-white">
        <Image
          src="/1(eng).png"
          alt="로고"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="relative w-full">
          <Image
            src="/2(eng).png"
            alt="배경"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority
          />
          <Link
            href="http://docs.google.com/forms/d/e/1FAIpQLSd-sy6qE8HIakq5coqHYfg_Dd228QA031YiOB-uxdgyLyxroA/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            className="
              absolute left-[20.5%] top-[72%]
              cursor-pointer select-none font-prt
              bg-[#0553fe] text-white rounded-full
              shadow-md hover:shadow-lg
              hover:bg-gradient-to-r hover:from-[#0553fe] hover:to-[#41a7ff]
              transition-all duration-500 ease-out

              /* 기본: 가장 작은 사이즈 (모바일) */
              px-2 py-1 text-[6px]

              /* sm 이상(>=640px) 조금 키우기 */
              sm:px-3 sm:py-2 sm:text-xs

              /* lg 이상(>=1024px) 최종 크게 */
              lg:px-8 lg:py-3 lg:text-base
            "
          >
            Submit Your Idea Now
          </Link>
        </div>
        <Image
          src="/3(eng).png"
          alt="로고"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="relative w-full">
          <Image
            src="/4(eng).png"
            alt="로고"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority
          />
          <Link
            href="http://docs.google.com/forms/d/e/1FAIpQLSd-sy6qE8HIakq5coqHYfg_Dd228QA031YiOB-uxdgyLyxroA/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            className="
              absolute left-[20.5%] top-[33%]
              cursor-pointer select-none font-prt
              bg-[#0553fe] text-white rounded-full
              shadow-md hover:shadow-lg
              hover:bg-gradient-to-r hover:from-[#0553fe] hover:to-[#41a7ff]
              transition-all duration-500 ease-out

              /* 기본: 가장 작은 사이즈 (모바일) */
              px-2 py-1 text-[6px]

              /* sm 이상(>=640px) 조금 키우기 */
              sm:px-3 sm:py-2 sm:text-xs

              /* lg 이상(>=1024px) 최종 크게 */
              lg:px-8 lg:py-3 lg:text-base
            "
          >
            Submit Your Idea Now
          </Link>
        </div>
      </div>
    </main>
  );
}
