import { Box } from "@chakra-ui/react";

import CodeEditor from "./components/CodeEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Box height="100vh" bg="#455b55" color="#182c25" px={6} py={8}>
        <CodeEditor />
      </Box>
      {/* <Footer /> */}
    </>
  );
}

export default App;
