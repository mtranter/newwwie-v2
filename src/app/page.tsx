import { Metadata } from "next";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            An open community of digital creators in Newcastle, NSW.
          </h1>
        </div>
        <div>
          <p className="text-xl text-gray-700">
            A bunch of Novocastrians friends, co-workers that started talking
            tech and other random things.
          </p>
          <p className="mt-4 text-xl text-gray-700">
            To be a part of the conversation with 800+ locals, we use a Slack
            channel.
          </p>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Newwwie | An open community of creators in Newcastle',
}