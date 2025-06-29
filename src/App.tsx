import { Toggle } from "./components/Toggle";

function App() {
  return (
    <>
      <Toggle label="Test" handleToggle={(toggled) => console.log(toggled)} />
      <Toggle
        label="A different toggle with a longer label"
        handleToggle={(toggled) => console.log(toggled)}
      />
    </>
  );
}

export default App;
