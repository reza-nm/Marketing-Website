import { Box, Typography, Grid } from "@mui/material";
import img2 from "../assets/images-icons/img-2.png";
import img3 from "../assets/images-icons/img-3.png";
const OurFurniture = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        margin="2rem 2rem"
      >
        <Typography variant="h3" color="black">
          Our Furniture
        </Typography>
        <Typography variant="p" color="black">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </Typography>
      </Box>
      <Box>
        <Grid container>
          <Grid
            item={true}
            xs={12}
            md={6}
            padding="1rem 2.3rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img
              src={img2}
              alt="kitchen furniture"
              style={{ maxWidth: "40rem" }}
            />
            <Typography
              variant="h2"
              color="orange"
              fontSize="1.5rem"
              marginTop="1.3rem"
              marginBottom="1"
            >
              Lorem ipsum dolor sit.
            </Typography>
            <Typography variant="p" color="black" px="1.5rem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              eveniet illo corporis ut deleniti modi commodi dolores minus vero?
              Dolores?
            </Typography>
          </Grid>

          <Grid
            item={true}
            xs={12}
            md={6}
            padding="1rem 2.3rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img
              src={img2}
              alt="kitchen furniture"
              style={{ maxWidth: "40rem" }}
            />
            <Typography
              variant="h2"
              color="orange"
              fontSize="1.5rem"
              marginTop="1.3rem"
              marginBottom="1"
            >
              Lorem ipsum dolor sit.
            </Typography>
            <Typography variant="p" color="black" px="1.5rem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              eveniet illo corporis ut deleniti modi commodi dolores minus vero?
              Dolores?
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OurFurniture;
