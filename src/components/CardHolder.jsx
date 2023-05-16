import React from 'react';
import CardComponent from './card';

const jobListings = [
  {
    designation: 'Frontend Developer',
    location: 'Habibi Dubai',
    companyName: 'Vakes & Co.',
  },
  {
    designation: 'Backend Developer',
    location: 'Mumbai',
    companyName: 'Vakes & Co.',
  },
  {
    designation: 'Full Stack Developer',
    location: 'Hyderabad',
    companyName: 'Vakes & Co.',
  },
];

function CardHolder() {
  return (
    <div>
      <h1>Job Listings</h1>
      {jobListings.map((job) => (
        <CardComponent
          key={job.designation}
          designation={job.designation}
          companyName={job.companyName}
          location={job.location}
        />
      ))}
    </div>
  );
}

export default CardHolder;
