import { useRouter } from "next/router";
import ProductDetail from "@/components/ProductDetail";
import { useQueryClient, useQuery } from "react-query";
import { getGreewardsQuery } from "@/helper/data/greewards";
import { getUsersQuery } from "@/helper/data/users";

const detailPage = () => {
  const router = useRouter();
  const { greewardID } = router.query;

  const queryClient = useQueryClient();
  const { data, error, status } = useQuery("greewards", () =>
    getGreewardsQuery({ _id: greewardID })
  );

  return status !== "loading" ? (
    <ProductDetail
      product={data.filter((reward) => reward._id === greewardID)}
    ></ProductDetail>
  ) : (
    <p>Loading</p>
  );
};

export default detailPage;
