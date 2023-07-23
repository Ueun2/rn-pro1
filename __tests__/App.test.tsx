
import React from "react";
import App from "../App";
import { render } from "@testing-library/react-native";

let props;
let component;

function getTempComponent(props) {
  return <App {...props} />;
}

describe("[App] render", () => {
  props = {}; // fill test props
  component = getTempComponent(props);
  test("renders without crashing", () => {
    const rendered = render(component);
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});