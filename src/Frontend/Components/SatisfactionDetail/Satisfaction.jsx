import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
function Satisfaction() {
    const [isVisible, setIsVisible] = useState(false);

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.5,
      });
  
      observer.observe(document.querySelector("#counts")); // observe the element with id "counts"
  
      // Cleanup
      return () => {
        observer.disconnect();
      };
    }, []);
  return (
    <section id="counts" class="counts">
    <div class="container" data-aos="fade-up">
      <div class="row no-gutters">
        <div
          class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
          data-aos="fade-right"
          data-aos-delay="100"
        ></div>
        <div
          class="col-xl-7 ps-4 ps-lg-5 pe-4 pe-lg-1 d-flex align-items-stretch"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div class="content d-flex flex-column justify-content-center">
            <h3>A Culture that Screams Success</h3>
            <p>
              At WORK, our clients are always our top priority — but we
              firmly believe in creating an environment that's more than
              just a place to work. Building a positive company culture
              has always been important to us, and as a result, our
              devoted employees spare no effort to achieve the desired
              goals. We are experts in
            </p>
            <div class="row">
              <div class="col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="bi bi-emoji-smile"></i>
                  <CountUp
                    start={isVisible ? 0 : null}
                    end={97}
                    duration={2}
                    style={{ display: isVisible ? "block" : "none" }}
                  />

                  <p>
                    <strong>Happy Clients</strong> We take pride in
                    delivering smiles to satisfied clients through our
                    exceptional service and commitment to their success.
                  </p>
                </div>
              </div>

              <div class="col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="bi bi-journal-richtext"></i>
                  <CountUp
                    start={isVisible ? 0 : null}
                    end={124}
                    duration={2}
                    style={{ display: isVisible ? "block" : "none" }}
                  />
                  <p>
                    <strong>Projects</strong> Over successful projects
                    completed, each reflecting our dedication to quality
                    and innovation.
                  </p>
                </div>
              </div>

              <div class="col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="bi bi-clock"></i>
                  <CountUp
                    start={isVisible ? 0 : null}
                    end={5}
                    duration={2}
                    style={{ display: isVisible ? "block" : "none" }}
                  />
                  <p>
                    <strong>Years of Experience</strong> With years of
                    combined experience, our team brings unparalleled
                    expertise to every project.
                  </p>
                </div>
              </div>
              <div class="col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="bi bi-award"></i>
                  <CountUp
                    start={isVisible ? 0 : null}
                    end={10}
                    duration={2}
                    style={{ display: isVisible ? "block" : "none" }}
                  />
                  <p>
                    <strong>Awards</strong> Recognized with awards for
                    excellence, affirming our commitment to exceptional
                    performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Satisfaction
