import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { Currency } from 'src/model/enum/Currency';
import { CurrencyService } from 'src/service/currency.service';

@Controller('custom')
export class CustomController {

    constructor(private readonly currencyService:CurrencyService){}

    @ApiTags('Currency now')
    @Get('/now')
    @ApiResponse({ status: 200, description: 'Records found'})
    @ApiResponse({ status: 403, description: 'Forbidden'})
    @ApiQuery({name: 'fromCurrencyOri', required: true, explode: false, enum: Currency, isArray: false})
    @ApiQuery({name: 'toCurrency', required: true, explode: false, enum: Currency, isArray: false})
    getPriceNow(@Query('fromCurrencyOri') fromCurrencyOri?: Currency,@Query('toCurrency') toCurrency?: Currency): string {
      return this.currencyService.getConvertedValue(fromCurrencyOri,toCurrency);
    }

    @ApiTags('Currencies now by days')
    @Get('/nowByDays')
    @ApiResponse({ status: 200, description: 'Records found'})
    @ApiResponse({ status: 403, description: 'Forbidden'})
    @ApiQuery({name: 'fromCurrencyOri', required: true, explode: false, enum: Currency, isArray: false})
    @ApiQuery({name: 'toCurrency', required: true, explode: false, enum: Currency, isArray: false})
    @ApiQuery({name: 'days', required: true, explode: false, type: String, isArray: false})
    getPriceNowByDays(@Query('fromCurrencyOri') fromCurrencyOri?: Currency,@Query('toCurrency') toCurrency?: Currency, @Query('days') days?: string): string {
      return this.currencyService.getCurrencyByDays(fromCurrencyOri,toCurrency,days);
    }

    @ApiTags('All currencies now')
    @Get('/Allnow')
    @ApiResponse({ status: 200, description: 'Records found'})
    @ApiResponse({ status: 403, description: 'Forbidden'})
    getAllCurencies(): string {
      return this.currencyService.getAllCurencies();
    }
}
