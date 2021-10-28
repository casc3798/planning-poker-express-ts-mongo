module.exports = async () => {
  try {
    console.log("Here should be the teardown process!");
  } catch (err) {
    throw new Error(err as string);
  }
};
