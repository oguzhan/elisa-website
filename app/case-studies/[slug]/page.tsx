import Image from "next/image"
import Link from "next/link"
import cs1Hero from "@/styles/images/case_studies/1/CaseStudy1-pic1.jpeg"
import cs1Pic2 from "@/styles/images/case_studies/1/Case-study1-pic2.jpeg"
import cs1Pic3 from "@/styles/images/case_studies/1/Case-study1-pic3.png"
import cs1Extra from "@/styles/images/case_studies/1/case_study_1.jpeg"
import cs2Hero from "@/styles/images/case_studies/2/Case-study2-pic1.jpeg"
import cs2Pic2 from "@/styles/images/case_studies/2/Case-study2-pic2.jpg"
import cs2Pic3 from "@/styles/images/case_studies/2/CaseStudy2-pic3.jpeg"
import cs3Hero from "@/styles/images/case_studies/3/case_study3_main.jpeg"

type Params = { params: { slug: string } }

import type { Metadata } from 'next'

function getYouTubeEmbedUrl(inputUrl: string): string {
  try {
    const url = new URL(inputUrl)
    // support t= format (e.g., 33s, 1m20s) by converting to start seconds
    const tParam = url.searchParams.get("t")
    let startFromT: number | undefined
    if (tParam) {
      const match = tParam.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)(?:s)?)?|(\d+)/i)
      if (match) {
        const hours = parseInt(match[1] || "0", 10)
        const minutes = parseInt(match[2] || "0", 10)
        const seconds = match[4] ? parseInt(match[4], 10) : parseInt(match[3] || "0", 10)
        startFromT = hours * 3600 + minutes * 60 + (isNaN(seconds) ? 0 : seconds)
      }
    }
    // youtu.be/<id>
    if (url.hostname === "youtu.be") {
      const start = startFromT || (url.searchParams.get("start") ? parseInt(url.searchParams.get("start") as string, 10) : undefined)
      return `https://www.youtube.com/embed/${url.pathname.replace("/", "")}${start ? `?start=${start}` : ""}`
    }
    // youtube.com/watch?v=<id>
    if (url.pathname === "/watch" && url.searchParams.get("v")) {
      const id = url.searchParams.get("v") as string
      const start = startFromT || (url.searchParams.get("start") ? parseInt(url.searchParams.get("start") as string, 10) : undefined)
      return `https://www.youtube.com/embed/${id}${start ? `?start=${start}` : ""}`
    }
    // youtube.com/shorts/<id>
    if (url.pathname.startsWith("/shorts/")) {
      const id = url.pathname.split("/")[2]
      return `https://www.youtube.com/embed/${id}`
    }
  } catch {}
  return inputUrl
}

const imagesBySlug = {
  "peers-solutions": {
    hero: cs1Hero,
    left: cs1Pic2,
    right: cs1Pic3,
    wide: cs1Hero,
  },
  "enterprise-expansion": {
    hero: cs2Hero,
    left: cs2Pic2,
    right: cs2Pic3,
    wide: cs2Hero,
  },
  "ai-product-strategy": {
    hero: cs3Hero,
    left: cs1Pic2,
    right: cs1Pic3,
    wide: cs3Hero,
  },
} as const

