import React from 'react';

import { Skeleton } from '@app/common/components/skeleton/skeleton.component';
import { InputLoading } from '@app/common/components/input-loading/input-loading.component';
import { InputLoadingSize } from '@app/common/components/input-loading/input-loading.component';

export const CartItemLoading: React.FC = () => (
  <div className="border-t border-gray-200 pt-6 flex gap-6">
    <Skeleton width={128} height={128} roundFull={false} />
    <div className="flex flex-col justify-between w-full">
      <div className="flex flex-col gap-3">
        <Skeleton width={85} height={24} />
        <Skeleton width={157} height={14} />
      </div>
      <div className="flex items-end gap-6">
        <div className="h-auto w-24">
          <InputLoading size={InputLoadingSize.Sm} />
        </div>
        <Skeleton width={100} height={26} />
      </div>
    </div>
  </div>
);
