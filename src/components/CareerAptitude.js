import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

function CareeAptitude() {
  const data = [
    { name: "SOCIAL", score: 23 },
    { name: "REALISTIC", score: 22 },
    { name: "INVESTIGATIVE", score: 18 },
    { name: "ARTISTIC", score: 17 },
    { name: "CONVENTIONAL", score: 10 },
    { name: "ENTERPRISING", score: 10 },
  ];

  const COLORS = [
    "#FB5607",
    "#FFBE0B",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
    "#1FBF75",
  ];

  const smallScreen = window.matchMedia("(min-width: 768px)").matches;
  const [width, setWidth] = useState("250");

  useEffect(() => {
    if (smallScreen) {
      setWidth("500");
    }
  }, [smallScreen]);

  return (
    <div>
      {smallScreen}
      <div style={{ width: width, height: 300 }} className="m-auto mt-6">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="score"
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius={30}
              outerRadius={95}
              fill="#8884d8"
              paddingAngle={5}
              stroke="none"
            >
              {COLORS.map((entry, index) => (
                <Cell fill={entry} key={index} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              style={{ color: "#fff" }}
              payload={data.map((item, index) => ({
                id: item.name,
                type: "square",
                value: `${item.name} ${item.score}%`,
                color: COLORS[index],
              }))}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CareeAptitude;
