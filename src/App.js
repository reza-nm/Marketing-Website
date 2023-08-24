import { Typography, Button } from "@mui/material";
import Header from "./components/Header";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import OurFurniture from "./components/OurFurniture";
function App() {
  return (
    <>
      <div className="hero-image">
        <Header></Header>
        <Typography
          sx={{ fontSize: { xs: "3rem", sm: "4rem", md: "7rem", lg: "8rem" } }}
          variant="h1"
          color="initial"
          overflow={"hidden"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={"5vh"}
        >
          Furniture
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5vh auto auto auto",
            fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1.3rem" },
          }}
        >
          Contact us
        </Button>
      </div>
      <Services></Services>
      <AboutUs></AboutUs>
      <OurFurniture></OurFurniture>
    </>
  );
}

export default App;
