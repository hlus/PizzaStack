import React, { PropsWithChildren } from 'react';

export const ActionPaperFooter: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="bg-gray-50 py-3 px-6 rounded-b-md flex justify-end">{children}</div>
);
