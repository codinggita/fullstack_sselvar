import Counter from "./component/ClassBased";
import CounterFunctional from "./component/Functional";

function App() {
  return (
    <>
     <Counter/>
     {/* <CounterFunctional/> */}
     {CounterFunctional()}
    </>
  );
}

export default App;
