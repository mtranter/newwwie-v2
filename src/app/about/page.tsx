import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
      <div className="flex flex-col flex-grow items-center justify-center bg-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-8">About Newwwie</h2>
          <p className="text-lg text-gray-700 mb-4">
            Starting as an off-topic conversation for a bunch of programmers working out of shared workspaces in Newcastle, it eventually grew with more locals. Newwwie at its core is a place to blow off steam, rant about whatever technology we are currently wrestling, share interesting stuff and help break out of day-to-day traps of working online.
          </p>
          <p className="text-lg text-gray-700">
            If this sounds like something you would like to check out, <Link href="/get-invite" className="text-blue-300 hover:underline">request an invite</Link>.
          </p>
        </div>
      </div>
  );
};

export const metadata: Metadata = {
    title: 'About | Newwwie',
  }

export default AboutPage;