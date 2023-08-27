import { Laboratory } from "./laboratory/laboratory";

const add = (a: number, b: number): number => a + b;

Laboratory.test(add, [
    [[2, 3], 5],
    [[-1, 1], 0],
    [[0, 0], 0]
]);