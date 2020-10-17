export interface IArticleCard {
  date: string
  extension: string
  image: string
  path: string
  summary: string
  tags: string[]
  title: string
}

export interface IArticle extends IArticleCard {
  body: any
  createdAt: string
  dir: string
  toc: {
    depth: number
    id: string
    text: string
  }
  updatedAt: string
  components: string[]
}
