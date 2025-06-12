export default function handler(req, res) {
  const {
    query: { action },
    method,
    body
  } = req;

  if (method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const text = body.text;
  if (typeof text !== 'string') {
    return res.status(400).json({ error: 'Texto inválido.' });
  }

  switch (action) {
    case 'lowercase':
      return res.json({ result: text.toLowerCase() });
    case 'uppercase':
      return res.json({ result: text.toUpperCase() });
    default:
      return res.status(400).json({ error: 'Ação inválida.' });
  }
}