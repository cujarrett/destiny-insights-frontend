
import React from "react"
import ReactDOM from 'react-dom';
import { render, screen } from "@testing-library/react"
import { act } from 'react-dom/test-utils';
import App from "./App.js"

test("App initial paint works as expected", async () => {
  // act(() => {
  //   ReactDOM.render(<App />);
  // });
  const header = screen.getByTestId("header")
  expect(header).toBeInTheDocument()
})
