import React, { useState } from 'react'
import Logo from "../../assets/mb.jpg";
import "./topHeader.css";
import { Box, Button, Drawer } from '@mui/material';
import SideBar from '../sidebar/SideBar';
import { MdOutlineMenu } from "react-icons/md";


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
                <a href="/"
                    className={navActive === "/" ? "active" : ""}
                    onClick={() => setNavActive("/")}
                >
                    <img className="logo" src={Logo} alt='Logo' />
                </a>
                <Box className='rightUL'>
                    <ul className="liauto">
                        <li>
                            <a
                                onClick={() => setNavActive("/")}
                                className={navActive === "/" ? "active" : ""}
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                onClick={() => setNavActive("/about")}
                                className={navActive === "/about" ? "active" : ""}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setNavActive("/experience")}
                                className={navActive === "/experience" ? "active" : ""}
                                href="/experience"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setNavActive("/portfolio")}
                                className={navActive === "/portfolio" ? "active" : ""}
                                href="/portfolio"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="/blogs"
                                onClick={() => setNavActive("/blogs")}
                                className={navActive === "/blogs" ? "active" : ""}
                            >
                                Blogs
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setNavActive("/contact")}
                                className={navActive === "/contact" ? "active" : ""}
                                href="/contact"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </Box>
            </Box>
        </>
    )
}

export default TopHeader