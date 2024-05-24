import { Box } from "@mui/material"
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import './whereiHaveWorked.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";


const mangeTabActive = {
    color: '#4db5ff',
    borderLeft: '2px solid #4db5ff',
    borderRight: '2px solid #4db5ff',
    borderTop: '2px solid #4db5ff',
    borderBottom: '2px solid #4db5ff',
    backgroundColor: '#1f1f38',
    borderRadius: '0 0.5rem 0.5rem 0',
}
const WhereiHaveWorked = () => {
    const [value, setValue] = useState(0);

    const onHandleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            <Box className='WhereiHaveWorked' >
                <h3>Where I've Worked</h3>
            </Box>

            <div className="tabsBox">
                <Tabs value={value} onChange={onHandleChange} className="tabs">
                    <div className="left-tabs">
                        <TabsList>
                            <Tab style={value === 0 ? { ...mangeTabActive } : {}} className='mange-tab2' value={0}>Abaris SoftTech</Tab>
                            <Tab style={value === 1 ? { ...mangeTabActive } : {}} className='mange-tab2' value={1}>---- </Tab>
                            <Tab style={value === 2 ? { ...mangeTabActive } : {}} className='mange-tab2' value={2}> ---- </Tab>
                            <Tab style={value === 3 ? { ...mangeTabActive } : {}} className='mange-tab2' value={3}>----  </Tab>
                            <Tab style={value === 4 ? { ...mangeTabActive } : {}} className='mange-tab2' value={4}>---- </Tab>
                        </TabsList>
                    </div>
                    <div className="TabPanelDiv">
                        <TabPanel value={0}>
                            <Box className="TabPanel-content">
                                <h1>Software Engineer <span>@ Abaris SoftTech</span></h1>
                                <p className="worktime">Dec 2022 - Jun 2023</p>
                                <p className="websiteName"><Link to={'/https://www.abarissoftech.com/'}>www.abarissoftech.com</Link></p>
                                <div>
                                    <p><MdKeyboardArrowRight className=" fs1" /></p>
                                    <p> Worked on the front-end development using React.js, Bootstrap, Tailwind CSS, Material UI, Javascript</p>

                                </div>
                                <div>
                                    <p><MdKeyboardArrowRight className=" fs1" /></p>
                                    <p>Designed and Built a Desktop app for Marx Group Worldwide that manage Celebrities, Events, Weddings, Real Estate</p>

                                </div>
                                <div>
                                    <p><MdKeyboardArrowRight className=" fs1" /></p>
                                    <p> Implemented website design and enhanced interactivity.</p>

                                </div>
                                <div>
                                    <p><MdKeyboardArrowRight className=" fs1" /></p>
                                    <p> Collaborated closely with the team in regular meetings and interacted with smart contracts and gained expertise in Abaris SoftTech</p>

                                </div>
                            </Box>
                        </TabPanel>

                        <TabPanel value={1}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem maxime aut fuga, ullam ut optio, aspernatur animi sit velit ipsam at nesciunt aliquid tempora voluptate id cupiditate quaerat! A, obcaecati.
                        </TabPanel>

                        <TabPanel value={2}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae non iure aspernatur accusantium, ex maxime! Necessitatibus, impedit commodi. Nobis, repellendus, veniam exercitationem labore eaque odio minus quasi ea libero placeat inventore et ipsum doloremque illo adipisci molestiae ducimus quibusdam animi explicabo nulla. Deserunt ratione amet suscipit blanditiis aut omnis eaque sequi. Laborum modi ullam dicta nam eos corporis. Dolores beatae blanditiis vitae officia ea, molestiae reprehenderit, error, magnam natus voluptatibus eius in eligendi ipsam iure facere nulla quos obcaecati quisquam. Officiis architecto voluptatum facere accusamus repellendus neque suscipit culpa dolores eum, minima vel placeat omnis mollitia distinctio velit corporis incidunt?
                        </TabPanel>

                        <TabPanel value={3}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem maxime aut fuga, ullam ut optio, aspernatur animi sit velit ipsam at nesciunt aliquid tempora voluptate id cupiditate quaerat! A, obcaecati.

                        </TabPanel>

                        <TabPanel value={4}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae non iure aspernatur accusantium, ex maxime! Necessitatibus, impedit commodi. Nobis, repellendus, veniam exercitationem labore eaque odio minus quasi ea libero placeat inventore et ipsum doloremque illo adipisci molestiae ducimus quibusdam animi explicabo nulla. Deserunt ratione amet suscipit blanditiis aut omnis eaque sequi. Laborum modi ullam dicta nam eos corporis. Dolores beatae blanditiis vitae officia ea, molestiae reprehenderit, error, magnam natus voluptatibus eius in eligendi ipsam iure facere nulla quos obcaecati quisquam. Officiis architecto voluptatum facere accusamus repellendus neque suscipit culpa dolores eum, minima vel placeat omnis mollitia distinctio velit corporis incidunt?

                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </>
    )
}

export default WhereiHaveWorked
