import { Module } from '@nestjs/common';
import { InitializationModule } from './services/initialization/initialization.module';
import { AuthModule } from './services/auth/auth.module';
import { UserModule } from './services/user/user.module';
import { BiodataModule } from './services/biodata/biodata.module';

@Module({
  imports: [InitializationModule, AuthModule, UserModule, BiodataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


