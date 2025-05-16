import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { Player } from "@/components/player"
import { ThemeProvider } from "@/components/theme-provider"
import { AudioProvider } from "@/lib/audio-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "A Spotify clone built with Next.js and Tailwind CSS",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white overflow-hidden h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AudioProvider>
            <div className="flex h-screen flex-col">
              <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto">{children}</main>
              </div>
              <Player />
            </div>
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
