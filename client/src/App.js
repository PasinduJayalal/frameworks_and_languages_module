import Index from "./scenes/items";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;