export default function CaseStudyDetail({ params }: Params) {
  const { slug } = params
  const images = imagesBySlug[slug as keyof typeof imagesBySlug] || imagesBySlug["peers-solutions"]

  const contentBySlug = {
    "peers-solutions": {
      title: "Scaling and Exiting Peers Solutions",
      subtitle: "From zero to acquisition: Building an AI-powered learning platform across Europe",
      sections: [
        {
          heading: "1. Founding, Funding & Enterprise Expansion",
          paragraphs: [
            "I co-founded Peers Solutions with Dr. David Topf after successfully pitching in TRUMPF’s corporate accelerator. We became the first and only team to spin out independently, retaining 100% founder equity.",
            "Over five years, I raised €4.5M in venture capital and €1M in public grants, positioning Peers among Germany’s most innovative digital learning platforms. We were recognized twice in national selection programs for top edtech ventures, with substantial grant funding from the federal government tied to that distinction.",
            "I built and led the company’s expansion into enterprise B2B SaaS, signing clients like KUKA, Volvo, Scania, and a major banking group. Personally, I closed high six-figure contracts, grew contract volumes beyond €1M annually, and doubled ARR year over year in DACH and the Nordics.",
          ],
        },
        {
          heading: "2. Scaling Go-to-Market and Building the Team",
          paragraphs: [
            "To support this growth, I designed and implemented our go-to-market engine, combining:",
            "- A data-driven sales funnel using BANT-based qualification, supported by a stack of HubSpot, LinkedIn Sales Navigator, Surfe, and Mailchimp for high-quality lead qualification, nurturing, and pipeline management.",
            "- Targeted demand generation strategies yielding 700 qualified MQLs/month.",
            "- First-page SEO alongside consistent PR in Germany’s leading business and industry media such as Handelsblatt, Wirtschaftswoche, and Capital.",
            "I hired and led a 20-person cross-functional team across sales, product, and customer success. Internally, I established playbooks, onboarding systems, a feedback culture, and a performance-linked compensation model aligned with rapid growth.",
            "I also launched a second revenue stream: a curated content marketplace, by partnering with ZEIT Akademie, Haufe, and Cornelsen, negotiating SaaS-style revenue-share models.",
          ],
        },
        {
          heading: "3. Product Pivot & Acquisition",
          paragraphs: [
            "By year three, we recognized a recurring challenge: corporate learning was often deprioritized during budget cuts. I led the strategic pivot from a learning platform to an AI-based skills management solution, focusing on:",
            "- Automated skill assessments",
            "- Personalized learning paths",
            "- A custom LLM trained on four years of proprietary skill graph data",
            "This pivot resulted in a 17x increase in ARPU, a 230% optimization of our sales funnel, and 2x inbound leads — making the company significantly more attractive for acquisition.",
            "I led our M&A process in collaboration with a boutique advisory firm: built a longlist of 100 potential buyers, managed due diligence and data rooms, negotiated multiple offers, and ultimately closed the acquisition with edyoucated as the strongest strategic and cultural fit.",
            "I stayed on during pre- and post-merger integration to ensure smooth transition of team, customers, and roadmap.",
          ],
        },
      ],
    },
    "enterprise-expansion": {
      title: "My own vibe coded fitness app",
      subtitle: "A self-coded MVP to solve my own problem and explore what’s possible with no-code and AI tools",
      videoUrl: "https://www.youtube.com/shorts/z_m7P7uRzV4",
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "As someone who trains regularly, I wanted a fitness app that actually works the way I think. So I vibecoded my own: FitTracker, a lightweight, custom-built MVP that helps me stay consistent and track progress, without the mental overload.",
            "The app lets me create custom training plans (like push, pull, legs), log weights and reps, and review progress over time. No more scrolling through Apple Notes or trying to remember last week’s workouts. Everything is simple, structured, and right there when I need it.",
            "This was my first end-to-end MVP, built not for scale, but to see what’s possible when solving a personal problem with today’s tools. I used Lovable to prototype quickly and focused on clean UX and minimal cognitive load, making the app as frictionless as possible in the moments that matter.",
            "It’s an early prototype, but I wanted to explore what’s possible with AI tools as a non-techie. It solves a real pain point in my own gym routine. After refining the prototype further, I plan to share it with my community to collect feedback and continue improving it.",
          ],
        },
        {
          heading: "Next steps",
          paragraphs: [
            "While some features are still manual, like tracking nutrition or sleep, I’m already thinking ahead. The next iteration will explore:",
            "- Food logging via photo recognition",
            "- Automatic syncing with Apple Health and my Oura Ring",
            "- Personalized recommendations using LLM prompts trained on my own data",
            "This project sparked my curiosity around how simple, self-built tools can drive behavioral change and how AI can support that in ways that feel natural, not overwhelming.",
          ],
        },
      ],
    },
    "ai-product-strategy": {
      title: "AI Product Pivot at Peers",
      subtitle: "Doubling Inbound Leads and Boosting ARPU by 230% with a GPT-based Skill Management Platform",
      videoUrl: "https://www.youtube.com/watch?v=fxnQV3_3Lq4&t=33s",
      sections: [
        {
          heading: "Context",
          paragraphs: [
            "We launched Peers as a platform for personalized learning. But over our first three years, we faced a volatile macro environment: COVID, the war in Ukraine, inflation, and tightening Learning and Development (L&D) budgets. Despite this, we continued to grow with small and medium sized businesses (SMB) clients, but we noticed a clear pattern: Learning programs were the first to be deprioritized during budget cuts.",
            "Meanwhile, enterprise clients began reaching out, though not for learning, but for AI-driven skill management. Their Learning Management Systems (LMS) lacked the ability to map, assess, and develop employees' skills in a dynamic way. We saw an opportunity to shift from learning delivery to talent intelligence.",
          ],
        },
        {
          heading: "Hypothesis to validation",
          paragraphs: [
            "We began validating the shift with:",
            "- Expert interviews",
            "- Competitive analysis of emerging players",
            "- A deep-dive keyword analysis showing rising search volume for ‘AI-based skill management’ and related terms",
            "The signal was strong: enterprise buyers were actively seeking solutions and we already had the raw ingredients.",
          ],
        },
        {
          heading: "Product pivot & AI implementation",
          paragraphs: [
            "Over three years, we had built a proprietary machine learning-based skill graph to recommend learning content. That data and architecture became the foundation for our pivot.",
            "We explored integrating our model with newly emerging GPT APIs. We realized that LLMs could outperform our legacy ML system in identifying skill gaps, generating personalized learning paths, and creating role benchmarks.",
            "We redesigned our product with:",
            "- A new tech stack centered on GPT-based skills reasoning",
            "- A tailored UX for enterprise talent development teams",
            "- Integration with existing LMS tools like SAP and Cornerstone",
          ],
        },
        {
          heading: "Go-to-Market alignment",
          paragraphs: [
            "We also redefined our Ideal Customer Profile (ICP): From SMBs purchasing learning platforms → to enterprises already using LMS, now looking to expand into skill management.",
            "Because learning still made up ~70% of our revenue, we kept existing clients but froze further development on the legacy platform and shifted all new efforts to the AI product.",
          ],
        },
        {
          heading: "Results",
          paragraphs: [
            "The pivot delivered fast, measurable results:",
            "- 17x increase in ARPU",
            "- 230% sales funnel efficiency improvement",
            "- 2x increase in inbound leads",
            "- Increased strategic attractiveness, ultimately leading to our acquisition by edyoucated",
          ],
        },
      ],
    },
  } as const

  const custom = contentBySlug[slug as keyof typeof contentBySlug]

  return (
    <main className="min-h-screen bg-white">
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.elisahertzler.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.elisahertzler.com/#portfolio' },
                  { '@type': 'ListItem', position: 3, name: 'Case Study', item: `https://www.elisahertzler.com/case-studies/${slug}` },
                ],
              }),
            }}
          />
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm text-gray-700 mb-6 gradient-outline">
            PROJECT DETAILS
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8">Project details</h1>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden gradient-outline bg-white">
            <Image src={images.hero} alt="Project hero" fill className="object-cover" />
          </div>

          <article className="mt-10 text-gray-700">
            {custom ? (
              <>
                <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2">{custom.title}</h2>
                {'subtitle' in (custom as any) && (custom as any).subtitle ? (
                  <p className="text-gray-600 text-lg mb-4">{(custom as any).subtitle as string}</p>
                ) : null}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'Article',
                      headline: custom.title,
                      author: { '@type': 'Person', name: 'Elisa Hertzler' },
                      mainEntityOfPage: `https://www.elisahertzler.com/case-studies/${slug}`,
                      image: ['https://www.elisahertzler.com/opengraph-image'],
                      publisher: { '@type': 'Person', name: 'Elisa Hertzler' },
                    }),
                  }}
                />
                {"videoUrl" in (custom as any) && (custom as any).videoUrl ? (
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black mb-8">
                    <iframe
                      src={getYouTubeEmbedUrl((custom as any).videoUrl as string)}
                      title="Case study video"
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : null}
                {custom.sections.map((s, i) => (
                  <div key={i} className="mt-10 space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">{s.heading}</h3>
                    {s.heading === "2. Scaling Go-to-Market and Building the Team" ? (
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden gradient-outline bg-white">
                        <Image src={cs1Extra} alt="Peers Solutions team and GTM" fill className="object-cover" />
                      </div>
                    ) : null}
                    {s.paragraphs.map((p, j) => (
                      <p key={j} className="text-base leading-relaxed">{p}</p>
                    ))}
                  </div>
                ))}
              </>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">Samsung's Approach to Digital Product Design: A Seamless Blend of UI/UX</h2>
                <p className="text-base leading-relaxed">
                  In today's rapidly evolving digital landscape, Samsung stands out as a pioneer in combining cutting-edge
                  technology with exceptional user experiences. The tech giant has built its reputation not just on powerful
                  hardware, but also on its outstanding approach to <strong>UI/UX design</strong>.
                </p>
                <p className="text-base leading-relaxed">
                  Samsung's digital product design philosophy is centered on creating seamless, intuitive, and engaging
                  experiences for its users, whether they are interacting with smartphones, wearables, or home appliances.
                </p>
              </>
            )}

            <div className="grid sm:grid-cols-2 gap-6 my-12">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden gradient-outline bg-white">
                <Image src={images.left} alt="Case image 1" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden gradient-outline bg-white">
                <Image src={images.right} alt="Case image 2" fill className="object-cover" />
              </div>
            </div>

            {!custom && (
              <>
                <h3 className="text-lg sm:text-xl font-semibold text-black mt-12">1. User-Centered Design: Putting People First</h3>
                <p className="text-base leading-relaxed">
                  At the heart of Samsung’s design process lies <strong>user-centered design (UCD)</strong>. This philosophy is
                  rooted in understanding the needs, goals, and behaviors of users to create products that resonate with them.
                  Samsung consistently conducts user research, gathering feedback from real users, to ensure that their
                  products serve practical needs while offering exceptional experiences.
                </p>

                <div className="relative aspect-[16/9] rounded-xl overflow-hidden gradient-outline bg-white my-12">
                  <Image src={images.wide} alt="Case image wide" fill className="object-cover" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-black mt-12">2. Enhancing the User Experience with Smart Features</h3>
                <p className="text-base leading-relaxed">
                  Samsung doesn’t just stop at creating a visually appealing interface. They go a step further by focusing on
                  how these designs function and improve the user experience. Features like Bixby (Samsung’s voice assistant),
                  Samsung DeX, and SmartThings create an interconnected ecosystem that provides smart, meaningfully connected
                  interactions across devices.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                  <li><strong>Bixby</strong> is Samsung’s AI-driven voice assistant that offers a natural and interactive way for users to interact with their devices.</li>
                  <li><strong>Samsung DeX</strong> allows users to turn their Galaxy devices into a desktop experience.</li>
                  <li><strong>SmartThings</strong> connects all of Samsung’s smart devices for a seamless experience.</li>
                </ul>
              </>
            )}
          </article>

          <div className="mt-12">
            <Link href="/#portfolio" className="text-sm text-gray-600 hover:text-black underline-offset-4 hover:underline">
              ← Back to case studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = params
  const titles: Record<string, string> = {
    'peers-solutions': 'Scaling and Exiting Peers Solutions',
    'enterprise-expansion': 'My own vibe coded fitness app',
    'ai-product-strategy': 'AI Product Pivot at Peers',
  }
  const title = titles[slug] || 'Case Study'
  const url = `https://example.com/case-studies/${slug}`
  const image = '/placeholder.jpg'
  const description = 'Case study by Elisa Hertzler covering context, decisions, and outcomes.'
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}


