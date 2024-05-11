import { useNavigate } from "react-router-dom";

// --- function for navigating user to supply details page when user click 'See Details'
const navigate = useNavigate();
export const goToAllSuppliesPage = () => {
  navigate(`/supplies`);
}
