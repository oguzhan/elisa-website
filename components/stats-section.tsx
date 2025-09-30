"use client"

import { useEffect, useState } from "react"

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

        {/* Testimonial */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm animate-in fade-in-0 slide-in-from-bottom-8 duration-700 delay-600">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-pink-600 text-xl">👤</span>
            </div>
            <div>
              <p className="text-gray-700 text-lg mb-4 italic">
                "Elisa's growth strategies are truly exceptional. She has a deep understanding of the market and knows how to leverage AI to drive growth."
              </p>
              <div>
                <p className="font-semibold text-black">Oguzhan Yayla</p>
                <p className="text-gray-500">Co-founder & CTO @ Lucidminds AI</p>
              </div>
            </div>
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
