import React from "react";
import Markdown from "react-markdown";

const dateStringToFriendlyDate = (dateTime: string) => {
  const date = new Date(dateTime);
  return date.toLocaleDateString("en-AU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};

const truncateText = (description: string, length: number) => {
  return description.length > length
    ? description.substring(0, length) + "..."
    : description;
};

const parseIsoDuration = (isoDuration: string) => {
  const DURATION_REGEX =
    /P((?<years>\d+)Y)?((?<months>\d+)M)?((?<days>\d+)D)?T((?<hours>\d+)H)?((?<minutes>\d+)M)?((?<seconds>\d+)S)?/;
  const { groups } = isoDuration.match(DURATION_REGEX)!;
  return Object.keys(groups!).reduce(
    (p, n) => (groups![n] ? p + `${groups![n]} ${n}` : p),
    ""
  );
};

const EventCard: React.FC<{ event: Queries.MEETUPS_Event }> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      {event.imageUrl && (
        <img
          src={event.imageUrl}
          alt={event.title || ""}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          <a href={event.eventUrl!} className="hover:text-blue-500">
            {event.title}
          </a>
        </h3>
        <p className="text-gray-700 mb-4">
          <Markdown>{truncateText(event.description ?? "", 240)}</Markdown>
        </p>
        <div className="mb-4">
          <span className="font-semibold">Date & Time:</span>{" "}
          {dateStringToFriendlyDate(event.dateTime!)}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Venue:</span> {event.venue?.name},{" "}
          {event.venue?.city}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Going:</span> {event.going} /{" "}
          {event.maxTickets || "∞"}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Duration:</span> {parseIsoDuration(event.duration!)}
        </div>
        {event.group && (
          <div>
            <span className="font-semibold">Group:</span> {event.group.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
