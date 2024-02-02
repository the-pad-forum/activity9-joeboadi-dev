'use client'
import Albums from "./components/Albums/Albums";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";

const Home = () => {
  return(
    <>
      <h1 className="text-center text-2xl tracking-wide m-8">Albums</h1>
      <Albums/>
      <h1 className="text-center text-2xl tracking-wide m-8">Posts</h1>
      <Posts/>
      <h1 className="text-center text-2xl tracking-wide m-8">Users</h1>
      <Users/>
    </>
  );
};

export default Home;