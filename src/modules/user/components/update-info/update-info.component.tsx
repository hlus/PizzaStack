import React from 'react';
import { Controller } from 'react-hook-form';

import { Customers } from '@app/core/types';
import { useUpdateInfoForm } from './use-update-info-form';
import { Input } from '@app/common/components/input/input.component';
import { Button } from '@app/common/components/button/button.component';
import { InfoFormFields, UpdateInfoFormValues } from './update-info.types';
import { ActionPaper } from '@app/common/components/action-paper/action-paper.component';
import { ActionPaperFooter } from '@app/common/components/action-paper-footer/action-paper-footer.component';

interface UpdateInfoProps {
  initialValues?: Customers;
  isUpdating?: boolean;

  onInfoUpdate?: (values: UpdateInfoFormValues) => Promise<void>;
}

export const UpdateInfo: React.FC<UpdateInfoProps> = ({ initialValues, isUpdating, onInfoUpdate }) => {
  const { control, isSubmitting, onSubmit, reset } = useUpdateInfoForm(initialValues, onInfoUpdate);

  React.useEffect(() => {
    if (!isUpdating) {
      reset({
        name: initialValues?.name || '',
        address: initialValues?.address || '',
      });
    }
  }, [initialValues, isUpdating]);

  const actionPaperFooter = (
    <ActionPaperFooter>
      <Button type="submit" onClick={onSubmit} disabled={isSubmitting}>
        Save
      </Button>
    </ActionPaperFooter>
  );

  return (
    <ActionPaper title={'Personal Info'} footer={actionPaperFooter}>
      <form className="flex gap-9" onSubmit={onSubmit}>
        <div className="w-1/2">
          <Controller
            control={control}
            name={InfoFormFields.Phone}
            render={({ field, fieldState }) => (
              <Input {...field} fullWidth label="Phone number" placeholder="Enter phone number" error={fieldState.error?.message} />
            )}
          />
          <Controller
            control={control}
            name={InfoFormFields.Address}
            render={({ field, fieldState }) => (
              <Input {...field} fullWidth label="Address" placeholder="Enter address" error={fieldState.error?.message} />
            )}
          />
        </div>
        <Controller
          control={control}
          name={InfoFormFields.Name}
          render={({ field, fieldState }) => <Input {...field} fullWidth label="Name" placeholder="Enter name" error={fieldState.error?.message} />}
        />
      </form>
    </ActionPaper>
  );
};
