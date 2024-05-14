import ComponentA from "./components/ComponentA";
import { UserAuthProvider } from "./context/UserAuthContext";

function App() {
  return (
<UserAuthProvider>
  <ComponentA/>
</UserAuthProvider>
  );
}

export default App;
