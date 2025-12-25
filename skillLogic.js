export function applySkillDecay(skills) {
  const now = Date.now();

  return skills.map(skill => {
    const inactiveDays =
      (now - skill.lastUsed) / (1000 * 60 * 60 * 24);

    if (inactiveDays > 3) {
      return {
        ...skill,
        level: Math.max(skill.level - Math.floor(inactiveDays), 0)
      };
    }
    return skill;
  });
}
