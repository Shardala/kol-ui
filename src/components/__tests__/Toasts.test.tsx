import React from "react";
import { render, screen } from "@testing-library/react";
import ToastContainer from "../ToastContainer";

describe("ToastContainer", () => {
  const data = [
    {
      id: Date.now(),
      message: 'Test toast',
      type: 'Success'
    }
  ];
  const position = 'top-right';

  Element.prototype.scrollTo = () => {}

  it("renders the ToastContainer component", () => {
    const renderResult = render(<ToastContainer data={data} position={position} removeToast={() => {}} />);

    expect(renderResult.container.querySelector('.toast-container')).not.toBeNull();
  });
});
