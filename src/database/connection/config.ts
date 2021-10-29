const dbName = process.env.MONGODB_DB as string;
const dbHost = process.env.MONGODB_URL as string;
const dbUri = `${dbHost}/${dbName}`;
const user = process.env.MONGODB_USERNAME as string;
const pass = process.env.MONGODB_PASSWORD as string;
const autoIndex = process.env.MONGODB_AUTOINDEX === "true" ? true : false;
const options = {
  user,
  pass,
  autoIndex,
};

export { dbUri, options };
