function ActivityForm({ skills, setSkills }) {

  function handleSubmit(e) {
    e.preventDefault();

    const skillName = e.target.skill.value;
    const minutes = Number(e.target.time.value);

    const updatedSkills = skills.map(skill => {
      if (skill.name === skillName) {
        return {
          ...skill,
          level: Math.min(skill.level + Math.floor(minutes / 10), 100),
          lastUsed: Date.now()
        };
      }
      return skill;
    });

    setSkills(updatedSkills);
    e.target.reset();
  }

  return (
    <div className="card">
      <h2>Add Learning Activity</h2>

      <form onSubmit={handleSubmit}>
        <select name="skill" required>
          {skills.map(skill => (
            <option key={skill.name}>{skill.name}</option>
          ))}
        </select>

        <input
          type="number"
          name="time"
          placeholder="Minutes practiced"
          required
        />

        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
}

export default ActivityForm;
