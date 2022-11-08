import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Min, MinLength } from "class-validator";

export class CreateUserDto {

    @ApiProperty({
        description: 'nombre usuario',
    })
    @MinLength(1)
    @IsString()
    name: string;

    @ApiProperty({
        description: 'saldo del usuario',
    })
    @IsNumber()
    @Min(1)
    saldo: number;
}
