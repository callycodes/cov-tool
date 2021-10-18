import { Report } from './layout/coverage';
import { ReportDto } from './report.dto';

export async function parseReport(json: ReportDto): Promise<Report | null> {
  const parsed: any = await JSON.parse('');
  try {
    const report: Report = await formatReport(parsed);
    return report;
  } catch {
    return null;
  }
}

export function formatReport(parsed: any): Report {
  const report: Report = {
    files: [],
  };
  parsed.forEach((file) => {
    report.files.push(file);
  });
  return report;
}
