import React from "react";
import { useAppContext } from "../../../../context/appContext";
import Wrapper from "../../wrappers/Cv";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import moment from "moment";
const Cv = () => {
  const { profileUser } = useAppContext();
  const { description, skillSet, workSet, educationSet } = profileUser;

  return (
    <Wrapper className="About">
      <h1>About</h1>

      <p>{description}</p>

      <div className="information">
        <div className="skills">
          <h1>Skill</h1>
          <div className="list">
            {skillSet.map((item, index) => {
              return <button key={index}>{item.skill}</button>;
            })}
          </div>
        </div>
      </div>

      <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>Education</h1>
      <div className="educationlst">
        {educationSet.map((item, index) => {
          return (
            <Accordion key={index} className="education">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontWeight: "bolder" }}>
                  {item.degree}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <span style={{ fontWeight: "bold" }}>College: </span>
                  <span>{item.college}</span>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Starting: </span>
                    <span>{item.college}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Starting: </span>
                    <span>{item.startDate}</span>
                  </div>

                  <div>
                    <span style={{ fontWeight: "bold" }}>EndDate: </span>
                    <span>{item.endDate}</span>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>

      <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
        Work Experience
      </h1>

      <div className="educationlst">
        {workSet.map((item, index) => {
          const startDate = moment(item.startDate);
          const endDate = moment(item.endDate);

          const timespan = endDate.diff(startDate);

          const timespanString = moment.utc(timespan).format("YYYY-MM-DD");
          return (
            <Accordion key={index} className="education">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontWeight: "bolder" }}>
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <span style={{ fontWeight: "bold" }}>Company: </span>
                  <span>{item.company}</span>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Location: </span>
                    <span>{item.location}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Starting: </span>
                    <span>{item.startDate}</span>
                  </div>

                  <div>
                    <span style={{ fontWeight: "bold" }}>EndDate: </span>
                    <span>{item.endDate}</span>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Cv;
