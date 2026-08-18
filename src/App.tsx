import { BrowserRouter } from "react-router-dom";
import ScrollReveal from "./components/layout/ScrollReveal";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ScrollReveal />
    </BrowserRouter>
  );
}

export default App;
