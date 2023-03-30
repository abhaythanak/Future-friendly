import { Provider } from "react-redux"
import Body from "./components/Body"
import Head from "./components/Head"
import store from "./utils/store"



function App() {
  
  return (
    <Provider store={store}>
    <div className="">
      <Head/>
      <Body/>
      















      {
      /* head
      *body
      *sidebar
      *menuitems
      *main container
      *Button list
      *Video container
      *videoCard

      
      */}
    </div>
    </Provider>
  )
}

export default App
