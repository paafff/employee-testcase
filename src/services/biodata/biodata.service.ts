import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Biodata } from '@prisma/client';
import { CreateBiodataDto } from './dto/create-biodata.dto';
import { UpdateBiodataDto } from './dto/update-biodata-dto';

@Injectable()
export class BiodataService {
  constructor(private prisma: PrismaService) {}

  async createBiodata(data: CreateBiodataDto): Promise<Biodata> {
    console.log('🚀 ~ BiodataService ~ createBiodata ~ data:', data);

    return this.prisma.biodata.create({
      data,
    });
  }

  async getBiodataById(id: string): Promise<Biodata | null> {
    return this.prisma.biodata.findUnique({
      where: { id },
    });
  }

  async getAllBiodata(): Promise<Biodata[]> {
    return this.prisma.biodata.findMany();
  }

  async updateBiodata(id: string, data: UpdateBiodataDto): Promise<Biodata> {
    const updateData: any = {
      ...data,
    };

    if (data.pendidikanTerakhir) {
      updateData.pendidikanTerakhir = {
        update: data.pendidikanTerakhir.update,
      };
    }

    if (data.riwayatPelatihan) {
      updateData.riwayatPelatihan = {
        updateMany: data.riwayatPelatihan.update.map((pelatihan) => ({
          where: { id: pelatihan.id },
          data: pelatihan,
        })),
      };
    }

    if (data.riwayatPekerjaan) {
      updateData.riwayatPekerjaan = {
        updateMany: data.riwayatPekerjaan.update.map((pekerjaan) => ({
          where: { id: pekerjaan.id },
          data: pekerjaan,
        })),
      };
    }

    return this.prisma.biodata.update({
      where: { id },
      data: updateData,
    });
  }

  async deleteBiodata(id: string): Promise<Biodata> {
    return this.prisma.biodata.delete({
      where: { id },
    });
  }
}
