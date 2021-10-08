import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Builder } from 'xml2js';
import * as fs from 'fs';
import * as Saxophone from 'saxophone';
import { json } from 'stream/consumers';
import { Project } from './layout/project';
import { Metrics } from './layout/metrics';
import { parseMetrics } from './utils';

@Injectable()
export class AppService {
  getHello(): string {
    const parser = new Saxophone();

    const readStream = fs.createReadStream(__dirname + '/clover.xml');

    // eslint-disable-next-line prefer-const
    let project: Project = new Project();
    //let current_package: Package = new Package();

    parser.on('tagopen', (tag) => {
      if (tag.name === 'metrics') {
        if (project.metrics === null) {
          console.log('setting project metrics');
          const metrics = parseMetrics(Saxophone.parseAttrs(tag.attrs));
          console.log(metrics);
          project.setMetrics(metrics);
          console.log(project);
        }
      }
      if (tag.name === 'file') {
        //current_package.push(Saxophone.parseAttrs(tag.attrs));
      }
    });

    parser.on('tagclose', (tag) => {
      if (tag.name === 'package') {
        //packages.push(current_package);
        //current_package = [];
      }
    });

    // Called when we are done parsing the document
    parser.on('finish', () => {
      console.log('Parsing finished.');
    });

    // stdin is '<root><example id="1" /><example id="2" /></root>'
    readStream.setEncoding('utf8');
    readStream.pipe(parser);
    return JSON.stringify(project); //packages;
  }
}
