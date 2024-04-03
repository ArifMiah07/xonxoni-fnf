import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Member = ({ member }) => {
    // const { id } = useParams();
    // console.log(id); // Ensure that id is being correctly extracted

    // const membersPortfolios = useLoaderData();
    // const intId = parseInt(id);
    // const portfolio = membersPortfolios.find(portfolio => portfolio.id === intId);

    return (
        <div>
            <div className="lg:w-[400px] lg:h-[620px] ">
                <div>
                    <img src={member.image} alt="" />
                </div>
                <div className="flex justify-center items-center mb-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                    <h1 className="flex items-center justify-center text-white hover:text-gray-900 text-center font-bold h-[60px]">
                        {member.id === 2 && <Link to={`/membersPortfolio`}>
                            {member.name}
                        </Link>}
                    </h1>
                </div>
            </div>
        </div>
    );
};

Member.propTypes = {
    member: PropTypes.object.isRequired // Ensure that member prop is required
};

export default Member;
