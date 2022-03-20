import Search from "@/components/Search";
import ProductListEngagement from "@/components/ProductListEngagement";
import { useState } from "react/cjs/react.development";
import { getEngagementsQuery } from "@/helper/data/engagements";
import { useQuery, useQueryClient } from "react-query";

const Home = ({}) => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, status } = useQuery([`engagements_${searchQuery}`], () =>
    getEngagementsQuery({ title: { $regex: searchQuery } })
  );

  const searchCallback = (query) => {
    setSearchQuery(query);
  };
  return (
    <div>
      <Search
        callback={(text) => {
          searchCallback(text);
        }}
      ></Search>
      {status !== "loading" ? (
        <ProductListEngagement products={data}></ProductListEngagement>
      ) : (
        <div class="flex justify-center items-center">
          <div
            class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          ></div>
        </div>
      )}
    </div>
  );
};

export default Home;
