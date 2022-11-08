import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, Min } from "class-validator";


export class MakeTransactionDto {

    @ApiProperty({
        description: 'Cantidad a pagar',
    })
    @IsNumber()
    @Min(1)
    price: number;
}