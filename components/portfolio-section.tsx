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

  return (
    <section className="bg-black py-20" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm text-gray-700 mb-4 gradient-outline">
            CASE STUDIES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Case studies</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              href={project.href}
              key={index}
              className={`group cursor-pointer animate-in fade-in-0 slide-in-from-bottom-8 duration-700 ${
                index === 2 ? "lg:col-span-2" : ""
              }`}
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
      </div>
    </section>
  )
}
