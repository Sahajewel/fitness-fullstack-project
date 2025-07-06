import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"


export default function UseAllTrainers() {
    const axiosPublic = useAxiosPublic()
    const {data: allTrainers=[], refetch} = useQuery({
        queryKey: ["allTrainers"],
        queryFn: async()=>{
            const res = await axiosPublic.get("/all-trainers")
            return res.data
        }
    })
  return [allTrainers, refetch]
}
