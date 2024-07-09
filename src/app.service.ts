import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return process.env.SAMPLE_ENV || 'Hello World!';
  }
}
