import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" className="footer" p={4} bg="gray.200" textAlign="center">
      <Text>&copy; {new Date().getFullYear()} E-Commerce CoderHouse. Todos los derechos reservados.</Text>
    </Box>
  );
};

export default Footer;
