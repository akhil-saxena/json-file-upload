import { memoize } from "lodash";

export const getStringFromNumber = (n: number) => {
  let arr = [];
  let i = 0;

  while (n) {
    arr[i] = n % 26;
    n = Math.floor(n / 26);
    i++;
  }

  for (let j = 0; j < i - 1; j++) {
    if (arr[j] <= 0) {
      arr[j] += 26;
      arr[j + 1] = arr[j + 1] - 1;
    }
  }
  let ans = "";
  for (let j = i; j >= 0; j--) {
    if (arr[j] > 0) ans += String.fromCharCode(65 + arr[j] - 1);
  }

  return ans;
};

export const getColumnName = memoize(getStringFromNumber);
