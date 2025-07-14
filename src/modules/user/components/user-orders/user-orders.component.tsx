import { FC } from 'react';

import { ActionPaper } from '@app/common/components/action-paper/action-paper.component';
import { UserOrdersTable } from '../user-orders-table/user-orders-table.component';
import { useGetCustomerOrdersQuery } from '@app/core/types';
import { UserOrdersTableLoading } from '../user-orders-table-loading/user-orders-table-loading.component';

export const UserOrders: FC = () => {
  const { data, loading } = useGetCustomerOrdersQuery();

  return (
    <ActionPaper disableBodyPadding disableBottomPadding title="Your orders">
      {loading ? (
        <UserOrdersTableLoading />
      ) : data && data.orders.length > 0 ? (
        <UserOrdersTable orders={data.orders} orderStatuses={data.order_status} />
      ) : (
        <div>You don't have orders yet</div>
      )}
    </ActionPaper>
  );
};
