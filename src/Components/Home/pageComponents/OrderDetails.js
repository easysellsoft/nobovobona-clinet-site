import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";

const Label = styled("label")({
  display: "block",
  fontSize: "18px",
  marginTop: "15px",
});

const Input = styled("input")(({ theme }) => ({
  //   width: 400,
  //   height: 30,
  width: " 100%",
  height: "50px",
  padding: " 15px",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.getContrastText(theme.palette.background.paper),
}));

const Listbox = styled("ul")(({ theme }) => ({
  width: 200,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.background.paper,
  overflow: "auto",
  maxHeight: 200,
  border: "1px solid rgba(0,0,0,.25)",
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));
const OrderDetails = () => {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });

  return (
    <Box
      sx={{
        // display: "flex",
        // justifyContent: "flex-end",
        // alignItems: "end",

        padding: "1rem",
        // backgroundColor: "#000",
        // color: "#000",
        fontSize: "1.5rem",
        // flexDirection: "column",
        borderTop: "1px solid #ccc",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              marginY: "20px",
              padding: "20px",
            }}
            item
            sm={6}
            md={6}
          >
            <Typography
              sx={{ mb: 1, textAlign: "center" }}
              variant="h4"
              component="div"
            >
              Payment Details
            </Typography>
            {/* <Typography variant="subtitle2" align="left">
              support@nobovobona.com
            </Typography> */}
            <div>
              <div {...getRootProps()}>
                <Label {...getInputLabelProps()}>Card Holder</Label>
                <Input {...getInputProps()} />
              </div>
              {/* {groupedOptions.length > 0 ? (
                <Listbox {...getListboxProps()}>
                  {groupedOptions.map((option, index) => (
                    <li {...getOptionProps({ option, index })}>
                      {option.title}
                    </li>
                  ))}
                </Listbox>
              ) : null} */}
            </div>

            <div {...getRootProps()}>
              <Label {...getInputLabelProps()}>Card Number</Label>
              <Input {...getInputProps()} />
            </div>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Grid
                sx={{
                  //   backgroundColor: "#000",
                  //   color: "#fff",
                  marginY: "20px",
                  marginRight: "20px",
                  //   display: "flex",
                  //   justifyContent: "space-between"
                }}
                item
                sm={6}
                md={6}
              >
                <div {...getRootProps()}>
                  <Label {...getInputLabelProps()}>Exp Date</Label>
                  <Input {...getInputProps()} />
                </div>
              </Grid>
              <Grid
                sx={{
                  //   backgroundColor: "#000",
                  //   color: "#fff",
                  marginY: "20px",
                  marginLeft: "20px",
                  //   display: "flex",
                  //   justifyContent: "space-between"
                }}
                item
                sm={6}
                md={6}
              >
                <div {...getRootProps()}>
                  <Label {...getInputLabelProps()}>CWV</Label>
                  <Input {...getInputProps()} />
                </div>
              </Grid>
            </Box>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                //   backgroundColor: "#000",
                //   color: "#fff",
                //   marginY: "20px",
                //   padding: "20px",
              }}
              item
              sm={12}
              md={12}
            >
              <Box>
                <Box
                  component="img"
                  sx={{
                    height: "60px",
                    width: "155px",
                    marginRight: "10px",
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  src="https://upload.wikimedia.org/wikipedia/commons/2/23/Verve_Image.png"
                />
              </Box>
              <Box>
                <Box
                  component="img"
                  sx={{
                    height: "60px",
                    width: "155px",
                    marginRight: "10px",
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  src="https://newsroom.mastercard.com/wp-content/uploads/2016/09/paypal-logo.png"
                />
              </Box>
              <Box>
                <Box
                  component="img"
                  sx={{
                    height: "60px",
                    width: "155px",
                    marginLeft: "10px",
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  src="https://i.ytimg.com/vi/i09C02151PI/maxresdefault.jpg"
                />
              </Box>
            </Grid>
          </Grid>

          {/* <Grid
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              marginY: "20px",
              padding: "20px",
            }}
            item
            sm={6}
            md={6}
          >
            <Box
              component="img"
              sx={{
                height: 100,
                width: "100%",
                marginLeft: "10px",
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src="https://i.ytimg.com/vi/i09C02151PI/maxresdefault.jpg"
            />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default OrderDetails;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
];
