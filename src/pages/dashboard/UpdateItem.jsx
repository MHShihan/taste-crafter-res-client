import { useForm } from "react-hook-form";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const axiosPubic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { name, category, price, recipe, _id } = useLoaderData();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data?.image[0] };
    // Upload image to imagebb
    const res = await axiosPubic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      const menuRes = await axiosSecure.patch(`/admin/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        toast.success(`${data.name} is updated to the menu.`, {
          duration: 4000,
          position: "top-center",
        });
      }
      console.log("Menu Response", menuRes.data);
    }
  };

  return (
    <div className="my-10 ">
      <SectionTitle
        subheading="What's new?"
        heading="Update Item"
      ></SectionTitle>

      <div className="bg-[#F3F3F3] p-6 w-3/4 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-[#444] text-xl font-semibold">
                Recipe Name*
              </span>
            </div>
            <input
              type="text"
              placeholder="Recipe name"
              defaultValue={name}
              {...register("name")}
              className="input w-full border-transparent mb-2"
              required
            />
          </label>

          <div className="flex gap-6">
            {/* Category */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-[#444] text-xl font-semibold">
                  Category*
                </span>
              </div>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select w-full text-sm font-inter text-[#868585] "
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
                <option value="offered">Offered</option>
              </select>
            </label>
            {/* Price */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-[#444] text-xl font-semibold">
                  Price*
                </span>
              </div>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register("price")}
                className="input w-full border-transparent mb-2"
                required
              />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text text-[#444] text-xl font-semibold">
                Recipe Details*
              </span>
            </div>
            <textarea
              {...register("recipe")}
              defaultValue={recipe}
              className="textarea text-base h-32 mb-4"
              placeholder="Recipe details"
              required
            ></textarea>
          </label>
          <div className="mb-2">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
            Update Menu Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
