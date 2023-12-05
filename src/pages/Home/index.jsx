import { useState } from "react";
import { Wrapper, Content } from "./style";

export default function Home() {
  const [coords, setCoords] = useState(null);
  const [disableClick, setDisableClick] = useState(false);

  const getScreenCoords = (e) => {
    e.preventDefault();
    if (!disableClick) {
      const x = e.clientX;
      const y = e.clientY;
      setCoords({ x, y });
    }
  };

  return (
    <Wrapper onClick={getScreenCoords}>
      {coords != null &&
        <Content $coords={coords} $disableClick={disableClick} />
      }
    </Wrapper>
  )
}