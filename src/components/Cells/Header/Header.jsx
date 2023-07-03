import FlexContainer from "../../../Common/FlexContainer/FlexContainer";
import style from "./Header.module.css";

const Header = () => {
  return (
    <FlexContainer
      className={style.Header}
      height={100}
      justifyContent={"start"}
      alignItems={"center"}
    >
      <div style={{ marginLeft: 105 }} className={style.Logo}></div>
      <input style={{ marginLeft: 110 }} className={style.input}></input>
      <button style={{ marginLeft: 50 }} className={style.button}></button>
      <button style={{ marginLeft: 50 }} className={style.button}></button>
      <button style={{ marginLeft: 525 }} className={style.button}></button>
    </FlexContainer>
  );
};

export default Header;
