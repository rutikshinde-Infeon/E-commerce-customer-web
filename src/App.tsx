import React, { Suspense } from "react";
// import Navbar from "./components/common/Navbar";
// import Footer from "./components/common/Footer";
// import MainLayout from "./layout/mainLayout";
import Maintenance from "./components/maintenance/Maintenance";
import LazyLoader from "./components/common/LazyLoader";
import PageRoute from "./routes/PageRoute";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Import Libre Baskerville font from Google Fonts
import "@fontsource/libre-baskerville/400.css";
import "@fontsource/libre-baskerville/700.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Libre Baskerville', serif",
  },
});

function App() {
  const isUnderMaintenance = false; // Replace with actual maintenance check logic
  const isLoading = false; // Replace with actual loading state logic

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="maintenance">{isUnderMaintenance && <Maintenance />}</div>
      {isLoading && <LazyLoader />}
      <div id="content-wrapper" className="wrapper">
        <Suspense fallback={<LazyLoader />}>
          <PageRoute />
        </Suspense>
      </div>
      {/* <MainLayout /> */}
    </ThemeProvider>
  );
}

export default App;
