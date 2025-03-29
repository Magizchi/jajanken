import { Route, Routes } from "react-router";
import LandingPage from "./landing";
import ArenaPage from "./arena";
import BattlefieldPage from "./battlefield";
import SelectCharacterPage from "./select-character";

function App() {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={<LandingPage />}
      />
      <Route
        index
        path="/select-character"
        element={<SelectCharacterPage />}
      />
      <Route
        index
        path="/battlefield"
        element={<BattlefieldPage />}
      />
      <Route
        index
        path="/arena"
        element={<ArenaPage />}
      />
    </Routes>
  );
}

export default App;
