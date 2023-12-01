# Mini Lab Testing

Mini Lab Testing provides a simple and effective way to create and run tests without the need for testing frameworks. It is especially useful for tasks like code katas or quick tests of small functions. The clear test case structure and the ability to display detailed results make it easy to quickly identify whether a function meets expectations.

Furthermore, by using TypeScript, you gain the advantage of type inference, which can help prevent type errors in both tests and the functions being tested.

Mini Lab Testing is a useful tool for the development and debugging of functions, particularly when working on small projects or when you need to conduct quick and straightforward tests.

## Getting Started

1. Clone or download the `MiniLabTesting` repository.
2. Write your functions in `index.ts` or you can create another file.

## Usage

1. Import the `Laboratory` class in your testing file:

    ```javascript
    import { Laboratory } from "./Laboratory";
    ```

2. Define your test functions:

    ```javascript
    const add = (a: number, b: number): number => a + b;
    ```

3.  Define the input-output pairs, run the tests using the `Laboratory.test` method:

    ```javascript
    Laboratory.test(add, [
        [[2, 3], 5],
        [[-1, 1], 0],
        [[0, 0], 0]
    ]);
    ```

4. Observe the test results in the console:

    ```
    ————————————————————————————————————————————————————————————
    ✔️ Case: 1 Passed 5 = 5
    ✔️ Case: 2 Passed 0 = 0
    ✔️ Case: 3 Passed 0 = 0

    PASS:   add 🟢 3 passed 3 total
    ```

5. You can see more examples in `examples/example1.ts`

## Options

`Laboratory.xtest` : Skips a set of test cases and no message is displayed.

`Laboratory.xxtest` : Skips a set of test cases and displays a message.

## Running your tests

1. Run `npm install` to install the dependencies.
2. Run `ts-node ./examples/example1.ts` to run the tests. 
3. Or `nodemon ./examples/example1.ts` to run the tests and watch for changes.
4. Or `ts-node index.ts` or `nodemon index.ts` to run the tests and watch for changes all tests in index.ts.
5. You can create another file, for example: mytests.ts and with `nodemon mytests.ts` to run the tests and watch for changes.

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

### Running the unit tests

1. Clone or download the `MiniLabTesting` repository.
2. Run `npm install` to install the dependencies.
3. Run `ts-node ./unitTest/tests.ts` to run the tests. Or `nodemon ./unitTest/tests.ts` to run the tests and watch for changes.

## License

This project is licensed under the MIT License.
