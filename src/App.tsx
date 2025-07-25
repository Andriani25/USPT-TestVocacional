import zustandStore from "./zustand";

// Components
import WelcomeView from "./reactComponents/WelcomeView";
import Test from "./reactComponents/Test";
import Result from "./reactComponents/Result";
//

export default function TestVocacional() {
  // Estados para controlar la "pagina" que se esta mostrando
  const currentView = zustandStore((state) => state.view);
  //

  if (currentView === "welcome") {
    return <WelcomeView />;
  }

  if (currentView === "test") {
    return <Test />;
  }

  if (currentView === "results") {
    return <Result />;
  }

  return null;
}
