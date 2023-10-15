import Counter from "./component/ClassBased";
import CounterFunctional from "./component/Functional";
import CallBack from "./hooks/UseCallback/Callback";
import Context from "./hooks/UseContext/Context";
import Effect from "./hooks/UseEffect/Effect";
import Memo from "./hooks/UseMemo/Memo";
import Reducer from "./hooks/UseReducer/Reducer";
import Ref from "./hooks/UseRef/Ref";

function App() {
  return (
    <>
     {/* <Counter/> */}
     {/* <CounterFunctional/> */}
     {/* {CounterFunctional()} */}
     {/* <Reducer/> */}
     {/* <Effect/> */}
     {/* <Context /> */}
     {/* <Memo/> */}
     <CallBack/>
    </>
  );
}

export default App;
