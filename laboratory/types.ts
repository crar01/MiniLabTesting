export type TestFunction<T extends any[], R> = (...args: T) => R;

export type TestCase<T extends any[], R> = {
    input: T;
    expected: R;
};