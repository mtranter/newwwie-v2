import { Metadata } from 'next';
import React from 'react';

const GetInvitePage = () => {
  return (
<div className="flex flex-col flex-grow items-center justify-center  bg-white text-center px-4">
        <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-8">Get an Invite!    </h2>
          <p className="text-lg text-gray-700 mb-4">
            All we need to get you an invite for the Slack channel is for you to introduce yourself by popping in your details.
          </p>
          <p className="text-md text-gray-700 mb-4">
            You should familiarize yourself with our <a href="https://github.com/newwwie/Code-Of-Conduct/blob/master/README.md" className="text-blue-300 hover:underline">code of conduct</a> before joining to ensure you understand what is expected so that everyone feels welcome.
          </p>
          <form method="POST" action="https://formspree.io/newwwie.slack@gmail.com" className="space-y-4">
            <input type="email" name="email" placeholder="Your email" className="w-full p-2 border border-gray-300 rounded-lg" required />
            <input type="text" name="company" placeholder="Company" className="w-full p-2 border border-gray-300 rounded-lg" required />
            <input type="text" name="position" placeholder="Position" className="w-full p-2 border border-gray-300 rounded-lg" required />
            <input type="url" name="linkedin" placeholder="LinkedIn URL (optional)" className="w-full p-2 border border-gray-300 rounded-lg" />
            <input type="text" name="referral" placeholder="How did you hear about us? Existing members, meetups?" className="w-full p-2 border border-gray-300 rounded-lg" required />
            <textarea name="message" placeholder="Anything else we should know?" className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
            <input type="text" name="_gotcha" className="hidden" />
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">Request Invite</button>
          </form>
        </div>
      </div>
  );
};

export const metadata: Metadata = {
    title: 'Newwwie | Join us on Slack!!',
  }

export default GetInvitePage;