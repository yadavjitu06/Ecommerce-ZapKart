function Auth() {
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="username"
          id="loginUsername"
        />
      </div>
      <div className="input-group">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          id="loginUserEmail"
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          className="form-control"
          placeholder="password"
          id="loginPassword"
        />
      </div>
      <div className="input-group">
        <button className="form-control btn btn-primary">Submit</button>
      </div>
    </>
  );
}
export default Auth;
