import { Barlow, Barlow_Condensed, Bellefair, Raleway, Roboto, Ubuntu } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu",
});
  
export const raleway =Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-raleway",
})
export const Barlow_C =Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-barlow",
})
export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-arlow",
})
// @import url('https://fonts.googleapis.com/css2?family=Bellefair&display=swap');
export const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bellefair",
})