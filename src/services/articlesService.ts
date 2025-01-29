import { apiInstance } from ".";

export const ArticleService = {
  async getArticles() {
    try {
      const response = await apiInstance.get("article");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
