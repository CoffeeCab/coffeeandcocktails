const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('firstName', `${res.locals.userProfile.firstName}`);
  res.cookie('lastName', `${res.locals.userProfile.lastName}`);
  res.cookie('email', `${res.locals.userProfile.email}`);
  return next();
};

module.exports = cookieController;