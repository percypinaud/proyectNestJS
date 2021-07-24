import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductSchema } from './schemas/product.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: "product", schema: ProductSchema }])],
    controllers:[ProductsController],
    providers:[ProductsService],
    exports:[ProductsService]
})
export class ProductsModule {}
