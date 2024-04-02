const MeetupBlogDetails = ({ meetup }) => {
    const { date, title, location, description, tags, img, author, presents, id } = meetup;
    console.log(meetup);
    return (
        <div className="grid grid-cols-6 gap-4 border border-teal-500 p-6">
            <div className={`col-span-6 lg:col-span-6 ${id === 1 ? 'lg:col-start-1' : ''}`}>
                {id === 1 && <img src={img} alt="" />}
            </div>
            <div className={`col-span-3 lg:col-span-3 ${id === 2 ? 'lg:col-start-1' : ''}`}>
                {id === 2 && <img src={img} alt="" />}
            </div>
            <div className={`col-span-3 lg:col-span-3 ${id === 3 ? 'lg:col-start-1' : ''}`}>
                {id === 3 && <img src={img} alt="" />}
            </div>
            <div className={`col-span-3 lg:col-span-3 ${id === 4 ? 'lg:col-start-1' : ''}`}>
                {id === 4 && <img src={img} alt="" />}
            </div>
            <div className={`col-span-3 lg:col-span-3 ${id === 5 ? 'lg:col-start-1' : ''}`}>
                {id === 5 && <img src={img} alt="" />}
            </div>
            <div className={`col-span-3 lg:col-span-3 ${id === 6 ? 'lg:col-start-1' : ''}`}>
                {id === 6 && <img src={img} alt="" />}
            </div>
            <div className={`col-span-3 lg:col-span-3 ${id === 7 ? 'lg:col-start-1' : ''}`}>
                {id === 7 && <img src={img} alt="" />}
            </div>
            <div className={`col-span-3 lg:col-span-3 ${id === 8 ? 'lg:col-start-1' : ''}`}>
                {id === 8 && <img src={img} alt="" />}
            </div>
            <div className={`col-span-3 lg:col-span-3 ${id === 9 ? 'lg:col-start-1' : ''}`}>
                {id === 9 && <img src={img} alt="" />}
            </div>
            <div className={`col-span-3 lg:col-span-3 ${id === 10 ? 'lg:col-start-1' : ''}`}>
                {id === 10 && <img src={img} alt="" />}
            </div>
        </div>
    );
};

export default MeetupBlogDetails;
