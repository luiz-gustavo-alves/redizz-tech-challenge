import { useState } from "react";
import { Wrapper, Content, ButtonContainer, Button } from "./style";

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

  const handleUndoCircle = (e) => {
    e.stopPropagation();
    if (coords != null) {
      setDisableClick(true);
    }
  }

  const handleShowCircle = (e) => {
    e.stopPropagation();
    if (coords != null) {
      setDisableClick(false);
    }
  }

  const showCircle = (coords != null && !disableClick);
  return (
    <Wrapper onClick={getScreenCoords}>
      {showCircle &&
        <Content $coords={coords} />
      }
      <ButtonContainer>
        <Button onClick={handleUndoCircle}>Desfazer</Button>
        <Button onClick={handleShowCircle}>Refazer</Button>
      </ButtonContainer>
    </Wrapper>
  )
}