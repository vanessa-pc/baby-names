import { BabyNames } from './Interface';

export function NameList({names}: {names: BabyNames[]}): JSX.Element{

    const female = (name: BabyNames) => name.sex === "f"
    const male = (name: BabyNames) => name.sex === "m"

    return(
        <div className="name-list"> {names.sort().map((name, index) => {
            return (
                <>
                {female(name) && <p className="male" key={index}> {name.name}</p>}
                {male(name) && <p className="male" key={index}> {name.name}</p>}
                </>
            )
        })}
        </div>
    )
}