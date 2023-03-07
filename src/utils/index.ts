import { find, split, findIndex } from "lodash";
import { ArrayI } from "../types";

const splitBySpace = (item: string): string[] => split(item, " ");

const findByText = (item: string, items: ArrayI[]): boolean =>
  find(items, (x: ArrayI) => x.text == item) !== undefined;

const getIndexByItem = (item: string, items: ArrayI[]): number =>
  findIndex(items, (x: ArrayI) => x.text == item);

const incrementItemRepeats = (item: ArrayI) => item.repeats++;

const isNumber = (item: string): boolean => isNaN(parseInt(item));

const textIsEmpty = (item: string): boolean => item == "";

export {
  splitBySpace,
  findByText,
  getIndexByItem,
  incrementItemRepeats,
  isNumber,
  textIsEmpty,
};
