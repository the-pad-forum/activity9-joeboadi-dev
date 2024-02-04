'use client'
<<<<<<< HEAD

=======
>>>>>>> edb3ec25efaa62384ab611bc1d57d83f6f676715
import Albums from "./components/Albums/Albums";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";

const Home = () => {
  return(
    <>
      <h1 className="text-center text-2xl tracking-wide m-8">Albums</h1>
      <Albums/>
<<<<<<< HEAD
      <h1 className="text-center text-base-content text-2xl tracking-wide m-8">Posts</h1>
      <Posts/>
      <h1 className="text-center text-base-content text-2xl tracking-wide m-8">Users</h1>
=======
      <h1 className="text-center text-2xl tracking-wide m-8">Posts</h1>
      <Posts/>
      <h1 className="text-center text-2xl tracking-wide m-8">Users</h1>
>>>>>>> edb3ec25efaa62384ab611bc1d57d83f6f676715
      <Users/>
    </>
  );
};

export default Home;