import PropTypes from 'prop-types';

const Member = ({member}) => {
    return (
        <div>
            <div className="lg:w-[400px] lg:h-[620px] ">
                <div>
                    <img src={member.image} alt="" />
                </div>
                <div className="flex justify-center items-center mb-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                    <h1 className="text-center font-bold h-[60px]">
                        <a href="">{member.name}</a>
                    </h1>
                </div>
            </div>
        </div>
    );
};


Member.propTypes = {
    member: PropTypes.object
}

export default Member;