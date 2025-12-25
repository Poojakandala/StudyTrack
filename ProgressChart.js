import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function ProgressChart({ data }) {
  return (
    <div className="card">
      <h2>📈 Daily Progress</h2>
      <Line
        data={{
          labels: data.map((d) => d.day),
          datasets: [
            {
              label: "Tasks Completed",
              data: data.map((d) => d.count),
              borderColor: "#38bdf8",
            },
          ],
        }}
      />
    </div>
  );
}

export default ProgressChart;
