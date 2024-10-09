import React, { useEffect, useState } from 'react';
import './OurTeam.css';
import teamData from './our-team.json'; 

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Assuming the data might come from an API or async source in the future
    setTeamMembers(teamData);
  }, []);

  return (
    <div className="container mb-5">
      <h1 className="our-team-title">Our Amazing Team</h1>
      <div className="our-team-grid">
        {teamMembers.map((member, index) => (
          <div className="our-team-card" key={index}>
            <div className="our-team-image-container">
              <img src={member.image} alt={member.name} className="our-team-profile-image" />
            </div>
            <div className="our-team-content">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
