const DogImage = ({ status }) => {
  return (
    <img
      src="./favicon.png"
      alt="a picture of my dog"
      className={`dog-image ${status.toString()}`}
    />
  );
};

export default DogImage;
