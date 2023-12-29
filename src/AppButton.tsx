import { useState } from "react";
import Button from "./components/Button";
import Dismissible from "./components/Dismissible";
function AppButton() {
  let [show, setShow] = useState(false);
  return (
    <div>
      {show && <Dismissible onClick={() => setShow(false)}></Dismissible>}
      <Button onClick={() => setShow(true)} color="success">
        my react <b>button</b>
      </Button>
    </div>
  );
}

export default AppButton;
