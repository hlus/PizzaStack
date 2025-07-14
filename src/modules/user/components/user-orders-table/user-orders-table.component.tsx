import dayjs from 'dayjs';
import { FC } from 'react';

import { GetCustomerOrdersQueryResult } from '@app/core/types';
import { createColumnHelper, getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table';

type CustomerOrdersResult = NonNullable<GetCustomerOrdersQueryResult['data']>;
type Order = CustomerOrdersResult['orders'][number];
type OrderStatus = CustomerOrdersResult['order_status'][number];

const columnHelper = createColumnHelper<Order>();

interface UserOrdersTableProps {
  orders: Order[];
  orderStatuses: OrderStatus[];
}

export const UserOrdersTable: FC<UserOrdersTableProps> = ({ orders, orderStatuses }) => {
  const columns = [
    columnHelper.accessor('created_at', {
      header: 'Date',
      cell: (info) => dayjs(info.getValue()).format('DD/MM/YYYY HH:mm'),
    }),
    columnHelper.accessor('order_items', {
      header: 'Description',
      cell: (info) =>
        info
          .getValue()
          .map(({ item, amount }) => `${item?.title} x ${amount}`)
          .join(', '),
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => orderStatuses.find((status) => status.id === info.getValue())?.label,
    }),
    columnHelper.accessor('sum', {
      header: 'Sum',
      cell: (info) => `$${info.getValue()} UAH`,
    }),
  ];

  const table = useReactTable({
    columns,
    data: orders,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full rounded-b-md overflow-hidden">
      <thead className="bg-gray-50 border-t border-b border-gray-200 text-gray-900">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th className="font-semibold text-left py-2 px-6" key={header.id}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="bg-white text-gray-900 text-sm">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-b border-gray-200">
            {row.getVisibleCells().map((cell) => (
              <td className="py-2 px-6" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
