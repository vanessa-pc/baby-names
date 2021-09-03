import { BabyNames } from "../components/Interface";

export default function searchString(names: BabyNames[], query: string): BabyNames[]{
        return query.length === 0
          ? names
          : names.filter(
              (name) =>
                name.name.toLowerCase().includes(query.toLowerCase())
            );
}
