export const gitApi = async () => {
  const response = await fetch('https://api.github.com/users/Flavio27');
  const data = await response.json();
  return data;
};
