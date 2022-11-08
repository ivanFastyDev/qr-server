import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateQrCodeDto {

    @ApiProperty({
        description: 'Fecha de creacion del registro',
    })
    @IsString()
    @MinLength(1)
    date: string;
}
