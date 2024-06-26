import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Meetups from './components/Meetups/Meetups.jsx'
import Members from './components/Members/Members.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Search from './components/Search/Search.jsx'
import About from './components/About/About.jsx'
import Root from './components/Root/Root.jsx'
import LogIn from './components/LogIn/LogIn.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import GetStarts from './components/GetStarts/GetStarts.jsx'
import MeetupBlogDetails from './components/MeetupBlogDetails/MeetupBlogDetails.jsx'
import MeetupBlog from './components/MeetupBlog/MeetupBlog.jsx'
import MembersPortfolio from './components/MembersPortfolio/MembersPortfolio.jsx'
// import Member from './components/Member/Member.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root> ,
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
        element: <SignIn></SignIn>
      },
      {
        path: '/get-starts',
        element: <GetStarts></GetStarts>
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
