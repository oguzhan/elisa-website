import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
}

export default function ImpressumPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
      <p className="mb-6 whitespace-pre-line">
        {`Elisa Hertzler
Kiefholzstr. 12
12435 Berlin
Germany`}
      </p>

      <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
      <p className="mb-6">
        E-Mail: <a href="mailto:elisa@elisahertzler.com" className="underline">elisa@elisahertzler.com</a>
      </p>

      <h2 className="text-xl font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
      <p className="mb-6 whitespace-pre-line">
        {`Elisa Hertzler
Kiefholzstr. 12
12435 Berlin
Germany`}
      </p>
    </main>
  )
}


