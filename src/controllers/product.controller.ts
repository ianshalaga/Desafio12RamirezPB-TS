import { Request, Response } from "express";
import { productService } from "../services/services";
import { successStatus, failureStatus } from "../utils/statuses";
// Interfaces
import { QueryParams } from "../interfaces/query.interface";
import {
  GetProduct,
  Product,
  UpdateProduct,
} from "../interfaces/product.interface";
// Validators
import validateQueryParams from "../validators/queryParams";
import validateUpdateProduct from "../validators/updateProduct";
import validateProduct from "../validators/product";

class ProductController {
  constructor() {}

  // @@@@
  async getAllProducts(req: Request, res: Response) {
    try {
      let limitParsed: number = 10;
      let pageParsed: number = 1;
      const queryParams: QueryParams = validateQueryParams(req.query);
      const { limit, page, sort, query } = queryParams;
      // @@@@ Pendiente: Validar que el parseo a entero de limit y page de un número válido.
      if (limit) {
        limitParsed = parseInt(limit);
      }
      if (page) {
        pageParsed = parseInt(page);
      }
      const products: GetProduct = await productService.getAllProducts(
        limitParsed,
        pageParsed,
        sort,
        query
      );
      res.status(200).json(products);
    } catch (error) {
      const products: GetProduct = {
        status: "error",
        payload: [],
        totalPages: 0,
        prevPage: null,
        nextPage: null,
        page: 0,
        hasPrevPage: false,
        hasNextPage: false,
      };
      res.status(500).json(products);
    }
  }

  // @@@@
  async createProduct(req: Request, res: Response) {
    // try {
    const product: Product = validateProduct(req.body);
    await productService.createProduct(product);
    res.status(200).json(successStatus);
    // } catch (error) {
    //   res.json(failureStatus(error.message));
    // }
  }

  // @@@@
  async getProductById(req: Request, res: Response) {
    try {
      const pid: string = req.params.pid;
      const product = await productService.getProductById(pid);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json(failureStatus(error.message));
    }
  }

  // @@@@
  async updateProduct(req: Request, res: Response) {
    try {
      const pid: string = req.params.pid;
      const updateProperties: UpdateProduct = validateUpdateProduct(req.body);
      await productService.updateProduct(pid, updateProperties);
      res.status(200).json(successStatus);
    } catch (error) {
      res.json(failureStatus(error.message));
    }
  }

  // @@@@
  async deleteProduct(req: Request, res: Response) {
    try {
      const pid: string = req.params.pid;
      await productService.deleteProduct(pid);
      res.status(200).json(successStatus);
    } catch (error) {
      res.json(failureStatus(error.message));
    }
  }
}

export default new ProductController();
