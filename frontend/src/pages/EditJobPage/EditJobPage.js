import React, { useState, useEffect } from "react";
import tabs from "./utils/tab";
import { Step1, Step2, Step3 } from "./component";
import Wrapper from "./wrapper/AddJobPage";
import { useAppContext } from "../../context/appContext";
import { Alert } from "../../component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditJobPage = () => {
  const { token, user, updateJob, isLoading,alertType } = useAppContext();
  const navigate = useNavigate();
  const [owner, setOwner] = useState(false);
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState("");

  const formvalue = {
    title: "",
    sector: "",
    experiencelvl: "",
    jobtype: "",
    skills: [{ skill: "" }],
    sallary: "",
    description: "",
    responsibilities: [{ responsibility: "" }],
    requirments: [{ requirement: "" }],
    closeTime: "",
  };
  const [values, setValue] = useState(formvalue);
  const [activeindex, setActive] = useState(1);
  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setValue({ ...values, [e.target.name]: e.target.files[0] });
    } else {
      setValue({ ...values, [e.target.name]: e.target.value });
    }
  };
  const { id } = useParams();

  const handleChange2 = (name, value) => {
    setValue({ ...values, [name]: value });
  };
  const skillsChange = (e, index) => {
    var newskill = values.skills;
    newskill[index].skill = e.target.value;
    setValue({ ...values, skills: newskill });
  };
  const Addskill = () => {
    var newskill = values.skills;
    if (newskill.length <= 7) {
      newskill.push({ skill: "" });
      setValue({ ...values, skills: newskill });
    }
  };
  const Removeskill = (index) => {
    if (values.skills.length > 1) {
      console.log("removed");
      var newSkills = values.skills;
      newSkills.splice(index, 1);
      setValue({ ...values, skills: newSkills });
    }
  };

  const responsibilitiesChange = (e, index) => {
    var newskill = values.responsibilities;
    newskill[index].responsibility = e.target.value;
    setValue({ ...values, responsibilities: newskill });
  };
  const Addresponsibility = () => {
    var newskill = values.responsibilities;
    if (newskill.length <= 7) {
      newskill.push({ responsibility: "" });
      setValue({ ...values, responsibilities: newskill });
    }
  };
  const Removeresponsibility = (index) => {
    if (values.responsibilities.length > 1) {
      var newSkills = values.responsibilities;
      newSkills.splice(index, 1);
      setValue({ ...values, responsibilities: newSkills });
    }
  };

  const requirmentsChange = (e, index) => {
    var newskill = values.requirments;
    newskill[index].requirement = e.target.value;
    setValue({ ...values, requirments: newskill });
  };
  const Addrequirment = () => {
    var newskill = values.requirments;
    if (newskill.length <= 7) {
      newskill.push({ requirement: "" });
      setValue({ ...values, requirments: newskill });
    }
  };
  const Removerequirment = (index) => {
    if (values.requirments.length > 1) {
      var newSkills = values.requirments;
      newSkills.splice(index, 1);
      setValue({ ...values, requirments: newSkills });
    }
  };

  const onsave = () => {
    const {
      title,
      sector,
      experiencelvl,
      jobtype,
      skills,
      sallary,
      description,
      responsibilities,
      requirments,
      closeTime,
    } = values;

    if (activeindex === 1) {
      if (title && sector && experiencelvl && jobtype && skills && sallary) {
        setActive(2);
      }
    }
    if (activeindex === 2) {
      if (
        responsibilities[0].responsibility &&
        skills[0].skill &&
        requirments[0].requirement
      ) {
        setActive(3);
      }
    }

    if (activeindex === 3) {
      if (closeTime && description) {
        updateJob({ values, id: values.id });
      }
    }
  };

  // useEffect(() => {
  //   if (alertType === "success") {
  //     setValue(formvalue);
  //     setActive(1);

  //     if (jobid) {
  //       setTimeout(() => {
  //         navigate(`/job/jobDetail/${jobid}`);
  //       }, 3000);
  //     }
  //   }
  // }, [alertType]);

  const fetch = async () => {
    await axios
      .get(
        `http://localhost:5000/api/v1/job/getJob/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          params: {
            id: id,
          },
        }
      )
      .then((res) => {
        const {
          _id,
          title,
          sector,
          experiencelvl,
          jobtype,
          skills,
          sallary,
          description,
          responsibilities,
          requirements,
          closeDate,
        } = res.data.data;

        const newvalue = {
          id: _id,
          title: title,
          sector: sector,
          experiencelvl: experiencelvl,
          jobtype: jobtype,
          skills: skills,
          sallary: sallary,
          description: description,
          responsibilities: responsibilities,
          requirments: requirements,
          closeTime: closeDate,
        };
        console.log(res.data.data);
        setValue(newvalue);

        setLoading(false);
        setOwner(res.data.data.company._id == user._id);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (alertType === "success") {
      setActive(1);

      if (values.id) {
        setTimeout(() => {
          navigate(`/job/jobDetail/${values.id}`);
        }, 3000);
      }
    }
  }, [alertType]);

  if (loading) {
    return <div></div>;
  }
  return (
    <Wrapper className="">
      <section className="alerty">
        <Alert />
      </section>
      <div className="content glassmorphism">
        <section className="tabs-container">
          {tabs.map((item, index) => {
            return (
              <div
                className={
                  activeindex >= item.id ? "singletab active" : "singletab"
                }
                key={item.id}
                onClick={() => setActive(item.id)}
              >
                {item.text}
              </div>
            );
          })}
        </section>

        <section className="form-section ">
          <div className={activeindex === 1 ? "form-child" : "d-none"}>
            <Step1
              values={values}
              handleChange={handleChange}
              handleChange2={handleChange2}
            />
          </div>
          <div className={activeindex === 2 ? "form-child" : "d-none"}>
            <Step2
              handleChange={handleChange}
              list={values}
              Addskill={Addskill}
              skillsChange={skillsChange}
              Removeskill={Removeskill}
              Addresponsibility={Addresponsibility}
              responsibilitiesChange={responsibilitiesChange}
              Removeresponsibility={Removeresponsibility}
              requirmentsChange={requirmentsChange}
              Addrequirment={Addrequirment}
              Removerequirment={Removerequirment}
            />
          </div>

          <div className={activeindex === 3 ? "form-child" : "d-none"}>
            <Step3 values={values} handleChange={handleChange} />
          </div>
        </section>
        <section className="save ">
          {activeindex === 1 ? null : (
            <button onClick={() => setActive((prev) => prev - 1)}>back</button>
          )}
          <button onClick={onsave} disabled={isLoading}>
            {" "}
            {activeindex === 3 ? "Save" : "Next"}
          </button>
        </section>
      </div>
    </Wrapper>
  );
};

export default EditJobPage;
