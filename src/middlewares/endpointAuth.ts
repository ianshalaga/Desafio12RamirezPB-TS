import { Request, Response, NextFunction } from "express";

function endpointAuth(allowedRoles: string[]) {
  return function (req: Request, res: Response, next: NextFunction) {
    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No user session found" });
    }
    if (!allowedRoles.includes(user.rol)) {
      return res
        .status(403)
        .json({ message: "Unauthorized: Insufficient role" });
    }
    next();
  };
}

export default endpointAuth;
