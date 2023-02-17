import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { Form } from './form.entity/form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Form])],
  providers: [FormsService],
  controllers: [FormsController]
})
export class FormsModule {}
