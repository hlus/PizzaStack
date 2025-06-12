import { useGetCustomerDataQuery } from '@app/core/types';
import { CustomerFront } from '@app/modules/user/types/user';

export const useGetMeDataQuery = () => {
  const { loading, data } = useGetCustomerDataQuery();

  let modifiedData: CustomerFront | undefined;
  if (data) {
    modifiedData = data?.customers[0];
  }

  return { loading, data: modifiedData };
};
