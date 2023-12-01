import { Laboratory } from '../laboratory/laboratory';

const greenColorText = Laboratory['successColorText'];
const failureColorText = Laboratory['failureColorText'];
const restartColorText = Laboratory['restartColorText']; 

const testDividerTitle = () => {
    let consoleOutput = '';
    const originalConsoleLog = console.log;
    console.log = (...args) => {
        consoleOutput += args.join(' ') + '\n';
    };

    Laboratory['showDivider']();

    console.assert(''.padEnd(60, '—'), 'testTitleDivider');

    console.log = originalConsoleLog;
};

testDividerTitle();


const testShowResumeSuccessMessage = () => {
    let consoleOutput = '';
    const originalConsoleLog = console.log;
    console.log = (...args) => {
        consoleOutput += args.join(' ') + '\n';
    };

    Laboratory['showResume']('testFunctionName', 3, 3);

    const expectedOutput = `${greenColorText} PASS: ${restartColorText}  testFunctionName 🟢 3 passed 3 total`;
    const containtTextExpected = consoleOutput.includes(expectedOutput);

    console.assert(containtTextExpected, 'testShowResumeSuccessMessage', consoleOutput, 'Expected:', expectedOutput);

    console.log = originalConsoleLog;
};

testShowResumeSuccessMessage();


const testShowResumeParcialFailureMessage = () => {
    let consoleOutput = '';
    const originalConsoleLog = console.log;
    
    console.log = (...args) => {
        consoleOutput += args.join(' ') + '\n';
    };
    
    Laboratory['showResume']('testFunctionName', 5, 3);

    const expectedOutput = `${failureColorText} FAIL: ${restartColorText}  testFunctionName ❌ 2 failed 5 total`;
    const containtTextExpected = consoleOutput.includes(expectedOutput);

    console.assert(containtTextExpected, 'testShowResumeParcialFailureMessage', consoleOutput, 'Expected:', expectedOutput);

    console.log = originalConsoleLog;
};

testShowResumeParcialFailureMessage();


const testShowResumeFullFailureMessage = () => {
    let consoleOutput = '';
    const originalConsoleLog = console.log;
    
    console.log = (...args) => {
        consoleOutput += args.join(' ') + '\n';
    };

    Laboratory['showResume']('testFunctionName', 5, 0);

    const expectedOutput = `${failureColorText} FAIL: ${restartColorText}  testFunctionName ❌ 5 failed 5 total`;
    const containtTextExpected = consoleOutput.includes(expectedOutput);

    console.assert(containtTextExpected, 'testShowResumeFullFailureMessage', consoleOutput, 'Expected:', expectedOutput);

    console.log = originalConsoleLog;
};

testShowResumeFullFailureMessage();


const testDeepEqual = () => {
    const objA = { key: 'value' };
    const objB = { key: 'value' };
    let isEqualResult = Laboratory['deepEqual'](objA, objB);

    console.assert(isEqualResult === true, 'testDeepEqual 1');

    const objA2 = { key: 2 };
    const objB2 = { key: 'value' };
    isEqualResult = Laboratory['deepEqual'](objA2, objB2);
    console.assert(isEqualResult === false, 'testDeepEqual 2'); 
};

testDeepEqual();


const testRunTestSuccess = () => {
    let consoleOutput = '';
    const originalConsoleLog = console.log;

    console.log = (...args) => {
        consoleOutput += args.join(' ') + '\n';
    };

    const testFunctionAdd = (a: number, b: number) => a + b;
    Laboratory['test'](testFunctionAdd,[[[2, 3], 5]]);

    const expectedOutput = `${greenColorText} PASS: ${restartColorText}  testFunctionAdd 🟢 1 passed 1 total`;
    const hasTextExpected = consoleOutput.includes(expectedOutput);

    console.assert(hasTextExpected, 'testRunTestSuccess', consoleOutput, 'Expected:', expectedOutput);

    console.log = originalConsoleLog;
};

testRunTestSuccess();


const testRunTestFailure = () => {
    let consoleOutput = '';
    const originalConsoleLog = console.log;
    console.log = (...args) => {
        consoleOutput += args.join(' ') + '\n';
    };

    const testFunctionAdd = (a: number, b: number) => a + b;
    Laboratory['test'](testFunctionAdd,[[[2, 3], 6]]);

    const expectedOutput = `❌ Case: 1 Failed 5 != 6`;
    const hasText = consoleOutput.includes(expectedOutput);

    console.assert(hasText === true,'testRunTestFailure', consoleOutput, expectedOutput);

    console.log = originalConsoleLog;
}

testRunTestFailure();