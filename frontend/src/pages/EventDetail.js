import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
};

export default EventDetail;

export async function loader({ request, params }) {
  const id = params.eventsId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch" }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const eventsId = params.eventsId;

  const response = await fetch("http://localhost:8080/events/" + eventsId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
