const { user } = require("../../config/dbConnection");

const EmployeeManagement = async (req, res) => {
  try {
    const EmployeeData = await user.findAll({
      where: {
        isDeleate: "false",
        role: "Employee",
      },
    });
    res.status(200).json({ msg: "employee data found", data: EmployeeData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not found employee data", err });
  }
};

const employeeDetails = async (req, res) => {
  try {
    const employeeData = await user.findOne({
      where: {
        id: req.query.id,
        role: "Employee",
        isDeleate: "false",
      },
    });
    res.status(200).json({ msg: "get data successful", data: employeeData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "get employees data unsuccessful" });
  }
};

module.exports = {
  EmployeeManagement,
  employeeDetails,
};