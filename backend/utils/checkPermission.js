const { UnAuthenticatedError } = require("../errors/index");

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId == resourceUserId.toString()) return;

  throw new UnAuthenticatedError("Not authorized to access this route");
};

module.exports = checkPermissions;
