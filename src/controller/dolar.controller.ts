import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrencyService } from '../service/currency.service';

@Controller('dolar')
export class DolarController {

  constructor(private readonly dolarService:CurrencyService){}

    @ApiTags('Dolar Converter')
    @Get()
    @ApiResponse({ status: 200, description: 'Records found'})
    @ApiResponse({ status: 403, description: 'Forbidden'})
    getDolarPriceNow(): string {
      return this.dolarService.getDolarValue();
    }
}
