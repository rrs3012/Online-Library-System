import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Error from './components/Error.jsx'
import BrowseBook from './components/BrowseBook.jsx'
import Home from './components/Home.jsx'
import AddBooks from './components/AddBooks.jsx'
import BookDetails from './components/BookDetails.jsx'

const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/browseBook",
          element: <BrowseBook />
        },
        {
          path: "/addbook",
          element: <AddBooks />

        },
        {
          path:"/books/:id",
          element:<BookDetails />
        },
        {
          path: "/books/category/:category",
          element: <BrowseBook />
        },
      ],
      errorElement: <Error />
    },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)

