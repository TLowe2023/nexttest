import "./globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import { ChildrenProps, MainLayout } from "@/components/main.layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Troy's Test App",
  description: "Checking out NextJS",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout title={metadata.title}>{children}</MainLayout>
      </body>
    </html>
  );
}
