//const desktop = "10.0.0.4";
// const aws_server = "3.136.106.200";
const linode = "http://45.33.84.167"

export const apiHost = process.env.NODE_ENV === "development" ? "http://localhost:8080" : `${linode}:8080`;
export const webHost = process.env.NODE_ENV === "development" ? "http://localhost:3000" : linode;
