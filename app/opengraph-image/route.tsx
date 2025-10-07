import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  const fontData = await fetch(
    new URL('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff')
  ).then((res) => res.arrayBuffer())

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
        <div style={{ fontSize: 56, fontWeight: 800 }}>Elisa Hertzler</div>
        <div style={{ fontSize: 34, marginTop: 8 }}>Turning AI into Revenue | GTM Strategy & B2B Sales</div>
        <div style={{ fontSize: 24, color: '#4b5563', marginTop: 24 }}>www.elisahertzler.com</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}


