// todo replace app.css
import "./App.css";
import { AuthenticationPage } from "../auth/AuthenticationPage";
import ClerkProviderWithRoutes from "../auth/ClerkProviderWithRoutes";
import { Layout } from "../layout/Layout";
import { Route, Routes } from "react-router-dom";
import { FloorPlanDesigner } from "../pages/FloorPlanDesigner/FloorPlanDesigner";

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes>
        <Route path="/sign-in/*" element={<AuthenticationPage />}></Route>
        <Route path="/sign-up" element={<AuthenticationPage />}></Route>
        <Route element={<Layout />}>
          {/* put everything that sits in layout here */}
          <Route path="/" element={<FloorPlanDesigner />}></Route>
        </Route>
      </Routes>
    </ClerkProviderWithRoutes>
  );
}

export default App;
