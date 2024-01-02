import { useForm } from "react-hook-form";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="my-10 ">
      <SectionTitle
        subheading="What's new?"
        heading="Add an item"
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
                {...register("category", { required: true })}
                className="select w-full "
              >
                <option disabled selected>
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
              className="textarea  h-32 mb-4"
              placeholder="Recipe details"
              required
            ></textarea>
          </label>
          <div className="mb-2">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
              required
            />
          </div>

          <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
