import React, { useState } from "react";
import ListInput from "../../../component/formcomponents/ListInput";

const Step2 = ({
  handleChange,
  skillsChange,
  list,
  Addskill,
  Removeskill,
  Removeresponsibility,
  Addresponsibility,
  responsibilitiesChange,
  Addrequirment,
  requirmentsChange,
  Removerequirment
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

      <label htmlFor="">Responsiblities</label>

      {list.responsibilities.map((item, index) => {
        return (
          <ListInput
            handleChange={(e) => responsibilitiesChange(e, index)}
            Add={Addresponsibility}
            key={index}
            value={list.responsibilities[index].responsiblity}
            Remove={() => Removeresponsibility(index)}
          />
        );
      })}

      <label htmlFor="">Requirements</label>

      {list.requirments.map((item, index) => {
        return (
          <ListInput
            handleChange={(e) => requirmentsChange(e, index)}
            Add={Addrequirment}
            key={index}
            value={list.requirments[index].requirment}
            Remove={() => Removerequirment(index)}
          />
        );
      })}
    </div>
  );
};

export default Step2;
