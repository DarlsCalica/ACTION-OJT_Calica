import { Row } from "react-bootstrap";
import Buttons from "./Buttons";

interface Props {
  output: string;
  handleButtonClick: (value: string) => void;
  reset?: () => void;
  del?: () => void;
  equalfn?: () => void;
}

const Form = ({ output, handleButtonClick, reset, del, equalfn }: Props) => {
  return (
    <form className="calculator">
      <div className="screen" tabIndex={0}>
      <Row style={{width: '40vh',height: '10vh', margin: 'auto'}}>
        <div className="display">
        {output}
        </div>
      </Row>
      </div>
      <Buttons
        handleButtonClick={handleButtonClick}
        reset={reset}
        del={del}
        equalfn={equalfn}
      />
    </form>
  );
};

export default Form;