/** @typedef {import("mongodb").Db} mongodb */
/** @typedef {import("mongodb").ClientSession} client*/

module.exports = {
  /**
   * Migration Up Function
   * @param {mongodb} db
   * @param {client} client
   */
  async up(db, client) {
    try {
      await db
        .collection("users")
        .updateMany({}, { $rename: { "metadata.auth0_id": "metadata.external_id" } });

      await db
        .collection("users")
        .updateMany({}, { $unset: { "metadata.auth0_id": 1 } });
    } catch (error) {
      console.error(error);
    }
  },

  /**
   * Migration down function
   * @param {mongodb} db
   * @param {client} client
   */
  async down(db, client) {
    try {
      await db
        .collection("users")
        .updateMany({}, { $rename: { "metadata.external_id": "metadata.auth0_id" } });

      await db
        .collection("users")
        .updateMany({}, { $unset: { "metadata.external_id": 1 } });
    } catch (error) {
      console.error(error);
    }
  },
};
