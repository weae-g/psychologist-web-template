import { create } from "zustand";
import { ArticleService } from "../services/articlesService";

type Article = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  isApproved: boolean;
  createdAt: Date;
  image: string;
  psychologistId: number;
  psychologist: {
    user: {
      profile: {
        name: string;
        image: string;
      };
    };
  };
};

type ArticleState = {
  articles: Array<Article>;
};

type ArticleActions = {
  getArticles: () => Promise<void>;
};

const useArticleStore = create<ArticleState & ArticleActions>((set) => ({
  articles: [],
  getArticles: async () => {
    try {
      const data = await ArticleService.getArticles();
      set({ articles: data });
    } catch (error) {
      console.error("Error fetching articles data:", error);
    }
  },
}));

export default useArticleStore;
