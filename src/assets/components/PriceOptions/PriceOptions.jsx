import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "description": "Access to basic gym facilities and equipment.",
          "price": 50.00,
          "duration": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "Fitness assessment"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "description": "Access to premium gym facilities, equipment, and group classes.",
          "price": 80.00,
          "duration": "monthly",
          "features": [
            "Access to premium gym equipment",
            "Group fitness classes",
            "Personal training sessions",
            "Sauna and steam room access"
          ]
        },
        {
          "id": 3,
          "name": "Annual Membership",
          "description": "Year-long membership with access to all gym amenities.",
          "price": 800.00,
          "duration": "yearly",
          "features": [
            "Unlimited gym access",
            "Group fitness classes",
            "Personalized workout plans",
            "Nutritional counseling",
            "Access to all facilities"
          ]
        },
        {
          "id": 4,
          "name": "Student Membership",
          "description": "Discounted membership for students with valid ID.",
          "price": 40.00,
          "duration": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "Student ID required"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the Town</h2>
            <div className="grid md:grid-cols-3 ">
            {
              priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;