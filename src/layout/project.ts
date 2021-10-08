import { Metrics } from './metrics';
import { Package } from './package';

export class Project {
  packages: Package[];
  metrics: Metrics = null;

  setMetrics(metrics: Metrics) {
    this.metrics = metrics;
  }

  findPackageByName(name: string): Package {
    for (let i = 0; i < this.packages.length; i++) {
      if (this.packages[i].name === name) {
        return this.packages[i];
      }
    }
    return null;
  }

  insertPackage(packageParam: Package) {
    this.packages.push(packageParam);
  }
}
