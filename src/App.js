import "./style/main.css";
import "./style/custom.css";
import Personality from "./components/Personality.js";

import CareerAptitude from "./components/CareerAptitude.js";
import WorkValue from "./components/WorkValue.js";
import underlay_image from "./asset/work_value_svg.svg";

function App() {
  return (
    <div className="p-5 md:p-16">
      <div className="absolute top-0 right-0 m-5">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ width: "35px" }}
          >
            <title>Logo Github</title>
            <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
          </svg>
        </a>
      </div>

      <header>
        <label>
          <p className="text-lg">Fitness Result</p>
          <h1 className="text-2xl font-bold md:text-4xl">ISRAEL AYOKUNNU</h1>
        </label>
      </header>

      <section className="my-8 md:my-16">
        <div className="flex flex-row flex-wrap">
          <div className="max-w-screen-sm md:mr-6 w-full">
            <div
              style={{ backgroundColor: "#1B2A3B" }}
              className="p-6 rounded-3xl"
            >
              <h2 className="text-2xl font-medium uppercase"> Personality</h2>
              <Personality />
            </div>
            <div
              style={{ backgroundColor: "#2B64F8" }}
              className="p-6 rounded-3xl my-6 xl:mb-0"
            >
              <h2 className="text-2xl font-medium uppercase">
                Career Aptitude
              </h2>
              <CareerAptitude />
            </div>
          </div>

          <div className="w-full relative col__workvalue">
            <div
              style={{ backgroundColor: "#776bf8c7" }}
              className="p-6 rounded-3xl h-full"
            >
              <h2 className="text-2xl font-medium uppercase">Work Value</h2>
              <WorkValue />
            </div>

            <div className="absolute h-full w-full bottom-0 overflow-hidden	flex justify-end items-end">
              <img
                src={underlay_image}
                alt="Underlay"
                className="w-auto h-auto"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed top-0 right-0" style={{ zIndex: -1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="432.498"
          height="350.131"
          viewBox="0 0 432.498 350.131"
        >
          <path
            id="top-right-path"
            d="M432.5,963.009S118.725,933.831,0,612.878H432.5Z"
            transform="translate(0 -612.878)"
            fill="#16212f"
          />
        </svg>
      </div>

      <div className="fixed bottom-0 left-0 opacity-40" style={{ zIndex: -1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="370.173"
          height="350.131"
          viewBox="0 0 370.173 350.131"
        >
          <path
            id="bottom-left-path"
            d="M0,612.878s268.557,29.178,370.173,350.131H0Z"
            transform="translate(0 -612.878)"
            fill="#1fbf75"
          />
        </svg>
      </div>

      <footer>
        <p>Built with React, Tailwind & Recharts</p>
      </footer>
    </div>
  );
}

export default App;
