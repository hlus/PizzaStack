import { Skeleton } from '@app/common/components/skeleton/skeleton.component';
import { FC } from 'react';

export const UserOrdersTableLoading: FC = () => (
  <table className="w-full rounded-b-md overflow-hidden">
    <thead className="bg-gray-50 border-t border-b border-gray-200 text-gray-900">
      <tr>
        <th className="font-semibold text-left py-2 px-6">Date</th>
        <th className="font-semibold text-left py-2 px-6">Description</th>
        <th className="font-semibold text-left py-2 px-6">Status</th>
        <th className="font-semibold text-left py-2 px-6">Sum</th>
      </tr>
    </thead>
    <tbody className="bg-white text-gray-900 text-sm">
      <tr className="border-b border-gray-200">
        <td className="py-2 px-6">
          <Skeleton width={120} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={241} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={111} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={56} height={16} />
        </td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-2 px-6">
          <Skeleton width={120} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={241} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={111} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={56} height={16} />
        </td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-2 px-6">
          <Skeleton width={120} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={241} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={111} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={56} height={16} />
        </td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-2 px-6">
          <Skeleton width={120} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={241} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={111} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={56} height={16} />
        </td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-2 px-6">
          <Skeleton width={120} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={241} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={111} height={16} />
        </td>
        <td className="py-2 px-6">
          <Skeleton width={56} height={16} />
        </td>
      </tr>
    </tbody>
  </table>
);
