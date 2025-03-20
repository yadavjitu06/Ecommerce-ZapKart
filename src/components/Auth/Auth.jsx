import { useEffect, useState } from "react";

function Auth({ onSubmit, resetForm }) {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    username: "",
    isLoading: false,
  });

  function updateEmail(updatedEmail) {
    setFormDetails({ ...formDetails, email: updatedEmail });
  }

  function updatePassword(updatedPassword) {
    setFormDetails({ ...formDetails, password: updatedPassword });
  }

  function updateUsername(updatedUsername) {
    setFormDetails({ ...formDetails, username: updatedUsername });
  }

  function onFormSubmit() {
    setFormDetails({ ...formDetails, isLoading: true });
    onSubmit(formDetails);

    console.log("Submitting form with:", formDetails);
  }

  useEffect(() => {
    setFormDetails({ email: "", password: "", username: "", isLoading: false });
  }, [resetForm]);

  return (
    <>
      <div className="input-group">
        <input
          onChange={(e) => updateUsername(e.target.value)}
          value={formDetails.username}
          type="text"
          className="form-control"
          placeholder="username"
          id="loginUsername"
        />
      </div>
      <div className="input-group">
        <input
          onChange={(e) => updateEmail(e.target.value)}
          value={formDetails.email}
          type="email"
          className="form-control"
          placeholder="Email"
          id="loginUserEmail"
        />
      </div>
      <div className="input-group">
        <input
          onChange={(e) => updatePassword(e.target.value)}
          value={formDetails.password}
          type="password"
          className="form-control"
          placeholder="password"
          id="loginPassword"
        />
      </div>
      <div className="input-group">
        <button
          onClick={onFormSubmit}
          className=" form-control   btn btn-primary"
          type="button"
          disabled={formDetails.isLoading}
        >
          {formDetails.isLoading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          {formDetails.isLoading ? "Loading.." : "Submit"}
        </button>
      </div>
    </>
  );
}
export default Auth;
