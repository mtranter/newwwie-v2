import { Metadata } from 'next';
import React from 'react';
import { gqlQuery } from './meetups';
import EventCard from './event-card';

const EventsPage = async () => {
  const data = await getData();
  const events = (data.keywordSearch?.edges || []).flatMap(e => e?.node?.result as Queries.MEETUPS_Event)
 

  return <div className="flex flex-col items-center justify-center pt-8 flex-grow bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Upcoming Events
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {events.map((event, index) => {
              return <EventCard key={index} event={event} />
            })}
        </div>
      </div>
    </div>
};

export const metadata: Metadata = {
    title: 'Our Events | Newwwie',
  }

const getData = async () => {
  const query  = { query: gqlQuery}
  return fetch("https://www.meetup.com/gql", {
    method: "POST",
    body: JSON.stringify(query),
  }).then((r) => r.json()).then(r => r.data as Queries.EventsPageQuery)
}

export default EventsPage;