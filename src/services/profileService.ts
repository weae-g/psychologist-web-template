import { authInstance } from ".";

export const ProfileService = {
  async getUserProfile(userId: number) {
    try {
      const response = await authInstance.get(`profile/user/${userId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
