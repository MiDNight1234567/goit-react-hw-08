import { MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#f9e3cc"
      color="#ef5c0d"
    />
  );
};

export default Loader;
