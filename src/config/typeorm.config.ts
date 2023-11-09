import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'calupe',
  database: 'gestiontareas',
  entities: [__dirname + '/../**/*.enttity.ts'],
  synchronize: true,
};
