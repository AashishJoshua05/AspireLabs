import React from 'react';
import Card from './Card';


function Cards() {
    return (
      <div>
        <h1>Job Listings</h1>
        <Card
          designation="Frontend Developer"
          companyDescription="A tech company specializing in web development."
        />
        <Card
          designation="Backend Developer"
          companyDescription="An established software company focused on backend solutions."
        />
      </div>
    );
}

export default Cards;