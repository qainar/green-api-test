import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { log } from 'console';

@Injectable()
export class AppService {
  constructor(@Inject('M1_SERVICE') private readonly m1Service: ClientProxy){}
  getHello(): string {
    return 'Hello World!';
  }

  async calculcateNumber(number: number): Promise<number>{
    const calculatedNumber = await this.m1Service.send<number>('calculate', number).toPromise();
    
    return calculatedNumber
  }
}
