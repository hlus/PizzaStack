import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';

import { useCreateOrderMutation } from '@app/core/types';
import { cartState, clearCart } from '@app/modules/cart/store/cart-state';
import { FormValues } from '../components/checkout-form/checkout-form.types';
import { Container } from '@app/common/components/container/container.component';
import { useGetMeDataQuery } from '@app/modules/auth/hooks/use-get-me-data-query';
import { ActionPaper } from '@app/common/components/action-paper/action-paper.component';
import { CheckoutForm } from '@app/modules/checkout/components/checkout-form/checkout-form.component';
import { CartList, CartSumItemPosition } from '@app/modules/cart/components/cart-list/cart-list.component';

export const CheckoutPage: React.FC = () => {
  const { data } = useGetMeDataQuery();

  const cartItems = useReactiveVar(cartState);
  const [createOrder] = useCreateOrderMutation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (Object.keys(cartItems).length === 0) {
      navigate('/', { replace: true });
    }
  }, [cartItems]);

  const handleCheckoutSubmit = async (values: FormValues) => {
    const items = Object.entries(cartItems).map(([id, amount]) => ({ id, amount }));

    await createOrder({
      variables: {
        client_address: values.address,
        client_name: values.name,
        client_phone: values.phone,
        comment: values.comment,
        items,
        payment_type: values.paymentType,
      },
    });

    clearCart();
    navigate('/checkout/thank-you', { replace: true });
  };

  return (
    <Container>
      <ActionPaper title="Order">
        <div className="flex gap-19">
          <div className="flex-1">
            <CheckoutForm submitCallback={handleCheckoutSubmit} initialValues={data} />
          </div>
          <div className="flex-1">
            <CartList scrollDisabled cartSumItemPosition={CartSumItemPosition.TOP} />
          </div>
        </div>
      </ActionPaper>
    </Container>
  );
};
