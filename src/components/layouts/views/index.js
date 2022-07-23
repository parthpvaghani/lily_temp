import React from "react";
import { Route, Routes } from "react-router-dom";
import WordBank from "../../../pages/WordBank";
import AppLayout from "../app-layout";

export const Views = () => {
  return (
    <Routes>
    <Route element={<AppLayout/>}>
    <Route path="/wordbank" element={<WordBank/>}/>
    </Route>
    </Routes>
  )
}
export default Views;