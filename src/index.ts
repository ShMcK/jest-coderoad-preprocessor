import {JestTestSuiteResult, JestTestResultList, JestTestResult, TestOutput} from './typings'
import { writeFileSync } from 'fs'

const processor = (testResult: JestTestSuiteResult) => {

  let output: TestOutput

  // success
  if (testResult.success) {
    output = {
      success: true,
      msg: 'passed',
      taskPosition: 0,
    }

  // failure
  } else {

    const firstFailSuite: JestTestResultList = testResult.testResults.filter(x => x.numFailingTests > 0)[0]
    const firstFailTest: JestTestResult = firstFailSuite.testResults.filter(x => x.status === 'failed')[0]

    output = {
      success: false,
      msg: firstFailTest.title,
      taskPosition: parseInt(firstFailTest.ancestorTitles[0]),
    }
  }

  // output as text
  process.stdout.write(JSON.stringify(output))
}

module.exports = processor
