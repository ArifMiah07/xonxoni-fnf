import { Link, useLoaderData } from "react-router-dom";
import MeetupBlogDetails from "../MeetupBlogDetails/MeetupBlogDetails";
import { IoIosArrowBack } from "react-icons/io";



const MeetupBlog = () => {
    const meetups = useLoaderData();
    console.log(meetups, 'hi');
    // const {date, title, loacation, description, tags, img, author, presents, id} = meetup;
    const a = meetups[0];
    console.log(a);
    return (
        <div className="w-[350px] sm:w-[640px] md:w-[768px] lg:w-[1216px] mx-auto lg:p-5 border border-green-500">
            <Link to={'/meetups'}>
                <h1 className="flex items-center justify-center mb-5 font-bold bg-secondary hover:bg-primary rounded-xl px-4 py-2 w-fit"><span><IoIosArrowBack /></span> <span>Back</span></h1>
            </Link>
                {/* <div className={`${id === 1 ? 'bg-[#C29663]' : id === 2 ? 'bg-[#FF6D1C]' : id === 3 ? 'bg-[#7763E5]' : ''} text-[#000]`}>
                hello ord
                
            </div> */}
            <div className={`grid grid-cols-1 grid-rows-1 `}>
                {
                    meetups.map((meetup, idx)=> <div key={idx}
                    className={`w-full ${meetup.id === 1 ? 'col-span-4 row-span-4  ' : meetup.id === 2 ? 'col-span-4 row-span-4  ' : meetup.id === 3 ? 'col-span-4 row-span-4  ' : meetup.id === 9 ? 'col-span-4 row-span-4  ' :  meetup.id === 10 ? 'col-span-4 row-span-4  ' : ''}`}
                    >
                        <MeetupBlogDetails key={idx} meetup={meetup}></MeetupBlogDetails>
                        
                    </div>)
                }
                <div className="lg:w-[1000px] h-[700px] bg-blue-200 p-2 ">
                    gell
                </div>
            </div>
                
        </div>
    );
};

export default MeetupBlog;