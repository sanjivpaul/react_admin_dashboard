import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" className="newUserInput" placeholder="sanjiv" autoComplete="username" />
                </div>

                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" className="newUserInput" placeholder="Sanjiv" />
                </div>

                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" className="newUserInput" placeholder="paulsanjiv81@gmail.com" autoComplete="email" />
                </div>

                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" className="newUserInput" autoComplete="current-password" />
                </div>

                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" className="newUserInput"
                        placeholder="+1 234 4567" />
                </div>

                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" className="newUserInput"
                        placeholder="New York | USA" />
                </div>

                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>

                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>

                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>

                <div className="newUserItem">
                    <label>Action</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button className="newUserBtn">Create</button>
            </form>
        </div>
    )
}
