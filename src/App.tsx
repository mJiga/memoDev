import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./pages/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
