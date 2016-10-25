export interface JestTestResult {
  title: string;
  status: 'failed' | 'pending' | 'passed';
  ancestorTitles: string[];
  failureMessages: string[];
  testFilePath: string;
}

export interface JestTestSuiteResult {
  success: boolean;
  testResults: JestTestResult[];
}

export interface TestOutput {
  success: boolean; // all tests passed?
  msg: string; // failure message (describe + it)
  taskPosition: number; // index of failed test
  // timedOut: boolean;
}
