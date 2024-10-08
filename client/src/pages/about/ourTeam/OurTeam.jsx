import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
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
      <h1 className="title">Our Amazing Team</h1>
      <div className="grid">
        {teamMembers.map((member, index) => (
          <div className="card" key={index}>
            <div className="image-container">
              <img src={member.image} alt={member.name} className="profile-image" />
            </div>
            <div className="content">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              {/* <div className="social-icons">
                <Link to={member.linkedin} className="social-link"><FaLinkedin /></Link>
                <Link to={member.twitter} className="social-link"><FaTwitter /></Link>
                <Link to={member.github} className="social-link"><FaGithub /></Link>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
