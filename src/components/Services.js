import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Box,
  CardHeader,
  Avatar,
  IconButton,
  Icon,
} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import serviceIcon1 from "../assets/images-icons/icon-1.png";
import serviceIcon2 from "../assets/images-icons/icon-2.png";
import serviceIcon3 from "../assets/images-icons/icon-3.png";
import serviceIcon4 from "../assets/images-icons/icon-4.png";

const Services = () => {
  return (
    <>
      <Typography
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "5rem", lg: "6rem" } }}
        variant="h3"
        color="black"
        mt={"3rem"}
      >
        Our Services
      </Typography>
      <Typography
        variant="h6"
        color="gray"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"2rem"}
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.6rem", lg: "2.rem" },
        }}
      >
        Lorem ipsum dolor sit amet.
      </Typography>
      <Box
        mt={"2rem"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        <Card
          sx={{
            background: "transparent",
            boxShadow: "none",
            margin: "0 2rem",
            maxWidth: "20rem",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{ width: "7rem", height: "auto" }}
              alt="Logo"
              justifyContent={"center"}
              src={serviceIcon1}
            />
            <Typography variant="h3" color="black">
              Furniture
            </Typography>
            <Typography
              textAlign={"center"}
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              corrupti libero consequatur?
            </Typography>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card
          sx={{
            background: "transparent",
            boxShadow: "none",
            margin: "0 2rem",
            maxWidth: "20rem",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{ width: "7rem", height: "auto" }}
              alt="Logo"
              justifyContent={"center"}
              src={serviceIcon2}
            />
            <Typography variant="h3" color="black">
              office
            </Typography>
            <Typography
              textAlign={"center"}
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              corrupti libero consequatur?
            </Typography>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card
          sx={{
            background: "transparent",
            boxShadow: "none",
            margin: "0 2rem",
            maxWidth: "20rem",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{ width: "7rem", height: "auto" }}
              alt="Logo"
              justifyContent={"center"}
              src={serviceIcon3}
            />
            <Typography variant="h3" color="black">
              bedroom
            </Typography>
            <Typography
              textAlign={"center"}
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              corrupti libero consequatur?
            </Typography>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card
          sx={{
            background: "transparent",
            boxShadow: "none",
            margin: "0 2rem",
            maxWidth: "20rem",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{ width: "7rem", height: "auto" }}
              alt="Logo"
              justifyContent={"center"}
              src={serviceIcon4}
            />
            <Typography variant="h3" color="black">
              hall room
            </Typography>
            <Typography
              textAlign={"center"}
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              corrupti libero consequatur?
            </Typography>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card
          sx={{
            background: "transparent",
            boxShadow: "none",
            margin: "0 2rem",
            maxWidth: "20rem",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{ width: "7rem", height: "auto" }}
              alt="Logo"
              justifyContent={"center"}
              src={serviceIcon4}
            />
            <Typography variant="h3" color="black">
              stairs
            </Typography>
            <Typography
              textAlign={"center"}
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              corrupti libero consequatur?
            </Typography>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
      ;
    </>
  );
};

export default Services;
