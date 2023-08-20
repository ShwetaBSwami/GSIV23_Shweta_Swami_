import React from "react";
import { render, screen } from "@testing-library/react";
import { DetailsCard } from "../../components/details-card";

test("render a card which shows title", () => {
  const dataValue = {
    url: "",
    title: "Movie Name",
    description: "Nice Movie",
  };
  render(<DetailsCard {...dataValue} />);
  expect(screen.getByText("Movie Name")).toBeInTheDocument;
});
