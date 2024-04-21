import React from "react";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";

//import sidebar css from react-pro-sidebar module and our custom css 
import 'react-pro-sidebar/dist/css/styles.css';
import "./sideBar.css"

//import icons from react icons
import { MdEventNote } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { GoGift } from "react-icons/go";
import { SlLock } from "react-icons/sl";
// import Logo from "../../assets/mb.jpg";
// import { MdBackspace } from "react-icons/md";
import { TfiUser } from "react-icons/tfi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { SiBento } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";

const SideBar = () => {
  

  return (
    <>
      <div id="main-div" data-aos="fade-right"  data-aos-duration="500" data-aos-easing="ease-in-sine">
        <ProSidebar
          style={{ height: "100%", position: "absolute" }}
        >
          <div className="sidebar-body-div">
            <SidebarContent className="main-div">
              <Menu className="sidebar-content-div"
                iconShape="circle"
              >
                
                <p className="Menus-p">MENUS</p>

                <MenuItem icon={<GoHome />}> Home <Link to={'/'} /></MenuItem>

                <MenuItem icon={<TfiUser />}>About<Link to={'/about'} /></MenuItem>

                <MenuItem icon={<GiSkills />}>Skills<Link to={'/Skills'} /></MenuItem>

                <MenuItem icon={<SiBento />}>Projects <Link to={'/Projects'} /></MenuItem>

                <SubMenu title="Check Out" icon={<GoGift />}>
                  <MenuItem icon={<MdEventNote />}>Youtube<Link to="/" /></MenuItem>
                  <MenuItem icon={<MdEventNote />}>Facebook <Link to="/" /></MenuItem>
                </SubMenu>

                <MenuItem icon={<CgWebsite />}>Blogs<Link to={'/Blogs'} /></MenuItem>

                <MenuItem icon={<BiMessageSquareDetail />}>Contact<Link to={'/'} /></MenuItem>


                <MenuItem icon={<SlLock />}>Logout <Link to={'/'} /></MenuItem>

              </Menu>
            </SidebarContent>
          </div>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;

