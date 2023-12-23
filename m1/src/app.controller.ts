import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { log } from 'console';



@Controller()
export class AppController {
  constructor() {}
  @MessagePattern('calculate')
  async calculateNumber(@Payload() numberData : number):  Promise<number>{
    await new Promise(resolve => {
      setTimeout(resolve, 5000)
    })
    
    const result = numberData * 2;

    return result
  }
}
