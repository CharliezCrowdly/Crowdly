import { Box, ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import ChatBox from "../component/Chat/ChatBox";
import MyChats from "../component/Chat/MyChats";
import SideDrawer from "../component/Chat/SideDrawer";
import { useAppContext } from "../context/appContext";
import Wrapper from "./chatwrapper/ChatPage";
function ChatPage() {
  const { user } = useAppContext();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <ChakraProvider>
      <Wrapper>
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
      </Wrapper>
    </ChakraProvider>
  );
}

export default ChatPage;
