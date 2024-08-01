export function getCurrentAge() {
  const birthDate = new Date(2008, 6, 30);
  const today = new Date();
  const month = today.getMonth() - birthDate.getMonth();

  let age = today.getFullYear() - birthDate.getFullYear();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}