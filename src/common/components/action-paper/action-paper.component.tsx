import React, { PropsWithChildren } from 'react';

interface ActionPaperProps {
  title: string;
  footer?: React.ReactNode;
}

export const ActionPaper: React.FC<PropsWithChildren<ActionPaperProps>> = ({ title, footer, children }) => {
  return (
    <div className="shadow rounded-md bg-white">
      <div className="p-6">
        <div className="text-lg font-medium text-grey-900 mb-6">{title}</div>
        <div>{children}</div>
      </div>
      {footer}
    </div>
  );
};
