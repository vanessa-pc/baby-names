import { BabyNames } from "../components/Interface";

export function namesToArray(objArr: BabyNames[]): Array<string> {
  return objArr.map(({ name }) => name).sort();
}
