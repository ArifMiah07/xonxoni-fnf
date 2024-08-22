import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Meetups from "../Pages/Meetups/Meetups";
import Members from "../Pages/Members/Members";
import Blogs from "../Pages/Blogs/Blogs";
import About from "../Pages/About/About";
import LogIn from "../Pages/Login/LogIn";
import Register from "../Pages/Register/Register";
import Explore from "../Pages/Explore/Explore";
import MeetupBlog from "../components/MeetupBlog/MeetupBlog";
import MeetupBlogDetails from "../components/MeetupBlogDetails/MeetupBlogDetails";
import MembersPortfolio from "../components/MembersPortfolio/MembersPortfolio";
import Search from "../components/Search/Search";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main> ,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/meetups',
          element: <Meetups></Meetups>,
          loader: ()=> fetch(`meetup-blogs.json`)
        },
        {
          path: '/members',
          element: <Members />,
          loader: () => fetch(`members.json`),
        },
        {
          path: '/membersPortfolio',
          element: <MembersPortfolio />,
          // loader: ({ params }) => fetch(`members.json/${params.id}`)
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/search',
          element: <Search></Search>
        },
        {
          path: '/log-in',
          element: <LogIn></LogIn>
        },
        {
          path: '/sign-in',
          element: <Register></Register>
        },
        {
          path: '/get-starts',
          element: <Explore></Explore>
        },
        {
          path: '/meetups-blogs-details',
          element: <MeetupBlogDetails></MeetupBlogDetails>,
        },
        {
          path: '/meetup-blog',
          element:  <MeetupBlog></MeetupBlog>,
          loader: ()=> fetch(`meetup-blogs-details.json`)
        }
      ]
    },
    {
      path: '/meetups',
      element: <div>Im from about page, are meetup arki</div>
    },
    {
      path: '/members',
      element: <div>Iam from contact, member arki</div>
    },
    {
      path: '/about',
      element: <div>This is about page</div>
    },
    {
      path: '/search',
      element: <div>Iam from search, this <p>Thsi is from search page</p></div>
    }
  ])

  export default router;