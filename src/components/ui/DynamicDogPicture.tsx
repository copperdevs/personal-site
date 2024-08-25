import { h } from "preact";
import { Status } from "../../lib/types.ts";
import DogImage from "./DogPicture.tsx";
import { getCurrentStatus } from "../../lib/lanyard.ts";

const DynamicDogImage = () => {
  return <DogImage status={Status.Online} />;
};

export default DynamicDogImage;
