import { each, orderBy, replace, toLower, trim } from "lodash";
import { ArrayI } from "./types";
import {
  findByText,
  getIndexByItem,
  incrementItemRepeats,
  isNumber,
  splitBySpace,
  textIsEmpty,
} from "./utils";

const countWordsRepetitions = (text: string): ArrayI[] => {
  let array: ArrayI[] = [];

  const trimmedText: string = trim(text);

  const lowerCaseText: string = toLower(trimmedText);

  const textFiltered = replace(lowerCaseText, /[^\w\s]/gi, "");

  const splittedText: string[] = splitBySpace(textFiltered);

  each(splittedText, (item: string): number | undefined => {
    if (!isNumber(item) || textIsEmpty(item)) return;
    if (!findByText(item, array)) return array.push({ text: item, repeats: 1 });
    const itemPos: number = getIndexByItem(item, array);
    incrementItemRepeats(array[itemPos]);
    array = orderBy(array, ["repeats"], ["desc"]);
  });
  return array;
};

module.exports = { countWordsRepetitions: countWordsRepetitions };
