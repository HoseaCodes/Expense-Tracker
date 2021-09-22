import React, { useContext, useEffect } from 'react';
import './profile.css';
import { GlobalContext } from '../../context/GlobalState';

const Profile = () => {
    const { user, token, getUser, getRefreshToken } = useContext(GlobalContext)

    useEffect(() => {

        async function render() {
            await getRefreshToken()
        }
        render();

        if (token !== null) {
            getUser(token);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { avatar, username, firstName, lastName, address, bio, phone, email } = user;

    return (
        <>
            <section className="content pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="profile-user-box card-box bg-custom">
                                <div className="row">
                                    <div className="col-sm-6"><span className="float-left mr-3"><img src={avatar} alt={username} className="thumb-lg rounded-circle" /></span>
                                        <div className="media-body text-white">
                                            <h4 className="mt-1 mb-1 font-18">{firstName} {lastName}</h4>
                                            {/* <p className="text-light mb-0">{address.city}, {address.state} {address.country}</p> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="text-right">
                                            <a href="/edit" className="loginbtn btn btn-outline-dark">Edit Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card-box">
                                <h4 className="header-title mt-0">Personal Information</h4>
                                <div className="panel-body">
                                    <p className="text-muted font-13 pt-4" >{bio}</p>
                                    <hr />
                                    <div className="text-left">
                                        <p className="text-muted font-13"><strong>Full Name :</strong> <span className="m-l-15">{firstName} {lastName}</span></p>
                                        <p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">{phone}</span></p>
                                        <p className="text-muted font-13"><strong>Email :</strong> <span className="m-l-15">{email}</span></p>
                                        {/* <p className="text-muted font-13"><strong>Location :</strong> <span className="m-l-15">{address.country}</span></p> */}
                                    </div>
                                    <ul className="social-links list-inline mt-4 mb-0">
                                        <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-skype"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-box ribbon-box">
                                <div className="ribbon ribbon-primary">Archives</div>
                                <div className="clearfix"></div>
                                <div className="inbox-widget">
                                    <a href="#">
                                        <div className="inbox-item">
                                            <p className="inbox-item-author">August 2021</p>
                                            <p className="inbox-item-text" style={{ color: 'green' }}>$200.00</p>
                                            <br />
                                            <p className="inbox-item-author">July 2021</p>
                                            <p className="inbox-item-text" style={{ color: 'red' }}>$150.00</p>
                                            <br />
                                            <p className="inbox-item-author">June 2021</p>
                                            <p className="inbox-item-text" style={{ color: 'green' }}>$8000.00</p>
                                            <br />
                                            <p className="inbox-item-date">
                                                <button type="button" className="btn btn-icon btn-sm waves-effect waves-light btn-success">View All Archives</button>
                                            </p>
                                        </div>
                                    </a>


                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="card-box tilebox-one"><i className="icon-layers float-right text-muted"></i>
                                        <h6 className="text-muted text-uppercase mt-0">YTD Budget</h6>
                                        <h2 className="" style={{ color: 'green' }} >$1,587</h2><span className="badge badge-custom">+11% </span><span className="text-muted">From previous year</span></div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card-box tilebox-one"><i className="icon-paypal float-right text-muted"></i>
                                        <h6 className="text-muted text-uppercase mt-0">Current Month Budget</h6>
                                        <h2 className="" style={{ color: 'green' }}>$<span >46,782</span></h2><span className="badge badge-danger">-29% </span><span className="text-muted">From previous period</span></div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card-box tilebox-one"><i className="icon-rocket float-right text-muted"></i>
                                        <h6 className="text-muted text-uppercase mt-0">Target Goal</h6>
                                        <h2 className="" style={{ color: 'red' }} >$1,890 <span className="text-muted" style={{ "fontSize": '1rem' }}>Remaining</span> </h2><span className="badge badge-custom">+89% </span><span className="text-muted">Last month</span></div>
                                </div>
                            </div>
                            <div className="progress-bar-container px-2 mb-5">

                                <div class="container ">
                                    <div class="col-md-12">
                                        <div class="panel">
                                            <header class="panel-heading">
                                                goal progress
                                                <span class="tools pull-right">
                                                    <a href="#" class="fa fa-chevron-down"></a>
                                                    <a href="#" class="fa fa-times"></a>
                                                </span>
                                            </header>
                                            <div class="panel-body">
                                                <ul class="goal-progress">
                                                    <li>
                                                        <div class="details">
                                                            <div class="progess-title">
                                                                <a href="#">Save Money</a> - First Goal ($20,000)
                                                            </div>
                                                            <div class="progress progress-xs">
                                                                <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                                                    <span class="">70%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="text-center"><a href="#">View all Goals</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-box">
                                <h4 className="header-title mb-3">My Budget</h4>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Project Name</th>
                                                <th>Start Date</th>
                                                <th>Due Date</th>
                                                <th>Status</th>
                                                <th>Assign</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Adminox Admin</td>
                                                <td>01/01/2015</td>
                                                <td>07/05/2015</td>
                                                <td><span className="label label-info">Work in Progress</span></td>
                                                <td>Coderthemes</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Adminox Frontend</td>
                                                <td>01/01/2015</td>
                                                <td>07/05/2015</td>
                                                <td><span className="label label-success">Pending</span></td>
                                                <td>Coderthemes</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Adminox Admin</td>
                                                <td>01/01/2015</td>
                                                <td>07/05/2015</td>
                                                <td><span className="label label-pink">Done</span></td>
                                                <td>Coderthemes</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Adminox Frontend</td>
                                                <td>01/01/2015</td>
                                                <td>07/05/2015</td>
                                                <td><span className="label label-purple">Work in Progress</span></td>
                                                <td>Coderthemes</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Adminox Admin</td>
                                                <td>01/01/2015</td>
                                                <td>07/05/2015</td>
                                                <td><span className="label label-warning">Coming soon</span></td>
                                                <td>Coderthemes</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile;