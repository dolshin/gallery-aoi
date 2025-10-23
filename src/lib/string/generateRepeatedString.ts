/**
 * 指定した文字を指定した回数繰り返した文字列を生成する
 * @param char - 繰り返す文字
 * @param length - 生成する文字列の長さ
 * @returns 指定された長さの文字列
 */
export function generateRepeatedString(char: string, length: number): string {
  if (char.length === 0) throw new Error("charは1文字以上指定してください");
  return char.repeat(length);
}
