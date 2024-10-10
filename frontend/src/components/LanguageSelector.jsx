import { LANGUAGES_VERSIONS } from "../contants";
import {
  Menu,
  Text,
  Box,
  MenuButton,
  MenuItem,
  Button,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const languages = LANGUAGES_VERSIONS;
// eslint-disable-next-line react/prop-types
const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg" fontWeight="bold">
        Languages
      </Text>

      <Menu isLazy>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {language}
        </MenuButton>
        <MenuList bg="#455b55">
          {languages.map((lang) => (
            <MenuItem
              key={lang.language}
              color={lang.language === language ? "white" : "blackAlpha.800"}
              bg={lang.language === language ? "teal.800" : "transparent"}
              _hover={{ bg: "teal.800", color: "white" }}
              onClick={() => onSelect(lang.language)}
            >
              {lang.language}&nbsp;
              <Text as="span" color="gray.400" fontSize="sm">
                ({lang.version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
export default LanguageSelector;
