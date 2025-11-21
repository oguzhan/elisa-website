import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="bg-white py-32" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left content */}
          <div className="animate-in fade-in-0 slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm text-gray-700 mb-8 gradient-outline">
              CORE EXPERIENCE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
              Driving growth at the intersection of AI and business.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              I started my career in corporate strategy at TRUMPF, where I worked with cross-functional teams across R&D, sales, and services to shape new ventures and drive strategic execution. Later, I founded Peers Solutions, an AI-powered B2B learning platform. Over six years, I built a €5.5M venture-backed business from 0→20 people and led strategic pivots delivering 17x ARPU growth. I closed high-six-figure enterprise deals with clients like Volvo and KUKA, and led the company through to acquisition.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Today, I help companies build and scale by leveraging AI at the intersection of product, sales, business processes, and strategy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Go To Market",
                "AI Product Strategy",
                "Investor Relations",
                "Venture Building & Scaling",
                "Enterprise Sales",
                "Partnership Management",
              ].map((s) => (
                <span key={s} className="inline-flex items-center px-4 py-2 rounded-full text-sm text-gray-800 bg-white gradient-outline">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Button className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800">
                BOOK A CALL
                <span className="ml-2">↗</span>
              </Button>
            </div>
          </div>

          {/* Right content - CV entries */}
          <div className="animate-in fade-in-0 slide-in-from-right-8 duration-700 delay-200">
            <div className="divide-y divide-gray-200">
              {[ 
                { company: "freelance", role: "GTM, Growth and AI Product Strategist", period: "(2025 - TODAY)" },
                { company: "PEERS SOLUTIONS", role: "Founder and CEO (GTM & Sales)", period: "(2019 - 2025)" },
                { company: "ENTREPRENEUR ORGANIZATION BERLIN (EO)", role: "Board Member", period: "(2025 - TODAY)" },
                { company: "SRH UNIVERSITY OF APPLIED SCIENCES", role: "Guest Lecturer MBA Classes", period: "(2021 - 2022)" },
                { company: "TRUMPF", role: "Corporate Development & Strategy Consultant", period: "(2016 - 2019)" },
                { company: "HASSO PLATTNER & WEQ INSTITUTE", role: "Research Fellow", period: "(2014 - 2015)" },
              ].map((item, idx) => (
                <div key={idx} className="py-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-[11px] font-semibold tracking-widest uppercase mb-3 title-gradient">
                        {item.company}
                      </div>
                      <div className="text-2xl font-semibold text-black leading-snug">
                        {item.role}
                      </div>
                    </div>
                    <div className="text-gray-500 text-sm whitespace-nowrap mt-1">{item.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
