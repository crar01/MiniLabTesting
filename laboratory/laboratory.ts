import { isEqual } from 'lodash';

type TestFunction<T extends any[], R> = (...args: T) => R;

type TestCase<T extends any[], R> = {
    input: T;
    expected: R;
};

/**
 * The `Laboratory` class provides a simple framework for running test cases
 * and displaying the results in a readable format.
 */
export class Laboratory {

    /**
     * Runs a set of test cases using the specified test function and displays the results.
     *
     * @param {TestFunction<T, R>} testFunction - The function to be tested.
     * @param {Array<[T, R]>} testData - An array of input-output pairs for testing.
     */
    public static test<T extends any[], R>(testFunction: TestFunction<T, R>, testData: Array<[T, R]>): void {
        const testCases: TestCase<T, R>[] = this.TransformParams<T, R>(testData);
        this.runTestSet(testFunction, testCases);
    }

    /**
     * Transforms an array of input-output pairs into an array of test cases.
     *
     * @param {Array<[T, R]>} testData - The input-output pairs to be transformed.
     * @returns {Array<TestCase<T, R>>} An array of test cases.
     */
    private static TransformParams<T extends any[], R>(testData: [T, R][]): TestCase<T, R>[] {
        return testData.map(([input, expected]) => ({ input, expected }));
    }

    /**
     * Runs a set of test cases for the specified test function and displays the results.
     *
     * @param {TestFunction<T, R>} testFunction - The function to be tested.
     * @param {Array<TestCase<T, R>>} testCases - An array of test cases.
     */
    private static runTestSet<T extends any[], R>(testFunction: TestFunction<T, R>, testCases: TestCase<T, R>[]): void {
        const totalSet = testCases.length;

        let totalSuccess = 0;

        this.showTitle(testFunction.name, totalSet);

        testCases.forEach((testCase, index) => {
            try {
                const passed = this.runTest(testFunction, testCase, index + 1);
                passed && totalSuccess++;
            } catch (error) {
                console.log('❓ Case:', index + 1, 'Failed with error: ', error);
            }
        });

        this.showResume(totalSet, totalSuccess);
    }

    /**
     * Runs a single test case and displays the result.
     *
     * @param {TestFunction<T, R>} testFunction - The function to be tested.
     * @param {TestCase<T, R>} testCase - The test case to be executed.
     * @param {number} numberCase - The number of the test case.
     * @returns {boolean} Returns `true` if the test passed, otherwise `false`.
     */
    private static runTest<T extends any[], R>(testFunction: TestFunction<T, R>,
        testCase: TestCase<T, R>,
        numberCase: number): boolean {
        const { input, expected } = testCase;

        const result = testFunction(...input);

        const isValueExpected = this.deepEqual(result, expected);

        if (isValueExpected) {
            console.log(`✅ Case: ${numberCase} Passed`, result, '=', expected);
        } else {
            console.log(`❌ Case: ${numberCase} Failed`, result, '!=', expected);
        }

        return isValueExpected;
    }

    /**
     * Displays the title for the test cases.
     *
     * @param {string} functionName - The name of the function being tested.
     * @param {number} totalSet - The total number of test cases.
     */
    private static showTitle<T extends any[], R>(functionName: string, totalSet: number) {
        console.log(`\nTest for: ${functionName} | Total Cases:`, totalSet , '| Res <=> Exp');
        console.log(''.padEnd(60, '—  '));
    }

    /**
     * Displays a summary of the test results.
     *
     * @param {number} totalSet - The total number of test cases.
     * @param {number} totalSuccess - The number of test cases that passed.
     */
    private static showResume(totalSet: number, totalSuccess: number): void {
        console.log();

        if (totalSet === totalSuccess) {
            console.log('😎 Great job...!!!');
        } else {
            console.log(`😩 Try again...!!! ✅`, totalSuccess, '-', totalSet - totalSuccess, '❌');
        }

        console.log(''.padEnd(60, '—'));
    }

    /**
     * Compares two values deeply to determine if they are equal.
     *
     * @param {*} obj1 - The first value for comparison.
     * @param {*} obj2 - The second value for comparison.
     * @returns {boolean} Returns `true` if the values are deeply equal, otherwise `false`.
     */
    public static deepEqual(obj1: any, obj2: any): boolean {
        return isEqual(obj1, obj2);
    }
}