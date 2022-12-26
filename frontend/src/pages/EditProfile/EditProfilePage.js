import React, { useState } from "react";
import tabs from "./utils/tab";
import { Step1, Step2, Step3 } from "./component";
import Wrapper from "./wrapper/EditProfilePage";
import { useAppContext } from "../../context/appContext";
import { Alert } from "../../component";

const EditProfilePage = () => {
  const { user } = useAppContext();
  const { updateUser, isLoading, alertType, changevalue } = useAppContext();

  const formvalue = {
    fullname: user.name,
    skills: user.skillSet ?? [{ skill: "" }],
    description: user.description ?? "",
    educationSet: user.educationSet ?? [
      {
        degree: "",
        college: "",
        startDate: "",
        endDate: "",
      },
    ],
    workSet: user.workSet ?? [
      { title: "", company: "", location: "", startDate: "", endDate: "" },
    ],
    sector: user.sector ?? "",
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
      if (educationSet[0].degree && skills[0].skill && workSet[0].title) {
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

  const [educationSet, setEducationSet] = useState(values.educationSet);

  const handleOnEduChange = (e, property, index) => {
    educationSet[index][property] = e.target.value;
    setEducationSet([...educationSet]);
    setValue({ ...values, educationSet: educationSet });
  };

  const handleOnWorkChange = (e, property, index) => {
    console.log(workset[index]);
    workset[index][property] = e.target.value;
    setworkset([...workset]);
    setValue({ ...values, workSet: workset });
  };

  const [workset, setworkset] = useState(values.workSet);

  const handleAddWork = () => {
    setworkset([
      ...workset,
      {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleRemoveWork = (index) => {
    if (workset.length > 1) {
      const values = [...workset];
      values.splice(index, 1);
      setworkset(values);
    }
  };

  const handleAddEducation = () => {
    setEducationSet([
      ...educationSet,
      {
        degree: "",
        college: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleRemoveEducation = (index) => {
    if (educationSet.length > 1) {
      const values = [...educationSet];
      values.splice(index, 1);
      setEducationSet(values);
    }
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
              handleOnEduChange={handleOnEduChange}
              educationSet={educationSet}
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
            <button onClick={() => setActive((prev) => prev - 1)}>Back</button>
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
