import React from 'react';

import { Container } from '@app/common/components/container/container.component';
import { ActionPaper } from '@app/common/components/action-paper/action-paper.component';
import { CheckoutForm } from '@app/modules/checkout/components/checkout-form/checkout-form.component';
import { CartList, CartSumItemPosition } from '@app/modules/cart/components/cart-list/cart-list.component';

export const CheckoutPage: React.FC = () => {
  return (
    <Container>
      <ActionPaper title="Order">
        <div className="flex gap-19">
          <div className="flex-1">
            <CheckoutForm />
          </div>
          <div className="flex-1">
            <CartList scrollDisabled cartSumItemPosition={CartSumItemPosition.TOP} />
          </div>
        </div>
      </ActionPaper>
    </Container>
  );
};
