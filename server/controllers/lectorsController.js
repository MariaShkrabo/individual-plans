const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Lectors, IndividualPlans } = require("../models/models");

const generateJwt = (id, login) => {
  return jwt.sign({ id, login }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class LectorsController {
  async registration(req, res, next) {
    const {
      login,
      password,
      surname,
      name,
      father_name,
      facultyId,
      cathedraId,
      position,
      academic_title,
      academic_degree,
      employment_date,
    } = req.body;

    const candidate = await Lectors.findOne({ where: { login } });

    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким логином уже существует")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const lector = await Lectors.create({
      login,
      password: hashPassword,
      surname,
      name,
      father_name,
      facultyId,
      cathedraId,
      position,
      academic_title,
      academic_degree,
      employment_date,
    });

    console.log(lector.id);
    const plan = await IndividualPlans.create({ lectorId: lector.id });
    const token = generateJwt(lector.id, login);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { login, password } = req.body;
    const lector = await Lectors.findOne({ where: { login } });
    if (!lector) {
      return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, lector.password);
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(lector.id, login)
    return res.json({ token });
  }

  async check(req, res) {
    const lector = await Lectors.findOne({where: req.user.id});
    return res.json(lector);
  }
}

module.exports = new LectorsController();
