import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class CurrencyConverterService {

    private readonly logger = new Logger('CurrencyConverterService');

    constructor(private httpService: HttpService){}


    getCurrencyConverterNow(fromCurrencyOri:string, toCurrency:string): Observable<AxiosResponse<any>>{
        this.logger.log('New request to getDolarNow');
        
        return this.httpService.get(`https://economia.awesomeapi.com.br/json/last/${fromCurrencyOri}-${toCurrency}`)
        .pipe(
            tap((resp) => resp),
            map((resp) => resp.data),
            tap((data) =>  data),
          );
    }

    getCurrencyConvertedByDays(fromCurrencyOri:string, toCurrency:string, numOfDays:string): Observable<AxiosResponse<any>>{
        this.logger.log('New request to getDolarNow');
        
        return this.httpService.get(`https://economia.awesomeapi.com.br/json/daily/${fromCurrencyOri}-${toCurrency}/${numOfDays}`)
        .pipe(
            tap((resp) => resp),
            map((resp) => resp.data),
            tap((data) =>  data),
          );
    }

    getAllCurrencies(): Observable<AxiosResponse<any>>{
        this.logger.log('New request to getDolarNow');
        
        return this.httpService.get('https://economia.awesomeapi.com.br/json/all')
        .pipe(
            tap((resp) => resp),
            map((resp) => resp.data),
            tap((data) =>  data),
          );
    }

    
}
