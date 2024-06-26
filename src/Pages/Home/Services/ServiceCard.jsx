import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price , _id} = service || {};
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-4 pt-6">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-orange-500 font-bold">$ {price}</p>
          <div className="card-actions">
            <Link to={`/book/${_id}`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
