const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const IndividualPlans = sequelize.define("individual_plans", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  year_start: { type: DataTypes.DATE },
  year_end: { type: DataTypes.DATE },
  educational_works_hours: { type: DataTypes.DOUBLE, defaultValue: 0 },
  educational_and_methodical_works_hours: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
  },
  organizational_and_methodical_works_hours: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
  },
  scientific_and_research_works_hours: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
  },
  information_and_educational_works_hours: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
  },
  total_hours: { type: DataTypes.DOUBLE, defaultValue: 0, allowNull: false },
  protocol_number: { type: DataTypes.INTEGER },
  plan_approval_date: { type: DataTypes.DATE },
  scientific_and_research_theme_name: { type: DataTypes.STRING },
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
  head_surname: { type: DataTypes.STRING, allowNull: false },
  head_name: { type: DataTypes.STRING, allowNull: false },
  head_father_name: { type: DataTypes.STRING },
  // faculty_id
});

const Specialties = sequelize.define("specialties", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  full_name: { type: DataTypes.STRING, allowNull: false },
  number: { type: DataTypes.STRING, allowNull: false },
  // cathedra_id
});

const Groups = sequelize.define("groups", {
  number: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  students_number: { type: DataTypes.INTEGER, allowNull: false },
  // specialty_id
});

const EducationalAndMethodicalWorks = sequelize.define(
  "educational_and_methodical_works",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    hours_number: { type: DataTypes.DOUBLE, allowNull: false },
    date_start: { type: DataTypes.DATE, allowNull: false },
    date_end: { type: DataTypes.DATE, allowNull: false },
    head_of_department_mark: { type: DataTypes.STRING },
    note: { type: DataTypes.STRING },
    // individual_plan_id
  }
);

const OrganizationalAndMethodicalWorks = sequelize.define(
  "organizational_and_methodical_works",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    hours_number: { type: DataTypes.DOUBLE, allowNull: false },
    date_start: { type: DataTypes.DATE, allowNull: false },
    date_end: { type: DataTypes.DATE, allowNull: false },
    head_of_department_mark: { type: DataTypes.STRING },
    note: { type: DataTypes.STRING },
    // individual_plan_id
  }
);

const InformationAndEducationalWorks = sequelize.define(
  "information_and_educational_works",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    hours_number: { type: DataTypes.DOUBLE, allowNull: false },
    date_start: { type: DataTypes.DATE, allowNull: false },
    date_end: { type: DataTypes.DATE, allowNull: false },
    head_of_department_mark: { type: DataTypes.STRING },
    note: { type: DataTypes.STRING },
    // individual_plan_id
  }
);

const ScientificAndResearchStudentsWorks = sequelize.define(
  "scientific_and_research_students_works",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    hours_number: { type: DataTypes.DOUBLE },
    date_start: { type: DataTypes.DATE },
    date_end: { type: DataTypes.DATE },
    reporting_form: { type: DataTypes.STRING },
    head_of_department_mark: { type: DataTypes.STRING },
    note: { type: DataTypes.STRING },
    // individual_plan_id
  }
);

const ScientificAndResearchWorkStages = sequelize.define(
  "scientific_and_research_work_stages",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    hours_number: { type: DataTypes.DOUBLE, allowNull: false },
    date_start: { type: DataTypes.DATE, allowNull: false },
    date_end: { type: DataTypes.DATE, allowNull: false },
    reporting_form: { type: DataTypes.STRING },
    head_of_department_mark: { type: DataTypes.STRING },
    note: { type: DataTypes.STRING },
    // individual_plan_id
  }
);

