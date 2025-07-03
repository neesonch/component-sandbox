import { Toggle } from "./components/Toggle/Toggle";
import { Autocomplete } from "./components/Autocomplete/Autocomplete";
import { words } from "./mocks/mock-data";

function App() {
  return (
    <>
      <Toggle label="Test" handleToggle={(toggled) => console.log(toggled)} />
      <Toggle
        label="A different toggle with a longer label"
        handleToggle={(toggled) => console.log(toggled)}
      />
      <Autocomplete options={words} />
    </>
  );
}

export default App;
