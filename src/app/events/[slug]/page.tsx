import React from 'react'

type Props = {
  params: {
    slug: string;
  }
}

export default function EventPage({ params: { slug } }: Props) {
  return (
    <div>
      <h1 style={{ color: '#fff', fontSize: 70, padding: 100 }}>EventPage {slug}</h1>
    </div>
  )
}