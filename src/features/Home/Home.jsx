import "./Home.css";
import Header from "./Header";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const data = useSelector((globalStore) => globalStore);

  const CheckLogin = () => {
    if (data.auth.dataLogin === null ||
      data.auth.dataLogin?.email === "admin@admin.com") 
      navigate("/");
  };

  useEffect(() => {
    CheckLogin();
    document.body.style.background = "white";
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default Home;