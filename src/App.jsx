// import React from "react";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import Support from "./pages/Support/Support";
// import TransactionPage from "./pages/TransactionPage/TransactionPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Dashboard />,
//   },
//   {
//     path: "/transaction",
//     element: <TransactionPage />,
//   },
//   {
//     path: "/support",
//     element: <Support />,
//   },
// ]);

// const App = () => {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// };

// export default App;
import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support";
import TransactionPage from "./pages/TransactionPage/TransactionPage";
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
