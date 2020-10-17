// const path = require('path')

// export const state = () => ({
//   co2: null,
//   co2ItemDtos: null,
//   articles: {},
// })

// export const mutations = {
//   setCo2ItemDtos(state) {
//     // fetch
//     // state.co2ItemNames =
//   },

//   setArticles(state, { slug, article }) {
//     // @ts-ignore
//     state.articles[slug] = article
//   },
// }

// export const actions = {
//   async getCo2ItemDtos({ state, commit }) {
//     // const itemNames = await fetch(XXX)
//     // commit('setCo2ItemNames', itemNames)
//   },

//   loadArticles({ commit }) {
//     const context = require.context('@/content/', false, /\.md$/)

//     context.keys().forEach((articlePath) => {
//       // Fjerner directory og fil-extension, så navnet er den rene slug:
//       const slug = path.basename(articlePath, '.md')
//       // Loader komponenten (og attributes) fra path:
//       const article = context(articlePath)

//       commit('setArticles', { slug, article })
//     })
//   },
// }
