import AddButton from "@material-ui/icons/Add";
import RemoveButton from "@material-ui/icons/Remove";
import { IconButton, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { AiFillCloseCircle } from "react-icons/ai";
import "./style.css";
import axios from "axios";
import { toast } from "react-toastify";

var skills = [];
var requirements = [];
var responsibilities = [];

// const job = {
//   title: "",
//   sallary: "",
//   description: "",
//   sector: "",

//   skillSet: [{ skill: "" }],

//   responsibilitiesSet: [{ responsibility: "" }],

//   requirementsSet: [{ requirement: "" }],
//   closeTime: "",
// };
const sectors = [
  {
    value: "Information Technology",
    label: "Information Technology",
  },
  {
    value: "Health",
    label: "Health",
  },
  {
    value: "Entertainment",
    label: "Entertainment",
  },
  {
    value: "Real Estate",
    label: "Real Estate",
  },
  {
    value: "Finance",
    label: "Finance",
  },
];

export const Addjob = ({ closemodal }) => {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [addJob, setAddJob] = useState({
    title: "",
    sallary: "",
    description: "",
    sector: "",

    skillSet: [{ skill: "" }],

    responsibilitiesSet: [{ responsibility: "" }],

    requirementsSet: [{ requirement: "" }],
    closeTime: "",
  });
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddJob({ ...addJob, [name]: value });
  };
  const handleDateInput = (e) => {
    setAddJob({ ...addJob, closeTime: e });
  };

  const handleAddSkill = () => {
    var newSkills = addJob.skillSet;
    newSkills.push({ skill: "" });
    setAddJob({ ...addJob, skillSet: newSkills });
  };
  const handleRemoveSkill = (index) => {
    var newSkills = addJob.skillSet;
    newSkills.splice(index, 1);
    setAddJob({ ...addJob, skillSet: newSkills });
  };
  const handleOnSkillChange = (e, index) => {
    var newSkills = addJob.skillSet;
    newSkills[index].skill = e.target.value;
    setAddJob({ ...addJob, skillSet: newSkills });
  };
  const handleAddRequirement = () => {
    var newSkills = addJob.requirementsSet;
    newSkills.push({ requirement: "" });
    setAddJob({ ...addJob, requirementsSet: newSkills });
  };
  const handleRemoveRequirement = (index) => {
    var newSkills = addJob.requirementsSet;
    newSkills.splice(index, 1);
    setAddJob({ ...addJob, requirementsSet: newSkills });
  };
  const handleOnResponsibilityChange = (e, index) => {
    var newSkills = addJob.responsibilitiesSet;
    newSkills[index].responsibility = e.target.value;
    setAddJob({ ...addJob, responsibilitiesSet: newSkills });
  };
  const handleAddResponsibility = () => {
    var newSkills = addJob.responsibilitiesSet;
    newSkills.push({ responsibility: "" });
    setAddJob({ ...addJob, responsibilitiesSet: newSkills });
  };
  const handleRemoveResponsibility = (index) => {
    var newSkills = addJob.responsibilitiesSet;
    newSkills.splice(index, 1);
    setAddJob({ ...addJob, responsibilitiesSet: newSkills });
  };
  const handleOnRequirementChange = (e, index) => {
    var newSkills = addJob.requirementsSet;
    newSkills[index].requirement = e.target.value;
    setAddJob({ ...addJob, requirementsSet: newSkills });
  };
  //Functions for extracting inputs
  const extractSkills = () => {
    addJob.skillSet.forEach(function (value) {
      if (value.skill !== "") skills.push(value.skill);
    });
  };
  const extractRequirements = () => {
    addJob.requirementsSet.forEach(function (value) {
      if (value.requirement !== "") requirements.push(value.requirement);
    });
  };
  const extractResponsibilities = () => {
    addJob.responsibilitiesSet.forEach(function (value) {
      if (value.responsibility !== "")
        responsibilities.push(value.responsibility);
    });
  };
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const validateInputedData = () => {
    if (
      addJob.title === "" ||
      addJob.sallary === "" ||
      addJob.description === "" ||
      skills.length === 0 ||
      requirements.length === 0 ||
      responsibilities.length === 0 ||
      addJob.closeTime === "" ||
      addJob.sector === ""
    ) {
      toast.error("Please Fill all the fields", toastOptions);
      return false;
    } else {
      return true;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    extractSkills();
    extractRequirements();
    extractResponsibilities();
    const title = addJob.title;
    const sallary = addJob.sallary;
    const description = addJob.description;
    const closeTime = addJob.closeTime;
    const sector = addJob.sector;
    if (validateInputedData()) {
      console.log(
        title,
        sallary,
        description,
        skills,
        requirements,
        responsibilities,
        closeTime,
        sector
      );
      const response = await axios.post(
        "http://localhost:5000/api/v1/job/addJob",
        {
          title,
          sallary,
          description,
          skills,
          requirements,
          responsibilities,
          closeTime,
          sector,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        toast.success(response.data.msg, toastOptions);
        setAddJob({
          title: "",

          sallary: "",
          description: "",
          sector: "",
          skillSet: [{ skill: "" }],
          responsibilitiesSet: [{ responsibility: "" }],
          requirementsSet: [{ requirement: "" }],
          closeTime: "",
        });
        skills = [];
        responsibilities = [];
        requirements = [];
      } else {
        toast.error(response.data.msg, toastOptions);
      }
    }
  };

  return (
    <div className="form-containerss glassmorphism">
      <form className="glassmorphism">
        <div className="ModalHead d-flex justify-content-center align-items-center">
          <h1 style={{ color: "black" }}>Create a New Job</h1>
        </div>
        <div>
          <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
            Basic Information
          </h4>
          <TextField
            required
            id="outlined-multiline-flexible1"
            label="Job Title"
            name="title"
            style={{
              width: "100%",
              marginBottom: "1rem",
              borderColor: "#fff !important",
            }}
            value={addJob.title}
            onChange={handleJobInput}
            InputLabelProps={{
              style: {
                color: "black",
                borderColor: "#fff",
              },
            }}
          />
          <TextField
            type="number"
            required
            id="outlined-multiline-flexible1"
            label="Sallary"
            name="sallary"
            style={{ width: "100%", marginBottom: "1rem" }}
            value={addJob.sallary}
            onChange={handleJobInput}
            InputLabelProps={{
              style: {
                color: "black",
                borderColor: "#fff",
              },
            }}
          />
          <TextField
            id="outlined-select-type"
            select
            label="Job Sector"
            name="sector"
            value={addJob.sector}
            onChange={handleJobInput}
            variant="outlined"
            style={{ width: "100%" }}
            size="small"
            InputLabelProps={{
              style: {
                color: "#fff",
                borderColor: "#fff",
              },
            }}
          >
            {sectors.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <div>
            <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
              Expires On:
            </h4>
            <DateTimePicker
              onChange={handleDateInput}
              value={addJob.closeTime}
              name="closeTime"
              style={{ width: "100%" }}
              minDate={new Date()}
            />
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
            Skills Required
          </h4>
          <div className="mb-2">
            {/* <Skill style={{ background: "#0dcaf0" }}>Python</Skill> */}
            {addJob.skillSet.map((skills, index) => {
              return (
                <div style={{ display: "flex", marginBottom: "1rem" }}>
                  <TextField
                    required
                    size="small"
                    name="skill"
                    label="Skill"
                    value={skills.skill}
                    onChange={(e) => {
                      handleOnSkillChange(e, index);
                    }}
                    style={{ width: "90%", textTransform: "capitalize" }}
                    InputLabelProps={{
                      style: { color: "black" },
                    }}
                    sx={{ input: { color: "orange !important" } }}
                  />
                  <IconButton onClick={() => handleRemoveSkill(index)}>
                    <RemoveButton style={{ color: "orange" }} />
                  </IconButton>
                  <IconButton onClick={handleAddSkill}>
                    <AddButton style={{ color: "orange" }} />
                  </IconButton>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
            Job Requirements
          </h4>
          {addJob.requirementsSet.map((requirements, index) => {
            return (
              <div style={{ display: "flex", marginBottom: "1rem" }}>
                <TextField
                  required
                  size="small"
                  name="requirement"
                  label="requirement"
                  value={requirements.requirement}
                  onChange={(e) => {
                    handleOnRequirementChange(e, index);
                  }}
                  style={{ width: "90%", textTransform: "capitalize" }}
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  sx={{ input: { color: "orange !important" } }}
                />
                <IconButton onClick={() => handleRemoveRequirement(index)}>
                  <RemoveButton style={{ color: "orange" }} />
                </IconButton>
                <IconButton onClick={handleAddRequirement}>
                  <AddButton style={{ color: "orange" }} />
                </IconButton>
              </div>
            );
          })}
        </div>
        <div>
          <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
            Job Responsibilities
          </h4>
          {addJob.responsibilitiesSet.map((responsibilities, index) => {
            return (
              <div style={{ display: "flex", marginBottom: "1rem" }}>
                <TextField
                  required
                  size="small"
                  name="responsibility"
                  label="responsibility"
                  value={responsibilities.responsibility}
                  onChange={(e) => {
                    handleOnResponsibilityChange(e, index);
                  }}
                  style={{ width: "90%", textTransform: "capitalize" }}
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                  sx={{ input: { color: "orange !important" } }}
                />
                <IconButton onClick={() => handleRemoveResponsibility(index)}>
                  <RemoveButton style={{ color: "orange" }} />
                </IconButton>
                <IconButton onClick={handleAddResponsibility}>
                  <AddButton style={{ color: "orange" }} />
                </IconButton>
              </div>
            );
          })}
        </div>

        <div>
          <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
            Describe this Job
          </h4>
          <TextField
            required
            id="outlined-multiline-flexible1"
            label="Describe this Job"
            name="description"
            multiline
            minRows={6}
            style={{ width: "100%" }}
            value={addJob.description}
            onChange={handleJobInput}
            InputLabelProps={{
              style: { color: "black", borderColor: "#fff" },
            }}
          />
        </div>
        <button
          variant="success"
          onClick={handleSubmit}
          size="md"
          type="submit"
          className="btn btn-success"
        >
          Create
        </button>
      </form>
      <AiFillCloseCircle className="icon-close" onClick={closemodal} />
    </div>
  );
};
