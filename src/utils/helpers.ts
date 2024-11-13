function storage() {
  const token = localStorage.getItem("manxcattoken");

  return token;
}

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export { storage, sleep };
