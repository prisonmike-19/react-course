// const heading=React.createElement("h1",{id:"heading"},"Hello World from React");
import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child", key:"child-1" },
    [React.createElement("h1", { id: "heading", key: "h1-1" }, "Nested Heading "),React.createElement("h2", { id: "heading2", key:"h1-2" }, "Nested Heading 2")]
  ), React.createElement(
    "div",
    { id: "child2" , key:"child-2" },
    [React.createElement("h1", { id: "heading" ,key:"h2-1"}, "Nested Heading child 2"),React.createElement("h2", { id: "heading2" ,key:"h2-2"}, "Nested Heading 2 child 2")]
  )]
);

root.render(parent);
