import React from "react";
import renderer from "react-test-renderer";
import AddMem from "../screens/AddMem";

it("Test AddMem Screen", () => {
  const tree = renderer.create(<AddMem/>).toJSON();
  expect(tree).toMatchSnapshot();
});
