import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#afb2b8"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
