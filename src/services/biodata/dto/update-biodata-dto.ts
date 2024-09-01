import { ApiProperty } from '@nestjs/swagger';
import { GenderEnum } from '@prisma/client';
import {
  IsOptional,
  IsString,
  IsEmail,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class PendidikanTerakhirDto {
  @IsOptional()
  @ApiProperty({
    example: 'Bachelor of Science',
    description: 'Education level',
  })
  educationLevel?: string;

  @IsOptional()
  @ApiProperty({
    example: 'University of Example',
    description: 'Name of the institution',
  })
  name?: string;

  @IsOptional()
  @ApiProperty({
    example: 'informatics',
    description: 'Major field of study',
  })
  major?: string;

  @IsOptional()
  @ApiProperty({
    example: 2015,
    description: 'Year of graduation',
  })
  graduationYear?: number;
}

class RiwayatPelatihanUpdateDto {
  @ApiProperty({
    example: 'Tech Corp',
    description: 'Industry of the job',
  })
  id: number;

  @IsOptional()
  @ApiProperty({
    example: 'Advanced Software Engineering',
    description: 'Name of the training',
  })
  name?: string;

  @IsOptional()
  @ApiProperty({
    example: 'yes',
    description: 'Whether a certificate was obtained',
  })
  certificate?: string;

  @IsOptional()
  @ApiProperty({
    example: 2018,
    description: 'Year of the training',
  })
  year?: number;
}

class RiwayatPekerjaanUpdateDto {
  @ApiProperty({
    example: 'Tech Corp',
    description: 'Industry of the job',
  })
  id: number;

  @IsOptional()
  @ApiProperty({
    example: 'Tech Corp',
    description: 'Industry of the job',
  })
  industry?: string;

  @IsOptional()
  @ApiProperty({
    example: 'Junior Developer',
    description: 'Name of the job position',
  })
  name?: string;

  @IsOptional()
  @ApiProperty({
    example: 9191,
    description: 'Salary for the job',
  })
  salary?: number;

  @IsOptional()
  @ApiProperty({
    example: 2002,
    description: 'Year of employment',
  })
  year?: number;
}

export class UpdateBiodataDto {
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

  @IsOptional()
  @ValidateNested()
  @Type(() => PendidikanTerakhirDto)
  @ApiProperty({
    description: 'Last education details',
    type: PendidikanTerakhirDto,
  })
  pendidikanTerakhir?: {
    update: PendidikanTerakhirDto;
  };

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => RiwayatPelatihanUpdateDto)
  @ApiProperty({
    description: 'Training history update',
    type: [RiwayatPelatihanUpdateDto],
  })
  riwayatPelatihan?: {
    update: RiwayatPelatihanUpdateDto[];
  };

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => RiwayatPekerjaanUpdateDto)
  @ApiProperty({
    description: 'Job history update',
    type: [RiwayatPekerjaanUpdateDto],
  })
  riwayatPekerjaan?: {
    update: RiwayatPekerjaanUpdateDto[];
  };
}
