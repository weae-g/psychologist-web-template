import { useEffect } from "react";
import useProfileStore from "../store/profileStore";
import { Text } from "../ui/Typhograthy";
import useAuthStore from "../store/authStore";

const ProfilePage = () => {
  const { user } = useAuthStore((state) => ({
    user: state.user,
  }));

  const { profile, getUserProfile } = useProfileStore((state) => ({
    getUserProfile: state.getUserProfile,
    profile: state.profile,
  }));

  useEffect(() => {
    getUserProfile(user?.id);

    console.log(profile);
    
  }, [user]);

  return <Text>{profile?.name}</Text>;
};

export default ProfilePage;
