import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const titles: Record<string, string> = {
  'peers-solutions': 'Scaling and Exiting Peers Solutions',
  'enterprise-expansion': 'My own vibe coded fitness app',
  'ai-product-strategy': 'AI Product Pivot at Peers',
}

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params
  const title = titles[slug] || 'Case Study'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: '#ffffff',
          color: '#000',
          padding: '80px',
        }}
      >
        <div style={{ fontSize: 40, color: '#4b5563' }}>Case Study</div>
        <div style={{ fontSize: 56, fontWeight: 800, marginTop: 8 }}>{title}</div>
        <div style={{ fontSize: 24, color: '#4b5563', marginTop: 24 }}>www.elisahertzler.com</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}


