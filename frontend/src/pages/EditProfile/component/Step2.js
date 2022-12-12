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
  Removeresponsibility,
  Addresponsibility,
  responsibilitiesChange,
  Addrequirment,
  requirmentsChange,
  Removerequirment,
  handleOnEduChange,
  handleAddEdu,
  handleRemoveEdu,
  handleDateEdu,
}) => {
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

      <label htmlFor="">Requirements</label>

      {/* {list.requirments.map((item, index) => {
        return (
          <ListInput
            handleChange={(e) => requirmentsChange(e, index)}
            Add={Addrequirment}
            key={index}
            value={list.requirments[index].requirment}
            Remove={() => Removerequirment(index)}
          />
        );
      })} */}
    </div>
  );
};

export default Step2;
