// module.exports = {
//   deleteMany: async (event) => {
//     const { result, params } = event;
//     await strapi.db.query("api::blog.article").deleteMany({
//       where: {
//         title: {
//           $startsWith: "v3",
//         },
//       },
//     });
//   },
// };
