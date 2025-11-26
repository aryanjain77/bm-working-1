import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "BlackMonkey - Next-Gen STEM Education for Kids",
  description:
    "BlackMonkey offers interactive STEM courses in paper circuits, robotics, IoT, and drones. Gamified learning experiences that make science, technology, engineering, and math exciting for kids.",
  openGraph: {
    title: "BlackMonkey - Next-Gen STEM Education",
    description:
      "Interactive STEM courses for kids: Paper Circuits, Robotics, IoT, and Drones",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}



