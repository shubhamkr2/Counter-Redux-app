import { INC, DEC } from "./actionTypes";

const Increment = (value) => {
  return { type: INC, payload:value };
};

const Decrement = (value) => {
  return { type: DEC, payload:value };
};

export { Increment, Decrement };
