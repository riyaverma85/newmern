
// import {link,Outlet}from"react-router.dom"
// const Layout=()=>{
//  return(
//     <>
//      <link to="Home">Home</link>|
//      <link to="Insert">Insert</link>|
//      <link to="Display">display</link>|
//      <link to="update">update</link>|
//      <link to="search">search</link>
//      <hr size="4" color="red"/>
//      <Outlet/>
//      <hr size="4" color="red"/ >
//      www.mycrud.com
//     </>
//  )
// }
// export default Layout;

import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="home">Home</Link> |{" "}
        <Link to="insert">Insert</Link> |{" "}
        <Link to="display">Display</Link> |{" "}
        <Link to="update">Update</Link> |{" "}
        <Link to="search">Search</Link>
      </nav>

      <hr size="4" color="red" />
      <Outlet />
      <hr size="4" color="red" />
      <footer>www.mycrud.com</footer>
    </>
  );
};

export default Layout;