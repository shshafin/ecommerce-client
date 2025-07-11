import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Poppins,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const poppins = Poppins({
  weight: ["300"], // 300 = Light
  subsets: ["latin"],
  variable: "--font-poppins",
});
