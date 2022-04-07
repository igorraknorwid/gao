import React, { FC, Suspense } from "react";
import { observer } from "mobx-react-lite";
import { Routes, Route } from "react-router-dom";
import StartPage from "./components/start_page/StartPage";
import { Layout } from "./components/layout/Layout";
import NotFound from "./components/not_found/NotFound";
import Output from "./components/output/Output";
import Finish from "./components/finish/Finish";
import Progress from "./progress/Progress";

const StepOne = React.lazy(() => {
  return import("./components/step_one/StepOne");
});
const StepTwo = React.lazy(() => {
  return import("./components/step_two/StepTwo");
});
const StepThree = React.lazy(() => {
  return import("./components/step_three/StepThree");
});
const StepFour = React.lazy(() => {
  return import("./components/step_four/StepFour");
});

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<StartPage />} />
        <Route element={<Layout />}>
          <Route
            path='/steps/1'
            element={
              <Suspense fallback={<div>...Loading</div>}>
                <StepOne />
              </Suspense>
            }
          />
          <Route
            path='/steps/2'
            element={
              <Suspense fallback={<div>...Loading</div>}>
                <StepTwo />
              </Suspense>
            }
          />
          <Route
            path='/steps/3'
            element={
              <Suspense fallback={<div>...Loading</div>}>
                <StepThree />
              </Suspense>
            }
          />
          <Route
            path='/steps/4'
            element={
              <Suspense fallback={<div>...Loading</div>}>
                <StepFour />
              </Suspense>
            }
          />
          <Route path='/in_progress' element={<Progress />} />
        </Route>
        <Route path='/steps/5' element={<Output />} />
        <Route path='/steps/finish' element={<Finish />} />

        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default observer(App);
