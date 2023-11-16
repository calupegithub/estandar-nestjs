import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { TareaEntity } from './tarea.entity';

@Injectable()
export class TareaRepository extends Repository<TareaEntity> {
  constructor(private dataSource: DataSource) {
    super(TareaEntity, dataSource.createEntityManager());
  }
  async findByName(
    firstName: string,
    lastName: string,
  ): Promise<TareaEntity[]> {
    return await this.createQueryBuilder('user')
      .where('user.firstName = :firstName', { firstName })
      .andWhere('user.lastName = :lastName', { lastName })
      .getMany();
  }
}
