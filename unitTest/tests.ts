import { Laboratory } from '../laboratory/laboratory';

const testShowTitle = () => {
    let consoleOutput = '';
    const originalConsoleLog = console.log;
    console.log = (...args) => {
        consoleOutput += args.join(' ') + '\n';
    };

    const testFunction = (a: number, b: number) => a + b;

    Laboratory['showTitle'](testFunction.name, 5);

    console.assert(consoleOutput.includes('Test for: testFunction | Total Cases: 5 | Res <=> Exp'), 'testShowTitle');

    console.log = originalConsoleLog;
};

testShowTitle();


const testShowResumeSuccessMessage = () => {
    let consoleOutput = '';
    const originalConsoleLog = console.log;
    console.log = (...args) => {
        consoleOutput += args.join(' ') + '\n';
    };

    Laboratory['showResume'](3, 3);

    console.assert(consoleOutput.includes('😎 Great job...!!!'), 'testShowResumeSuccessMessage');

    console.log = originalConsoleLog;
};

testShowResumeSuccessMessage();


const testShowResumeFailureMessage = () => {
    let consoleOutput = '';
    const originalConsoleLog = console.log;
    
    console.log = (...args) => {
        consoleOutput += args.join(' ') + '\n';
    };
    
    Laboratory['showResume'](5, 3);
    console.assert(consoleOutput.includes('😩 Try again...!!! ✅ 3 - 2 ❌'), 'testShowResumeFailureMessage 1');

    consoleOutput = '';
    Laboratory['showResume'](5, 0);
    console.assert(consoleOutput.includes('😩 Try again...!!! ✅ 0 - 5 ❌'), 'testShowResumeFailureMessage 2');
    
    console.log = originalConsoleLog;
};

testShowResumeFailureMessage();


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

    const expectedOutput = `✅ Case: 1 Passed 5 = 5`;
    const hasText = consoleOutput.includes(expectedOutput);

    console.assert(hasText === true, 'testRunTestSuccess', consoleOutput, 'Expected:', expectedOutput);

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