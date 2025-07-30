import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const Infocard = ({ imgUrl, tagText, text, inverted }) => {
  return (
    <CustomCard
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor={inverted ? "#5F00D9" : "white"}
    >
      <Tag
        color={inverted ? "#5F00D9" : "white"}
        bg={inverted ? "white" : "#5F00D9"}
        borderRadius="full"
        mb="4"
      >
        {tagText}
      </Tag>
      <Text
        fontSize="18px"
        lineHeight="22px"
        fontWeight="500"
        color={inverted ? "white" : "black"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default Infocard;
