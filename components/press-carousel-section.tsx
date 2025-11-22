"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type PressItem = {
  title: string
  href: string
  imageSrc?: string
}

export function PressCarouselSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const items: PressItem[] = [
    {
      title: "CODE University, Panel, \"Break, learn, scale\" (2025)",
      href: "https://lnkd.in/p/eDb5ciiN",
      imageSrc: "/press/code-university-panel.jpeg",
    },
    {
      title: "Learntec, \"AI-based skill management and personnel development\" (2024)",
      href: "https://lnkd.in/p/e5CU53qa",
      imageSrc: "/press/Learntec2024.JPG",
    },
    {
      title: "Guest Feature in Capital, \"Career change in your mid 30s? Go for it.\" (2024)",
      href: "https://www.capital.de/karriere/berufswechsel-mit-mitte-30--ja-das-geht-34900200.html",
      imageSrc: "/press/capital-feature.jpg",
    },
    {
      title: "Hinterland of Things, \"How can Germany become the EdTech Leader worldwide\" (2024)",
      href: "https://lnkd.in/p/e9z4swCe",
      imageSrc: "/press/hinterland-of-things.JPG",
    },
    {
      title: "Raise with Grace: \"Growth, GTM strategies and learnings from entrepreneurial journey\" (2025)",
      href: "https://lnkd.in/p/eXZc3q58",
      imageSrc: "/press/Raise-with-GRACE_by_www.introduce-productions.de_dominik-tryba_INT03279.jpg",
    },
    {
      title: "Interview Start-Up Valley: \"Will this idea change the future of work?\" (2024)",
      href: "https://startupvalley.news/de/peers-solutions/",
      imageSrc: "/press/Start-up_valley.jpg",
    },
    {
      title: "SaaS Summit: Keynote \"The rise of AI. What's in it for EdTech?\" (2023)",
      href: "https://lnkd.in/p/eE6mJnK3",
      imageSrc: "/press/SaaS_Summit.jpeg",
    },
    {
      title: "TV Berlin, \"We need more courage in Start-Up founders\" (2022)",
      href: "https://www.youtube.com/watch?v=f5Vg0ZNNAs0",
    },
    {
      title: "RTL: Start-Up Magazin – Introducing female Start-Up founders and female investors (2022)",
      href: "https://plus.rtl.de/video-tv/shows/startup-magazin-801014/2022-2-963476/episode-3-thema-ua-investorinnen-wie-frauen-gruenderinnen-und-ihre-ideen-unterstuetzen-916453",
      imageSrc: "/press/RTL-startup-magazin.JPG",
    },
    {
      title: "Start-Up Insider, the Bullet Proof organization, \"Investor Relationships\" (2023)",
      href: "https://lnk.to/bulletproof-9",
      imageSrc: "/press/Startup-insider.jpg",
    },
    {
      title: "ARRtist on Air, \"Elisa Hertzler über moderne Weiterbildung, Future Skills und wie ihre KI-gestützte Lernplattform peers helfen kann\" (2022)",
      href: "https://arrtist.podigee.io/33-new-episode",
      imageSrc: "/press/ARRtist-on-air.jpg",
    },
    {
      title: "Fraunhofer, Future Work Talks, \"AI-based learning paths\" (2021)",
      href: "https://futureworklab.de/de/ideenwelt/Qualifizierung_40.html",
      imageSrc: "/press/Fraunhofer_FutureWorkTalk.jpg",
    },
    {
      title: "Federal Ministry of Labour and Social Affairs, Panel Talk, \"Is AI good or bad for employees\"? (2019)",
      href: "https://www.plattform-i40.de/IP/Redaktion/DE/Kurzmeldungen/2019/2019-09-25-VA%20Bericht%20Sozialpartnerdialog.html",
      imageSrc: "/press/federal-ministry-of-labour.jpeg",
    },
  ]

  if (!mounted) {
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 mb-4 gradient-outline">
              PRESS & TALKS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-black">Media and Speaker Slots</h2>
          </div>
          <div className="flex justify-center">
            <div className="animate-pulse bg-gray-200 h-64 w-full max-w-4xl rounded-2xl"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 mb-4 gradient-outline">
            PRESS & TALKS
          </div>
            <h2 className="text-3xl md:text-5xl font-bold text-black">Media and Speaker Slots</h2>
        </div>

        <div className="relative">
          <Carousel className="px-12" opts={{ align: "start" }}>
            <CarouselContent>
              {items.map((item, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                      {item.imageSrc ? (
                        <div className="relative aspect-[16/9] w-full bg-gray-100">
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            className="object-cover"
                            unoptimized
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                            }}
                          />
                        </div>
                      ) : (
                        <div className="relative aspect-[16/9] w-full bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">No image</span>
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:underline">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 truncate">
                          {item.href}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/90 backdrop-blur border" />
            <CarouselNext className="bg-white/90 backdrop-blur border" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}


