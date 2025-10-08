import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy',
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
      <p className="mb-4">
        Diese Website verwendet keine Cookies und erhebt keine personenbezogenen Daten.
      </p>
      <p>
        Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Daten ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht gespeichert oder weitergegeben.
      </p>
    </main>
  )
}




