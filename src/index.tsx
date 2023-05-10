import React from "react";
import { createRoot } from "react-dom/client";
import Canvas from "./components/Canvas";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<Canvas />);
