import {
  Box,
  Button,
  Card,
  Checkbox,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
// import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow="1">
      <Stack spacing={6}>
        <Text fontWeight="medium">
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack flexDirection={{ base: "column", lg: "row" }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="name" placeholder="John" />
          </FormControl>

          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input type="surname" placeholder="Smith" />
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="xyz@gmail.com" />
        </FormControl>

        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Message"></Textarea>
        </FormControl>

        <Checkbox>
          <Text fontSize="xs">
            {" "}
            I agree with{" "}
            <Box as="span" color="#5F00D9">
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>

        <Stack>
          <Button>Send a Message</Button>
          <Button colorScheme="gray">Book a Meeting</Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
