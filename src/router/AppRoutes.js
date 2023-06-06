import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import Review from "../pages/Review";
import Results from "../pages/Results";

function AppRouter(){
  return <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/review' element={<Review/>}/>
    <Route path='/results' element={<Results/>}/>
  </Routes>;
}

export default AppRouter;