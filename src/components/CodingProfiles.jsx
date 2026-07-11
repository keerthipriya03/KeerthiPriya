import {
  SiCodechef,
  SiLeetcode,
  SiGithub,
} from "react-icons/si";

import "./Components.css";

const profiles = [
  {
    name: "CodeChef",
    icon: <SiCodechef />,
    link: "https://www.codechef.com/users/keerthipriya3",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/keerthipriya3/",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    link: "https://github.com/keerthipriya03",
  },
];

function CodingProfiles() {
  return (
    <section id="coding" className="coding section">
      <div className="section-header">
        <span className="section-tag">Problem Solving</span>

        <h2>Coding Profiles</h2>

        <p>
          Explore my coding journey through competitive programming and
          open-source contributions.
        </p>
      </div>

      <div className="profiles-grid">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card"
          >
            <div className="profile-icon">
              {profile.icon}
            </div>

            <h3>{profile.name}</h3>

            <span>View Profile →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CodingProfiles;