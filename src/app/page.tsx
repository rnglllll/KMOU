import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0553fe] font-sans">
      <div className="relative flex min-h-screen w-full max-w-[1600px] flex-col items-center bg-white">
        <Image
          src="/1.png"
          alt="로고"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="relative w-full">
          <Image
            src="/2.png"
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
  className="absolute left-[20.5%] top-[72%]
             bg-[#0553fe] text-white px-8 py-3 rounded-full
             cursor-pointer select-none font-prt text-base
             transition-all duration-500 ease-out
             hover:bg-gradient-to-r hover:from-[#0553fe] hover:to-[#41a7ff]
             shadow-md hover:shadow-lg"
>
            아이디어 접수하기
          </Link>
        </div>

        <Image
          src="/3.png"
          alt="로고"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="relative w-full">
          <Image
            src="/4.png"
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
  className="absolute left-[20.5%] top-[33%]
             bg-[#0553fe] text-white px-8 py-3 rounded-full
             cursor-pointer select-none font-prt text-base
             transition-all duration-500 ease-out
             hover:bg-gradient-to-r hover:from-[#0553fe] hover:to-[#41a7ff]
             shadow-md hover:shadow-lg"
>
            아이디어 접수하기
          </Link>
        </div>
      </div>
    </main>
  );
}
