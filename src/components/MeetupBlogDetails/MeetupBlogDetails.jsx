import PropTypes from 'prop-types';

const MeetupBlogDetails = ({ meetup }) => {
    const { date, title, location, description, tags, img, author, presents, id } = meetup;
    // console.log(meetup);
    return (
        <div className="w-full h-full grid grid-cols-1 grid-rows-1  gap-4 border border-teal-500">
            <div className={`${id === 1 ? 'bg-[#C29663] col-span-3 ' : id === 2 ? 'bg-[#FF6D1C] col-span-6' : id === 3 ? 'bg-[#7763E5]' :  id === 4 ? 'bg-[#7763E5]' :  id === 5 ? 'bg-[#7763E5]' :  id === 6 ? 'bg-[#7763E5]' :  id === 7 ? 'bg-[#7763E5]' :  id === 8 ? 'bg-[#7763E5]' :  id === 9 ? 'bg-[#7763E5]' :  id === 10 ? 'bg-[#7763E5]' : ''} text-[#000]`}>
                    {id && <img src={img} alt="" />}
            </div>
        </div>
    );
};

export default MeetupBlogDetails;

MeetupBlogDetails.propTypes = {
    meetup: PropTypes.object.isRequired // Ensure that member prop is required
};

