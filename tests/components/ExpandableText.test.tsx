import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";

describe("Expandable Text", () => {
    
  it("should render full text if short", () => {
    render(<ExpandableText text="Short Text" />);
    expect(screen.getByText("Short Text")).toBeInTheDocument();
  });
  it("should truncate  full text if longer", () => {
    const text = "a".repeat(333);
    render(<ExpandableText text={text} />);
    const truncatedText = text.substring(0, 255) + "...";
    expect(screen.getByText(truncatedText)).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    
  });
});