const EducationalWorks = sequelize.define("educational_works", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  semester: { type: DataTypes.INTEGER, allowNull: false },
  discipline: { type: DataTypes.STRING, allowNull: false },
  educational_streams: { type: DataTypes.INTEGER },
  actually_done_hours_number: { type: DataTypes.DOUBLE },
  note: { type: DataTypes.STRING },

  lectures: { type: DataTypes.DOUBLE },
  seminars: { type: DataTypes.DOUBLE },
  labs: { type: DataTypes.DOUBLE },
  course_design: { type: DataTypes.DOUBLE },
  consultations: { type: DataTypes.DOUBLE },
  credit_tests: { type: DataTypes.DOUBLE },
  exams: { type: DataTypes.DOUBLE },
  graduate_students_guidance: { type: DataTypes.DOUBLE },
  diploma_design: { type: DataTypes.DOUBLE },
  sec: { type: DataTypes.DOUBLE },
  practice: { type: DataTypes.DOUBLE },
  undergraduates_guidance: { type: DataTypes.DOUBLE },
  test_works: { type: DataTypes.DOUBLE },
  total_hours: { type: DataTypes.DOUBLE },
  students_quantity: { type: DataTypes.INTEGER },
  // individual_plan_id
});

const GroupsForDiscipline = sequelize.define("groups_for_discipline", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  // group_number
  // educational_works_id
});

const Workloads = sequelize.define("workloads", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  month: { type: DataTypes.INTEGER, allowNull: false },
  day: { type: DataTypes.INTEGER, allowNull: false },
  discipline: { type: DataTypes.STRING, allowNull: false },

  lectures: { type: DataTypes.DOUBLE },
  seminars: { type: DataTypes.DOUBLE },
  labs: { type: DataTypes.DOUBLE },
  course_design: { type: DataTypes.DOUBLE },
  consultations: { type: DataTypes.DOUBLE },
  credit_tests: { type: DataTypes.DOUBLE },
  exams: { type: DataTypes.DOUBLE },
  graduate_students_guidance: { type: DataTypes.DOUBLE },
  diploma_design: { type: DataTypes.DOUBLE },
  sec: { type: DataTypes.DOUBLE },
  practice: { type: DataTypes.DOUBLE },
  undergraduates_guidance: { type: DataTypes.DOUBLE },
  test_works: { type: DataTypes.DOUBLE },
});

IndividualPlans.hasMany(Workloads, {
  foreignKey: "individualPlanId",
});
Workloads.belongsTo(IndividualPlans);

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

IndividualPlans.hasMany(EducationalAndMethodicalWorks, {
  foreignKey: "individualPlanId",
});
EducationalAndMethodicalWorks.belongsTo(IndividualPlans);

IndividualPlans.hasMany(OrganizationalAndMethodicalWorks, {
  foreignKey: "individualPlanId",
});
OrganizationalAndMethodicalWorks.belongsTo(IndividualPlans);

IndividualPlans.hasMany(InformationAndEducationalWorks, {
  foreignKey: "individualPlanId",
});
InformationAndEducationalWorks.belongsTo(IndividualPlans);

IndividualPlans.hasMany(ScientificAndResearchStudentsWorks, {
  foreignKey: "individualPlanId",
});
ScientificAndResearchStudentsWorks.belongsTo(IndividualPlans);

IndividualPlans.hasMany(ScientificAndResearchWorkStages, {
  foreignKey: "individualPlanId",
});
ScientificAndResearchWorkStages.belongsTo(IndividualPlans);



//Educational work
IndividualPlans.hasMany(EducationalWorks, {
  foreignKey: "individualPlanId",
});
EducationalWorks.belongsTo(IndividualPlans);

Faculties.hasMany(EducationalWorks);
EducationalWorks.belongsTo(Faculties);

Specialties.hasMany(EducationalWorks);
EducationalWorks.belongsTo(Specialties);

Groups.hasOne(GroupsForDiscipline);
GroupsForDiscipline.belongsTo(Groups);

EducationalWorks.hasMany(GroupsForDiscipline, {
  foreignKey: "educationalWorkId",
});
GroupsForDiscipline.belongsTo(EducationalWorks);

module.exports = {
  IndividualPlans,
  Lectors,
  Faculties,
  Cathedras,
  Specialties,
  Groups,
  EducationalAndMethodicalWorks,
  OrganizationalAndMethodicalWorks,
  InformationAndEducationalWorks,
  ScientificAndResearchWorkStages,
  ScientificAndResearchStudentsWorks,
  GroupsForDiscipline,
  EducationalWorks,
  Workloads,
};
