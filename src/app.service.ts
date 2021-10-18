import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Builder } from 'xml2js';
import * as fs from 'fs';
import * as Saxophone from 'saxophone';
import { json } from 'stream/consumers';
import { parseReport } from './utils';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  parseReport(json: string): string {
    // return JSON.stringify(parseReport(json));
    return '';
  }
}
