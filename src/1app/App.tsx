import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from '../common/Loader';
import PageTitle from '../components/PageTitle';
import { SignIn } from '../2pageFlat/Authentication/SignIn';
import { SignUp } from '../2pageFlat/Authentication/SignUp';
// import Calendar from '../pages/Calendar';
// import Chart from '../pages/Chart';
import ECommerce from '../pages/Dashboard/ECommerce';
// import FormElements from '../pages/Form/FormElements';
import FormLayout from '../pages/Form/FormLayout';
// import Profile from '../pages/Profile';
// import Settings from '../pages/Settings';
// import Tables from '../pages/Tables';
// import Alerts from '../pages/UiElements/Alerts';
// import Buttons from '../pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import ProtectedRoute from '../utils/ProtectedRoute';
import { Films } from '../2pageFlat/Film/Films';
import { CreateFilm } from '../2pageFlat/Film/CreateFilm';
import { useSelector } from 'react-redux';
import { selectFilmsData } from '../5entities/films/model/selector/films';
import { EditFilm } from '../2pageFlat/Film/EditFilm';
import { Subtitles } from '../2pageFlat/Subtitles/Subtitles';
import { CreateSubtitles } from '../2pageFlat/Subtitles/CreateSubtitles';
import { SubtitlesLine } from '../2pageFlat/Subtitles/SubtitlesLine';
import { Users } from '../2pageFlat/Users/Users';
import { Lessons } from '../2pageFlat/Lessons/Lessons';
import { Progress } from '../2pageFlat/Progress/Progress';
import { Words } from '../2pageFlat/Words/Words';
import { LessonWords } from '../2pageFlat/Lessons/LessonWords';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  // const { status } = useSelector(selectFilmsData);
  // console.log('status', status,'loading',loading);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    // <DefaultLayout>
    //   <Routes>
    //     <Route
    //       index
    //       element={
    //         <>
    //           <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <ECommerce />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/calendar"
    //       element={
    //         <>
    //           <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Calendar />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/profile"
    //       element={
    //         <>
    //           <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Profile />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/forms/form-elements"
    //       element={
    //         <>
    //           <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <FormElements />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/forms/form-layout"
    //       element={
    //         <>
    //           <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <FormLayout />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/tables"
    //       element={
    //         <>
    //           <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Tables />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/settings"
    //       element={
    //         <>
    //           <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Settings />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/chart"
    //       element={
    //         <>
    //           <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Chart />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/ui/alerts"
    //       element={
    //         <>
    //           <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Alerts />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/ui/buttons"
    //       element={
    //         <>
    //           <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Buttons />
    //         </>
    //       }
    //     />
    //      <Route
    //       path="/auth/signin"
    //       element={
    //         <>
    //           <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <SignIn />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/auth/signup"
    //       element={
    //         <>
    //           <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <SignUp />
    //         </>
    //       }
    //     />
    //   </Routes>
    // </DefaultLayout  >

    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route
          path=""
          index
          element={
            <>
              {/* <ProtectedRoute> */}
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
              {/* </ProtectedRoute> */}
            </>
          }
        />

        <Route
          path="/films"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Films />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/create-film"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <CreateFilm />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/edit-film/:id"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <EditFilm />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormLayout />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/subtitles"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Subtitles />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/subtitles/:id"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SubtitlesLine />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/create-sub"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <CreateSubtitles />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/edit-sub/:id"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <CreateSubtitles />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Users />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/lessons"
          element={
            <>
              {/* <ProtectedRoute> */}
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Lessons />
              {/* </ProtectedRoute> */}
            </>
          }
        />
        <Route
          path="/lessons/:id"
          element={
            <>
              {/* <ProtectedRoute> */}
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <LessonWords />
              {/* </ProtectedRoute> */}
            </>
          }
        />
        <Route
          path="/progress"
          element={
            <>
              {/* <ProtectedRoute> */}
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Progress />
              {/* </ProtectedRoute> */}
            </>
          }
        />
        <Route
          path="/words"
          element={
            <>
              {/* <ProtectedRoute> */}
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Words />
              {/* </ProtectedRoute> */}
            </>
          }
        />
      </Route>

      <Route path="/auth/signup" element={<SignUp />}></Route>
      <Route path="/auth/signin" element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
