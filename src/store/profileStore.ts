import { ProfileService } from "./../services/profileService";
import { create } from "zustand";

type Profile = {
  id: number;
  name: string;
  phone: string;
  gender: string;
  birthday: string;
  description: string;
  image: string;
  userId: number;
};

type ProfileState = {
  profile: Profile | null;
};

type ProfileActions = {
  getUserProfile: (userId: number) => Promise<void>;
};

const useProfileStore = create<ProfileState & ProfileActions>((set) => ({
  profile: null,
  getUserProfile: async (userId) => {
    try {
      const data = await ProfileService.getUserProfile(userId);
      set({ profile: data });
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  },
}));

export default useProfileStore;
