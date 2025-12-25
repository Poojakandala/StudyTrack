import SkillChart from "./SkillChart";

function Dashboard({ skills }) {
  return (
    <div className="card">
      <h2>Skill Overview</h2>
      <SkillChart skills={skills} />

      <ul>
        {skills.map(skill => (
          <li key={skill.name}>
            {skill.name} : {skill.level}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
