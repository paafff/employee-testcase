import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BiodataService } from './biodata.service';
import { CreateBiodataDto } from './dto/create-biodata.dto';
import { UpdateBiodataDto } from './dto/update-biodata-dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Biodata } from '@prisma/client';

@ApiTags('biodata')
@Controller('biodata')
export class BiodataController {
  constructor(private readonly biodataService: BiodataService) {}

  @Post()
  @ApiOperation({ summary: 'Create biodata' })
  @ApiResponse({
    status: 201,
    description: 'The biodata has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createBiodataDto: CreateBiodataDto): Promise<Biodata> {
    return this.biodataService.createBiodata(createBiodataDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all biodata' })
  @ApiResponse({ status: 200, description: 'Return all biodata.' })
  async findAll(): Promise<Biodata[]> {
    return this.biodataService.getAllBiodata();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get biodata by id' })
  @ApiResponse({ status: 200, description: 'Return the biodata.' })
  @ApiResponse({ status: 404, description: 'Biodata not found.' })
  async findOne(@Param('id') id: string): Promise<Biodata | null> {
    return this.biodataService.getBiodataById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update biodata by id' })
  @ApiResponse({
    status: 200,
    description: 'The biodata has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Biodata not found.' })
  async update(
    @Param('id') id: string,
    @Body() updateBiodataDto: UpdateBiodataDto,
  ): Promise<Biodata> {
    return this.biodataService.updateBiodata(id, updateBiodataDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete biodata by id' })
  @ApiResponse({
    status: 200,
    description: 'The biodata has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Biodata not found.' })
  async delete(@Param('id') id: string): Promise<Biodata> {
    return this.biodataService.deleteBiodata(id);
  }
}
