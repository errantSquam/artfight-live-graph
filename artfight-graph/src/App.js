import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Index from "./pages/index";
import DynamicImage from "./pages/dynamic_image";
import TestPage from "./testPage";
 
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="image.png" element={<DynamicImage />} />
                
            </Routes>
        </Router>
    );
}
 
export default App;