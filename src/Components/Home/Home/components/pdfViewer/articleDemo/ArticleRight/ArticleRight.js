import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

import "./ArticleRight.css";
import { useState } from "react";
import { useEffect } from "react";
function ArticleRight({ writerId }) {
  const [writerData, setWriterData] = useState([]);
     const formData = new FormData();
  console.log(writerId);
  useEffect(() => {
    formData.append("writer_id", writerId);
     fetch(`https://nobovabna.com/webapi/web_magazine/al_writer_details.php`, {
       method: "POST",
       body: formData,
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setWriterData(data);   
       });
  }, [writerId]);
 
  return (
    <Box
      sx={{
        border: "1px solid #ebebeb",
        padding: "20px",
        borderRadius: "10px",
        height: "100%",
      }}
    >
      <Grid container spacing={3}>
        {writerData.map((writer) => (
          <Grid item xs={12} md={12}>
            <Box>
              <Box className="propertiesCard">
                <Box className="propertiesImgArea1">
                  <img
                    src={writer?.writer_pic}
                    style={{ height: "40%", width: "100%" }}
                    alt="error"
                    className="img-fluid propertiesImg"
                  />
                  <Box className="item-category-box2">
                    <Box className="item-category">লেখক</Box>
                  </Box>
                </Box>

                <Box sx={{ marginTop: "20px" }}>
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      color: "#212121",

                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "1.2",
                      marginTop: "15px",
                      marginBottom: "20px",
                      letterSpacing: "0.5px",
                      textTransform: "initialize",
                    }}
                  >
                    {writer?.writer_name}
                  </Typography>
                  <Box className="rent-price1">
                    <Typography
                      variant="h3"
                      component="h2"
                      sx={{
                        color: "#777",

                        fontWeight: "700",
                        fontSize: "18px",
                        lineHeight: "1.2",
                        marginTop: "10px",
                        marginBottom: "10px",
                        letterSpacing: "0.5px",
                        textTransform: "initialize",
                      }}
                    >
                      {writer?.writeup_quantity}
                    </Typography>
                    <Box className="item-price1">{writer?.writer_info}</Box>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        padding: "10px 35px",
                        minWidth: "100px",
                        color: "#fff",
                        fontWeight: "bold"
                      }}
                    >
                      বিস্তারিত
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default React.memo(ArticleRight);
