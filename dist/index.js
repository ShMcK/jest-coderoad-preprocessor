var process = function (options) {
    if (options === void 0) { options = {}; }
    return function (testResult) {
        process.stdout.write('Hello World');
        process.stdout.write('options = ', options);
        process.stdout.write('test result = ', testResult);
    };
};
module.exports = processor;
