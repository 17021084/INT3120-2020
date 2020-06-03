import React from "react";
import renderer from "react-test-renderer";
import Review from "../screens/Review";

it("Test Review Screen", () => {
  const tree = renderer.create(<Review/>).toJSON();
  expect(tree).toMatchSnapshot();
});


// describe("Review i", () => {
//   it("should match to snapshot", () => {
//     const item = { id: 1, title: "bnb"}
//     const component = renderer
//       .create(
//         <Review
//           review = {item} 
//           onPress={() => navigation.navigate("Review")} 
//         />
//       )
//       .toJSON();
//     expect(component).toMathSnapShot();
//   })
// })

// it("Test Review Screen", () => {
//   renderer.create(<Review/>);
// });