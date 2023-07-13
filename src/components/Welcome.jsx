import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <Box p={4}>
        <Heading className="welcome-titulo" as="h1" size="xl" mb={4}>
          Bienvenido a nuestro ecommerce de autos usados
        </Heading>
        <Text className="welcome-parrafo">
          Encuentra una amplia selección de autos usados de calidad a precios
          competitivos. Explora nuestro catálogo y descubre el auto que se
          ajuste a tus necesidades y preferencias. Ofrecemos una variedad de
          marcas, modelos y estilos para que encuentres tu vehículo ideal.
        </Text>
      </Box>
      <Link to={"/"}>
        <div className="welcome">
          <img src="src/assets/img/carsellwelcome.jpg" />
        </div>
      </Link>
    </>
  );
};

export default Welcome;
