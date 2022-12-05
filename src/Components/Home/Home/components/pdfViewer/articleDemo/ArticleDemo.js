import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCompressArrowsAlt,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";
import ArticleRight from "./ArticleRight/ArticleRight";
import MainLoading from "../../../../../Shared/MainLoading";
// import Loading from "../../../../Shared/Loading";
// import WriterProfile from "./WriterProfile";
import { Visibility } from '@mui/icons-material/Visibility';
import TablePagination from "@mui/material/TablePagination";

//

function ArticleDemo() {
  const [sliderRef, setSliderRef] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);
  const [fullScreen, setFullScreen] = useState(true);
  //
  const handle = useFullScreenHandle();
  //
  const [lekhok, setLekhok] = useState(false);
  const params = useParams();
  const [chapterList, setChapterList] = useState([]);
  const [chapterDetails, setChapterDetails] = useState([]);
  const [getId, setGetId] = useState(null);
  const [writerId, setWriterId] = useState(null);
  //  pagination start ===============
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
   const handleChangePage = (event, newPage) => {
     setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
     setRowsPerPage(+event.target.value);
     setPage(0);
   };
  //  pagination end ===============
  //   const { referId, chapterId } = params;

  const handleFullScreen = () => {
    handle.enter();
  };
  // const handleLekhok = () => {
  //   setLekhok(true);
  // }
  
  //challenge endd
  useEffect(() => {
    setGetId(chapterList[0]?.chapter_id);
    setWriterId(chapterList[0]?.writer);
  }, [chapterList]);

  useEffect(() => {
    const formData = new FormData();
    formData.append("con_refer", "8BU8NV");
    fetch("https://nobovabna.com/webapi/web_magazine/all_article_list.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setChapterList(data);
      });
  }, []);

  const handleChapterId = (id) => {
    setCurrentSlide(null); //aita add kora hoice for ....
    setChapterDetails(null);
    setIsLoading(true);
    setGetId(id);
  };
  useEffect(() => {
    const formData = new FormData();
    formData.append("chapter_id", getId);
    fetch("https://nobovabna.com/webapi/web_magazine/al_article_details.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setChapterDetails(data);
        setIsLoading(false);
      });
  }, [getId]);
  const sliderSettings = {
    // removes default buttons
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,

    dots: false,
    afterChange: (currentSlide) => setCurrentSlide(currentSlide),
  };
