import { UserProvider } from "contexts/user/provider";
import { UserLayout } from "userLayout";

function App() {
  return (
    <UserProvider>
      <UserLayout />
    </UserProvider>
  );
}

export default App;
