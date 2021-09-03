import { BabyNames } from './Interface';
import './Names.css'

export function NameList({names, handleClickAdd}: {names: BabyNames[]; handleClickAdd: (name: BabyNames) => void}): JSX.Element{

    const female = (name: BabyNames) => name.sex === "f"
    const male = (name: BabyNames) => name.sex === "m"


    return(
        <>
        { names.map((name, index) => {
            return (
                <>
                {female(name) && <button className="female" key={index} onClick={() => handleClickAdd(name)}> {name.name}</button>}
                {male(name) && <button className="male" key={index} onClick={() => handleClickAdd(name)}> {name.name}</button>}
                </>
            )
        })}
        </>
    )
}