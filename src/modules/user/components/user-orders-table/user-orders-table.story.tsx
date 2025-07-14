import type { Meta, StoryObj } from '@storybook/react';

import { Order_Status_Enum } from '@app/core/types';
import { UserOrdersTable } from './user-orders-table.component';

const meta = {
  title: 'User/Orders table component',
  component: UserOrdersTable,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof UserOrdersTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    orders: [
      {
        id: '2abdcd62-cb32-4549-a574-d21c48363463',
        created_at: '2024-08-31T23:46:18.072+00:00',
        status: 'DELIVERED' as Order_Status_Enum,
        sum: 322,
        order_items: [
          {
            amount: 1,
            id: '73f8c1ea-314a-4590-994a-6577d8a77a07',
            item: {
              title: 'Піца Маргаріта',
            },
          },
          {
            amount: 1,
            id: '01fbbaed-2e37-4232-9b92-9fb061796b47',
            item: {
              title: 'Red Bull',
            },
          },
        ],
      },
      {
        id: 'a4edbc36-fb33-4957-8ce5-d063ec8f6825',
        created_at: '2024-09-03T05:43:54.053+00:00',
        status: 'DELIVERED' as Order_Status_Enum,
        sum: 322,
        order_items: [
          {
            amount: 1,
            id: 'abc13cb8-0b70-4cea-91aa-0e0dd8b21342',
            item: {
              title: 'Піца Карбонара',
            },
          },
          {
            amount: 1,
            id: 'd6e6c822-c025-4518-8419-fba9511dc4f1',
            item: {
              title: 'Red Bull',
            },
          },
        ],
      },
      {
        id: 'dda813b7-45b3-4dc3-874a-792e2fab5f6f',
        created_at: '2024-08-31T23:10:49.243+00:00',
        status: 'DELIVERED' as Order_Status_Enum,
        sum: 287,
        order_items: [
          {
            amount: 1,
            id: 'f34b6beb-fac7-4ad9-8135-9d2f0f18978e',
            item: {
              title: 'Піца Пепероні з томатами',
            },
          },
          {
            amount: 1,
            id: '6787d98d-dbe4-4efd-9482-13401e6fdcf4',
            item: {
              title: 'Red Bull',
            },
          },
        ],
      },
      {
        id: '87da5d22-e2a9-4e0e-8bea-93d4985a28d6',
        created_at: '2024-08-31T22:00:06.705+00:00',
        status: 'DELIVERED' as Order_Status_Enum,
        sum: 297,
        order_items: [
          {
            amount: 1,
            id: 'b80ee073-1575-486d-94ff-21490d1b594f',
            item: {
              title: 'Піца Барбекю',
            },
          },
          {
            amount: 1,
            id: 'd8dc9477-6e77-49c6-9906-07f78b310114',
            item: {
              title: 'Coca Cola 1l',
            },
          },
        ],
      },
      {
        id: '626c5350-1fe7-4802-87fe-38b752d88f64',
        created_at: '2024-09-02T06:09:37.59+00:00',
        status: 'DELIVERED' as Order_Status_Enum,
        sum: 281,
        order_items: [
          {
            amount: 1,
            id: 'efe777fe-be5a-4f42-94ae-3feb648cee40',
            item: {
              title: 'Піца Гриль Мікс',
            },
          },
          {
            amount: 1,
            id: '0c618d8f-3478-42c8-a59d-efc736b61cc1',
            item: {
              title: 'BonAqua',
            },
          },
        ],
      },
    ],
    orderStatuses: [
      {
        id: 'NEW' as Order_Status_Enum,
        label: 'new',
      },
      {
        id: 'IN_PROGRESS' as Order_Status_Enum,
        label: 'in progress',
      },
      {
        id: 'DONE' as Order_Status_Enum,
        label: 'done',
      },
      {
        id: 'DELIVERED' as Order_Status_Enum,
        label: 'delivered',
      },
      {
        id: 'CANCELED' as Order_Status_Enum,
        label: 'canceled',
      },
    ],
  },
};
