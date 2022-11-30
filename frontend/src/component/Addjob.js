import AddButton from "@material-ui/icons/Add";
import RemoveButton from "@material-ui/icons/Remove";
import { IconButton, MenuItem, TextField } from "@mui/material";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DateTimePicker from "react-datetime-picker";

import "./style.css";

const job = {
    title: "",
    about: "",
    sallary: "",
    description: "",
    sector: "",

    skillSet: [{ skill: "" }],

    responsibilitiesSet: [{ responsibility: "" }],

    requirementsSet: [{ requirement: "" }],
    closeTime: "",
  }
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
const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddJob({ ...addJob, [name]: value });
  };
  const handleDateInput = (e) => {
    setAddJob({ ...addJob, closeTime: e });
  };
  const handleEventSubmit = async (e) => {
    e.preventDefault();
    const token = await JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        addEvent,
        {
          title: event.title,
          note: event.note,
          date: event.date,
          startTime: event.startTime,
          endTime: event.endTime,
        },
        config
      )
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          getEvents();
          closeEventModel();
          setEvent({
            title: "",
            note: "Lorem Epsum",
            date: new Date(),
            startTime: "9:00",
            endTime: "10:00",
          });
          toast.success("Event was added successfully", toastOptions);
        } else {
          toast.error(result.data.msg, toastOptions);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.msg, toastOptions);
      });
  };

export const Addjob = ({
  showModal,
  setShowModal,
//   job,

}) => {
    const [event, setEvent] = useState({
        title: "",
        note: "Lorem Epsum",
        date: new Date(),
        startTime: "9:00",
        endTime: "10:00",
      });
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
          addJob.about === "" ||
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
        extractSkills();
        extractRequirements();
        extractResponsibilities();
        const title = addJob.title;
        const about = addJob.about;
        const sallary = addJob.sallary;
        const description = addJob.description;
        const closeTime = addJob.closeTime;
        const sector = addJob.sector;
        if (validateInputedData()) {
          const response = await axios.post(addNewJob, {
            title,
            about,
            sallary,
            description,
            skills,
            requirements,
            responsibilities,
            closeTime,
            company,
            sector,
          });
          if (response.data.success) {
            toast.success(response.data.msg, toastOptions);
            setAddJob({
              title: "",
              about: "",
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
      }
  return (
    <>
      {true ? (
        <Modal show={true} onHide={setShowModal} className="modalStyle">
          <form>
            <Modal.Header
              closeButton
              onClick={setShowModal}
              className="flex-column-reverse align-items-center"
            >
              <div className="ModalHead d-flex justify-content-center align-items-center">
                <h1 style={{ color: "white" }}>Create a New Job</h1>
              </div>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#1d1f27" }}>
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
                  value={job.title}
                  onChange={handleJobInput}
                  InputLabelProps={{
                    style: {
                      color: "#fff",
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
                  value={job.sallary}
                  onChange={handleJobInput}
                  InputLabelProps={{
                    style: {
                      color: "#fff",
                      borderColor: "#fff",
                    },
                  }}
                />
                <TextField
                  id="outlined-select-type"
                  select
                  label="Job Sector"
                  name="sector"
                  value={job.sector}
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
                  <h4
                    style={{ marginBottom: 0, color: "#ccc" }}
                    className="mb-2"
                  >
                    Expires On:
                  </h4>
                  <DateTimePicker
                    onChange={handleDateInput}
                    value={job.closeTime}
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
                  {job.skillSet.map((skills, index) => {
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
                            style: { color: "#fff" },
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
                {job.requirementsSet.map((requirements, index) => {
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
                          style: { color: "#fff" },
                        }}
                        sx={{ input: { color: "orange !important" } }}
                      />
                      <IconButton
                        onClick={() => handleRemoveRequirement(index)}
                      >
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
                {job.responsibilitiesSet.map((responsibilities, index) => {
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
                          style: { color: "#fff" },
                        }}
                        sx={{ input: { color: "orange !important" } }}
                      />
                      <IconButton
                        onClick={() => handleRemoveResponsibility(index)}
                      >
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
                  About this Job
                </h4>
                <TextField
                  required
                  id="outlined-multiline-flexible1"
                  label="About This Job"
                  name="about"
                  multiline
                  minRows={6}
                  style={{ width: "100%" }}
                  value={job.about}
                  onChange={handleJobInput}
                  InputLabelProps={{
                    style: { color: "#fff", borderColor: "#fff" },
                  }}
                />
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
                  value={job.description}
                  onChange={handleJobInput}
                  InputLabelProps={{
                    style: { color: "#fff", borderColor: "#fff" },
                  }}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={setShowModal} size="md">
                Cancle
              </Button>
              <Button
                variant="success"
                onClick={handleSubmit}
                size="md"
                type="submit"
              >
                Create
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      ) : null}
    </>
  );
};