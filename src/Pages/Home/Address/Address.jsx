import { CiLocationOn } from "react-icons/ci";
import { MdAddIcCall } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
const Address = () => {
  return (
    <div className="bg-[#130404] text-white py-12 rounded-xl my-16">
      <div className="flex justify-between px-12">
        {/* 1*/}
        <div>
          <div className="flex  items-center">
            <div>
              <SlCalender className="text-4xl" />
            </div>
            <div className="space-y-1 pl-4">
              <p>We are open monday-friday</p>
              <p className="font-bold text-lg"> 7 : 00 am - 9 : 00 pm</p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="flex  items-center">
          <div>
            <MdAddIcCall className="text-4xl" />
          </div>
          <div className="space-y-1  pl-3">
            <p>Have a question ?</p>
            <p className="font-bold text-lg">+2546 251 2668</p>
          </div>
        </div>

        {/* 3 */}
        <div className="flex  justify-center items-center">
          <div>
            <CiLocationOn className="text-4xl" />
          </div>
          <div className="space-y-1  pl-3">
            <p>Need a repair ? </p>
            <h1 className="font-bold text-lg">Liza Street , New York</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
