import { useAppContext } from "@/src/context/AppContext";
import { Burger, Group, Header as MantineHeader } from "@mantine/core";

type Props = {};

function Header({}: Props) {
  const { isDrawerOpen, setIsDrawerOpen } = useAppContext();

  return (
    <MantineHeader height={55} p="xs">
      <Group>
        <Burger
          pt={15}
          size={"sm"}
          opened={false}
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        />

        {/* <Link href="/">Logo</Link> */}
      </Group>
    </MantineHeader>
  );
}

export default Header;
