import React from 'react';

import { useUpdateCustomerDataMutation } from '@app/core/types';
import { UpdateInfo } from '../components/update-info/update-info.component';
import { useGetMeDataQuery } from '@app/modules/auth/hooks/use-get-me-data-query';
import { InfoFormFields, UpdateInfoFormValues } from '../components/update-info/update-info.types';
import { UpdateInfoLoading } from '../components/update-info-loading/update-info-loading.component';

export const ProfilePage: React.FC = () => {
  const { data, loading } = useGetMeDataQuery();
  const [updateCustomerData, { loading: isProfileUpdating }] = useUpdateCustomerDataMutation();

  const containerClasses = 'max-w-5xl mx-auto';

  if (loading) {
    return (
      <div className={containerClasses}>
        <UpdateInfoLoading />
      </div>
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
    <div className={containerClasses}>
      <UpdateInfo initialValues={data} isUpdating={isProfileUpdating} onInfoUpdate={handleUpdateInfo} />
    </div>
  );
};
