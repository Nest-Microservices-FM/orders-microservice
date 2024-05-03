import { ArrayMinSize, IsArray, IsString, ValidateNested } from "class-validator";
import { OrderItemDto } from "./order-item.dto";
import { Type } from "class-transformer";

export class CreateOrderDto {

  @IsString()
  userId: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({each: true})
  @Type( () => OrderItemDto)
  items: OrderItemDto[]

}
