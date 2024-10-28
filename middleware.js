// middleware.js
const checkWorkingHours = (req, res, next) => {
    const currentDate = new Date();
    const day = currentDate.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
    const hour = currentDate.getHours();
  
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next(); // Allow access during working hours
    } else {
      res.send("This site is only available from Monday to Friday, 9:00 to 17:00.");
    }
  };
  
  module.exports = checkWorkingHours;
  