import React from 'react';

import { InputLoading } from '@app/common/components/input-loading/input-loading.component';

export const UpdateInfoLoading: React.FC = () => (
  <div className="w-full">
    <div className="flex gap-9 mb-14">
      <div className="flex flex-col gap-6 w-1/2">
        <InputLoading />
        <InputLoading />
      </div>
      <div className="flex flex-col gap-6 w-1/2">
        <InputLoading />
      </div>
    </div>
  </div>
);
