const SectionTitle = (props = {}) => {
  const { heading, subheading } = props || {};

  return (
    <div className="mx-auto text-center w-4/12 ">
      <p className="italic text-yellow mb-2">--- {subheading} ---</p>
      <h3 className="text-3xl uppercase border-y-4 py-6 mb-8">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
