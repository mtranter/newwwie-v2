import React from 'react';
import styles from './community-card.module.css';

type Community = {
  name: string;
  location: string;
  period: {
    interval: string;
    day: string;
    weekDay: string;
  };
  links: {
    twitter?: string;
    facebook?: string;
    website?: string;
    meetUp?: string;
  };
  demographic: string;
  format: string;
};

const CommunityCard: React.FC<{ community: Community }> = ({ community }) => {
  console.log(JSON.stringify(styles));
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 border-l-blue-300 border-l-8">
      <div className="p-6">
        <h4 className="text-2xl font-bold text-gray-900 mb-2">
          <a href={community.links.website} className="hover:text-blue-500">{community.name}</a>
        </h4>
        <p className="text-gray-700 mb-4">{community.demographic}</p>
        <div className="mb-4">
          <span className="font-semibold">When:</span> {`${community.period.interval}, ${community.period.weekDay} ${community.period.day}`}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Where:</span> {community.location}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Format:</span> {community.format}
        </div>
        <div>
          <span className="font-semibold">Links:</span>
          <ul className={`flex mt-2 justify-center ${styles['community-links']}`}>
            {community.links.website && (
              <li>
                <a href={community.links.website} className="text-blue-500 hover:underline" rel="external">Website</a>
              </li>
            )}
            {community.links.facebook && (
              <li>
                <a href={community.links.facebook} className="text-blue-500 hover:underline" rel="external">Facebook</a>
              </li>
            )}
            {community.links.meetUp && (
              <li>
                <a href={community.links.meetUp} className="text-blue-500 hover:underline" rel="external">MeetUp</a>
              </li>
            )}
            {community.links.twitter && (
              <li>
                <a href={community.links.twitter} className="text-blue-500 hover:underline" rel="external">Twitter</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;