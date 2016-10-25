export interface JestTestResult {
  title: string;
  status: 'failed' | 'pending' | 'passed';
  ancestorTitles: string[];
  failureMessages: string[];
  testFilePath: string;
  console: string[];
}

export interface JestTestResultList {
  numFailingTests: number;
  testResults: JestTestResult[];
}

export interface JestTestSuiteResult {
  success: boolean;
  testResults: JestTestResultList[];
}

export interface TestOutput {
  success: boolean; // all tests passed?
  msg: string; // failure message (describe + it)
  taskPosition: number; // index of failed test
  // timedOut: boolean;
}
