import React, { FC, ChangeEvent, useContext } from "react";
import { observer } from "mobx-react-lite";

interface IMyBox {
  marginTop?: number;
  marginBottom?: number;
}

const MyBox: FC<IMyBox> = ({ children, marginTop = 0, marginBottom = 0 }) => {
  return (
    <div
      style={{ marginTop: `${marginTop}px`, marginBottom: `${marginBottom}px` }}
    >
      {children}
    </div>
  );
};

export default observer(MyBox);
