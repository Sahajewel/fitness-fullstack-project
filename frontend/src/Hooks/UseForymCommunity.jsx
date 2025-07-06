import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic'

export default function UseForymCommunity() {
  const axiosPublic = useAxiosPublic();
    const {data: communityForum=[]} = useQuery({
        queryKey: ["communityForum"],
        queryFn: async()=>{
            const res = await axiosPublic.get("/add-new-forum")
            return res.data
        }
    })
    return [communityForum]
}
