export enum InfoFormFields {
  Phone = 'phone',
  Name = 'name',
  Address = 'address',
}

export interface UpdateInfoFormValues {
  [InfoFormFields.Phone]?: string;
  [InfoFormFields.Name]?: string;
  [InfoFormFields.Address]?: string;
}
