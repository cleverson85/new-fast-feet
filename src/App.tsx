import { BrowserRouter as Router } from "react-router";
import { AuthProvider } from "./contexts/auth-context";
import { RouteWrapper } from "./components/route-wrapper";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <RouteWrapper />
      </Router>
    </AuthProvider>
  );
}
