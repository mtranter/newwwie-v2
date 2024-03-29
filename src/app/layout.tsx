import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Newwwie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col font-sans">
          <Nav />
          <main className="flex flex-1">{children}</main>
          <footer className="bg-white border-t border-gray-200">
            <div className="flex max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
              <p className="text-blue-300 underline">
                <a href="https://github.com/newwwie/newwwie.com" rel="external">
                  Edit on Github
                </a>
              </p>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <p className="text-blue-300 underline">
                <a
                  href="https://github.com/newwwie/Code-Of-Conduct/blob/master/README.md"
                  rel="external"
                >
                  Code of conduct
                </a>
              </p>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <p>&copy; {new Date().getFullYear()}</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
