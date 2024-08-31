import { Module } from '@nestjs/common';
import { BiodataController } from './biodata.controller';
import { BiodataService } from './biodata.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [BiodataController],
  providers: [BiodataService],
  imports: [PrismaModule],
  exports: [BiodataService],
})
export class BiodataModule {}
