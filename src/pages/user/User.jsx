import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import "./user.css"
import { Link } from "react-router-dom"

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddBtn">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://avatars.githubusercontent.com/u/86189749?s=400&u=92c5579bdef3e83bd12fc6c12d7608c3a3a69a5c&v=4" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Sanjiv Paul</span>
              <span className="userShowJobTitle">Software Developer</span>
            </div>
          </div>
          <div className="userShopBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">sanjivpaul81</span>
            </div>

            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">14.07.2000</span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 8521542005</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">sanjivpaul81@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="sanjivpaul81" />
              </div>

              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Sanjiv Paul" />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  className="userUpdateInput"
                  placeholder="sanjivpaul81@gmail.com" />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="+1 8521542005" />
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="New York | USA" />
              </div>

              <div className="userUpdateItem">
                <label>Birth Date</label>
                <input
                  type="date"
                  className="userUpdateInput"
                  placeholder="14.07.2000" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://avatars.githubusercontent.com/u/86189749?s=400&u=92c5579bdef3e83bd12fc6c12d7608c3a3a69a5c&v=4" alt="" className="userUpdateUploadImg" />
                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
