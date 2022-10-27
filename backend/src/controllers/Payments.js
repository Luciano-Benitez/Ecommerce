const Stripe = require('stripe')

const stripe = new Stripe('sk_test_51KYwSkGKrvjozYj3n5EzsnWDcdRhH5kOsgqERQKeYviTTksYc5ilKyuNPQXfle2Z2TbLdukPmjgZJuJQjdIYCbvK00Lj9yWf7B'); 

exports.postPayment = async(req, res) => {
    const {id, amount} = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            payment_method: id,
            currency: 'ARS',
            description: 'Pago confirmado',
            confirm: true
        });
        return res.status(200).json({message: 'Successful Payment'});
    } catch (error) {
        return res.json({message: error.raw.message});
    }
};  