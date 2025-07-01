import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AppService } from 'apps/portal/src/app.service';

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [AdminService, AppService],
})
export class AdminModule {}
