import React from "react";
import { Icons } from "../atoms/Icons";
import { Text } from "../atoms/Text";
import styled from "styled-components";
import { Flex } from "../atoms/Flex";
import { Link } from "react-router-dom";

const Wrapper = styled(Flex)`
  padding: 3px 2rem;
  height: 60px;
  border: 1px solid #fff;
  border-radius: 16px;
`;

const ProfileIconWrapper = styled.div`
  border: 1px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navbar = () => {
  return (
    <Wrapper justifyContent="space-between">
      <Flex alignItems="center" gap="10px">
        <Icons name="bars" fill="#fff" />
        <Text>Menu</Text>
      </Flex>

      <Flex alignItems="center" gap="10px">
        <Link to="/profile">
          <ProfileIconWrapper>
            <Icons fill="#fff" width="90%" name="profile" />
          </ProfileIconWrapper>
        </Link>
        <Text>Welcome</Text>
      </Flex>
    </Wrapper>
  );
};
