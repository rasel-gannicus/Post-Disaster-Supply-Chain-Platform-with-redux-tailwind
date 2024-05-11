import { useNavigate } from "react-router-dom";

type supplyData = {
  _id : string;
  title : string;
  category : string ; 
  amount : number ; 
  img : string ;
  description : string ;
}

const SupplyCard = (data : supplyData) => {

    const { title, category, amount, img, description} = data?.data

  // --- function for navigating user to supply details page when user click 'See Details'
  const navigate = useNavigate() ; 
  function goSupplyDetailsPage(){
      navigate(`/supplies/5`) ;
  }
  return (
    <div className="card  w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.data.title || 'Title'}</h2>
        <div className=" flex justify-start gap-2">
            <p>Category : </p>
            <p>{category}</p>
        </div>
        <div className=" flex justify-start gap-2">
            <p>Amount : </p>
            <p>25 pcs</p>
        </div>
        <div className="card-actions justify-end">
          <button onClick={goSupplyDetailsPage} className="btn mt-7">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SupplyCard;
