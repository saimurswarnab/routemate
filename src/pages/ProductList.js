import { useSearchParams,useLocation } from "react-router-dom";
export const ProductList = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("keyword"));
  // console.log(searchParams.get("instock"));
  // console.log(searchParams.get("rating"));
  const location = useLocation();
  console.log(location);

  return (
    <div className="component">ProductList</div>
  )
}
