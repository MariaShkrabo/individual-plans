const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const IndividualPlans = sequelize.define("individual_plans", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  year_start: { type: DataTypes.STRING, allowNull: false },
  year_end: { type: DataTypes.STRING, allowNull: false },
  educational_works_hours: { type: DataTypes.DOUBLE },
  educational_and_methodical_works_hours: { type: DataTypes.DOUBLE },
  organizational_and_methodical_works_hours: { type: DataTypes.DOUBLE },
  scientific_and_research_works_hours: { type: DataTypes.DOUBLE },
  information_and_educational_works_hours: { type: DataTypes.DOUBLE },
  total_hours: { type: DataTypes.DOUBLE },
  protocol_number: { type: DataTypes.INTEGER },
  plan_approval_date: { type: DataTypes.DATE },
  // lector_id
});

const Lectors = sequelize.define("lectors", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  surname: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  father_name: { type: DataTypes.STRING },
  position: { type: DataTypes.STRING, allowNull: false },
  academic_title: { type: DataTypes.STRING },
  academic_degree: { type: DataTypes.STRING },
  login: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  employment_date: { type: DataTypes.DATE },
  // faculty_id
  // cathedra_id
});

const Faculties = sequelize.define("faculties", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  full_name: { type: DataTypes.STRING, allowNull: false },
});

const Cathedras = sequelize.define("cathedras", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  full_name: { type: DataTypes.STRING, allowNull: false },
  // faculty_id
});

const Specialties = sequelize.define("specialties", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  full_name: { type: DataTypes.STRING, allowNull: false },
  // cathedra_id
});

const Groups = sequelize.define("groups", {
  number: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  students_number: { type: DataTypes.INTEGER, allowNull: false },
  // specialty_id
});

Lectors.hasOne(IndividualPlans);
IndividualPlans.belongsTo(Lectors);

Faculties.hasMany(Cathedras);
Cathedras.belongsTo(Faculties);

Cathedras.hasMany(Specialties);
Specialties.belongsTo(Cathedras);

Specialties.hasMany(Groups);
Groups.belongsTo(Specialties);

Faculties.hasMany(Lectors);
Lectors.belongsTo(Faculties);

Cathedras.hasMany(Lectors);
Lectors.belongsTo(Cathedras);

module.exports = {
  IndividualPlans,
  Lectors,
  Faculties,
  Cathedras,
  Specialties,
  Groups,
};

// const Work_types = sequelize.define("work_types", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   name: { type: DataTypes.STRING, allowNull: false },
// });

// const Disciplines = sequelize.define("disciplines", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   name: { type: DataTypes.STRING, allowNull: false },
//   full_name: { type: DataTypes.STRING, allowNull: false },
// });

// const Workloads = sequelize.define("workloads", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   date: { type: DataTypes.DATE, allowNull: false },
//   // individual_plan_id
//   // work_type_id
//   // discipline_id
// });

// const Educational_works = sequelize.define("educational_works", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   semester: { type: DataTypes.INTEGER, allowNull: false },
//   educational_streams: { type: DataTypes.INTEGER },
//   actually_done_hours_number: { type: DataTypes.DOUBLE },
//   note: { type: DataTypes.STRING },
//   // individual_plan_id
// });

// const Educational_works_schedules_hours = sequelize.define(
//   "educational_works_schedules_hours",
//   {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     semester: { type: DataTypes.INTEGER, allowNull: false },
//     hours: { type: DataTypes.DOUBLE },
//     // discipline_id
//     // work_type_id
//     // educational_works_id
//   }
// );

// const Groups_for_discipline = sequelize.define("groups_for_discipline", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   // group_number
//   // educational_works_id
// });

// const Educational_and_methodical_works = sequelize.define(
//   "educational_and_methodical_works",
//   {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     hours_number: { type: DataTypes.DOUBLE, allowNull: false },
//     date_start: { type: DataTypes.DATE, allowNull: false },
//     date_end: { type: DataTypes.DATE, allowNull: false },
//     head_of_department_mark: { type: DataTypes.STRING },
//     note: { type: DataTypes.STRING },
//     // individual_plan_id
//   }
// );

// const Organizational_and_methodical_works = sequelize.define(
//   "organizational_and_methodical_works",
//   {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     hours_number: { type: DataTypes.DOUBLE, allowNull: false },
//     date_start: { type: DataTypes.DATE, allowNull: false },
//     date_end: { type: DataTypes.DATE, allowNull: false },
//     head_of_department_mark: { type: DataTypes.STRING },
//     note: { type: DataTypes.STRING },
//     // individual_plan_id
//   }
// );

// const Information_and_educational_works = sequelize.define(
//   "information_and_educational_works",
//   {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     hours_number: { type: DataTypes.DOUBLE, allowNull: false },
//     date_start: { type: DataTypes.DATE, allowNull: false },
//     date_end: { type: DataTypes.DATE, allowNull: false },
//     head_of_department_mark: { type: DataTypes.STRING },
//     note: { type: DataTypes.STRING },
//     // individual_plan_id
//   }
// );

// const Scientific_and_research_works = sequelize.define(
//   "scientific_and_research_works",
//   {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     theme_name: { type: DataTypes.STRING, allowNull: false },
//     // individual_plan_id
//   }
// );

// const Scientific_and_research_students_works = sequelize.define(
//   "scientific_and_research_students_works",
//   {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     hours_number: { type: DataTypes.DOUBLE, allowNull: false },
//     date_start: { type: DataTypes.DATE, allowNull: false },
//     date_end: { type: DataTypes.DATE, allowNull: false },
//     reporting_form: { type: DataTypes.STRING },
//     head_of_department_mark: { type: DataTypes.STRING },
//     note: { type: DataTypes.STRING },
//     // scientific_and_research_id
//   }
// );

// const Scientific_and_research_work_stages = sequelize.define(
//   "scientific_and_research_work_stages",
//   {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     hours_number: { type: DataTypes.DOUBLE, allowNull: false },
//     date_start: { type: DataTypes.DATE, allowNull: false },
//     date_end: { type: DataTypes.DATE, allowNull: false },
//     reporting_form: { type: DataTypes.STRING },
//     head_of_department_mark: { type: DataTypes.STRING },
//     note: { type: DataTypes.STRING },
//     // scientific_and_research_id
//   }
// );
