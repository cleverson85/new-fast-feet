export const config = {
  apiUrl:
    process.env.NODE_ENV === "production"
      ? "http://localhost:8080/"
      : "https://localhost:5005/",
};
