import axios, { AxiosResponse } from "axios";
interface V {
  [key: string]: string | number;
}

const querySanity = async (
  query: string,
  variables?: V
): Promise<AxiosResponse> =>
  axios({
    url: process.env.NEXT_PUBLIC_SANITY_API,
    method: "post",
    data: {
      query,
      variables,
    },
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_SANITY_TOKEN,
    },
  });

export default querySanity;
