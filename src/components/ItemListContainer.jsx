const ItemListContainer = ({ greeting }) => {
  return (
    <div className="conteiner-fluid my-3">
      <div className="row">
        <div className="col">
          <div className="col alert alert-warning text-center" role="alert">
            {greeting}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
