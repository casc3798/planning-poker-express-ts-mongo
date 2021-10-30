import httpServer from "./app";
const port: number = parseInt(process.env.PORT as string, 10);

/**
 * Server Activation
 */

httpServer.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
