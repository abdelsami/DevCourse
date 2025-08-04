import CheckoutWrapper from "./checkout-wrapper";

export default function CheckoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <CheckoutWrapper params={params} />;
}
