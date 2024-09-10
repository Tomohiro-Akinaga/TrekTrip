import React from "react";
import HomeLayout from "../templates/HomeLayout";
import SendIcon from "@mui/icons-material/Send";

const HomePage = () => {
  return <HomeLayout buttonText="メール送信" startIcon={<SendIcon />} />;
};

export default HomePage;
