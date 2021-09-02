import { namesToArray } from "./createAlphabeticArray";

test("namesToArray returns a sorted string array, objArr the passed array of objects", () => {
  expect(namesToArray([{id: 1, name: "scylla", sex: "f"}, {id: 2, name: "charybdis", sex: "f"}])).toStrictEqual(["charybdis", "scylla"]);
  expect(namesToArray([{id: 3, name: "apollo", sex: "m"}, {id: 4, name: "zeus", sex: "m"}])).toStrictEqual(["apollo", "zeus"]);
  expect(namesToArray([{id: 5, name: "hera", sex: "f"}, {id: 6, name: "poseidon", sex: "m"}])).toStrictEqual(["hera", "poseidon"]);
});
