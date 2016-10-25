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
        output = {
            success: false,
            msg: 'failed',
            taskPosition: 0,
        };
    }
    process.stdout.write('test result');
    process.stdout.write(JSON.stringify(output));
};
module.exports = processor;
