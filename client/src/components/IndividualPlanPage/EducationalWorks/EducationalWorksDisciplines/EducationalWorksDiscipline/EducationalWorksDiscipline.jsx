import { useCallback, useEffect, useState } from "react";
import CustomButton from "../../../../../shared/components/Button/Button";
import Input from "../../../../../shared/components/Input/Input";
import CustomSelect from "../../../../../shared/components/Select/Select";
import { buttonThemes, colors } from "../../../../../shared/enums";
import classes from "./../../educational-work.module.scss";
import request from "../../../../../shared/api/request";
import {
  GET_FACULTIES,
  GET_GROUPS,
  GET_SPECIALTY_BY_FACULTY,
} from "../../../../../shared/api/requests";
import { WORK_TYPES } from "../../../../../shared/constants";

const EducationalWorksDiscipline = ({
  name,
  control,
  index,
  remove,
  watch,
  setValue,
}) => {
  const facultyId = watch(`${name}.${index}.faculty_id`);
  const specialtyId = watch(`${name}.${index}.specialty_id`);
  const groupsForDiscipline = watch(`${name}.${index}.groups`);

  const [faculties, setFaculties] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [groups, setGroups] = useState([]);

  const initFacultyData = useCallback(async () => {
    const faculties = await request(GET_FACULTIES);
    setFaculties(faculties);
  }, []);

  const initSpecialtyData = useCallback(async () => {
    const specialties = await request(GET_SPECIALTY_BY_FACULTY(facultyId));
    setSpecialties(specialties);
  }, [facultyId]);

  const initGroupData = useCallback(async () => {
    const groups = await request(GET_GROUPS(specialtyId));
    setGroups(groups);
  }, [specialtyId]);

  useEffect(() => {
    let students = 0;
    groups.forEach((group) => {
      groupsForDiscipline.forEach((groupForDiscipline) => {
        if (groupForDiscipline === group.number) {
          students += group.students_number;
        }
      });
    });
    setValue(`${name}.${index}.students_quantity`, students);
  }, [groups, groupsForDiscipline, index, name, setValue]);

  useEffect(() => {
    initFacultyData();
    if (facultyId) {
      initSpecialtyData();
    }
    if (specialtyId) {
      initGroupData();
    }
  }, [
    facultyId,
    initFacultyData,
    initGroupData,
    initSpecialtyData,
    specialtyId,
  ]);

  return (
    <li className={classes["educational-work__item"]}>
      <div className={classes["educational-work__control"]}>
        <Input
          name={`${name}.${index}.discipline`}
          placeholder="Наименование учебной дисциплины"
          control={control}
        />
      </div>
      <div className={classes["educational-work__control"]}>
        <CustomSelect
          name={`${name}.${index}.faculty_id`}
          placeholder="Факультет"
          control={control}
          options={faculties}
        />
      </div>
      <div className={classes["educational-work__control"]}>
        <CustomSelect
          name={`${name}.${index}.specialty_id`}
          placeholder="Специальность"
          control={control}
          options={specialties}
          disabled={facultyId ? false : true}
        />
      </div>
      <div className={classes["educational-work__control"]}>
        <CustomSelect
          name={`${name}.${index}.groups`}
          placeholder="№№ групп"
          control={control}
          options={groups}
          disabled={specialtyId ? false : true}
          multiple={true}
        />
      </div>
      <div className={classes["educational-work__control"]}>
        <Input
          name={`${name}.${index}.students_quantity`}
          placeholder="Количество студентов"
          control={control}
          disabled={true}
        />
      </div>
      <div className={classes["educational-work__control"]}>
        <Input
          name={`${name}.${index}.educational_streams`}
          placeholder="Число потоков"
          control={control}
          type="number"
        />
      </div>

      <p className={classes["educational-work__text"]}>Число часов</p>
      <div className={classes["educational-work__hours-section"]}>
        {WORK_TYPES.map((type) => (
          <div
            key={type.id}
            className={classes["educational-work__hours-section-item"]}
          >
            <Input
              name={`${name}.${index}.${type.name}`}
              placeholder={`${type.placeholder}`}
              control={control}
              type="number"
            />
          </div>
        ))}
      </div>

      <div className={classes["educational-work__control"]}>
        <Input
          name={`${name}.${index}.actually_done_hours_number`}
          placeholder="Фактически выполнено часов"
          control={control}
        />
      </div>
      <div className={classes["educational-work__control"]}>
        <Input
          name={`${name}.${index}.note`}
          placeholder="Примечание"
          control={control}
        />
      </div>
      <CustomButton
        color={colors.error}
        theme={buttonThemes.form}
        type="button"
        onClick={() => remove(index)}
      >
        Удалить
      </CustomButton>
    </li>
  );
};

export default EducationalWorksDiscipline;
