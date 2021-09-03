import { BabyNames } from './Interface';
import { useState } from 'react';
import './Names.css'
import { SearchBox } from './SearchBox';
import searchString from '../utils/searchString';

export function NameList({names}: {names: BabyNames[]}): JSX.Element{

    const [searchName, setSearchName] = useState<string>("")

    const female = (name: BabyNames) => name.sex === "f"
    const male = (name: BabyNames) => name.sex === "m"

    const sortedNames = names.sort((a,b) => a.name.localeCompare(b.name))

    const searchResults = searchString(names, searchName);

    return(
        <>
        <div className="search-bar"> 
            <SearchBox searchName={searchName} setSearchName={setSearchName}/>
        </div>
        <div className="name-list"> { searchResults.length === 0 ? sortedNames: searchResults.map((name, index) => {
            return (
                <>
                
                {female(name) && <p className="female" key={index}> {name.name}</p>}
                {male(name) && <p className="male" key={index}> {name.name}</p>}
                </>
            )
        })}
        </div>
        </>
    )
}