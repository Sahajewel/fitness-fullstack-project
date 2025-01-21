import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

export default function UseReview() {
    const axiosPublic = useAxiosPublic()
 const {data: reviews = []} = useQuery({
    queryKey:["reviews"],
    queryFn: async()=>{
        const res = await axiosPublic.get("/review")
        return res.data;
    }
 })
 return [reviews]
}
