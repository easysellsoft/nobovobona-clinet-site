import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import { withStyles } from "@material-ui/core/styles";
// import Avatar from "@material-ui/core/Avatar";
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import Divider from "@material-ui/core/Divider";
// import Typography from "@material-ui/core/Typography";
import { Button, Card, CardContent, withStyles } from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import { Divider } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import Product from './Product';

// const faces = [
//   "http://i.pravatar.cc/300?img=1",
//   "http://i.pravatar.cc/300?img=2",
//   "http://i.pravatar.cc/300?img=3",
//   "http://i.pravatar.cc/300?img=4",
// ];

const styles = (muiBaseTheme) => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
//   media: {
//     paddingTop: "56.25%",
//   },
  content: {
    textAlign: "center",
    padding: muiBaseTheme.spacing.unit * 3,
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit,
    },
  },
});


function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data)
    })
  },[])
  return (
    <div>
      <Grid
        sx={{ marginTop: "50px", marginBottom: "50px", paddingX: { lg: "200px" } }}
        container
        spacing={2}
      >
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
       
          {/* <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 300,

                margin: "auto",
                transition: "0.3s",
                boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                "&:hover": {
                  boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", padding: "10px" }}>
                <Box sx={{ display: "inline-block", textAlign: "center" }}>
                  <Avatar
                    sx={{ width: 80, height: 80, margin: "30px" }}
                    alt="Remy-Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                </Box>
                <Typography
                  // className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Basic
                </Typography>
                <Typography variant={"h3"}>Free</Typography>
                <Divider sx={{ margin: "25px" }} light />
                <Typography
                  // className={"MuiTypography--subheading"}
                  variant={"subtitle2"}
                >
                  2 Stories
                </Typography>
              </CardContent>
              <Button sx={{ width: "100%" }} variant="contained">
                Book Now
              </Button>
            </Card>
          </Grid> */}
          {/* <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 300,
                margin: "auto",
                transition: "0.3s",
                boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                "&:hover": {
                  boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
                },
              }}
            >
              
              <CardContent sx={{ textAlign: "center", padding: "10px" }}>
                <Box sx={{ display: "inline-block", textAlign: "center" }}>
                  <Avatar
                    sx={{ width: 80, height: 80, margin: "30px" }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                </Box>

                <Typography
                  // className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Basic
                </Typography>
                <Typography variant={"h3"}>Free</Typography>
                <Divider sx={{ margin: "25px" }} light />
                <Typography
                  // className={"MuiTypography--subheading"}
                  variant={"subtitle2"}
                >
                  2 Stories
                </Typography>
              </CardContent>
              <Button sx={{ width: "100%" }} variant="contained">
                Book Now
              </Button>
            </Card>
          </Grid> */}
          {/* <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 300,
                margin: "auto",
                transition: "0.3s",
                boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                "&:hover": {
                  boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", padding: "10px" }}>
                <Box sx={{ display: "inline-block", textAlign: "center" }}>
                  <Avatar
                    sx={{ width: 80, height: 80, margin: "30px" }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                </Box>
                <Typography
                  // className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Basic
                </Typography>
                <Typography variant={"h3"}>Free</Typography>
                <Divider sx={{ margin: "25px" }} light />
                <Typography
                  // className={"MuiTypography--subheading"}
                  variant={"subtitle2"}
                >
                  2 Stories
                </Typography>
              </CardContent>
              <Button sx={{ width: "100%" }} variant="contained">
                Book Now
              </Button>
            </Card>
          </Grid> */}
       
      </Grid>
    </div>
  );
}
export default Products;
