import { useAppContext } from "@/src/context/AppContext";
import { Drawer, Space, Stack } from "@mantine/core";
import { IconVideo } from "@tabler/icons";

import NavigationButton from "../navigation-button/NavigationButton";

function NavigationDrawer() {
  const { isDrawerOpen, setIsDrawerOpen } = useAppContext();
  return (
    <>
      <Drawer
        opened={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        // title={<IconVideo />}
        padding="sm"
        size="sm"
      >
        <Stack spacing={"xs"}>
          <Space />
          <Space />
          {/* {appPages.map(({ page, pageRoute, icon }, idx) => (
            <NavigationButton
              key={idx}
              page={page}
              pageRoute={pageRoute}
              icon={icon}
            />
          ))} */}
        </Stack>
      </Drawer>
    </>
  );
}

export default NavigationDrawer;
