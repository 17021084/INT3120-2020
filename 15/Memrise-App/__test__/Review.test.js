import React from "react";
import renderer from "react-test-renderer";
import Review from "../screens/Review";

it("Test Review Screen", () => {
  const tree = renderer.create(<Review/>).toJSON();
  expect(tree).toMatchSnapshot();
});
