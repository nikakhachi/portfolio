import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollUp = ({ scrollToTop }) => {
  return (
    <>
      <p
        onClick={scrollToTop}
        style={{
          position: "fixed",
          backgroundColor: "#082739",
          bottom: "1%",
          right: "1%",
          color: "white",
          borderRadius: "50%",
          border: "1px solid #25afff",
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
