import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Resize } from "./Resize";

const Githubcalendar = () => {
  const windowSize = Resize();
  // const dark = ["hsl(0,0%,22%)", "#4d455d", "#7db9b6", "#f5e9cf", "#e96479"];
  return (
    <section className="calendar--section">
      <h2 data-aos="fade-right">
        My Github Calendar{" "}
        <span className="shadow--font">My Github Calendar</span>
      </h2>
      <div className="calendarWrapper">
        <div className="calendar" data-aos="fade-up" data-aos-delay={100}>
          <GitHubCalendar
            style={{
              minWidth: "300px",
              width: "100%",
            }}
            colorScheme="dark"
            blockRadius={3}
            username="dazzlerabhi30800"
            year={2022}
            showWeekdayLabels={true}
            blockSize={windowSize < 700 ? 12 : 15}
            theme={{
              dark: [
                "hsl(320,8%,15%)",
                "hsl(328,30%,30%)",
                "hsl(328,40%,40%)",
                "hsl(328,80%,40%)",
                "hsl(330,100%,55%)",
              ],
            }}
          />
        </div>
        <div className="calendar" data-aos="fade-up" data-aos-delay={200}>
          <GitHubCalendar
            style={{
              minWidth: "300px",
              width: "100%",
            }}
            username="dazzlerabhi30800"
            blockRadius={3}
            colorScheme="dark"
            blockSize={windowSize < 700 ? 12 : 15}
            showWeekdayLabels={true}
            year={2023}
            theme={{
              dark: [
                "hsl(320,8%,15%)",
                "hsl(328,30%,30%)",
                "hsl(328,40%,40%)",
                "hsl(328,80%,40%)",
                "hsl(330,100%,55%)",
              ],
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Githubcalendar;
