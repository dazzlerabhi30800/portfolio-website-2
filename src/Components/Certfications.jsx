export default function Certifications() {
  const handleLink = (e, link) => {
    e.preventDefault();
    window.open(link);
  };
  return (
    <section className="certification--section">
      <h2
        style={{ margin: "1rem auto", width: "fit-content" }}
      >
        Certifications <span className="shadow--font">Certifications</span>
      </h2>
      <div className="certifications">
        <a
          onClick={(e) =>
            handleLink(
              e,
              "https://www.freecodecamp.org/certification/dazzlerabhi30800/javascript-algorithms-and-data-structures",
            )
          }
          className="certification--link"
        >
          <img
            src="./certifications/js-algo.png"
            loading="lazy"
            alt="Javascript-Algorithms-Certificate"
          />
        </a>
        <a
          onClick={(e) =>
            handleLink(
              e,
              "https://www.freecodecamp.org/certification/dazzlerabhi30800/front-end-development-libraries",
            )
          }
          className="certification--link"
        >
          <img
            loading="lazy"
            src="./certifications/frontend-certificate.png"
            alt="Frontend-Certificate"
          />
        </a>
      </div>
    </section>
  );
}
