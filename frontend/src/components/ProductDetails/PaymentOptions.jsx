export default function PaymentOptions({ product }) {

    const price = Number(product.price);


    const installment = price / 10;

    const pixDiscount = price * 0.9;


    return (
        <div className="border rounded-xl p-5 space-y-5 bg-white">


            <h2 className="text-xl font-semibold">
                Formas de pagamento
            </h2>


            <div className="space-y-3">


                <div className="border rounded-lg p-4">

                    <h3 className="font-medium">
                        Cartão de crédito
                    </h3>

                    <p className="text-gray-600 text-sm">
                        Até 10x sem juros de R$ {installment.toFixed(2)}
                    </p>

                </div>



                <div className="border rounded-lg p-4">

                    <h3 className="font-medium">
                        PIX
                    </h3>

                    <p className="text-gray-600 text-sm">
                        10% de desconto pagando à vista
                    </p>


                    <strong className="text-green-600">
                        R$ {pixDiscount.toFixed(2)}
                    </strong>

                </div>



                <div className="border rounded-lg p-4">

                    <h3 className="font-medium">
                        Boleto bancário
                    </h3>

                    <p className="text-gray-600 text-sm">
                        Pagamento aprovado após compensação
                    </p>

                </div>


            </div>


        </div>
    );
}