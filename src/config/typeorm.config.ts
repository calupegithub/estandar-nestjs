import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'calupe',
  database: 'Tareas',
  entities: [__dirname + '/../**/*.entity.ts'],
  autoLoadEntities: true,
  synchronize: true,
};
