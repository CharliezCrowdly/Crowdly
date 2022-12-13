import React, { useState } from "react";
import tabs from "./utils/tab";
import { Step1, Step2, Step3 } from "./component";
import Wrapper from "./wrapper/EditProfilePage";
import { useAppContext } from "../../context/appContext";
import { Alert } from "../../component";
// import {user} from

const EditProfilePage = () => {
  const { user } = useAppContext();
  const { updateUser, isLoading, alertType } = useAppContext();

  const formvalue = {
    fullname: user.name,
    skills: user.skills ?? [{ skill: "" }],
    description: user.description ?? "",
    educationSet: user.educationSet ?? [
      {
        etitle: "",
        ecollege: "",
        estart: "",
        eend: "",
      },
    ],
    workSet: user.experienceSet ?? [
      { wtitle: "", wcompany: "", wlocation: "", wstart: "", wend: "" },
    ],
  };

  const [values, setValue] = useState(formvalue);
  const [activeindex, setActive] = useState(1);
  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setValue({ ...values, [e.target.name]: e.target.files[0] });
    } else {
      console.log("else", e.target.value, e.target.name);
      setValue({ ...values, [e.target.name]: e.target.value });
    }
  };

  const handleChange2 = (name, value) => {
    setValue({ ...values, [name]: value });
  };
  const skillsChange = (e, index) => {
    var newskill = values.skills;
    newskill[index].skill = e.target.value;
    setValue({ ...values, skills: newskill });
  };
  const handleDateEdu = (date, index, type) => {
    const { data, errors } = this.state;
    data.educationSet[index][type] = date;
    this.setState({ data, errors });
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
    const { fullname, sector, skills, educationSet, workSet, description } =
      values;
    console.log(values);

    if (activeindex === 1) {
      if (fullname && sector) {
        setActive(2);
      }
    }
    if (activeindex === 2) {
      if (educationSet[0].etitle && skills[0].skill && workSet[0].wtitle) {
        setActive(3);
      }
    }

    if (activeindex === 3) {
      if (description) {
        console.log(values);
        updateUser({ values });

        if (alertType === "success") {
          setValue(formvalue);
          setActive(1);
        }
      }
    }
  };

  const [educationSet, setEducationSet] = useState([
    {
      etitle: "",
      ecollege: "",
      estart: "",
      eend: "",
    },
  ]);

  // educationSet: [{ etitle: "", ecollege: "", estart: "", eend: "" }],
  if (user.education && user.education.length > 0) {
    setEducationSet(
      user.education.map((edu) => {
        return {
          etitle: edu.title,
          ecollege: edu.college,
          estart: edu.estart,
          eend: edu.eend,
        };
      })
    );
  }

  if (user.experience && user.experience.length > 0) {
    setworkset(
      user.experience.map((work) => {
        return {
          wtitle: work.title,
          wcompany: work.company,
          wlocation: work.location,
          wstart: "",
          wend: "",
        };
      })
    );
  }

  const handleOnEduChange = (e, property, index) => {
    // e.target.value.length <= 0
    //   ? (errors[e.target.name] = ` ${e.target.name} must not be null`)
    //   : (errors[e.target.name] = "");
    // setEducationSet([...educationSet, { [[index][property]]: e.target.value }]);
    educationSet[index][property] = e.target.value;
    setEducationSet([...educationSet]);
    setValue({ ...values, educationSet: educationSet });
  };

  const handleOnWorkChange = (e, property, index) => {
    workset[index][property] = e.target.value;
    setworkset([...workset]);
    setValue({ ...values, workSet: workset });
  };

  const [workset, setworkset] = useState([
    {
      wtitle: "",
      wcompany: "",
      wlocation: "",
      wstart: "",
      wend: "",
    },
  ]);

  const handleAddWork = () => {
    setworkset([
      ...workset,
      {
        wtitle: "",
        wcompany: "",
        wlocation: "",
        wstart: "",
        wend: "",
      },
    ]);
  };

  const handleRemoveWork = (index) => {
    const values = [...workset];
    values.splice(index, 1);
    setworkset(values);
  };

  const handleAddEducation = () => {
    setEducationSet([
      ...educationSet,
      {
        etitle: "",
        ecollege: "",
        estart: "",
        eend: "",
      },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const values = [...educationSet];
    values.splice(index, 1);
    setEducationSet(values);
  };

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
              handleOnEduChange={handleOnEduChange}
              educationSet={educationSet}
              handleDateEdu={handleDateEdu}
              workSet={workset}
              // work={work}
              handleAddWork={handleAddWork}
              handleRemoveWork={handleRemoveWork}
              handleAddEdu={handleAddEducation}
              handleRemoveEdu={handleRemoveEducation}
              handleOnWorkChange={handleOnWorkChange}
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

export default EditProfilePage;
