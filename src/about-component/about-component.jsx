import React from 'react'
import './about.css'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

export function About() {
    return (
        <div className="about">
            <div className="aboutUpper">
                <h1>Who are we?</h1>
            </div>

            <div className="aboutLower">
                <h2>Our Team</h2>
                <div className="aboutCards">
                    <div className="profile">
                        <img src="p1.jpg" alt="" />
                        <h3>John Doe</h3>
                        <h6>Project Manager.</h6>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Perferendis, mollitia. Lorem ipsum dolor sit
                            amet consectetur, adipisicing elit. Eum blanditiis
                            autem adipisci fuga iste excepturi cupiditate
                            incidunt perferendis saepe? Dolor.
                        </p>
                    </div>

                    <div className="profile">
                        <img src="p2.jpg" alt="" />
                        <h3>David Son</h3>
                        <h6>Program Manager.</h6>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Perferendis, mollitia. Lorem ipsum, dolor sit
                            amet consectetur adipisicing elit. Distinctio
                            dolorum ipsam officiis laudantium. Sint, suscipit.
                            Nam mollitia itaque quibusdam error.
                        </p>
                    </div>

                    <div className="profile">
                        <img src="p3.jpeg" alt="" />
                        <h3>Veronica Ysea</h3>
                        <h6>Volunteer Management.</h6>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Perferendis, mollitia. Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit. Aliquid nobis
                            voluptas nam pariatur consectetur voluptatibus. Sunt
                            debitis sed culpa quos!
                        </p>
                    </div>

                    <div className="profile">
                        <img src="p4.jpg" alt="" />
                        <h3>Kobe Brian Santos</h3>
                        <h6>Sad</h6>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Perferendis, mollitia. Lorem ipsum, dolor sit
                            amet consectetur adipisicing elit. Id cumque
                            cupiditate quia rerum molestias asperiores
                            temporibus est suscipit quas incidunt!
                        </p>
                    </div>
                </div>
            </div>

            <MDBFooter
                color="blue-grey"
                id="footer"
                className="page-footer font-small lighten-5 pt-0"
            >
                <div style={{ backgroundColor: '#21d192' }}>
                    <MDBContainer>
                        <MDBRow className="py-4 d-flex align-items-center">
                            <MDBCol
                                md="6"
                                lg="5"
                                className="text-center text-md-left mb-4 mb-md-0"
                            >
                                <h6 className="mb-0 white-text">
                                    Get connected with us on social networks!
                                </h6>
                            </MDBCol>
                            <MDBCol
                                md="6"
                                lg="7"
                                className="text-center text-md-right"
                            >
                                <a className="fb-ic ml-0">
                                    <i className="fab fa-facebook-f white-text mr-lg-4">
                                        {' '}
                                    </i>
                                </a>
                                <a className="tw-ic">
                                    <i className="fab fa-twitter white-text mr-lg-4">
                                        {' '}
                                    </i>
                                </a>
                                <a className="gplus-ic">
                                    <i className="fab fa-google-plus-g white-text mr-lg-4">
                                        {' '}
                                    </i>
                                </a>
                                <a className="li-ic">
                                    <i className="fab fa-linkedin-in white-text mr-lg-4">
                                        {' '}
                                    </i>
                                </a>
                                <a className="ins-ic">
                                    <i className="fab fa-instagram white-text mr-lg-4">
                                        {' '}
                                    </i>
                                </a>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                    <MDBRow className="mt-3">
                        <MDBCol
                            md="3"
                            lg="4"
                            xl="3"
                            className="mb-4 dark-grey-text"
                        >
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>GoFundEarth</strong>
                            </h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px' }}
                            />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Autem corporis aperiam eum
                                adipisci voluptate similique ullam cumque
                                doloremque, facere odit!
                            </p>
                        </MDBCol>
                        <MDBCol
                            md="2"
                            lg="2"
                            xl="2"
                            className="mb-4 dark-grey-text"
                        >
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Products</strong>
                            </h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px' }}
                            />
                            <p>
                                <a href="#!" className="dark-grey-text">
                                    HAHA
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="dark-grey-text">
                                    HEHE
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="dark-grey-text">
                                    HIHI
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="dark-grey-text">
                                    HUHU
                                </a>
                            </p>
                        </MDBCol>
                        <MDBCol
                            md="3"
                            lg="2"
                            xl="2"
                            className="mb-4 dark-grey-text"
                        >
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Useful links</strong>
                            </h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px' }}
                            />
                            <p>
                                <a href="#!" className="dark-grey-text">
                                    Nakaka
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="dark-grey-text">
                                    tamad
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="dark-grey-text">
                                    na
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="dark-grey-text">
                                    mabuhay
                                </a>
                            </p>
                        </MDBCol>
                        <MDBCol
                            md="4"
                            lg="3"
                            xl="3"
                            className="mb-4 dark-grey-text"
                        >
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Contact</strong>
                            </h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px' }}
                            />
                            <p>
                                <i className="fa fa-home mr-3" /> New York, NY
                                10012, US
                            </p>
                            <p>
                                <i className="fa fa-envelope mr-3" />{' '}
                                info@example.com
                            </p>
                            <p>
                                <i className="fa fa-phone mr-3" /> + 01 234 567
                                88
                            </p>
                            <p>
                                <i className="fa fa-print mr-3" /> + 01 234 567
                                89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                        <a href="https://www.MDBootstrap.com"> GoFundEarth </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    )
}
