import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { ReportDto } from './report.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(@Res() res: Response) {
    return res.render('index', {
      message: 'Hello world!',
    });
  }

  @Post()
  parseReport(@Body() report: any): string {
    const files = [];
    const keys = Object.keys(report);
    keys.forEach((key) => {
      console.log(`Key: ${key}`);
      const file = {
        path: report[key].path,
        statements: 0,
        statementsCovered: 0,
        statementsPercentage: '0%',
      };

      file.statements = Object.keys(report[key].s).length;

      Object.keys(report[key].s).forEach((statementIndex) => {
        if (report[key].s[statementIndex] === 1) {
          file.statementsCovered++;
        }
      });
      file.statementsPercentage =
        ((file.statementsCovered * 100) / file.statements).toFixed() + '%';

      console.log(`Parsed: ${JSON.stringify(file)}`);
      files.push(file);
    });
    return JSON.stringify(files);
  }
}
