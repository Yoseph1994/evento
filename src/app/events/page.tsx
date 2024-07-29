import EventItems from "@/components/EventItems";
import HeadingTitle from "@/components/HeadingTitle";
import { EventType } from "@/lib/types";

import React from "react";

const EventsList = async () => {
  const res = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events"
  );
  const data: EventType[] = await res.json();

  return (
    <main className=" flex flex-col items-center py-24 px-[20px] min-h-screen">
      <HeadingTitle>All events</HeadingTitle>
      <section className="flex flex-wrap gap-10 justify-center items-center">
        {data.map((event) => (
          <EventItems key={event.id} event={event} />
        ))}
      </section>
    </main>
  );
};

export default EventsList;
