import { Dispatch, SetStateAction } from "react";

interface Props {
  navbarName: string;
  navbarStatus: boolean;
  set: Dispatch<SetStateAction<boolean>>
  f1: Dispatch<SetStateAction<boolean>>
  f2: Dispatch<SetStateAction<boolean>>
  f3: Dispatch<SetStateAction<boolean>>
}

export const HeaderNavList = ({ navbarName, navbarStatus, set, f1, f2, f3  }: Props) => {
  const handleButtonPages = () => {
    set(true);
    f1(false)
    f2(false)
    f3(false)
  };

  return (
    <li
      onClick={handleButtonPages}
      className={`
            flex-1 py-2 cursor-pointer hover:underline hover:bg-sky-600 
            ${navbarStatus === true ? "bg-sky-600" : ""}`}
    >
      {navbarName}
    </li>
  );
};
