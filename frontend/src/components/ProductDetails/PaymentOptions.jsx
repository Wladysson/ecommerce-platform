export default function PaymentOptions({ product }) {

    const price = Number(product.price);

    const installment = price / 10;
    const pixDiscount = price * 0.9;


    return (
        <div className="space-y-3">

            <h2 className="text-base font-semibold text-white">
                Formas de pagamento
            </h2>


            <div className="space-y-2 text-sm">


                <div className="flex justify-between items-center">

                    <span className="text-white">
                        Cartão de crédito
                    </span>

                    <span className="font-semibold text-white">
                        10x R$ {installment.toFixed(2)}
                    </span>

                </div>



                <div className="flex justify-between items-center">

                    <span className="text-white">
                        PIX
                    </span>

                    <span className="text-green-400 font-semibold">
                        R$ {pixDiscount.toFixed(2)}
                    </span>

                </div>



                <div className="flex justify-between items-center">

                    <span className="text-white">
                        Boleto
                    </span>

                    <span className="text-gray-300 text-xs">
                        Após compensação
                    </span>

                </div>


            </div>


        </div>
    );
}