import { fetchSingleEvent } from "@/api/events";

type Props = {
  params: {
    slug: string;
  }
}

export default async function EventPage({ params: { slug } }: Props) {
  console.log(slug);
  
  const data = await fetchSingleEvent(slug);
  

  return (
    <div>
      <h1 style={{ color: '#fff', fontSize: 70, padding: 100 }}>EventPage {slug}</h1>
    </div>
  )
}