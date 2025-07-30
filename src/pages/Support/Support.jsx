import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportPage from "./components/SupportPage";
import ContactCard from "./components/ContactCard";
import { MdEmail } from "react-icons/md";
import { IoChatbubble } from "react-icons/io5";
import Infocard from "../Dashboard/components/Infocard";
import { Stack } from "@chakra-ui/react";

function Support() {
  return (
    <DashboardLayout>
      <Stack spacing="80px">
        <SupportPage
          leftComponent={<ContactCard />}
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to
          us."
          icon={MdEmail}
        />
        <SupportPage
          leftComponent={
            <Infocard
              inverted={true}
              imgUrl="/Visual2.svg"
              tagText="Chatbot"
              text="Chat with us right now"
            />
          }
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
          icon={IoChatbubble}
        />
      </Stack>
    </DashboardLayout>
  );
}

export default Support;
