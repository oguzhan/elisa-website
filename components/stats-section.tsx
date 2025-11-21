"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("stats-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: 10, suffix: "+", label: "Years Experience" },
    { number: 5, suffix: "+", label: "Projects Completed" },
    { number: 7, suffix: "+", label: "Happy Clients" },
  ]

  return (
    <section className="bg-gray-50 py-20" id="stats-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
            I specialize in blending various disciplines to bring solutions to life.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-in fade-in-0 slide-in-from-bottom-6 duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-6xl lg:text-7xl font-bold text-black mb-2">
                <CountUp end={stat.number} suffix={stat.suffix} duration={2} start={isVisible} />
              </div>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-black text-center mb-12">What People Say</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Elisa combines strategic systems thinking with relentless execution. She's not just a visionary entrepreneur; she gets things done, fast and with impact.",
                author: "Logan Soya",
                title: "Founder and CEO of Geofund",
                context: "Logan mentored Elisa in the early days of Peers.",
                image: "/testimonials/logan-soya.jpg"
              },
              {
                quote: "Elisa is a natural ecosystem builder. At EO Berlin, she's been instrumental in scaling our accelerator through meaningful partnerships and smart execution.",
                author: "Daniel Kollmann",
                title: "President, EO Berlin",
                context: "Daniel and Elisa serve together on the board of EO Berlin.",
                image: "/testimonials/daniel-kollmann.jpg"
              },
              {
                quote: "Elisa is a top-tier seller: from sharp storytelling to building deep client relationships, she navigates enterprise sales with confidence and skill.",
                author: "Tine Schmitz",
                title: "General Partner, Auxxo Female Catalyst Fund",
                context: "Tine invested in Peers through Auxxo.",
                image: "/testimonials/tine-schmitz.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm animate-in fade-in-0 slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${(index + 6) * 100}ms` }}>
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-gray-100">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-black text-sm">{testimonial.author}</p>
                      <p className="text-gray-500 text-xs">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 italic flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-xs text-gray-400 italic">{testimonial.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CountUp({
  end,
  suffix = "",
  duration = 2,
  start,
}: { end: number; suffix?: string; duration?: number; start: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, start])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}
