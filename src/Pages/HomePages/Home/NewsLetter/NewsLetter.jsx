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
        <div className="mb-20">
            <h1 className="text-center text-4xl py-6 font-bold text-white">Newsletter</h1>
            <Banner>
                <div className="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                    <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
                        <form onSubmit={handleNewletter} className="flex w-full flex-col items-center md:flex-row gap-3">
                           
                            <TextInput  name="name"  placeholder="Enter your name" required type="text" />
                            <TextInput name="email"  placeholder="Enter your email" required type="email" />
                            <Button color="red" type="submit">Subscribe</Button>
                        </form>
                    </div>
                  
                </div>
            </Banner>
        </div>
    )
}

