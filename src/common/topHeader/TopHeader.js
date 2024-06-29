import React, { useState } from 'react'
import Logo from "../../assets/mb.jpg";
import "./topHeader.css";
import { Box, Button, Drawer } from '@mui/material';
import SideBar from '../sidebar/SideBar';
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const TopHeader = () => {
    const [navActive, setNavActive] = useState("/");

    const [openSide, setOpenSide] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpenSide(newOpen);
    };


    return (
        <>
            <Box className="top_contactdiv">
                <div>
                    <ul>
                        <li>
                            <Link to="tel:+91 9760786071">
                                <IoCall className='fs5' /> +91 9760786071
                            </Link>
                        </li>
                        <li>
                            <Link to="mailto:mohdbilal.mymail@gmail.com">
                                <MdOutlineEmail className='fs5' /> mohdbilal.mymail@gmail.com
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="https://www.linkedin.com/in/mohd-bilal1" target="_blank">
                                <BsLinkedin className='fs3' />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://github.com/mohdbilal1" target="_blank">
                                <FaGithub className='fs3' />
                            </Link>
                        </li>


                    </ul>
                </div>
            </Box>
            <Box className="topHeader" data-aos="fade-down" data-aos-duration="1000">
                <div className='heading-div-mobile'>
                    <Button onClick={toggleDrawer(true)}><MdOutlineMenu className=' fs-1textwhite' /></Button>
                    <Drawer open={openSide} onClose={toggleDrawer(false)}>
                        <SideBar setOpenSide={setOpenSide} />
                    </Drawer>
                </div>
                <Link to="/"
                    className={navActive === "/" ? "active" : ""}
                    onClick={() => setNavActive("/")}
                >
                    <img className="logo" src={Logo} alt='Logo' />
                </Link>

                <Box className='rightUL'>
                    <ul className="liauto">
                        <li>
                            <Link
                                onClick={() => setNavActive("/")}
                                className={navActive === "/" ? "active" : ""}
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onClick={() => setNavActive("/about")}
                                className={navActive === "/about" ? "active" : ""}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setNavActive("/skills")}
                                className={navActive === "/skills" ? "active" : ""}
                                to="/skills"
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setNavActive("/projects")}
                                className={navActive === "/projects" ? "active" : ""}
                                to="/projects"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blogs"
                                onClick={() => setNavActive("/blogs")}
                                className={navActive === "/blogs" ? "active" : ""}
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setNavActive("/contact")}
                                className={navActive === "/contact" ? "active" : ""}
                                to="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </Box>
            </Box>
        </>
    )
}

export default TopHeader