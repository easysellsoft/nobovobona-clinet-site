import React, { useState } from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { GrSupport } from "react-icons/gr";
import { HiSupport, HiLockOpen } from "react-icons/hi";
import { RiAccountBoxLine } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { HiHome, HiOutlineDocumentReport } from "react-icons/hi";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { BiCircle } from "react-icons/bi";

const listItemNav = [
  {
    title: "Dashboard",
    icon: <HiHome />,
    to: "/dashboard/dashboard",
    nested: false,
  },
  {
    title: "Order",
    icon: <MdDashboard />,
    to: "/dashboard/order",
    nested: false,
  },
  {
    title: "Payment",
    icon: <FaRegEnvelope />,
    to: "/dashboard/payment/history",
    nested: true,
    submenu: [
      {
        title: "History",
        to: "/dashboard/payment/history",
        icon: <BiCircle />,
      },
      {
        title: "Method",
        to: "/dashboard/payment/method",
        icon: <BiCircle />,
      },
    ],
  },

  {
    title: "Article",
    icon: <MdDashboard />,
    to: "/dashboard/article",
    nested: false,
  },
  {
    title: "Menu",
    to: "/dashboard/menu",
    icon: <GoProject />,
    nested: false,
  },

  {
    title: "Add Page",
    to: "/dashboard/add_page",
    icon: <GoProject />,
    nested: false,
  },
  {
    title: "Orders",
    icon: <RiAccountBoxLine />,
    to: "/dashboard/Orders",
    nested: false,
  },
  {
    title: "Rate",
    icon: <RiAccountBoxLine />,
    to: "/dashboard/rate",
    nested: false,
  },
  {
    title: "Payment",
    to: "/dashboard/payment",
    icon: <GoProject />,
    nested: false,
  },
  {
    title: "Messages",
    to: "/dashboard/messages",
    icon: <GoProject />,
    nested: false,
  },
  {
    title: "Users",
    to: "/dashboard/users",
    icon: <GoProject />,
    nested: false,
  },

  {
    title: "Others",
    icon: <MdDashboard />,
    to: "/dashboard/others",
    nested: true,
    submenu: [
      {
        title: "Others1",
        to: "/dashboard/others",
        icon: <BiCircle />,
      },
      {
        title: "Others1",
        to: "/dashboard/contact_group",
        icon: <BiCircle />,
      },
    ],
  },
];

const MainRoutes = () => {
  const [subOpen, setSubOpen] = useState(false);
  const [title, setTitle] = useState("");
  const location = useLocation();

  //handle subMenu open and close
  const handleSubMenu = () => {
    setSubOpen(!subOpen);
  };
  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgColor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {listItemNav?.map((item, index) => {
          return (
            <>
              <ListItemButton
                key={index}
                component={!item.nested && NavLink}
                to={item?.nested ? null : `${item?.to}`}
                sx={{
                  backgroundColor:
                    item?.to === location?.pathname ? "#C7E5F5" : "#fff",
                  width: "100%",
                  borderLeft:
                    item?.to === location?.pathname && "5px solid #A3A0FB",
                }}
                onClick={() => {
                  handleSubMenu();
                  setTitle(item.title);
                }}
                activeClassName="active"
                exact
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
                {item.nested ? (
                  item.title === title && subOpen ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItemButton>
              {item?.nested && (
                <Collapse
                  in={item?.title === title ? subOpen : false}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                    sx={{
                      width: "100%",

                      bgColor: "background.paper",
                    }}
                  >
                    {item?.submenu?.map((subItem, subIndex) => {
                      return (
                        <ListItemButton
                          key={subIndex}
                          button
                          component={NavLink}
                          to={subItem.to}
                          activeClassName="active"
                          sx={[
                            {
                              backgroundColor:
                                subItem.to === location.pathname
                                  ? "#C7E5F5"
                                  : "#fff",
                            },
                          ]}
                          exact
                        >
                          <ListItemIcon>{subItem.icon}</ListItemIcon>
                          <ListItemText primary={subItem.title} />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </>
          );
        })}
      </List>
    </div>
  );
};

export default React.memo(MainRoutes);
