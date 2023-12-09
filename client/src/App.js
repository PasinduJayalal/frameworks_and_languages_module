import Index from "./scenes/items";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="relative isolate  items-center gap-x-6 overflow-hidden bg-blue-500 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <a href="https://editor.swagger.io/" className="font-semibold">Freecycle</a>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path="" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;