import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {features,name,price}=option;
    return (
        <div className=" bg-blue-500 rounded-lg p-4 m-4 flex flex-col text-white">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h2 className="text-center my-8 text-3xl">{name}</h2>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className="mt-12  bg-green-500 w-full py-2 font-bold rounded-full hover:bg-green-900">Buy Now</button>
            </div>
        </div>
    );
};

export default PriceOption;