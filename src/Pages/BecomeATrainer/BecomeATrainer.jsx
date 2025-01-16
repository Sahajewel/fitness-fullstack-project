import { Button, Checkbox, FileInput, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { AuthContext } from "../../Provider/AuthProvider";
const animatedComponents = makeAnimated();
export default function BecomeATrainer() {
    const { user } = useContext(AuthContext);
    const options = [
        { value: 'monday', label: 'Monday' },
        { value: 'tuesday', label: 'Tuesday' },
        { value: 'wednesday', label: 'Wednesday' },
        { value: 'thursday', label: 'Thursday' },
        { value: 'friday', label: 'Friday' },
        { value: 'saturday', label: 'Saturday' },
        { value: 'sunday', label: 'Sunday' },
    ]
    return (
        <div>
            <h1 className='text-center py-10 text-white text-4xl font-bold underline pt-10'>Become A Trainer</h1>
            <form className="flex p-20 flex-col gap-4 mx-auto">
                {/* name and email */}
                <div className="md:flex justify-center items-center  gap-5">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label value="Full Name" />
                        </div>
                        <TextInput type="text" placeholder="Your full name" required shadow />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label value="Your Email" />
                        </div>
                        <TextInput readOnly defaultValue={user?.email} id="password2" type="email" required shadow />
                    </div>
                </div>
                {/* age and profile */}
                <div className="md:flex justify-center items-center  gap-5">

                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label value="Your Age" />
                        </div>
                        <TextInput type="text" required shadow />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label value="Upload file" />
                        </div>
                        <FileInput />
                    </div>
                </div>
                {/* checkboxes and day */}
                <div className="md:flex justify-center items-center  gap-5">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label value="Skills" />
                        </div>
                        <div className="flex  gap-2">
                            <Checkbox />
                            <Label htmlFor="remember">Yoga</Label>
                            <Checkbox />
                            <Label htmlFor="remember">Meditation</Label>
                            <Checkbox />
                            <Label htmlFor="remember">Cardio</Label>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label value="Pick Day" />
                        </div>
                        <Select isMulti closeMenuOnSelect={false} options={options} components={animatedComponents}></Select>
                    </div>
                </div>
                <div className="w-full">
                    <div className="mb-2 block">
                        <Label value="Time" />
                    </div>
                    <TextInput type="time" required shadow />
                </div>
                <Button type="submit">Apply</Button>
            </form>
        </div>
    )
}
