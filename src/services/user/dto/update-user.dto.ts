import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum } from 'class-validator';
import { GenderEnum, RoleEnum } from '@prisma/client';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email address of the user',
    format: 'email',
    required: false,
  })
  email?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'password123',
    description: 'Password for the user account',
    minLength: 6,
    required: false,
  })
  password?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the user',
    required: false,
  })
  fullName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'johndoe',
    description: 'Username for the user account',
    required: false,
  })
  username?: string;

  @IsOptional()
  @IsEnum(GenderEnum)
  @ApiProperty({
    example: GenderEnum.MALE,
    description: 'Gender of the user',
    enum: GenderEnum,
    required: false,
  })
  gender?: GenderEnum;

  @IsOptional()
  @IsEnum(RoleEnum)
  @ApiProperty({
    example: RoleEnum.USER,
    description: 'Role of the user in the system',
    enum: RoleEnum,
    required: false,
  })
  role?: RoleEnum;
}
