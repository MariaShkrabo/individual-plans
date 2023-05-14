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
    allowNull: false,
  },
  organizational_and_methodical_works_hours: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
    allowNull: false,
  },
  scientific_and_research_works_hours: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
    allowNull: false,
  },
  information_and_educational_works_hours: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
    allowNull: false,
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

const WorkTypes = sequelize.define("work_types", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const EducationalWorks = sequelize.define("educational_works", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  semester: { type: DataTypes.INTEGER, allowNull: false },
  discipline: { type: DataTypes.STRING, allowNull: false },
  educational_streams: { type: DataTypes.INTEGER },
  actually_done_hours_number: { type: DataTypes.DOUBLE },
  note: { type: DataTypes.STRING },
  // individual_plan_id
});

const GroupsForDiscipline = sequelize.define("groups_for_discipline", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  // group_number
  // educational_works_id
});

const EducationalWorksSchedulesHours = sequelize.define(
  "educational_works_schedules_hours",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    hours: { type: DataTypes.DOUBLE },
    // work_type_id
    // educational_works_id
  }
);

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

Faculties.hasMany(EducationalWorks, {
  foreignKey: "facultyId",
});
EducationalWorks.belongsTo(Faculties);

Specialties.hasMany(EducationalWorks, {
  foreignKey: "specialtyId",
});
EducationalWorks.belongsTo(Specialties);

GroupsForDiscipline.hasOne(Groups, {
  foreignKey: "group_number",
});
Groups.belongsTo(GroupsForDiscipline);

EducationalWorks.hasMany(GroupsForDiscipline, {
  foreignKey: "educationalWorkId",
});
GroupsForDiscipline.belongsTo(EducationalWorks);

EducationalWorks.hasMany(EducationalWorksSchedulesHours, {
  foreignKey: "educationalWorkId",
});
EducationalWorksSchedulesHours.belongsTo(EducationalWorks);

WorkTypes.hasMany(EducationalWorksSchedulesHours);
EducationalWorksSchedulesHours.belongsTo(WorkTypes);

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
  WorkTypes,
  GroupsForDiscipline,
  EducationalWorksSchedulesHours,
};

// const Workloads = sequelize.define("workloads", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   date: { type: DataTypes.DATE, allowNull: false },
//   // individual_plan_id
//   // work_type_id
//   // discipline_id
// });
