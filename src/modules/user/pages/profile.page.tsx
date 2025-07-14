import React from 'react';

import { useUpdateCustomerDataMutation } from '@app/core/types';
import { UpdateInfo } from '../components/update-info/update-info.component';
import { UserOrders } from '../components/user-orders/user-orders.component';
import { Container } from '@app/common/components/container/container.component';
import { useGetMeDataQuery } from '@app/modules/auth/hooks/use-get-me-data-query';
import { InfoFormFields, UpdateInfoFormValues } from '../components/update-info/update-info.types';
import { UpdateInfoLoading } from '../components/update-info-loading/update-info-loading.component';

export const ProfilePage: React.FC = () => {
  const { data, loading } = useGetMeDataQuery();
  const [updateCustomerData, { loading: isProfileUpdating }] = useUpdateCustomerDataMutation();

  if (loading) {
    return (
      <Container>
        <UpdateInfoLoading />
      </Container>
    );
  }

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
      <UpdateInfo initialValues={data} isUpdating={isProfileUpdating} onInfoUpdate={handleUpdateInfo} />
      <UserOrders />
    </Container>
  );
};
