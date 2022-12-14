import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./carousel.css";
// import { data, multiData } from './data';
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import MultipleStopIcon from "@mui/icons-material/MultipleStop";
// import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
import { BsDot } from "react-icons/bs";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import BookOverview from "./view/BookOverview";
import { Card, CardMedia, Grid, Stack } from "@mui/material";
import { GrZoomIn } from "react-icons/gr";
import { Comment, ModeComment } from "@mui/icons-material";
import "./LibraryCardNe.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: "1100", md: "100%", sm: "100%", xs: "100%" },
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const LibraryCard = () => {
  const [coverList, setCoverList] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  const navigate = useNavigate();
  const handleDetails = (referId) => {
    console.log(referId);
    // navigate(`/coverDetails/${referId}`);
    navigate(`/library/${referId}`);
  };
  useEffect(() => {
    fetch("https://nobovabna.com/webapi/web_magazine/client_library.php")
      .then((res) => res.json())
      .then((data) => {
        setCoverList(data);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
console.log("coverlist", coverList)
  return (
    <div className="">
      {/* {multiData.map((item) => ( */}
      <Grid container spacing={2}>
        {coverList.map((item) => (
          <Grid item xs={12} sm={12} md={12} lg={4}>
            {" "}
            <Box className="cardGalleryArea" sx={{ margin: "10px" }}>
              {" "}
              <Card
                sx={{
                  width: "100%",
                  height: "550px",
                  position: "relative",
                  boxShadow: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack sx={{ width: "90%", border: "1px solid #d5c9c9" }}>
                  <Box
                    sx={{
                      position: "relative",
                      marginBottom: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                      backgroundColor: "#dfdfdf",
                      height: {
                        lg: "330px",
                        md: "300px",
                        sm: "280px",
                        xs: "280px",
                      },
                    }}
                  >
                    <div class="panel__image panel__image--book">
                      <a href="/dd" class="books__book__image">
                        <div
                          class="books__book__img page"
                          // style={{
                          //   background: `url(${"https://nobovabna.com/webapi/cover/put_pic.png"})`,
                          // }}
                        >
                          <span
                            style={{
                              content: "",
                              width: "10px",
                              height: " 100%",
                              // backgroundImage: `url(${"https://thumbs.dreamstime.com/z/isolated-white-background-antique-book-side-view-isolated-white-background-antique-book-side-view-166110265.jpg"})`,
                              backgroundImage: `url(${item.left_side_pic})`,
                              backgroundSize: "100% 100%",
                              backgroundRepeat: "no-repeat",
                              position: "absolute",
                              top: "-10px",
                              left: "46px",
                              transform:
                                "skewY(-45deg) translate(-57px, -43px)",
                              // transform: "rotate(-8deg) skewX(5deg) scale(.8)",
                              // transform: rotate(-8deg) skewX(5deg) scale(.8);
                            }}
                          ></span>
                          <img
                            src={item.image_url}
                            // style={{ width: { lg: "190px", md: "170px", sm: "135px", xs:"130px" } }}
                            alt="img"
                          />
                        </div>
                      </a>
                    </div>
                  </Box>

                  <Box sx={{ padding: "15px" }}>
                    <Stack spacing={1} sx={{ padding: "10px" }}>
                      <Typography
                        gutterBottom
                        variant="p"
                        sx={{
                          fontSize: { xs: "10pt", md: "15pt" },
                          fontWeight: 700,
                        }}
                        component="div"
                      >
                        {item.name}
                      </Typography>
                      <Stack
                        spacing={7}
                        direction="row"
                        justifyContent="space-between"
                      >
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ fontSize: { xs: "7pt", md: "10pt" } }}
                        >
                          {item?.writer} - {item.publish_date}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        sx={{
                          marginTop: "1%",
                          fontSize: { xs: "8pt", md: "12pt" },
                        }}
                      >
                        {item?.ar_details}
                      </Typography>
                    </Stack>{" "}
                    <Stack>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          // marginTop: "10px",
                          // paddingBottom: "30px",
                        }}
                      >
                        <Button
                          sx={{
                            padding: "10px 35px",
                            backgroundColor: "#f0f0f0",
                            color: "green",
                          }}
                          onClick={() => handleDetails(item.issue_refer)}
                          variant="text"
                          size="small"
                        >
                          বিস্তারিত
                        </Button>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Modal
        style={{ overflow: "scroll" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{/* <BookOverview handleClose={handleClose} /> */}</Box>
      </Modal>
    </div>
  );
};

export default React.memo(LibraryCard);
