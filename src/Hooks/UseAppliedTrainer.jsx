import { useQuery } from '@tanstack/react-query'
import UseAxiosSecure from './UseAxiosSecure'

export default function UseAppliedTrainer() {
    const axiosSecure = UseAxiosSecure()
    const {data: appliedTrainer=[]} = useQuery({
        queryKey:["appliedTrainer"],
        queryFn: async()=>{
            const res = await axiosSecure.get("/become-a-trainer")
            return res.data
        }
    })
  return [appliedTrainer]
}
