import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create.product.dto';
import { Product } from './intefaces/Product';

@Injectable()
export class ProductsService {

  constructor(@InjectModel("product") private productModel: Model<Product>) {}

  async create(product: CreateProductDto):Promise<Product>{
    const createdProduct = new this.productModel(product);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findById(id:string): Promise<Product>{
    return this.productModel.findById(id).exec();
  }

}
