import { Injectable } from '@nestjs/common';
import { CurrencyConverterService } from './currency-converter.service';

@Injectable()
export class CurrencyService {

  constructor(private currencyConvert:CurrencyConverterService){}
  
  getDolarValue(): any {
    return this.currencyConvert.getCurrencyConverterNow('USD','BRL');
  }
  getEuroValue(): any {
    return this.currencyConvert.getCurrencyConverterNow('EUR','BRL');
  }
  getConvertedValue(fromCurrencyOri:string, toCurrency:string):any {
    return this.currencyConvert.getCurrencyConverterNow(fromCurrencyOri,toCurrency);
  }
  getAllCurencies():any{
    return this.currencyConvert.getAllCurrencies();
  }
  getCurrencyByDays(fromCurrencyOri:string, toCurrency:string,numOfDays:string):any{
    return this.currencyConvert.getCurrencyConvertedByDays(fromCurrencyOri,toCurrency,numOfDays);
  }
}
