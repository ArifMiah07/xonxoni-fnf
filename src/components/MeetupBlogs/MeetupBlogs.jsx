import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import './MeetupBlogs.css'

const MeetupBlogs = ({meetup}) => {
    const {date, title, loacation, description, tags, img, author, presents, id} = meetup;
    return (
        <div className=" w-full mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Iftar at the Beach! {id}</h1>
            <div className="">
                {/* Blog Cards */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={img} alt="Blog Thumbnail" className="w-full h-48 object-cover object-center" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <p className="text-gray-600">{author} | {date}</p>
                        <p className="mt-2 text-gray-700">{description}...</p>
                        <p className="mt-2 text-gray-700">{presents}</p>
                        <p className="mt-2 text-gray-700">{loacation}</p>
                        <div className='flex gap-3'>
                            {
                                tags.map((tag, idx)=> <p key={idx} className="flex  mt-2 text-gray-700">#{tag}</p>)
                            }
                        </div>
                        <div className="mt-4">
                            <Link to={`/meetup-blog`}>
                                <button className='btn btn-primary'>Read More</button>
                            </Link>
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