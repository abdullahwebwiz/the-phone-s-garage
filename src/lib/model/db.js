let username = process.env.MDB_USERNAME;
let password = process.env.MDB_PASSWORD;
export const mdb_url =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.p92cyoj.mongodb.net/mydatabase?retryWrites=true&w=majority";
