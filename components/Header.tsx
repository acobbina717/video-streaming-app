import { useAppContext } from "@/src/context/AppContext";
import { Burger, Group, Header as MantineHeader, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { ProfileButton } from "./profileButton/ProfileButton";

type Props = {};

function Header({}: Props) {
  const { isDrawerOpen, setIsDrawerOpen } = useAppContext();

  return (
    <MantineHeader height={56} p="xs">
      <Group align={"center"} position="apart">
        <Group align={"center"} className="start">
          <Burger
            h={40}
            w={40}
            mr={0}
            ml={6}
            opened={false}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          />
          <div className="icon" style={{ width: "129px" }}>
            YouTube Icon
          </div>
        </Group>

        <Group className="center">
          <Input placeholder="Search" rightSection={<IconSearch />} />
        </Group>

        <div className="end">
          <ProfileButton />
        </div>

        {/* <Link href="/">Logo</Link> */}
      </Group>
    </MantineHeader>
  );
}

export default Header;
