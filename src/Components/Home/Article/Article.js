import { Box, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
// import AddWriter from "./AddWriter";
import AddArticle from './AddArticle';
import { Link } from 'react-router-dom';
const Writer = () => {
  return (
    <div>
      <div style={{ width: "100%" }} className="mb-5 mt-2">
        {/* <AddArticle /> */}
        <Box>
          <Typography
            sx={{ marginBottom: "0px" }}
            gutterBottom
            variant="h4"
            component="div"
          >
            February 2021
          </Typography>
          <Divider variant="strong" />
          <CardContent sx={{ marginX: "30px" }}>
            <Link
              style={{ textDecoration: "none" }}
              to="dashboard/reading/history/details"
            >
              {" "}
              <Typography
                sx={{ paddingBottom: "20px" }}
                variant="subtitle2"
                color="text.secondary"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across
              </Typography>
            </Link>
          </CardContent>
        </Box>
      </div>
    </div>
  );
};

export default Writer;
