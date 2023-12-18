const OutlineButton = ({ btnTitle }) => {
  return (
    <div className="flex justify-center my-10">
      <button className="btn btn-outline border-0 border-b-4 uppercase">
        {btnTitle}
      </button>
    </div>
  );
};

export default OutlineButton;
