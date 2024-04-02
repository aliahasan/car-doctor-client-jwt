import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

const [services, setServices] = useState([])

useEffect(() => {
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
   
},[])
console.log(services)
    return (
    <div className="my-6">
            <div className="text-center">
            <h3 className="text-3xl text-orange-600 font-bold">Our Service</h3>
            <h2 className="text-5xl">Our Service Area</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which dont look even slightly believable. </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    </div>
    );
};

export default Services;