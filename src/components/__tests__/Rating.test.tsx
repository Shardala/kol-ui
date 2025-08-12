import React from "react";
import { render, screen } from "@testing-library/react";
import Rating from "../Rating/Rating";

describe("Rating", () => {
  it("renders the Rating component", () => {
    render(<Rating />);

    expect(screen.getAllByRole("button", { hidden: true }).length).toEqual(5);
  });
});
