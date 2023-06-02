import { Navbar } from "../organisms/Navbar";
import { Flex } from "../atoms/Flex";
import styled from "styled-components";
import { Text } from "../atoms/Text";
import placeholder from "../assets/placeholder-image.png";

const SidebarWrapper = styled.div`
  border: 1px solid #fff;
  border-radius: 16px;
  width: 25%;
  height: 100%;
  padding: 1rem 2rem;
`;

const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
`;

const sideLinks = [
  { name: "Services", link: "#" },
  { name: "Career", link: "#" },
  { name: "FAQ", link: "#" },
  { name: "About", link: "#" },
  { name: "Contact", link: "#" },
  { name: "Dashboard", link: "#" },
  { name: "Account", link: "#" },
];

export const Homepage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Flex height="90vh" margin="1rem 0 0 0">
        <SidebarWrapper>
          {sideLinks.map((item) => (
            <div key={item.name}>
              <a href={item.link}>{item.name}</a>
            </div>
          ))}
        </SidebarWrapper>

        <div>
          <Flex gap="10px">
            {[1, 2, 3].map((item) => (
              <Flex key={item} bgColor="#fff">
                <ImageWrapper>
                  <img src={placeholder} alt="placeholder" />
                </ImageWrapper>
                <Text color="#000">Description</Text>
              </Flex>
            ))}
          </Flex>
          <div></div>
          <div></div>
        </div>
      </Flex>
    </>
  );
};
