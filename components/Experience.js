import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import { TiCode } from "react-icons/ti";
import { TiDeviceDesktop } from "react-icons/ti";
import { IoIosRocket } from "react-icons/io";
import { IoIosAnalytics } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import "./Experience.css";

const Role = ({ role }) => (
  <h4
    style={{
      color: "#8a8a8a",
      fontWeight: "bold",
      marginBottom: "0px",
      marginTop: "10px",
    }}
  >
    Role: {role}
  </h4>
);

const Technologies = ({ techs }) => (
  <p
    style={{
      color: "#8a8a8a",
      fontStyle: "italic",
      marginBottom: "15px",
    }}
  >
    Technologies Used: {techs.join(", ")}
  </p>
);

const Experience = () => {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  return (
    <div id="experience" className="content-section">
      <h4 className="experience-header">Experience</h4>
      <VerticalTimeline layout={isMobileDevice ? "1-column" : "2-columns"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-element"
          contentStyle={{ background: "#F1F1F1", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  #F1F1F1" }}
          date="May 2023 - August 2023"
          iconStyle={{ background: "#F1F1F1", color: "#333" }}
          icon={<TiCode />}
        >
          <div
           
          >
            <h3 className="vertical-timeline-element-title">
              Tag generator Excel sheet
            </h3>
            <Role role="Controls Engineer Intern " />
            <Technologies techs={["Excel", "RSlogix"]} />
            <p>
              • Used Excel to generate a tagsheet for RSlogix to use in I/O checks for site visits. 
              This ensured a streamlined development time so that employees could focus more on the actual site work of implementing the controls system.
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-element"
          contentStyle={{ background: "#F1F1F1", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  #F1F1F1" }}
          date="May 2023 - August 2023"
          iconStyle={{ background: "#F1F1F1", color: "#333" }}
          icon={<TiDeviceDesktop />}
        >
          <div
            
          >
            <h3 className="vertical-timeline-element-title">
              3D digital twin
            </h3>
            <Role role="Controls Engineer Intern" />
            <Technologies
              techs={["Emulate3D"]}
            />
            <p>
              • Created a digital twin of an Amazon inbound system.  
              It gets a good visual representation out to the customer and allowed users to see what they are implementing before they get to site.
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-element"
          contentStyle={{ background: "#F1F1F1", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  #F1F1F1" }}
          date="November 2022 - December 2022"
          iconStyle={{ background: "#F1F1F1", color: "#333" }}
          icon={<IoIosAnalytics />}
        >
          <div
            
            
          >
            <h3 className="vertical-timeline-element-title">
              Arcade Game
            </h3>
            <Role role="Junior SE Thales" />
            <Technologies
              techs={["Unreal Engine","Python"]}
            />
            <p>
              • Developed an asteroids like game in python linked to unreal engine for graphics. 
              Used to train 2 different types of AI where one would aggressively destroy asteroids and the other would defensively destroy. 
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-element"
          contentStyle={{ background: "#F1F1F1", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  #F1F1F1" }}
          date="January 2022 - April 2022"
          iconStyle={{ background: "#F1F1F1", color: "#333" }}
          icon={<IoIosRocket />}
        >
          <div
            
      
          >
            <h3 className="vertical-timeline-element-title">
              Hololens trainer BMW manufacturing
              </h3>
            <Role role="Software Engineering intern BMW manufacturing" />
            <Technologies techs={["Microsoft Suite", "Unity","C++"]} />
            <p>
              • Developed training videos using Virtual reality technology to show trainees where to put plugs on the car.
              This greatly reduced costs by getting rid of the trainer and being able to train more people at once.
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work timeline-element"
          contentStyle={{ background: "#F1F1F1", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  #F1F1F1" }}
          date="May 2021 - July 2021"
          iconStyle={{ background: "#F1F1F1", color: "#333" }}
          icon={<IoIosAnalytics />}
        >
          <div
            
          >
            <h3 className="vertical-timeline-element-title">
              Mass Reporting System BMW manufacturing
              </h3>
            <Role role="Web App developer" />
            <Technologies techs={["Oracle APEX", "SQL","CSS"]} />
            <p>
              • Developed an automated reporting system using RESTFUL services and oracle apex to maintain plantwide trainings for ESA's. 
              This app made sure everyone was properly trained and showed upcoming trainings they needed as well.
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
