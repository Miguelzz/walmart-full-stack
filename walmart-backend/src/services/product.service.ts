import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductInput } from 'src/schemas/product/product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async create(product: ProductInput): Promise<Product> {
    const _product = new this.productModel(product);
    return _product.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findPalindrome(search: string): Promise<Product[]> {
    if (!isNaN(Number(search))) {
      const [product] = await this.productModel
        .find({
          index: new RegExp(`^${search}`, 'i'),
        })
        .exec();

      return [product];
    } else
      return this.productModel
        .find({
          $or: [
            { description: new RegExp(`^${search}`, 'i') },
            { brand: new RegExp(`^${search}`, 'i') },
          ],
        })
        .exec();
  }

  async count(): Promise<number> {
    return this.productModel.count().exec();
  }
}
