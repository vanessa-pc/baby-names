import { BabyNames } from "../components/Interface";

export const sortNamesArray = (array: BabyNames[]): BabyNames[] => array.sort((a,b) => a.name.localeCompare(b.name))
