import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Pega do .env da Vercel
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY // TEM QUE SER A SERVICE KEY
);

export const config = {
  api: { bodyParser: false },
};

const buffer = async (readable) => {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const sig = req.headers['stripe-signature'];
  const buf = await buffer(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Quando pagamento é confirmado
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const customerEmail = session.customer_details.email;

    // Adiciona no Supabase
    const { error } = await supabase
      .from('usuarios_vip')
      .insert([{ email: customerEmail }]);

    if (error) {
      console.log('Erro Supabase:', error);
      return res.status(500).json({ error: error.message });
    }
    
    console.log(`VIP ativado: ${customerEmail}`);
  }

  res.status(200).json({ received: true });
}
