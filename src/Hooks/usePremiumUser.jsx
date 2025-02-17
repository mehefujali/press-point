import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const usePremiumUser = () => {
      const {user} = useAuth()
      const axiosSecure = useAxiosSecure()
      const { refetch:refetchPremium , data: isPremiumUser, isPending: isPremiumLoading } = useQuery({
            queryKey: [user?.email, "isPremium"],
            queryFn: async () => {
              const res = await axiosSecure.get(`/check-premium`);
              return res.data.premium;
            },
          });
          return {isPremiumUser,isPremiumLoading , refetchPremium};
};

export default usePremiumUser;