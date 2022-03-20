import Search from "@/components/Search";
import ProductListGreewards from "@/components/ProductListGreewards";
import { useQueryClient, useQuery } from "react-query";
import { getGreewardsAll } from "@/helper/data/greewards";
import { useEffect } from "react/cjs/react.production.min";

const Home = ({}) => {
  const queryClient = useQueryClient();
  const { data, error, status } = useQuery("greewards", () =>
    getGreewardsAll()
  );

  return (
    <div>
      <Search></Search>
      {status !== "loading" ? (
        <ProductListGreewards products={data}></ProductListGreewards>
      ) : (
        <div class="flex justify-center items-center">
          <div
            class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
