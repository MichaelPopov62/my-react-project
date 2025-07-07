// src/main.tsx

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "../src/components/App/App";

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// src/main.tsx
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./components/App/App";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
