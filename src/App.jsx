import AuthInputs from "./components/AuthInputs/AuthInputs.jsx";
import Header from "./components/Header/Header.jsx";
import Tabs from "./components/Tabs/Tabs.jsx";

export default function App() {
  return (
    <>
      <Header />
      {/* can also pass a custom component */}
      <Tabs wrapperType="menu"> 
        {
          <>
            <li>Home</li>
            <li>About</li>
          </>
        }
      </Tabs>
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
