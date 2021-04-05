import React, { Fragment } from 'react'
import './profile.css'

const UserDetailCard = ({user}) => {
    return(
        <Fragment>
            <div className="container emp-profile">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img
                                    // src={user.user.avatar}
                                    alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>
                                    {user.User.Name}{user.User.Surname}
                                </h5>
                                <h6>
                                    {/* {user.status} */}
                                </h6>

                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home"
                                           role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>SKILLS</p>
                                {/* {user.skills.map(value=>{
                                    return (
                                        <div>
                                            <a href=''> {value} </a>
                                        </div>
                                    )
                                })} */}
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel"
                                     aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {/* {user._id} */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user.User.Name} {user.User.Surname}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user.User.Email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>123 456 7890</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {/* {user.status} */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Company</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {/* {user.company} */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Location</label>
                                        </div>
                                        <div className="col-md-6">
                                            {/* <p>{user.location}</p> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Web-site</label>
                                        </div>
                                        <div className="col-md-6">
                                            {/* <p>{user.website}</p> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>Bio</label><br/>
                                            {/* <p>{user.bio}</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </Fragment>
    )
}


export default UserDetailCard