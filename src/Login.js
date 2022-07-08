import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const disableButton = !formData.email || formData.password.length < 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  return (
    <>
      <h3> Login Here ! </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Id </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email Id"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={disableButton}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}
