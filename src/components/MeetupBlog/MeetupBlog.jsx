import { Link, useLoaderData } from "react-router-dom";
import MeetupBlogDetails from "../MeetupBlogDetails/MeetupBlogDetails";
import { IoIosArrowBack } from "react-icons/io";



const MeetupBlog = () => {
    const meetups = useLoaderData();
    console.log(meetups, 'hi');
    // const {date, title, loacation, description, tags, img, author, presents, id} = meetup;
    return (
        <div className="w-[350px] sm:w-[640px] md:w-[768px] lg:w-[1216px] mx-auto lg:p-5 border border-green-500">
            <Link to={'/meetups'}>
                <h1 className="flex items-center justify-center mb-5 font-bold bg-secondary hover:bg-primary rounded-xl px-4 py-2 w-fit"><span><IoIosArrowBack /></span> <span>Back</span></h1>
            </Link>
            {
                meetups.map((meetup, idx)=> <MeetupBlogDetails key={idx} meetup={meetup}></MeetupBlogDetails>)
            }
        </div>
    );
};

export default MeetupBlog;