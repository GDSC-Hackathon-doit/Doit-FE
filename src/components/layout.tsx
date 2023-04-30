import React, { useContext } from "react";
import {
  AppShell,
  Box,
  Button,
  Divider,
  Group,
  Header,
  Image,
  Navbar,
  NavLink,
  Paper,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { IconBattery1, IconBattery2, IconBattery3 } from "@tabler/icons-react";
import Profile from "./profile";
import { useViewportSize } from "@mantine/hooks";
import { AuthContext } from "../lib/provider/authprovider";
import icon from "/icon.svg";

function Layout({ children }: { children: React.ReactNode }) {
  const { height } = useViewportSize();
  const authContext = useContext(AuthContext);
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 260 }} height={height - 60} p="xs">
          <Navbar.Section grow p={8}>
            <Box>
              <Text mb={8} weight={700}>
                난이도 별 분류
              </Text>
              <NavLink
                component={Link}
                label="난이도 하"
                childrenOffset={28}
                p={4}
                icon={<IconBattery1 color="#51CF66" />}
                to={"/article?hardness=0"}
              />
              <NavLink
                component={Link}
                label="난이도 중"
                childrenOffset={28}
                p={4}
                icon={<IconBattery2 color="#FF922B" />}
                to={"/article?hardness=1"}
              />
              <NavLink
                component={Link}
                label="난이도 상"
                childrenOffset={28}
                p={4}
                icon={<IconBattery3 color="#FF6B6B" />}
                to={"/article?hardness=2"}
              />
            </Box>
          </Navbar.Section>
          <Divider my={12} />
          <Navbar.Section>
            <Paper h="fit-content" p={20} withBorder radius="md">
              {authContext?.authenticated ? (
                <Profile
                  src={authContext.data?.picture}
                  email={authContext.data?.email}
                />
              ) : (
                <>
                  <Button
                    onClick={authContext?.oAuthHandler}
                    fullWidth
                    variant="light"
                  >
                    <Text>로그인 하러 가기</Text>
                  </Button>
                  <Divider my={12} />

                  <Button
                    component={Link}
                    fullWidth
                    variant="light"
                    to="/my-page"
                  >
                    저장한 글 보러가기
                  </Button>
                </>
              )}
            </Paper>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs" bg="cyan.8">
          <Group align="center" h="100%">
            <Box
              p={8}
              h="100%"
              component={Link}
              to="/article"
              sx={{
                boxSizing: "border-box",
                textDecoration: "none",
                color: "unset",
              }}
            >
              <Group h="100%">
                <Image src={icon} width={24} height={24} />
                <Text size={24} lh="100%" weight={600} color="white">
                  InvestED
                </Text>
              </Group>
            </Box>
          </Group>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}

export default Layout;
