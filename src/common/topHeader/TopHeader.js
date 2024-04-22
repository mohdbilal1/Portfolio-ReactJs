import React, { useState } from 'react'
import Logo from "../../assets/mb.jpg";
import "./topHeader.css";
import { Box, Button, Drawer } from '@mui/material';
import SideBar from '../sidebar/SideBar';
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';


const TopHeader = () => {
    const [navActive, setNavActive] = useState("/");

    const [openSide, setOpenSide] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpenSide(newOpen);
    };


    return (
        <>
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