import { useFieldArray } from "react-hook-form";
import classes from "../scientific_and_research_work.module.scss";
import Input from "../../../../shared/components/Input/Input";

const ScientificAndResearchWorkStages = ({control}) => {
  const name = "scientific_and_research_work_stages";

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: name,
  });

  return (
    <ul className={classes["scientific_and_research_students_works"]}>
      {fields.map((item, index) => {
        return (
          <li
            key={item.id}
            className={classes["educational-and-methodical-work__item"]}
          >
            <div
              className={classes["educational-and-methodical-work__control"]}
            >
              <Input
                name={`${name}.${index}.name`}
                placeholder="Наименование работ"
                control={control}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ScientificAndResearchWorkStages;
