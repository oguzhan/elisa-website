"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import mainPerson from "@/styles/images/main_person_image.jpg"
import gleasonLogo from "@/styles/logos/gleason-logo 1.png"
import groupLogo from "@/styles/logos/Group.png"
import kukaLogo from "@/styles/logos/KUKA-Logo-Orange-Gradient-RGB-L-Clear-@2x 1.png"
import logoMonochrome from "@/styles/logos/Logo-monochrome.svg.png"
import scaniaLogo from "@/styles/logos/Scania.png"
import trumpfLogo from "@/styles/logos/TRUMPF.svg"
import volvoLogo from "@/styles/logos/Volvo.png"

export function HeroSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-32" id="home">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm text-gray-600 mb-8 shadow-sm gradient-outline animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
          HELLO! I'M ELISA HERTZLER
        </div>

        {/* Subheadline above main heading (slightly larger) */}
        <p className="text-base md:text-lg lg:text-xl uppercase tracking-widest text-gray-600 mb-3 animate-in fade-in-0 slide-in-from-bottom-5 duration-700 delay-200">
          GTM Strategy & B2B Sales
        </p>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-black mb-10 animate-in fade-in-0 slide-in-from-bottom-6 duration-700 delay-250 [text-wrap:balance]">
          <span className="block">Turning AI into Revenue</span>
        </h1>

        {/* Profile image */}
        <div className="relative w-64 h-80 mx-auto mb-12 animate-in fade-in-0 slide-in-from-bottom-8 duration-700 delay-400">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl transform rotate-3 transition-transform duration-300 hover:rotate-6"></div>
          <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
            <Image
              src={mainPerson}
              alt="Creative designer and developer"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-600">
          <Button
            asChild
            variant="outline"
            className="border-0 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent gradient-outline"
          >
            <a href="#portfolio">BROWSE WORKS</a>
          </Button>
        </div>

        {/* Client logos - single-line grayscale marquee */}
        <div className="marquee mt-16 animate-in fade-in-0 slide-in-from-bottom-12 duration-700 delay-800">
          <div className="marquee__track grayscale">
            {[ 
              { src: gleasonLogo, alt: "Gleason" },
              { src: groupLogo, alt: "Group" },
              { src: kukaLogo, alt: "KUKA" },
              { src: logoMonochrome, alt: "Monochrome" },
              { src: scaniaLogo, alt: "Scania" },
              { src: trumpfLogo, alt: "TRUMPF" },
              { src: volvoLogo, alt: "Volvo" },
              // duplicate for seamless loop
              { src: gleasonLogo, alt: "Gleason" },
              { src: groupLogo, alt: "Group" },
              { src: kukaLogo, alt: "KUKA" },
              { src: logoMonochrome, alt: "Monochrome" },
              { src: scaniaLogo, alt: "Scania" },
              { src: trumpfLogo, alt: "TRUMPF" },
              { src: volvoLogo, alt: "Volvo" },
            ].map((logo, index) => (
              <div key={index} className="relative w-28 h-10 opacity-80">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
