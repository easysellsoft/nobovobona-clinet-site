import React from "react";
import {
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  withStyles,
} from "@mui/material";

import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { type, price, supplier_number, img, id } = product;
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    console.log(id);
     navigate(`/product/${id}`);
  };
  return (
    <Grid item xs={6} sm={4} md={4}>
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
          <Box
            sx={{
              display: "inline-block",
              textAlign: "center",
              borderRadius: "50%",
              backgroundColor: "#777",
              marginBottom: "10px",
            }}
          >
            <Avatar
              sx={{
                width: "80px",
                height: "80px",
                margin: "30px",

                // padding: "20px"
              }}
              alt="Remy-Sharp"
              src={img}
              // src="/static/images/avatar/1.jpg"
            />
          </Box>
          <Typography
            // className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {type}
          </Typography>
          <Typography variant={"h3"}>{price}</Typography>
          <Divider sx={{ margin: "25px" }} light />
          <Typography
            // className={"MuiTypography--subheading"}
            variant={"subtitle2"}
          >
            {supplier_number}
          </Typography>
        </CardContent>
        <Button
          sx={{ width: "100%" }}
          variant="contained"
          onClick={() => navigateToProductDetail(id)}
        >
          Book Now
        </Button>
      </Card>
    </Grid>
  );
};

export default Product;
