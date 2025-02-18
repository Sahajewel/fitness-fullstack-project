import { Banner, Button, Label, TextInput } from "flowbite-react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";


export default function NewsLetter() {
    const axiosPublic = useAxiosPublic();
    const handleNewletter = (e)=>{
        e.preventDefault()
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value
            const newsUser = {
                name, email
            }
            form.reset()
            axiosPublic.post("/newsletter", newsUser)
            .then((res)=>{
                console.log(res.data)
            })
            console.log({name, email})
    }
    return (
        <div className="pb-20 bg-white mb-20">
            <h1 className="text-center text-4xl py-10 font-bold text-black underline">Newsletter</h1>
            <Banner>
                <div className="flex w-full items-center justify-between border-gray-200  p-4 dark:border-gray-600 dark:bg-gray-700">
                    <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
                        <form onSubmit={handleNewletter} className="flex w-full flex-col items-center md:flex-row gap-3">
                           
                            <TextInput  name="name"  placeholder="Enter your name" required type="text" />
                            <TextInput name="email"  placeholder="Enter your email" required type="email" />
                            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 text-white hover:brightness-125 duration-300 transition" type="submit">Subscribe</button>
                        </form>
                    </div>
                  
                </div>
            </Banner>
        </div>
    )
}

