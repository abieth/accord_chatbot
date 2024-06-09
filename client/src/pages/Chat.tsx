import React from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";
import red from "@mui/material/colors/red";
import { useAuth } from "../context/AuthContext";
import ChatItem from "../component/chat/ChatItem";
const chat_messages = [
  {
    role: "user",
    content: "Hello, can you tell me the weather forcast in paris?"
  },
  {
    role: "assistant",
    content: "sure i can help you with that"
  }
]
const Chat: React.FC = () => {
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17, 29, 39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]} {auth?.user?.name.split(" ")[1][0]}
          </Avatar>
          <Typography sx={{ mx: "auto" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic.
          </Typography>
          <Typography sx={{ mx: "auto", my: 4, p: 3 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed beatae
            dignissimos accusamus deserunt tempore molestiae?
          </Typography>
          <Button
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            CLEAR CONVERSATION
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            coloe: "white",
            mb: 2,
            mx: "auto",
            fontWeight: "600",
          }}
        >
          Model - GPT 3.5 turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehaviour: "smooth",
          }}
        >
          {chat_messages.map((chat, index) => <ChatItem content={chat.content} role={chat.role} key={index}/>)}
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
