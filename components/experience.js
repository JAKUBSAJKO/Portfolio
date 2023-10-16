import { useEffect, useState } from "react";
import { FaHourglassHalf } from "react-icons/fa";
import { MdComputer, MdOutlineSchool } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const laptopWidth = 1024;

const Experience = () => {
  const [isLaptop, setIsLaptop] = useState(false);

  const handleResize = () => {
    setIsLaptop(window.innerWidth >= laptopWidth);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-center mt-12 mb-8 text-2xl text-aluminium">School & Work Experience</h2>
      <VerticalTimeline animate={isLaptop ? true : false} lineColor={"#57EFB4"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#222233",
            color: "#57EFB4",
            boxShadow: "0 3px 0 #57EFB4",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #222233" }}
          date="06.2023 - Present"
          iconStyle={{
            background: "#12121C",
            color: "#57EFB4",
            boxShadow: "0 0 0 4px #57EFB4, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
          }}
          icon={<MdComputer />}
        >
          <h3 className="font-semibold text-lg">Front-end Developer</h3>
          <p className="font-body font-thin">
            Company: FutureSight
            <br />
            City: Remote
          </p>
          <p className="font-body font-thin">React | Tailwind | Rest API | Next | Scrum</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#222233",
            color: "#57EFB4",
            boxShadow: "0 3px 0 #57EFB4",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #222233" }}
          date="06.2022 - 08.2022"
          iconStyle={{
            background: "#12121C",
            color: "#57EFB4",
            boxShadow: "0 0 0 4px #57EFB4, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
          }}
          icon={<MdComputer />}
        >
          <h3 className="font-semibold text-lg">Intern React Enginner</h3>
          <p className="font-body font-thin">
            Company: Acaisoft Poland
            <br />
            City: Gdańsk
          </p>
          <p className="font-body font-thin">React | GraphQL | Material UI | Scrum</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#222233",
            color: "#57EFB4",
            boxShadow: "0 3px 0 #57EFB4",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #222233" }}
          date="10.2020 – 02.2021"
          iconStyle={{
            background: "#12121C",
            color: "#57EFB4",
            boxShadow: "0 0 0 4px #57EFB4, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
          }}
          icon={<MdComputer />}
        >
          <h3 className="font-semibold text-lg">Graphic designer</h3>
          <p className="font-body font-thin">
            Company: Regionalna Pracownia Digitalizacji <br />
            City: Elbląg
          </p>
          <p className="font-body font-thin">Blender | Unity | Adobe Illustrator</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="10.2017 – 11.2021"
          contentStyle={{
            background: "#222233",
            color: "#57EFB4",
            boxShadow: "0 3px 0 #57EFB4",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #222233" }}
          iconStyle={{
            background: "#12121C",
            color: "#57EFB4",
            boxShadow: "0 0 0 4px #57EFB4, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
          }}
          icon={<MdOutlineSchool />}
        >
          <h3 className="font-semibold text-lg">University of Applied Sciences in Elbląg</h3>
          <p className="font-body font-thin">
            Faculty: The Institute of Applied Informatics <br />
            Specializations: 3D Modelling in Medical Applications, Prototyping and Interactive Media Degree: Enginner
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{
            background: "#12121C",
            color: "#57EFB4",
            boxShadow: "0 0 0 4px #57EFB4, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
          }}
          icon={<FaHourglassHalf />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
