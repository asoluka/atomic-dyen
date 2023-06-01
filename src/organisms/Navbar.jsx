import React from "react";
import { Icons } from "../atoms/Icons";
import { Text } from "../atoms/Text";
import styled from "styled-components";
import { Flex } from "../atoms/Flex";

const Wrapper = styled(Flex)`
  padding: 3px 12px;
`;

export const Navbar = () => {
  return (
    <Wrapper justifyContent="space-between">
      <Flex alignItems="center" gap="10px">
        <Icons name="bars" />
        <Text>Menu</Text>
      </Flex>

      <Flex alignItems="center" gap="10px">
        <Icons name="profile" />
        <Text>Welcome</Text>
      </Flex>
    </Wrapper>
  );
};
