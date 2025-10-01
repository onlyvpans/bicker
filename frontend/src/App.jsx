import "./App.css";
import { AuthenticationPage } from "../auth/AuthenticationPage";
import { ClerkProviderWithRoutes } from "./auth/ClerkProviderWithRoutes";

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes>
        <Route path="/sign-in/*" element={<AuthenticationPage />}></Route>
        <Route path="/sign-up" element={<AuthenticationPage />}></Route>
        <Route element={<Layout />}>
          {/* put everything that sits in layout here */}
        </Route>
      </Routes>
    </ClerkProviderWithRoutes>
  );
}

export default App;
