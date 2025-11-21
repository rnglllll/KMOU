import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "해양드론 아이디어 글로벌 연합 경진대회",
  description: "해양드론 아이디어 글로벌 연합 경진대회",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* 우측 하단 플로팅 언어 토글 (클라이언트 컴포넌트) */}
        <LanguageSwitcher />
      </body>
    </html>
  );
}
