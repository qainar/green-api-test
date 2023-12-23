import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post('calculate')
  async calculcateNumber(@Body('number') numberData: number): Promise<object> {
    const calculatedNumber = await this.appService.calculcateNumber(numberData);

    return {
      calculatedNumber: calculatedNumber
    }
  }
}
