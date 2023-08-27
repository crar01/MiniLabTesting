# Mini Lab Testing

Welcome to Mini Lab Testing, a simple testing code base designed to help you quickly and easily test your code (Typescript | js). Whether developing a new project or maintaining an existing one, Mini Lab Testing provides a straightforward way to validate your functions and ensure their accuracy.

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
    Test for: add | Total Cases: 3 | Res <=> Exp
    —  —  —  —  —  —  —  —  —  —  —  —  —  —  —  —  —  —  —  —
    ✅ Case: 1 Passed 5 = 5
    ✅ Case: 2 Passed 0 = 0
    ✅ Case: 2 Passed 0 = 0

    😎 Great job...!!!
    ————————————————————————————————————————————————————————————
    ```

5. You can see more examples in `examples/example1.ts`

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
