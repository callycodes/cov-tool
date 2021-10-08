import { Metrics } from './layout/metrics';

export function parseMetrics(attrs): Metrics {
  const {
    statements,
    coveredstatements,
    conditionals,
    coveredconditionals,
    methods,
    coveredmethods,
  } = attrs;
  return {
    statements: Number.parseInt(statements) || 0,
    coveredstatements: Number.parseInt(coveredstatements) || 0,
    conditionals: Number.parseInt(conditionals) || 0,
    coveredconditionals: Number.parseInt(coveredconditionals) || 0,
    methods: Number.parseInt(methods) || 0,
    coveredmethods: Number.parseInt(coveredmethods) || 0,
  };
}
