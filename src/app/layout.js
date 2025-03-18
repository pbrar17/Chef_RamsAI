import { Geist, Geist_Mono } from "next/font/google";
import "./index.css";

// Fonts setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Your Time Starts Now!", // Change this as needed
  description: "Have Ingredients, but confused on what to cook? Try Chef RamsAI, put in your ingredients and Voila, here is a quick recipe that you can make. Idiot Sandwich not included!", // Change this as needed
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can also include the Inter font using next/font if needed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
