import { PillProvider } from "./context";
import { Home } from "./pages";

function App() {
  return (
    <PillProvider>
      <Home />
    </PillProvider>
  );
}

export default App;
