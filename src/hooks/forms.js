import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({});
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
  };
  return [handleChange, handleSubmit,values]
   
};

export default useForm;
