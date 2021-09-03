import { BabyNames } from './Interface';


export function Favorites({names, handleClickRemove}: {names: BabyNames[]; handleClickRemove: (name: BabyNames) => void}): JSX.Element{

    const female = (name: BabyNames) => name.sex === "f"
    const male = (name: BabyNames) => name.sex === "m"



    return(
        <>
        { names.map((name, index) => {
            return (
                <>
                {female(name) && <button className="female" key={index} onClick={() => handleClickRemove(name)}> {name.name}</button>}
                {male(name) && <button className="male" key={index} onClick={() => handleClickRemove(name)}> {name.name}</button>}
                </>
            )
        })}
        </>
    )
}