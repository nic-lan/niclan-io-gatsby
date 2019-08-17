import React from "react"
import renderer from "react-test-renderer"

import IndexPage from "../index"

describe("Index", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<IndexPage />)

    expect(tree.toJSON()).toMatchSnapshot()
  })
})
