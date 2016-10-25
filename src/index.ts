type JestTestResult = {
  title: string;
  status: 'failed' | 'pending' | 'passed';
  ancestorTitles: string[];
  failureMessages: string[];
  testFilePath: string;
}

type JestTestSuiteResult = {
  success: boolean;
  testResults: JestTestResult[];
}

type TestOutput = {
  success: boolean; // all tests passed?
  msg: string; // failure message (describe + it)
  taskPosition: number; // index of failed test
  // timedOut: boolean;
}

const process = (options = {}) => (testResult: JestTestResult) => {
  process.stdout.write('Hello World')
  process.stdout.write('options = ', options)
  process.stdout.write('test result = ', testResult)
}
