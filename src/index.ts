import {JestTestSuiteResult, TestOutput} from './typings'
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
    output = {
      success: false,
      msg: 'failed',
      taskPosition: 0,
    }
  }

  // output as text
  process.stdout.write(JSON.stringify(output))
}

module.exports = processor
