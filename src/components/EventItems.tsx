import { EventType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const EventItems = ({ event }: { event: EventType }) => {
  return (
    <Link
      className="flex-1 basis-80 h-[380px] max-w-[500px] "
      href={`/events/${event.slug}`}
    >
      <div className="w-full mt-8  bg-white/[3%] rounded-xl overflow-hidden flex flex-col">
        <Image
          src={event.imageUrl}
          alt={event.slug}
          width={500}
          height={280}
          className="h-[60%] object-fill"
        />
        <div className="flex flex-col flex-1 justify-center items-center p-4">
          <h2 className="text-2xl font-semibold text-white/75">{event.name}</h2>
          <p className="italic">{event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4 ">{event.location}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventItems;
