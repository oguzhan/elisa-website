"use client"

import Image from "next/image"
import Link from "next/link"
import cs1Hero from "@/styles/images/case_studies/1/CaseStudy1-pic1.jpeg"
import cs2Hero from "@/styles/images/case_studies/2/Case-study2-pic1.jpeg"
import cs3Hero from "@/styles/images/case_studies/3/case_study3_main.jpeg"

export function PortfolioSection() {
  const projects = [
    {
      title: "Scaling and Exiting Peers Solutions",
      category: "CASE STUDY",
      image: cs1Hero,
      year: "2025",
      href: "/case-studies/peers-solutions",
    },
    {
      title: "My own vibe coded fitness app",
      category: "CASE STUDY",
      image: cs2Hero,
      year: "2024",
      href: "/case-studies/enterprise-expansion",
    },
    {
      title: "AI Product Pivot at Peers",
      category: "CASE STUDY",
      image: cs3Hero,
      year: "2024",
      href: "/case-studies/ai-product-strategy",
    },
  ]

  const useCases = [
    {
      headline: "2025 | B2B SaaS SME | Sales Intelligence",
      text: "Build zero-to-one AI assessment tool for enterprise sales teams using no-code and low-code tools",
    },
    {
      headline: "2025 | B2B SaaS SME | Consulting",
      text: "Consult on business processes and AI automation potential using workflow design and cross-team collaboration",
    },
    {
      headline: "2025 | B2C Start-Up | Natural Products",
      text: "Create market entry strategy and financial model for brand launch",
    },
    {
      headline: "2024 | B2B SaaS Start-Up | NLP Technology",
      text: "Guide founding team on company setup, equity structure, and GTM strategy",
    },
    {
      headline: "2024 | B2B | Waste Management",
      text: "Design end-to-end GTM strategy and sales infrastructure, advising on capacity planning to align sales velocity with operations",
    },
  ]

  return (
    <section className="bg-black py-20" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm text-gray-700 mb-4 gradient-outline">
            CASE STUDIES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Case studies</h2>
        </div>
        
        {/* Large Case Studies - First Row: 2 side by side */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {projects.slice(0, 2).map((project, index) => (
            <Link
              href={project.href}
              key={index}
              className="group cursor-pointer animate-in fade-in-0 slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 transition-transform duration-500 hover:scale-105">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={(project.image as any) || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium title-gradient">{project.category}</span>
                    <span className="text-gray-400 text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold leading-tight group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Second Row: 1 large case study + 2 small boxes */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <Link
            href={projects[2].href}
            className="lg:col-span-1 group cursor-pointer animate-in fade-in-0 slide-in-from-bottom-8 duration-700"
            style={{ animationDelay: `${2 * 200}ms` }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-900 transition-transform duration-500 hover:scale-105 h-full">
              <div className="aspect-[4/3] relative">
                <Image
                  src={(projects[2].image as any) || "/placeholder.svg"}
                  alt={projects[2].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium title-gradient">{projects[2].category}</span>
                  <span className="text-gray-400 text-sm">{projects[2].year}</span>
                </div>
                <h3 className="text-white text-xl font-semibold leading-tight group-hover:text-gray-200 transition-colors duration-300">
                  {projects[2].title}
                </h3>
              </div>
            </div>
          </Link>

          {/* 2 small boxes next to the third case study */}
          {useCases.slice(0, 2).map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg animate-in fade-in-0 slide-in-from-bottom-8 duration-700 h-full flex flex-col transition-transform duration-500 hover:scale-105 min-h-[280px]"
              style={{ animationDelay: `${(3 + index) * 100}ms` }}
            >
              <h3 className="text-xs text-gray-500 mb-3 leading-tight">
                {useCase.headline}
              </h3>
              <p className="text-xl font-semibold text-black leading-relaxed flex-grow">
                {useCase.text}
              </p>
            </div>
          ))}
        </div>

        {/* Third Row: 3 small boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.slice(2, 5).map((useCase, index) => (
            <div
              key={index + 2}
              className="bg-white rounded-2xl p-6 shadow-lg animate-in fade-in-0 slide-in-from-bottom-8 duration-700 h-full flex flex-col transition-transform duration-500 hover:scale-105 min-h-[280px]"
              style={{ animationDelay: `${(5 + index) * 100}ms` }}
            >
              <h3 className="text-xs text-gray-500 mb-3 leading-tight">
                {useCase.headline}
              </h3>
              <p className="text-xl font-semibold text-black leading-relaxed flex-grow">
                {useCase.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
