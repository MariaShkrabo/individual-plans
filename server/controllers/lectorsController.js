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
      fatherName,
      faculty,
      cathedra,
      position,
      academicTitle,
      academicDegree,
      employmentDate,
    } = req.body;
    const candidate = await Lectors.findOne({ where: { login } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким логином уже существует")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const lector = await Lectors.create({ login, password: hashPassword });
    const plan = await IndividualPlans.create({ lectorId: lector.id });
    const token = generateJwt(lector.id, lector.login);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { login, password } = req.body;
    const lector = await Lectors.findOne({ where: { login } });
    if (!user) {
      return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, lector.password);
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(lector.id, lector.email, lector.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.lector.id, req.lector.login);
    return res.json({ token });
  }
}

module.exports = new LectorsController();
