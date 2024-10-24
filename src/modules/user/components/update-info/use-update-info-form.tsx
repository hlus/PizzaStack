import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { min3Symbols, phoneRegexp } from '@app/common/utils/regex';
import { InfoFormFields, UpdateInfoFormValues } from './update-info.types';

const validationSchema = yup.object({
  [InfoFormFields.Phone]: yup.string().trim().required('Enter phone number').matches(phoneRegexp, 'Enter valid phone number'),
  [InfoFormFields.Name]: yup.string().trim().matches(min3Symbols, { excludeEmptyString: true, message: 'Please enter minimum 3 letters' }),
  [InfoFormFields.Address]: yup.string().trim().matches(min3Symbols, { excludeEmptyString: true, message: 'Please enter minimum 3 letters' }),
});

export const useUpdateInfoForm = () => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submitForm = (values: UpdateInfoFormValues) => {
    alert(JSON.stringify(values));
  };

  const onSubmit = handleSubmit(submitForm);

  return { isSubmitting, control, onSubmit };
};
