// import { Provider } from "react-redux"
// import Body from "./components/Body"
// import Head from "./components/Head"
// import store from "./utils/store"
// import { RouterProvider, createBrowserRouter} from "react-router-dom"
// import MainContainer from "./components/MainContainer"
// import WatchPage from "./components/WatchPage"

import Sign from "./components/sign"

// const appRouter = createBrowserRouter([{
//   path:"/",
//   element: <Body/>,
//   children: [
//     {
//       path: "/",
//       element: <MainContainer/>,
//     },
//     {
//       path: "watch",
//       element: < WatchPage/>,
//     },
//   ],
// },
// ])

function App() {
  
  return (
    <>
    <Sign/>
    </>
    // <Provider store={store}>
    // <div className="">
    //   <Head/>
    //   <RouterProvider router={appRouter}/>
      















    //   {
    //   /* head
    //   *body
    //   *sidebar
    //   *menuitems
    //   *main container
    //   *Button list
    //   *Video container
    //   *videoCard

      
    //   */}
    // </div>
    // </Provider>
  )
}

export default App
