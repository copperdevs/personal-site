import { h } from "preact";
import { Status } from "../../lib/types.ts";

interface Props {
  status: Status;
}

const DogImage: preact.FunctionComponent<Props> = ({ status }) => {
  return (
    <img
      src="./favicon.png"
      alt="a picture of my dog"
      className={`dog-image ${status.toString()}`}
    />
  );
};

export default DogImage;
