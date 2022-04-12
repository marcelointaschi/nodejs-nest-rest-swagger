import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { CurrencyService } from './service/currency.service';
import { DolarController } from './controller/dolar.controller';
import { CurrencyConverterService } from './service/currency-converter.service';
import { HttpModule } from '@nestjs/axios';
import { EuroController } from './controller/euro.controller';
import { CustomController } from './controller/custom.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, DolarController, EuroController, CustomController],
  providers: [AppService, CurrencyService, CurrencyConverterService],
})
export class AppModule {}
