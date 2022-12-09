export type Natural = 0[];
export type Zero = [];
export type Succ<N extends Natural> = [...N, 0];

type One = Succ<Zero>;
type Two = Succ<One>;
type Three = Succ<Two>;
type Five = [...Three, ...Two]["length"];

type Onea = [...[], 0];
type Twoa = [...[...[], 0], 0];

// deno-lint-ignore no-unused-vars
const zero: Natural = [];
