import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CustomerFront } from '../../types/user';
import { min3Symbols, phoneRegexp } from '@app/common/utils/regex';
import { InfoFormFields, UpdateInfoFormValues } from './update-info.types';

const validationSchema = yup.object({
  [InfoFormFields.Phone]: yup.string().trim().required('Enter phone number').matches(phoneRegexp, 'Enter valid phone number'),
  [InfoFormFields.Name]: yup.string().trim().matches(min3Symbols, { excludeEmptyString: true, message: 'Please enter minimum 3 letters' }),
  [InfoFormFields.Address]: yup.string().trim().matches(min3Symbols, { excludeEmptyString: true, message: 'Please enter minimum 3 letters' }),
});

export const useUpdateInfoForm = (initialValues?: CustomerFront, onUpdateInfo?: (values: UpdateInfoFormValues) => Promise<void>) => {
  const {
    control,
    formState: { isSubmitting },
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      [InfoFormFields.Phone]: initialValues?.phone,
      [InfoFormFields.Name]: initialValues?.name || '',
      [InfoFormFields.Address]: initialValues?.address || '',
    },
    resolver: yupResolver(validationSchema),
  });

  const submitForm = async (values: UpdateInfoFormValues) => {
    if (onUpdateInfo) {
      try {
        await onUpdateInfo(values);
        toast.success('Personal Info Updated!');
      } catch (e) {
        toast.error((e as Error).message);
      }
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { isSubmitting, control, onSubmit, reset };
};
