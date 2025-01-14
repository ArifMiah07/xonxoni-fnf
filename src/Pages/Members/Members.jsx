import { useLoaderData } from "react-router-dom";
import Member from "../../components/Member/Member";

const Members = () => {
    const members = useLoaderData();
    // console.log(members);
    return (
        <div className="w-[350px] sm:w-[640px] md:w-[768px] lg:w-[1218px] mx-auto grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-2">
            {/* <img src="images/members/arif.jpg" alt="" /> */}
            {
                members.map((member, idx)=> <Member key={idx} member={member}></Member>)
            }
        </div>
    );
};

export default Members;