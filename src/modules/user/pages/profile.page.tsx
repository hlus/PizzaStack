import React from 'react';

import { useUpdateCustomerDataMutation } from '@app/core/types';
import { UpdateInfo } from '../components/update-info/update-info.component';
import { UserOrders } from '../components/user-orders/user-orders.component';
import { Container } from '@app/common/components/container/container.component';
import { useGetMeDataQuery } from '@app/modules/auth/hooks/use-get-me-data-query';
import { InfoFormFields, UpdateInfoFormValues } from '../components/update-info/update-info.types';

export const ProfilePage: React.FC = () => {
  const { data, loading: isProfileDataLoading } = useGetMeDataQuery();
  const [updateCustomerData, { loading: isProfileUpdating }] = useUpdateCustomerDataMutation();

  const handleUpdateInfo = async (values: UpdateInfoFormValues) => {
    await updateCustomerData({
      variables: {
        id: data?.id,
        phone: values[InfoFormFields.Phone]! || data?.phone! || '',
        name: values[InfoFormFields.Name]! || data?.name! || '',
        address: values[InfoFormFields.Address]! || data?.address! || '',
      },
    });
  };

  return (
    <Container>
      <div className="flex flex-col gap-6">
        <UpdateInfo initialValues={data} isUpdating={isProfileUpdating} isLoading={isProfileDataLoading} onInfoUpdate={handleUpdateInfo} />
        <UserOrders />
      </div>
    </Container>
  );
};
