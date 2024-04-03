import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GiLoveHowl } from "react-icons/gi";
import { GiEvilLove } from "react-icons/gi";
import { MdOutlineAddReaction } from "react-icons/md";
import { TfiComments } from "react-icons/tfi";
import { MdSaveAs } from "react-icons/md";

import '../../Styles/fonts.css'
// lora
// rubik
// playfair-display
// dm-sans
// poppins
// source-sans-3
// inter
// roboto

const MeetupBlogs = ({ meetup }) => {
    const { date, title, location, description, tags, img, author, presents, id } = meetup;

    // Function to handle clicking on a hashtag
    const handleTagClick = (tag) => {
        // Redirect user to Google search with the hashtag as the search value
        window.open(`https://www.google.com/search?q=%23${tag}`, '_blank');
    };

    return (
        <div className="w-full mb-4 mx-auto px-4 py-8 border border-gray-500 bg-[#eeedf3] rounded-3xl ">
            {/* <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div> */}
            <h1 className="text-3xl text-center font-bold mb-6 lora uppercase ">Iftar at the Beach </h1>
            <div className="">
                {/* Blog Cards */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={img} alt="Blog Thumbnail" className="w-full h-48 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2 playfair-display mb-4">{title}<span><sup>{id}</sup></span> </h2>
                        <p className="text-gray-600 my-4"><span className='p-2 bg-[#62fcaf] hover:bg-[#0cabba] hover:px-3 hover:font-semibold'>{author}</span> | <span className='font-semibold text-[#7bae37]'>{date}</span></p>
                        <p className="mt-2 text-gray-500 inter ">{description}...</p>
                        <div className='w-fit flex my-2 gap-2'>
                            <span className='flex '>Presents: </span>
                            {
                                presents.slice(0, 3).map((presnet, idx)=> <div key={idx} className='w-[101px] flex flex-row gap-3 text-accent ' ><span className=''>{presnet}</span></div>)
                            }
                        </div>
                        <p className="my-2 text-gray-700">{location}</p>
                        <div className='flex gap-3 '>
                            {tags.map((tag, idx) => (
                                <a key={idx} href={`https://www.google.com/search?q=%23${tag}`} target="_blank" rel="noopener noreferrer" onClick={() => handleTagClick(tag)} className="flex bg-[#bcfd49] rounded-xl px-2 mt-2 text-gray-700"># {tag}</a>
                            ))}
                        </div>
                        <div className="flex items-center justify-between gap-5 mt-4">
                            <Link to={`/meetup-blog`}>
                                <button className='btn btn-primary'>Read More</button>
                            </Link>
                            <div className='flex items-center justify-between gap-4 text-secondary text-[24px]  '>
                                <span className='hover:text-[36px] hover:text-primary '><GiLoveHowl /></span>
                                <span className='hover:text-[36px] hover:text-primary'><GiEvilLove /></span>
                                <span className='hover:text-[36px] hover:text-primary'><MdOutlineAddReaction /></span>
                                <span className='hover:text-[36px] hover:text-primary'><TfiComments /></span>
                                <span className='hover:text-[36px] hover:text-primary'><MdSaveAs /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MeetupBlogs.propTypes = {
    meetup: PropTypes.object
}

export default MeetupBlogs;
