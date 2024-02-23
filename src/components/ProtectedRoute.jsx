import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  if (!user) {
    return navigate("/");
  } else {
    return children;
  }
}

export default ProtectedRoute;
