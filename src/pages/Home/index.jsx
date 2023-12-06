import { useState } from "react";
import { Wrapper, ButtonContainer, Button } from "./style";
import { Circle } from "../../components";

export default function Home() {
  const [circleList, setCircleList] = useState([]);
  const [deletedCircles, setDeletedCircles] = useState([]);
  const listLength = circleList.length;
  const deletedListLength = deletedCircles.length;

  const getScreenCoords = (e) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    const newCircle = [{ x, y }];
    setCircleList([...circleList, newCircle]);
  };

  const handleUndoCircle = (e) => {
    e.stopPropagation();
    if (listLength > 0) {
      setDeletedCircles([...deletedCircles, ...circleList.slice(-1)]);
      circleList.pop();
      setCircleList([...circleList]);
    }
  }

  const handleRedoCircle = (e) => {
    e.stopPropagation();
    if (deletedListLength > 0) {
      setCircleList([...circleList, ...deletedCircles.slice(-1)]);
      deletedCircles.pop();
      setDeletedCircles([...deletedCircles]);
    }
  }

  return (
    <Wrapper onClick={getScreenCoords}>
      {circleList.map((coords, index) => (
          <Circle coords={coords} key={index} />
        ))
      }
      <ButtonContainer>
        <Button className="undoBtn" onClick={handleUndoCircle}>Desfazer</Button>
        <Button className="redoBtn" onClick={handleRedoCircle}>Refazer</Button>
      </ButtonContainer>
    </Wrapper>
  )
}