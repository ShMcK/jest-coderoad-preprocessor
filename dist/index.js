"use strict";
var processor = function (testResult) {
    var output;
    // success
    if (testResult.success) {
        output = {
            success: true,
            msg: 'passed',
            taskPosition: 0,
        };
    }
    else {
        var firstFailSuite = testResult.testResults.filter(function (x) { return x.numFailingTests > 0; })[0];
        var firstFailTest = firstFailSuite.testResults.filter(function (x) { return x.status === 'failed'; })[0];
        output = {
            success: false,
            msg: firstFailTest.title,
            taskPosition: parseInt(firstFailTest.ancestorTitles[0]),
        };
    }
    // output as text
    process.stdout.write(JSON.stringify(output));
};
module.exports = processor;
