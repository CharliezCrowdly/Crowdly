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

const Step2 = ({
  handleChange,
  skillsChange,
  education,
  educationSet,
  list,
  Addskill,
  Removeskill,
  // work,
  workSet,
  handleOnEduChange,
  handleAddEdu,
  handleRemoveEdu,
  handleDateEdu,
  handleAddWork,
  handleRemoveWork,
}) => {
  console.log("workSet", workSet);
  return (
    <div>
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
            <Typography>Education details</Typography>
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
                name="etitle"
                label="Degree Name"
                value={education.etitle}
                onChange={(e) => {
                  handleOnEduChange(e, "etitle", index);
                }}
                style={{ width: "45%" }}
                size="small"
                sx={{ input: { color: "orange !important" } }}
              />
              <TextField
                name="ecollege"
                label="College Name"
                value={education.ecollege}
                onChange={(e) => {
                  handleOnEduChange(e, "ecollege", index);
                }}
                style={{ width: "45%" }}
                size="small"
                sx={{ input: { color: "orange !important" } }}
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
                  name="estart"
                  label="Start Date"
                  value={education.estart}
                  onChange={(e) => {
                    handleOnEduChange(e, "estart", index);
                  }}
                  style={{
                    marginBottom: "1rem",
                  }}
                  size="small"
                  sx={{ input: { color: "orange !important" } }}
                />
              </div>
              <div
                style={{
                  distplay: "flex",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  name="eend"
                  label="End Date"
                  value={education.eend}
                  onChange={(e) => {
                    handleOnEduChange(e, "eend", index);
                  }}
                  style={{
                    marginBottom: "1rem",
                  }}
                  size="small"
                  sx={{ input: { color: "orange !important" } }}
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

      <label htmlFor="">Experience</label>
      {workSet.map((work, index) => {
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
                    name="wtitle"
                    label="Job Title"
                    value={work.wtitle}
                    onChange={(e) => {
                      handleOnWorkChange(e, "wtitle", index);
                    }}
                    style={{ width: "100%" }}
                    size="small"
                    sx={{ input: { color: "orange !important" } }}
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
                      name="wcompany"
                      label="Company's Name"
                      value={work.wcompany}
                      onChange={(e) => {
                        handleOnWorkChange(e, "wcompany", index);
                      }}
                      style={{ width: "45%" }}
                      size="small"
                      sx={{ input: { color: "orange !important" } }}
                    />
                    <TextField
                      name="wlocation"
                      label="Company's Location"
                      value={work.wlocation}
                      onChange={(e) => {
                        handleOnWorkChange(e, "wlocation", index);
                      }}
                      style={{ width: "45%" }}
                      size="small"
                      sx={{ input: { color: "orange !important" } }}
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
                        name="wstart"
                        label="Start Date"
                        value={work.wstart}
                        onChange={(e) => {
                          handleOnWorkChange(e, "wstart", index);
                        }}
                        size="small"
                        sx={{ input: { color: "orange !important" } }}
                      />
                    </div>
                    <div
                      style={{
                        justifyContent: "space-between",
                      }}
                    >
                      <h6 style={{ color: "white" }}>End Date</h6>
                      <TextField
                        name="webd"
                        label="End Date"
                        value={work.wend}
                        onChange={(e) => {
                          handleOnWorkChange(e, "wend", index);
                        }}
                        size="small"
                        sx={{ input: { color: "orange !important" } }}
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
    </div>
  );
};

export default Step2;
