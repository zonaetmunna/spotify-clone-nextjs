import PlayerWrapper from "@/components/PlayerWrapper"
import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { PlayerProvider } from "@/contexts/PlayerContext"
import { AudioProvider } from "@/lib/audio-context"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

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
            <PlayerProvider>
              <div className="flex h-screen flex-col">
                <div className="flex flex-1 overflow-hidden">
                  <Sidebar />
                  <main className="flex-1 overflow-y-auto">{children}</main>
                </div>
                <PlayerWrapper />
              </div>
            </PlayerProvider>
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
