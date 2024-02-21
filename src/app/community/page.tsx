import { Metadata } from "next";
import React from "react";
import communities from './community'
import CommunityCard from "./community-card";

const CommunityPage = () => {
  return (
    <div className="flex flex-col flex-grow items-center pt-8 justify-center bg-white text-center px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-8">
          Our Community
        </h2>
        <p className="text-lg text-gray-700 mb-4 text-left">
          There is a bunch of niche communities in the digital, design, coding
          spaces. Here is our list:
        </p>
        <div>
          {communities.map((community, index) => (
            <CommunityCard key={index} community={community} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Newwwie | Our Community",
};

export default CommunityPage;
