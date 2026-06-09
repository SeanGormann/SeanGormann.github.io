/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Engineering from "./pages/Engineering";
import CV from "./pages/CV";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="engineering" element={<Engineering />} />
          <Route path="cv" element={<CV />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
