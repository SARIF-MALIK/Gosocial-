import { Fragment } from "react"
import Rightbar from "../components/rightbar/Rightbar"
import Sidebar from "../components/sidebar/Sidebar"
import Topbar from "../components/topbar/Topbar"
import Feed from "../components/feed/Feed"
import './home.css'; 

const Home = () => {
  return (
    <Fragment>
        <Topbar/>
        <div className="homeContainer">
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </div>
    </Fragment>
  )
}

export default Home