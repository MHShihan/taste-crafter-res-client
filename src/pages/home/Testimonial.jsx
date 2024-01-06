import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-mu-ten.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="mt-24 mb-20 ">
      <SectionTitle
        heading={"Testimonial"}
        subheading={"What Our Client Say"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="px-24  flex flex-col justify-center items-center space-y-6 font-inter ">
              <Rating style={{ maxWidth: 250 }} value={review.rating} />
              <h1 className="text-6xl font-extrabold">
                <FaQuoteLeft />
              </h1>
              <p className="text-center">{review.details}</p>
              <h3 className="text-orange-400 text-3xl font-medium ">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
