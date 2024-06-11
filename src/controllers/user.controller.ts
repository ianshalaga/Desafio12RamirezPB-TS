import { Request, Response } from "express";
import { userService } from "../services/services";
import { successStatus, failureStatus } from "../utils/statuses";
import { DbUser } from "../interfaces/user.interface";

class UserController {
  constructor() {}

  // @@@@
  async updateUserRolById(req: Request, res: Response) {
    try {
      const uid: string = req.params.uid;
      const dbUser: DbUser = await userService.getUserById(uid);
      let rol = "";
      if (dbUser.rol === "user") {
        rol = "premium";
      }
      if (dbUser.rol === "premium") {
        rol = "user";
      }
      await userService.updateUserRolById(uid, rol);
      res.status(200).json(successStatus);
    } catch (error) {
      res.json(failureStatus(error.message));
    }
  }
}

export default new UserController();
