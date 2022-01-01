import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollUp = ({ scrollToTop }) => {
  return (
    <>
      <p
        onClick={scrollToTop}
        style={{
          position: "fixed",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          bottom: "1%",
          right: "1%",
          color: "white",
          borderRadius: "50%",
          width: 50,
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          cursor: "pointer",
        }}
      >
        <KeyboardArrowUpIcon fontSize="inherit" />
      </p>
    </>
  );
};

export default ScrollUp;
