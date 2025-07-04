import { render, screen } from "@testing-library/react";
import { Toggle } from "./Toggle";

test("renders a Toggle", () => {
  render(
    <Toggle label="Test" handleToggle={(toggled) => console.log(toggled)} />
  );
  expect(screen.getByText(/Test/i)).toBeInTheDocument();
});
