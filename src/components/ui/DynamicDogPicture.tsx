import { useEffect, useState } from "react";
import { Status, DiscordStatus } from "../../lib/types.ts";
import DogImage from "./DogPicture.tsx";

const DynamicDogImage = () => {
  const [status, setStatus] = useState<Status>(Status.Online);

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await fetch("/api/status.json");
      const data = await response.json();

      setStatus(data["activityStatus"]);
    };

    fetchStatus();
    console.log(status);
  }, []);

  console.log(status);
  return <DogImage status={status} />;
};

export default DynamicDogImage;
