import { useState } from "react";

export default function CloseIcon(props) {
  // let CloseIconCss = "";
  // const [CloseIconCss, setCloseIconCss] = useState("");
  // const click = () => {
  //   console.log(CloseIconCss);
  //   // CloseIconCss = "absolute invisible";
  //   setCloseIconCss("absolute invisible");
  // };

  return (
    <svg
      onClick={props.click}
      className={props.CloseIconCss}
      fill="#272743"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="24px"
      height="24px"
    >
      <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
    </svg>
  );
}
