import CircularProgressBar from "./CircularProgressBar.js";

function WorkValue() {
  const result = [
    { scale: "Creativity", stanine_score: 9 },
    { scale: "Variety", stanine_score: 9 },
    { scale: "Financial Reward", stanine_score: 9 },
    { scale: "Working Conditions", stanine_score: 9 },
    { scale: "Work-life Balance	", stanine_score: 9 },
    { scale: "Prestige", stanine_score: 9 },
    { scale: "Influence", stanine_score: 9 },
    { scale: "Performance", stanine_score: 9 },
    { scale: "Work Relationships	", stanine_score: 8 },
    { scale: "Structure", stanine_score: 8 },
    { scale: "Security", stanine_score: 8 },
    { scale: "Altruism", stanine_score: 7 },
    { scale: "Self-development	", stanine_score: 7 },
    { scale: "Autonomy", stanine_score: 4 },
  ];

  return (
    <div className="flex flex-row flex-wrap my-6 relative">
      {result.map((data, index) => (
        <div
          className="flex flex-row flex-nowrap items-center circular__progressbar__container mb-6"
          key={index}
        >
          <CircularProgressBar
            strokeWidth="4"
            innerStrokeWidth="3"
            sqSize="70"
            percentage={data.stanine_score}
          />
          <h2 className="font-medium ml-6">{data.scale}</h2>
        </div>
      ))}
    </div>
  );
}

export default WorkValue;
