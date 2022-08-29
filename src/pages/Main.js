import { Routes, Route } from "react-router-dom";
import { UseStatePage } from "./UseStatePage";
import { UseDebouncePage } from "./UseDebouncePage";
import { UseHoverPage } from "./UseHoverPage";
import { UseInputPage } from "./UseInputPage";
import { UseScrollPage } from "./UseScrollPage";
import { UseMemoPage } from "./UseMemoPage";
import { UseCallbackPage } from "./useCallback/UseCallbackPage";
import { UseFetchPage } from "./UseFetchPage";
import { UseReducerPage } from "./UseReducerPage";
import { UseRequestPage } from "./UseRequestPage";

export const Main = () => {

  const array = [1, 3, 2, 5, 7, 9]

  return(
    <div className="main">
      <Routes>
        <Route path="/" element={<UseInputPage />} />
        <Route path="/usehover" element={<UseHoverPage />} />
        <Route path="/usescroll" element={<UseScrollPage />} />
        <Route path="/usedebounce" element={<UseDebouncePage />} />
        <Route path="/usestate" element={<UseStatePage />} />
        <Route path="/usememo" element={<UseMemoPage array={array} />} />
        <Route path="/usecallback" element={<UseCallbackPage />} />
        <Route path="/usefetch" element={<UseFetchPage />} />
        <Route path="/usereducer" element={<UseReducerPage />} />
        <Route path="/userequest" element={<UseRequestPage />} />
      </Routes>
    </div>
  )
}