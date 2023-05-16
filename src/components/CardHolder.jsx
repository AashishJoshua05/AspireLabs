import React from 'react';
import CardComponent from './card.jsx';
import "../styles/main.css";

const jobListings = [
  {
    id: "aaaa",
    designation: 'Frontend Developer',
    location: 'Habibi Dubai',
    companyName: 'Vakes & Co.',
  },
  {
    id: "bbbb",
    designation: 'Backend Developer',
    location: 'Mumbai',
    companyName: 'Vakes & Co.',
  },
  {
    id: "cccc",
    designation: 'Full Stack Developer',
    location: 'Hyderabad',
    companyName: 'Vakes & Co.',
  },
];

function CardHolder() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <div className="flex justify-between">
        <div></div> {/* Empty div for left alignment */}
        <div className="grid gap-4 mx-auto" style={{ width: '80%' }}>
          {jobListings.map((job) => (
            <div key={job.designation} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
              <div className="sm:col-span-1 lg:col-span-2">
                <CardComponent
                  designation={job.designation}
                  companyName={job.companyName}
                  location={job.location}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardHolder;
