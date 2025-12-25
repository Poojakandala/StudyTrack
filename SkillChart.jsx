import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function SkillChart({ skills }) {
  const data = {
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        label: "Skill Level",
        data: skills.map(skill => skill.level),
        backgroundColor: "rgba(59,130,246,0.3)",
        borderColor: "rgba(59,130,246,1)"
      }
    ]
  };

  return <Radar data={data} />;
}

export default SkillChart;
