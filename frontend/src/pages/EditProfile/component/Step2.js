import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ListInput from "../../../component/formcomponents/ListInput";
import AddButton from "@material-ui/icons/Add";
import RemoveButton from "@material-ui/icons/Remove";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactDatePicker from "react-datepicker";
import Wrapper from "../wrapper/Step2"

const Step2 = ({
  skillsChange,
  educationSet,
  list,
  Addskill,
  Removeskill,
  workSet,
  handleOnEduChange,
  handleAddEdu,
  handleRemoveEdu,
  handleAddWork,
  handleRemoveWork,
  handleOnWorkChange,
}) => {
  return (
    <Wrapper>
      <label htmlFor="">Skills</label>

      {list.skills.map((item, index) => {
        return (
          <ListInput
            handleChange={(e) => skillsChange(e, index)}
            Add={Addskill}
            key={index}
            value={list.skills[index].skill}
            Remove={() => Removeskill(index)}
          />
        );
      })}

      <label htmlFor="">Education</label>

      {educationSet.map((education, index) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "1rem",
              }}
            >
              <Accordion
                style={{
                  width: "85%",
                  background: "inherit",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Education Detail</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <TextField
                      name="degree"
                      value={education.degree}
                      label="Degree Name"
                      onChange={(e) => {
                        handleOnEduChange(e, "degree", index);
                      }}
                      style={{ width: "45%" }}
                      size="small"
                    />
                    <TextField
                      name="college"
                      label="College Name"
                      value={education.college}
                      onChange={(e) => {
                        handleOnEduChange(e, "college", index);
                      }}
                      style={{ width: "45%" }}
                      size="small"
                    />
                  </div>
                  <div
                    style={{
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        distplay: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        name="startDate"
                        label="Start Date"
                        value={education.startDate}
                        onChange={(e) => {
                          handleOnEduChange(e, "startDate", index);
                        }}
                        style={{
                          marginBottom: "1rem",
                        }}
                        size="small"
                      />
                    </div>
                    <div
                      style={{
                        distplay: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        name="endDate"
                        label="End Date"
                        value={education.endDate}
                        onChange={(e) => {
                          handleOnEduChange(e, "endDate", index);
                        }}
                        style={{
                          marginBottom: "1rem",
                        }}
                        size="small"
                      />
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton onClick={() => handleRemoveEdu(index)}>
                  <RemoveButton />
                </IconButton>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton onClick={handleAddEdu}>
                  <AddButton />
                </IconButton>
              </div>
            </div>
          </>
        );
      })}

      <label htmlFor="">Experience</label>
      {workSet.map((work, index) => {
        console.log(work);
        return (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "1rem",
              }}
            >
              <Accordion
                style={{
                  width: "85%",
                  background: "inherit",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Job Detail</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField
                    name="title"
                    label="Job Title"
                    value={work.title}
                    onChange={(e) => {
                      handleOnWorkChange(e, "title", index);
                    }}
                    style={{ width: "100%" }}
                    size="small"
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                      marginTop: "2rem",
                    }}
                  >
                    <TextField
                      name="company"
                      label="Company's Name"
                      value={work.company}
                      onChange={(e) => {
                        handleOnWorkChange(e, "company", index);
                      }}
                      style={{ width: "45%" }}
                      size="small"
                    />
                    <TextField
                      name="location"
                      label="Company's Location"
                      value={work.location}
                      onChange={(e) => {
                        handleOnWorkChange(e, "location", index);
                      }}
                      style={{ width: "45%" }}
                      size="small"
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                      marginTop: "2rem",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "space-between",
                      }}
                    >
                      <h6 style={{ color: "white" }}>Start Date</h6>
                      <TextField
                        name="startDate"
                        label="Start Date"
                        type={"date"}
                        value={work.startDate}
                        onChange={(e) => {
                          handleOnWorkChange(e, "startDate", index);
                        }}
                        size="small"
                      />
                    </div>
                    <div
                      style={{
                        justifyContent: "space-between",
                      }}
                    >
                      <h6 style={{ color: "white" }}>End Date</h6>
                      <TextField
                        name="endDate"
                        label="End Date"
                        type={"date"}
                        value={work.endDate}
                        onChange={(e) => {
                          handleOnWorkChange(e, "endDate", index);
                        }}
                        size="small"
                      />
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton onClick={() => handleRemoveWork(index)}>
                  <RemoveButton />
                </IconButton>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton onClick={handleAddWork}>
                  <AddButton />
                </IconButton>
              </div>
            </div>
          </>
        );
      })}
    </Wrapper>
  );
};

export default Step2;
