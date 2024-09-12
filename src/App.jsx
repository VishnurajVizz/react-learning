import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import { EXAMPLES } from "./data";
function App() {
  const [selectedTab, setSelectedTab] = useState(null);

  const tabs = ["Components", "JSX", "Props", "State"];

  function handleClick(tabName) {
    setSelectedTab(tabName.toLowerCase());
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => {
              return (
                <CoreConcepts
                  title={data.title}
                  description={data.description}
                  image={data.image}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {tabs.map((tab) => (
              <TabButton
                onCLick={() => {
                  handleClick(tab);
                }}
              >
                {tab}
              </TabButton>
            ))}
          </menu>
          {selectedTab ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].code}</code>
              </pre>
            </div>
          ) : (
            <p>Select a Topic</p>
          )}

          {/* Another Approach */}
          {/* {Object.entries(EXAMPLES).map(([key, value]) => {
            const { title, description, code } = value;
            return (
              selectedTab == key && (
                <div id="tab-content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <pre>
                    <code>{code}</code>
                  </pre>
                </div>
              )
            );
          })} */}
        </section>
      </main>
    </div>
  );
}

export default App;
