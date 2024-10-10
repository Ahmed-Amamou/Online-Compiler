//this is just a footer for credits my name and all that jazz
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box mt={3} textAlign="center" >
      <Text>
        Made with ❤️ by{" "}
        <a href="https://www.linkedin.com/in/ahmed-amamou/">
          <b>Ahmed Amamou</b>
        </a>
      </Text>
    </Box>
  );
};
export default Footer;
