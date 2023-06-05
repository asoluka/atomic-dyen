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
  width: ${(props) => props.width || "60px"};
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

      <Flex className="gap-x-4" height="90vh" margin="1rem 0 0 0">
        <SidebarWrapper>
          {sideLinks.map((item) => (
            <div key={item.name}>
              <a href={item.link}>{item.name}</a>
            </div>
          ))}
        </SidebarWrapper>

        <div className="flex flex-col gap-y-8" style={{ width: "100%" }}>
          <Flex justifyContent="space-between" gap="10px">
            {[1, 2, 3].map((item) => (
              <Flex className="gap-x-4" key={item} alignItems="center">
                <ImageWrapper>
                  <img src={placeholder} alt="placeholder" />
                </ImageWrapper>
                <div>
                  <Text>Title text</Text>
                  <Text>Longer title text here</Text>
                  <Text>Even Longer title text here...</Text>
                </div>
              </Flex>
            ))}
          </Flex>

          <div>
            <Flex justifyContent="space-between" gap="10px">
              {[1, 2, 3].map((item) => (
                <Flex
                  className="flex-col gap-x-4 gap-y-4"
                  key={item}
                  justifyContent="center"
                >
                  <ImageWrapper width="100%">
                    <img src={placeholder} alt="placeholder" />
                  </ImageWrapper>
                  <div>
                    <Text>Title text</Text>
                    <Text>Longer title text here</Text>
                    <Text>Even Longer title text here...</Text>
                  </div>
                </Flex>
              ))}
            </Flex>
          </div>

          <div>
            <h1>Description</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            distinctio labore quod, aliquam molestiae adipisci commodi sed,
            ducimus natus reiciendis sunt dolorem eius nesciunt impedit
            delectus! Quod nihil veritatis aut.
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            distinctio labore quod, aliquam molestiae adipisci commodi sed,
            ducimus natus reiciendis sunt dolorem eius nesciunt impedit
            delectus! Quod nihil veritatis aut.
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            distinctio labore quod, aliquam molestiae adipisci commodi sed,
            ducimus natus reiciendis sunt dolorem eius nesciunt impedit
            delectus! Quod nihil veritatis aut.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            distinctio labore quod, aliquam molestiae adipisci commodi sed,
            ducimus natus reiciendis sunt dolorem eius nesciunt impedit
            delectus! Quod nihil veritatis aut.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            distinctio labore quod, aliquam molestiae adipisci commodi sed,
            ducimus natus reiciendis sunt dolorem eius nesciunt impedit
            delectus! Quod nihil veritatis aut.
          </div>
        </div>
      </Flex>
    </>
  );
};
