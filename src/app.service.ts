import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let x: number;
    console.log('vsdvsdv');
    return 'Hello World!';
  }
}
