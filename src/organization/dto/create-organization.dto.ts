import { ApiProperty } from "@nestjs/swagger";
import { MinLength } from "class-validator";

export class CreateOrganizationDto {

    @ApiProperty({
        name: "name",
        description: "Name of the organization",
        example: "Tech Innovators Inc.",
        required: true,
    })
    @MinLength(3, {message: "Organization name must be at least 3 characters long"})
    name!: string;
}

