import {Routes,Route} from "react-router-dom";
import {Home,CreatePost,PageNotFound} from "../pages"
import {Protected} from "./Protected"
export const AllRoutes =()=> {
  return (
    <main>
        <Routes>
         <Route path="/" element={<Home />}></Route>   
         <Route path="create" element={<Protected> <CreatePost /></Protected>}></Route>   
         <Route path="*" element={<PageNotFound />}></Route>   
        </Routes>
    </main>
  )
}
