import { json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function Events() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;

  return <EventsList events={events} />;
}

export default Events;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ isError: true, message: "Error Occurs!" }, { status: 500 });
  } else {
    return response;
  }
}
