interface JestTestResult {
  title: string;
  status: 'failed' | 'pending' | 'passed';
  ancestorTitles: string[];
  failureMessages: string[];
  testFilePath: string;
}

interface JestTestSuiteResult {
  success: boolean;
  testResults: JestTestResult[];
}

interface TestOutput {
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

module.exports = processor
