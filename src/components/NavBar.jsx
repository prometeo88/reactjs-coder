import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Collapse, Flex, Heading, Text } from "@chakra-ui/react";
import CardWidget from "./CardWidget";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box as="header" className="Navbar" p={4}>
      
        <Link to={"/"}>
          <Heading as="h1" size="md" color="white">
            Santiago Automotores
          </Heading>
        </Link>

        <Flex className="NavbarLista" alignItems="center">
          <Button
            variant="ghost"
            onClick={handleMenuToggle}
            colorScheme="teal"
          >
            Vehiculos por Categoria
          </Button>
          <Collapse in={menuOpen} animateOpacity>
            <Box mt={-12}>
              <ul>
                <li>
                  <Link to={`/categoria/`}>Todos</Link>
                </li>
                <li>
                  <Link to={`/categoria/${"autos"}`}>Autos</Link>
                </li>
                <li>
                  <Link to={`/categoria/${"camionetas"}`}>Camionetas</Link>
                </li>
                <li>
                  <Link to={`/categoria/${"motos"}`}>Motos</Link>
                </li>
              </ul>
            </Box>
          </Collapse>
        </Flex>

        <CardWidget />
     
    </Box>
  );
};

export default NavBar;
