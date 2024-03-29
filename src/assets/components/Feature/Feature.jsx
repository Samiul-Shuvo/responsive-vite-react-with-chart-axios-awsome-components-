import { IoCheckmarkCircle } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div >
            <p className="flex items-center gap-2 "><IoCheckmarkCircle className="text-green-500" /> {feature}</p>
        </div>
    );
};

export default Feature;