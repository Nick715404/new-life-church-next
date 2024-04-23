import { fetchEvents } from "@/api/events";
import { Event } from "@/components/Event/Event";

const EventsList = async () => {

  const events = await fetchEvents();

  return (
    <>
      {
        events && events.map(({ id, attributes }) => (
          <Event key={id} data={attributes} />
        ))
      }
    </>
  )
}

export { EventsList }