// const heading=React.createElement("h1",{id:"heading"},"Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "heading" }, "Nested Heading "),React.createElement("h2", { id: "heading2" }, "Nested Heading 2")]
  ), React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", { id: "heading" }, "Nested Heading child 2"),React.createElement("h2", { id: "heading2" }, "Nested Heading 2 child 2")]
  )]
);

root.render(parent);
