import { Box, ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import ChatBox from "../component/Chat/ChatBox";
import MyChats from "../component/Chat/MyChats";
import SideDrawer from "../component/Chat/SideDrawer";
import { useAppContext } from "../context/appContext";

function ChatPage() {
  const { user } = useAppContext();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <ChakraProvider>
      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="91.5vh"
          p="0.8rem"
        >
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default ChatPage;
