import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="Anshu">
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const username = useContext(UserContext);

  return <h1>Welcome, {username}!</h1>;
}