// import{BrowserRouter,Routes,Route}from "react-router-dom";
// import Layout from "./layout";
// import Insert from "./pages/insert";

// const App=()=>{
//   return(
//     <>
// <BrowserRouter>
// <Routes>
//   <Route path ="/" element={<Layout/>}>
//   <Route index element ={<Home/>}/>
//   <Route path="home" element={<Home/>}/>
//    <Route path="Insert" element={<Insert/>}/>
//     <Route path="display" element={<Display/>}/>
//      <Route path="update" element={<update/>}/>
//       <Route path="search" element={<search/>}/>
//       </Route>
// </Routes>
// </BrowserRouter>
//     </>
//   )
// }
// export default App;




import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Insert from "./pages/insert";
import Display from "./pages/Display";
import Update from "./pages/update";
import Layout from "./layout";
// import Layout from "./Layout";
// import Insert from "./pages/Insert";
// import Home from "./pages/Home";
// import Display from "./pages/display";
// import Update from "./pages/Update";
// import Search from "./pages/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route index element={<Home/>}/>
           <Route path="home" element={<Home/>}/>
       <Route path="insert" element={<Insert/>}/>
          <Route path="display" element={<Display/>}/>
         <Route path="update" element={<Update/>}/>
          <Route path="search" element={<search/>}/>
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;