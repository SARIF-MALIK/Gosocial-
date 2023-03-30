import './profile.css'
import { Fragment } from "react"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Feed from "../../components/feed/Feed"

const Profile = () => {
  return (
    <Fragment>
        <Topbar/>
        <div className="profile">
          <Sidebar/>
          <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className='profileCoverImg' src="assets/post/3.jpeg" alt="" />
                <img className='profileUserImg' src="assets/person/7.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Veronica</h4>
                    <span className='profileInfoDesc'>Let's Do it</span>
                </div>
            </div>
            <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
            </div>
          </div>

        </div>
    </Fragment>
  )
}

export default Profile