import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const SupportPage = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      flexDirection={{ base: "column", lg: "row" }}
      alignItems={{ base: "center", md: "center", lg: "flex-start" }}
      justifyContent={{ base: "center", md: "center", lg: "flex-start" }}
    >
      <Stack maxW="386px">
        <Icon as={icon} boxSize={6} color="#5F00D9" />
        <Text fontWeight="medium" fontSize="32px">
          {title}
        </Text>
        <Text fontSize="14px" color="#535D66">
          {text}
        </Text>
      </Stack>

      <Box maxW="550px" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportPage;
