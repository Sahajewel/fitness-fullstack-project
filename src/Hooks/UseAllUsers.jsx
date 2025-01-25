import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";


export default function UseAllUsers() {
    const axiosSecure = UseAxiosSecure();
 const {data: users=[]} = useQuery({
    queryKey: ["users"],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/users`)
        return res.data;
    }
 })
 console.log(users)
 return [users];
}
