const DeleteBox = ({handleDelete}) => {
  return (
    <div>
      <h3 className="text-lg font-bold">Delete This Supply Post ?</h3>
      <div className="mt-5 text-right">
        <label
          htmlFor="my_modal_7"
          onClick={handleDelete}
          className="btn btn-error me-3 text-white font-normal"
        >
          Delete
        </label>
        <label htmlFor="my_modal_7" className="btn btn-neutral">
          Cancel
        </label>
      </div>
    </div>
  );
};

export default DeleteBox;
