import Counter from "./component/ClassBased";
import CounterFunctional from "./component/Functional";
import MyCounter from "./component/MyCounter";
import CallBack from "./hooks/UseCallback/Callback";
import Context from "./hooks/UseContext/Context";
import Effect from "./hooks/UseEffect/Effect";
import Memo from "./hooks/UseMemo/Memo";
import Reducer from "./hooks/UseReducer/Reducer";
import Ref from "./hooks/UseRef/Ref";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/class" element={<Counter/>}/>
      <Route path="/functional" element={<CounterFunctional/>}/>
      <Route path="*" element={<MyCounter />}/>
    </Routes>
     {/* <Counter/>
     <CounterFunctional/>
     {CounterFunctional()}
     <Reducer/>
     <Effect/>
     <Context />
     <Memo/>
     <CallBack/> */}
    </>
  );
}

export default App;
