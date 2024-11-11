function storage() {
  const token = localStorage.getItem("manxcattoken");

  return token;
}

export { storage };
