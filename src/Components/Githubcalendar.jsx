import React from "react";
import GitHubCalendar from "react-github-calendar";

export const Githubcalendar = () => {
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
            username="dazzlerabhi30800"
            year={2022}
          />
        </div>
        <div className="calendar" data-aos="fade-up" data-aos-delay={200}>
          <GitHubCalendar
            style={{
              minWidth: "300px",
              width: "100%",
            }}
            username="dazzlerabhi30800"
            year={2023}
          />
        </div>
      </div>
    </section>
  );
};