console.log("paici ", lekhok)
  return (
    <Box
      sx={{
        paddingTop: "10px",
        paddingBottom: "50px",
        paddingX: { lg: "20px", md: "20px", sm: "20px", xs: "10px" },
        // backgroundColor: "#068B87",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "5px",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: "#000",

              fontWeight: "700",
              fontSize: "36px",
              lineHeight: "1.2",

              marginBottom: "34px",
              letterSpacing: "0.5px",
              textTransform: "initialize",
            }}
          >
            বর্তমান ইস্যু - {chapterList[0]?.issue_name}
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "18px",
              marginBottom: "30px",
              marginTop: "-20px",
              // fontWeight: "bold",
            }}
            variant="h5"
          >
            প্রকাশের তারিখ - {chapterList[0]?.issue_publish_date}
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => setLekhok(!lekhok)}
            variant="outlined"
            size="small"
          >
            Lekhok
          </Button>
        </Box>
      </Box>
      <FullScreen handle={handle}>
        <Grid
          container
          borderRadius=""
          style={
            handle.active
              ? { background: "#ffffff", height: "100vh" }
              : { background: "#FFFfff", height: "auto" }
          }
          spacing={2}
        >
          <Grid item xs={12} md={12} lg={lekhok ? 3 : 4}>
            <Card sx={{ height: "100%", padding: "20px", boxShadow: "none" }}>
              <List
                sx={{
                  width: "100%",
                  height: "100%",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    <Typography
                      variant="h3"
                      component="h2"
                      sx={{
                        color: "#212121",

                        fontWeight: "700",
                        fontSize: "24px",
                        lineHeight: "1.2",
                        // marginTop: "15px",
                        marginBottom: "30px",
                        letterSpacing: "0.5px",
                        textTransform: "initialize",
                      }}
                    >
                      বাছাইকৃত লেখা
                    </Typography>
                  </ListSubheader>
                }
              >
                {chapterList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => (
                    <ListItemButton
                      style={{ marginTop: "20px", padding: "2px 2px 2px 15px" }}
                      key={item.chapter_id}
                    >
                      <ListItemIcon style={{ minWidth: "34px" }}>
                        <Box className="progressBox2">
                          <Box class="progress-layout">
                            <Box class="process-circle"></Box>
                            <Box class="process-circle"></Box>
                            <Box class="process-circle"></Box>
                            <Box class="progress-content">
                              <Box class="item-parcent">
                                {" "}
                                <SendIcon
                                  style={{
                                    fontSize: "18px",
                                    margin: "0px",
                                    color: "#068B87",
                                  }}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </Box>

                        {/* <SendIcon style={{ fontSize: "24px", margin: "0px" }} /> */}
                      </ListItemIcon>
                      <ListItemText
                        onClick={() => {
                          setWriterId(item.writer);
                          handleChapterId(item.chapter_id);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <Typography
                          variant="h3"
                          component="h2"
                          sx={{
                            color: "#212121",
                            fontWeight: "700",
                            fontSize: "18px",
                            lineHeight: "1.2",
                            // marginTop: "15px",
                            // marginBottom: "20px",
                            letterSpacing: "0.5px",
                            textTransform: "initialize",
                          }}
                        >
                          {item.chapter_head}
                        </Typography>{" "}
                      </ListItemText>
                    </ListItemButton>
                  ))}
                <Box
                  sx={{
                    display: {
                      lg: "none",
                      md: "block",
                      sm: "block",
                      xs: "block",
                    },
                  }}
                >
                  {" "}
                  {/* pagination start ==== */}
                  <TablePagination
                    rowsPerPageOptions={[5, 10]}
                    component="div"
                    count={chapterList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                  {/* pagination end ==== */}
                </Box>
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={lekhok ? 6 : 8}>
            {isLoading ? (
              <MainLoading />
            ) : (
              chapterDetails?.map((step, idx) => (
                <>
                  <Slider ref={setSliderRef} {...sliderSettings}>
                    <Box>
                      <Card sx={{ boxShadow: "none" }}>
                        <CardContent>
                          {step?.chapter_content_type === "video" && (
                            <CardMedia
                              component="video"
                              alt="video"
                              sx={
                                handle.active
                                  ? {
                                      height: "100%",
                                      display: "block",

                                      maxWidth: "100%",
                                      overflow: "hidden",
                                      width: "100%",
                                    }
                                  : {
                                      height: "100%",
                                      display: "block",
                                      maxWidth: "100%",
                                      overflow: "hidden",
                                      width: "100%",
                                    }
                              }
                              image={step.chapter_content}
                              title={step.label}
                              type="video/mp4"
                              muted=""
                              autoPlay=""
                              controls
                            />
                          )}
                          {step?.chapter_content_type === "pdf" && (
                            <iframe
                              type="application/pdf"
                              title={step.label}
                              src={`${step.chapter_content}#toolbar=0`}
                              width="100%"
                              style={
                                handle.active
                                  ? {
                                      height: "600px",
                                    }
                                  : {
                                      height: 605,
                                    }
                              }
                              frameBorder="false"
                            />
                          )}
                          {step?.chapter_content_type === "featureImage" && (
                            <CardMedia
                              component="file"
                              alt="file"
                              sx={
                                handle.active
                                  ? {
                                      height: "500px",
                                      display: "block",
                                      maxWidth: "100%",
                                      overflow: "hidden",
                                      width: "100%",
                                    }
                                  : {
                                      height: 605,
                                      display: "block",

                                      maxWidth: "100%",
                                      overflow: "hidden",
                                      width: "100%",
                                    }
                              }
                              image={step.chapter_content}
                              title={step.label}
                              controls
                            />
                          )}
                        </CardContent>
                      </Card>
                    </Box>
                    {step?.chapter_detail?.map((x, idx) => (
                      <Box>
                        <Card
                          sx={{ boxShadow: "none", border: "none" }}
                          key={idx}
                          style={{ height: "100%", width: "100%" }}
                        >
                          <CardContent>
                            <Typography
                              sx={
                                handle.active
                                  ? {
                                      height: "700px",
                                      display: "block",
                                      maxWidth: "100%",
                                      overflow: "hidden",
                                      width: "100%",
                                      color: "black",
                                    }
                                  : {
                                      height: 605,
                                      display: "block",
                                      maxWidth: "100%",
                                      overflow: "hidden",
                                      width: "100%",
                                      color: "black",
                                    }
                              }
                              variant="body"
                              component="div"
                            >
                              {x}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Box>
                    ))}
                  </Slider>
                  <Box
                    key={{ idx }}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                      backgroundColor: "#068B87",
                      padding: "10px 10px 10px 10px",
                      margin: "0px",
                      borderRadius: "50px",
                      paddingX: "20px",
                    }}
                  >
                    <Box>
                      {handle.active ? (
                        <Button
                          onClick={handle.exit}
                          style={{
                            fontWeight: "bold",

                            letterSpacing: "1px",
                            marginRight: "20px",
                            color: "#fff",
                          }}
                          variant="text"
                          size="large"
                        >
                          <FaCompressArrowsAlt />
                        </Button>
                      ) : (
                        <Button
                          onClick={handleFullScreen}
                          style={{
                            fontWeight: "bold",
                            // textTransform: "upp",
                            letterSpacing: "1px",
                            marginRight: "20px",
                            color: "#fff",
                          }}
                          variant="text"
                          size="large"
                        >
                          <FaExpandArrowsAlt />
                        </Button>
                      )}
                      <Button
                        // onCLick={sliderRef?.slickPrev}
                        onClick={sliderRef?.slickPrev}
                        style={{
                          backgroundColor: "#063970",

                          fontWeight: "bold",

                          letterSpacing: "1px",
                        }}
                        variant="contained"
                        size="large"
                      >
                        <FaChevronLeft />
                      </Button>
                      <Button
                        style={{
                          fontWeight: "bold",
                          color: "#fff",

                          letterSpacing: "1px",
                        }}
                        variant="text"
                        size="large"
                      >
                        {currentSlide + 1}
                      </Button>
                      <Button
                        onClick={sliderRef?.slickNext}
                        style={{
                          backgroundColor: "#063970",

                          fontWeight: "bold",

                          letterSpacing: "1px",
                        }}
                        variant="contained"
                        size="large"
                      >
                        <FaChevronRight />
                      </Button>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        style={{
                          color: "#fff",

                          fontWeight: "bold",
                          paddingTop: "5px",
                        }}
                        variant="body"
                        component="div"
                      >
                        {currentSlide + 1} of{" "}
                        {chapterDetails[0]?.chapter_detail?.length + 1}
                      </Typography>
                    </Box>
                  </Box>
                </>
              ))
            )}
          </Grid>
          {lekhok ? (
            <Grid item xs={12} md={12} lg={lekhok ? 3 : 0}>
              <ArticleRight writerId={writerId}></ArticleRight>
            </Grid>
          ) : null}
        </Grid>
      </FullScreen>
    </Box>
  );
}

export default React.memo(ArticleDemo);
