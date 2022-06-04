import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import Pages from "./pages";
import { fetchCheck } from "./store/thunks/loginThunk";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCheck());
  }, []);

  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;