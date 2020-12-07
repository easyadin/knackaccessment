function Personality() {
  const Result = [
    { strait: "Assertive Advocate", color: "#419EB6" },
    {
      strait: "INFJ-A",
      description:
        "Letters in the code refer to their 5 dominant traits: Introverted (I), Intuitive (N), Feeling (F), Judging (J), and Assertive (-A)",
      color: "#F1BC71",
    },
    { strait: "Diplomat", color: "#57AD8B" },
    { strait: "Confident Individualism", color: "#CFA0B6" },
  ];

  return (
    <div>
      <div className="mt-6">
        {Result.map((res, index) => (
          <label
            key={index}
            className="mb-6 block flex items-center has__description"
          >
            <span
              style={{ backgroundColor: res.color }}
              className="block p__dots"
            ></span>
            <p className="ml-6 relative w-full">
              {res.strait}
              {res.description?.length > 0 && (
                <span className="ml-3 more__info">?</span>
              )}
              {res.description?.length > 0 && <span className="__info">{res.description}</span>}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Personality;
