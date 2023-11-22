import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), TareasModule, ProductoModule],
})
export class AppModule {}
