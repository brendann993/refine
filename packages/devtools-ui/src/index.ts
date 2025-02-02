import React from "react";
import { createRoot } from "react-dom/client";

import { DevToolsApp } from "./devtools.tsx";

export const renderDevTools = (container: Element) => {
  const root = createRoot(container);
  root.render(React.createElement(DevToolsApp));
};

export { DevToolsApp };
