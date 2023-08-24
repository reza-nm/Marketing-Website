import { Container, Typography, Button, Box, Grid } from "@mui/material";
import BedImage from "../assets/images-icons/img-1.png";
const AboutUs = () => {
  return (
    <>
      <Grid container px={"4rem"} sx={{ backgroundColor: "#ffb607" }} pb={"3rem"}>
        <Grid item={true} xs={12} sm={6} mt={"4rem"}>
          <Typography variant="h3" color="white" mb={"1.5rem"}>
            About us
          </Typography>
          <Typography variant="p" color="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            cum tempore enim et? Esse, atque reprehenderit! Error inventore
            earum quaerat? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Praesentium cum tempore enim et? Esse, atque reprehenderit!
            Error inventore earum quaerat?
          </Typography>
          <Button variant="contained" sx={{ display: "block", mt: "1.5rem" }}>
            read more
          </Button>
        </Grid>
        <Grid
          item={true}
          xs={12}
          sm={6}
          mt={"4rem"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={BedImage}
            alt="bed image"
            style={{
              maxWidth: "27rem",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
