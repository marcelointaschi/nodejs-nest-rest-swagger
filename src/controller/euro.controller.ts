import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CurrencyService } from 'src/service/currency.service';

@Controller('euro')
export class EuroController {

    constructor(private readonly euroService:CurrencyService){}

    @ApiTags('Euro Converter')
    @Get()
    @ApiResponse({ status: 200, description: 'Records found'})
    @ApiResponse({ status: 403, description: 'Forbidden'})
    getDolarPriceNow(): string {
      return this.euroService.getEuroValue();
    }

}
