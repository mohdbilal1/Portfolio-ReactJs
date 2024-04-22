import { Box, Button, Typography } from "@mui/material"
import '../styles/blogStyle.css'
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <Box className="blogBox">
        <Typography component={'h1'}>Blog Website Currently Not Available</Typography>
       <Link to={'/'}> <Button><GoHome className=" fs3me1"/> Go To Home</Button></Link>
      </Box>
    </>
  )
}

export default Blogs
