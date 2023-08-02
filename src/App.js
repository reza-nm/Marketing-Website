import { Typography, Button } from "@mui/material";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className="hero-image">
        <Header></Header>
        <Typography
          sx={{ fontSize: { xs: "3rem", sm: "4rem", md: "7rem", xl: "10rem" } }}
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* prebuilt codes start*/};{/* prebuilt codes end*/}
    </>
  );
}

export default App;
