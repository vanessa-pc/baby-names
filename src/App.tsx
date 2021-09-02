import { NameList } from "./components/NameList";
import names from './babyNamesData.json'

function App(): JSX.Element {
  return <NameList names={names} />
}

export default App;
