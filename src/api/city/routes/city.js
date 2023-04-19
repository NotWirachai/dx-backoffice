"use strict";

/**
 * city router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::city.city", {
  // only: ["deleteMany"],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOne: {},
    create: {},
    update: {},
    delete: {},
    deleteMany: {
      path: "/cities",
      method: "DELETE",
      handler: "city.deleteMany",
    },
  },
});
