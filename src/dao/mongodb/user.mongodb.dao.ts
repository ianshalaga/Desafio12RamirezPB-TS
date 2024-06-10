/** Model */
import { usersModel } from "./models/user.mongodb.model";
/** Interfaces */
import { UserDAO, User, DbUser } from "../../interfaces/user.interface";

class UserMongodbDAO implements UserDAO {
  constructor() {}

  // @@@@
  async getByEmail(email: string): Promise<DbUser> {
    try {
      const DbUser: DbUser = await usersModel.findOne({ email: email });
      return DbUser;
    } catch (error) {
      throw error;
    }
  }

  // @@@@
  async getById(id: string): Promise<DbUser> {
    try {
      const DbUser: DbUser = await usersModel.findById(id);
      return DbUser;
    } catch (error) {
      throw error;
    }
  }

  // @@@@
  async create(newUser: User): Promise<DbUser> {
    try {
      const result: DbUser = (await usersModel.create(newUser)).toObject();
      return result;
    } catch (error) {
      throw error;
    }
  }

  // @@@@
  async getByCart(cartId: string): Promise<DbUser> {
    try {
      const DbUser: DbUser = await usersModel.findOne({ cart: cartId });
      return DbUser;
    } catch (error) {
      throw error;
    }
  }
}

export default UserMongodbDAO;
