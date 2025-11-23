"use client"

export function UseCasesSection() {
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
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg animate-in fade-in-0 slide-in-from-bottom-8 duration-700 ${
                index === 3 ? "lg:col-start-2" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xs text-gray-500 mb-3 leading-tight">
                {useCase.headline}
              </h3>
              <p className="text-base font-semibold text-black leading-relaxed">
                {useCase.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

