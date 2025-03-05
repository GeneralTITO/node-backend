import { appointmentIdExists } from "./appointmentIdExists";
import { handleError } from "./handleError.middleware";
import { idExists } from "./idExists.middleware";
import { isAdmin } from "./isAdmin.middleware";
import { isAdminOrOwner } from "./isAdminOrOwner.middlware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyToken } from "./verifyToken.middleware";

export default {
  handleError,
  idExists,
  isAdmin,
  isAdminOrOwner,
  uniqueEmail,
  validateBody,
  appointmentIdExists,
  verifyToken,
};
