import { useParams } from "react-router-dom";

/**
 * Check if Review/Create/Form is in editing mode
 */
export default (): boolean => {
  const { id } = useParams();
  return id ? true : false;
};
