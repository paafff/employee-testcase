import { ApiProperty } from '@nestjs/swagger';
import { GenderEnum } from '@prisma/client';
import { IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateBiodataDto {
  @ApiProperty({
    example: '12345',
    description: 'Unique identifier for the biodata',
  })
  id: string;

  @IsOptional()
  @ApiProperty({
    example: 'Software Engineer',
    description: 'Position applied for',
  })
  positionApplied?: string;

  @IsOptional()
  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the user',
  })
  fullName?: string;

  @IsOptional()
  @ApiProperty({
    example: GenderEnum.MALE,
    description: 'Gender of the user',
    enum: GenderEnum,
  })
  gender?: GenderEnum;

  @IsOptional()
  @ApiProperty({
    example: '01-01-1990',
    description: 'Birth details of the user',
  })
  birthDetails?: string;

  @IsOptional()
  @ApiProperty({
    example: '123 Main St, Anytown, USA',
    description: 'Address of the user',
  })
  address?: string;

  @IsOptional()
  @ApiProperty({
    example: '123-456-7890',
    description: 'Phone number of the user',
  })
  phone?: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email address of the user',
    format: 'email',
  })
  email?: string;
}
