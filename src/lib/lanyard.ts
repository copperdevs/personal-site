export async function getCurrentStatus() {
  const response = await fetch(
    `https://api.lanyard.rest/v1/users/781660039537623080`
  );

  if (!response.ok) {
    throw new Error("Network response while getting lanyard discord status");
  }

  const lanyardData = await response.json();

  return lanyardData;
}
