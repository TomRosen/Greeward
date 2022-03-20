import { useRouter } from "next/router";
import ProductDetail from "@/components/ProductDetail";

const detailPage = () => {
  const router = useRouter();
  const { greewardID } = router.query;

  return <ProductDetail></ProductDetail>;
};

export default detailPage;
