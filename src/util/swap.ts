export const swap = <T>(arr: T[], pos: number, pos2: number = 0): T[] => {
  const res = [...arr];
  [res[pos], res[pos2]] = [res[pos2], res[pos]];
  return res;
};
