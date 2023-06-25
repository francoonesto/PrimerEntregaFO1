const Loading = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div className="spinner-grow text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
