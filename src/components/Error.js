import PropTypes from "prop-types";

const Error = ({ msj }) => <p className="alert alert-danger error"> {msj} </p>;

Error.propTypes = {
  msj: PropTypes.string.isRequired,
};

export default Error;
