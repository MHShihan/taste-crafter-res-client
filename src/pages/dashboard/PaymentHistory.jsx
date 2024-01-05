import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animation/loadingAnimation.json";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["paymentHistory", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/payment/${user.email}`);
      return res.data;
    },
  });
  return (
    <div className="py-10 bg-[#F6F6F6]">
      <SectionTitle
        heading="Payment History"
        subheading="See Now?"
      ></SectionTitle>
      <div className="w-3/4 mx-auto bg-white p-6">
        <div className=" mb-4">
          <h3 className="text-3xl font-bold uppercase">
            Total Payments: {payments.length}
          </h3>
        </div>

        <div className="overflow-x-auto rounded-t-2xl">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white text-base ">
              <tr>
                <th>#</th>
                <th> Price </th>
                <th>Transaction ID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <td>{index + 1}</td>

                  <td>${payment.price}</td>
                  <td>{payment.transactionId}</td>
                  <td className="font-medium">{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isLoading && <Lottie animationData={loadingAnimation}></Lottie>}
      </div>
    </div>
  );
};

export default PaymentHistory;
