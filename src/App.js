import "./App.css";
import { motion } from "framer-motion";
import {HomeOutlined, LoyaltyOutlined, BarChartRounded, AccountBalanceWalletOutlined, DonutLargeSharp, SettingsInputComponentOutlined, PhoneInTalkOutlined, TocRounded} from "@mui/icons-material";
import { useState } from "react";
import { Divider } from '@mui/material';


const routesAnalytics = [
  { name: 'Home', icon: <HomeOutlined/>, path: '/' },
  { name: 'Sales', icon: <LoyaltyOutlined/>, path: '/sales' },
];
const routesContent = [
  { name: 'Costs', icon: <BarChartRounded/>, path: '/costs' },
  { name: 'Payments', icon: <AccountBalanceWalletOutlined/>, path: '/payments' },
  { name: 'Finances', icon: <DonutLargeSharp/>, path: '/finances' },
];

const bottomRoutes = [
  { name: 'Settings', icon: <SettingsInputComponentOutlined/>, path: '/settings' },
  { name: 'Support', icon: <PhoneInTalkOutlined/>, path: '/support' },
];


function App() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState();


  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
    setActive(path)
};

const classNameActive = (path) => {
        return active === path ? 'item active' : 'item';
    }

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };

  const subheading = {
    true:{
        opacity: 1,
    },
    false:{
        opacity: 0,
        display: 'none',
        transition:{
            delay:0.3
        }
    }
}
  return (
    <div className="App">
      <motion.div
        data-open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRounded />
          </motion.div>
          {/* profile */}
          <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="profile"
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
          >
            <img
              src="https://sun6-21.userapi.com/s/v1/ig2/dtiZWuvdVaB3xamWWeSZKzcQbYkxqJSUGGIZXalS8-uWbuqIE-JzNH4MSCCRmoKJzStfVgvTAcHSSpNp-xBw5ViC.jpg?size=2021x2021&quality=96&crop=16,10,2021,2021&ava=1"
              alt="profile_img"
            />
          </motion.div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                ANALYTICS
              </motion.h3>
              <div>
                            {
                              routesAnalytics.map((route) => (
                                    <motion.div
                                        whileHover={{
                                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                                            cursor: "pointer",
                                            fontWeight: 600
                                        }}
                                        transition={{
                                            type: 'none', duration: 0.2
                                        }}
                                        key={ route.name } onClick={ () => goToRoute(route.path) } className={classNameActive(route.path)}>
                                        <motion.div className='icon'>{route.icon}</motion.div>
                                        <motion.span variants = {subheading}>{route.name}</motion.span>
                                    </motion.div>
                                ))
                            }

                        </div>
            </div>
            {/* group 2 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              CONTENT
            </motion.h3>
            <div>
                            {
                              routesContent.map((route) => (
                                    <motion.div
                                        whileHover={{
                                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                                            cursor: "pointer",
                                            fontWeight: 600
                                        }}
                                        transition={{
                                            type: 'none', duration: 0.2
                                        }}
                                        key={ route.name } onClick={ () => goToRoute(route.path) } className={classNameActive(route.path)}>
                                        <motion.div className='icon'>{route.icon}</motion.div>
                                        <motion.span variants = {subheading}>{route.name}</motion.span>
                                    </motion.div>
                                ))
                            }

                        </div>
          </div>
          <div className="group"><Divider /></div>
          
          {/* group 3 */}
          <div className="group">
                          <div >
                              {
                                  bottomRoutes.map((route) => (
                                      <motion.div
                                          whileHover={{
                                              backgroundColor: "rgba(255, 255, 255, 0.3)",
                                              cursor: "pointer",
                                              fontWeight: 600
                                          }}
                                          transition={{
                                              type: 'none', duration: 0.2
                                          }}
                                          key={ route.name } onClick={ () => goToRoute(route.path) } className={classNameActive(route.path)}>
                                          <motion.div className='icon'>{route.icon}</motion.div>
                                          <motion.span variants = {subheading}>{route.name}</motion.span>
                                      </motion.div>
                                  ))
                              }
                          </div>
          </div>
          </div>
          

        </motion.div>
      </motion.div>

      <div className="body_container"></div>
    </div>
  );
}

export default App;
