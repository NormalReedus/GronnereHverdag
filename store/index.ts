import Vue from 'vue'

export const state = () => ({
  // co2: null,
  // co2ItemDtos: null,
  articles: {},
})

export const mutations = {
  // setCo2ItemDtos(state) {
  //   // fetch
  //   // state.co2ItemNames =
  // },
  setArticles(state, articles): void {
    articles.forEach((article) => {
      state.articles[article.path] = article
    })
  },
}

export const actions = {
  // async getCo2ItemDtos({ state, commit }) {
  //   // const itemNames = await fetch(XXX)
  //   // commit('setCo2ItemNames', itemNames)
  // },
  // loadArticles({ commit }, articles) {
  //   console.log(articles)
  // const context = require.context('@/content/', false, /\.md$/)
  // context.keys().forEach((articlePath) => {
  //   // Fjerner directory og fil-extension, så navnet er den rene slug:
  //   const slug = path.basename(articlePath, '.md')
  //   // Loader komponenten (og attributes) fra path:
  //   const article = context(articlePath)
  //   commit('setArticles', { slug, article })
  // })
  // },
}
