import { useLoaderData } from "react-router-dom";
import MeetupBlogs from "../MeetupBlogs/MeetupBlogs";

const Meetups = () => {
    const meetups = useLoaderData();
    console.log(meetups);
    return (
        <>
            <div className="w-[350px] sm:w-[640px] md:w-[768px] lg:w-[1216px] mx-auto grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
                {
                    meetups.map((meetup, idx)=> <MeetupBlogs key={idx} meetup={meetup}></MeetupBlogs>)
                }
            </div>
        </>
    );
};

export default Meetups;