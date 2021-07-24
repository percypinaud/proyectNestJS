import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create.product.dto';
import { Product } from './intefaces/Product';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private productService:ProductsService){}

    @Get()
    getProducts():Promise<Product[]>{
        return this.productService.findAll();
    }

    @Get(":productId")
    getProduct(@Param("productId") productId):Promise<Product>{
        return this.productService.findById(productId);
    }

    @Post()
    createProduct(@Body() product: CreateProductDto):Promise<Product>{
        return this.productService.create(product);
    }

    @Put(":id")
    updateProduct(@Body("product") product:CreateProductDto,@Param("id") id): string{
        console.log(product);
        console.log(id);
        return "update a product ${id}";
    }

    @Delete(":id")
    deleteProduct(@Param("id") id):string{
        console.log(id);
        return "delete a product ${id}";
    }
}
