/**
 * Complete the function body
 *
 * To run the tests : `deno test src/arrays/arrays_test.ts`
 *
 * As you will see, TypeScript will considerably
 * improve the autocomplete experience in your editor.
 */

export function removeNumbersBelowThreshold(
  array: number[],
  threshold: number,
): number[] | [] {
  // Write your code here
  const newArr: number [] = []
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] >= threshold) {
      newArr.push(array[i])
    }
  }
  return newArr
}

export function filterStringByLength(
  array: string[],
  minLength: number,
  maxLength: number,
): string[] | [] {
  // Write your code here
  const newArr: string[] = []
  for (let i: number = 0; i < array.length; i++) {
    if (array[i].length >= minLength && array[i].length <= maxLength) {
      newArr.push(array[i])
    }
  }
  return newArr
}

export function getOnlyTheLowercaseLettersOfTheString(string: string): string {
  // Write your code here
  const newStr: string[] = string.split("")
  const transform: string[] = newStr.map((letter) => {
    return letter.replace(/[A-Z]/, "")
  })
  const result = transform.join("")
  return result
}
