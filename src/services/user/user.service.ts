import { Injectable } from '@nestjs/common';

import { GenderEnum, Prisma, RoleEnum, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { faker } from '@faker-js/faker';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createOne(userCreateArgs: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(userCreateArgs.password, 10);

    const createdUser = await this.prisma.user.create({
      data: {
        ...userCreateArgs,
        password: hashedPassword,
      },
      include: {
        biodata: {
          include: {
            pendidikanTerakhir: true,
            riwayatPekerjaan: true,
            riwayatPelatihan: true,
          },
        },
      },
    });

    return createdUser;
  }

  async findMany() {
    return await this.prisma.user.findMany({
      include: {
        biodata: {
          include: {
            pendidikanTerakhir: true,
            riwayatPekerjaan: true,
            riwayatPelatihan: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        biodata: {
          include: {
            pendidikanTerakhir: true,
            riwayatPekerjaan: true,
            riwayatPelatihan: true,
          },
        },
      },
    });
  }

  // Update a user by ID
  async updateOne(id: string, data: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }
}
