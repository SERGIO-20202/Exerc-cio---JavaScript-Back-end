export default function handler(req, res) {
  const {
    query: { action, values },
    method,
  } = req;

  if (method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  if (!values) {
    return res.status(400).json({ error: 'Parâmetro "values" é obrigatório.' });
  }

  const numbers = values.split(',').map(Number);
  if (numbers.some(isNaN)) {
    return res.status(400).json({ error: 'Todos os valores devem ser números.' });
  }

  switch (action) {
    case 'minimum':
      return res.json({ result: Math.min(...numbers) });
    case 'maximum':
      return res.json({ result: Math.max(...numbers) });
    default:
      return res.status(400).json({ error: 'Ação inválida.' });
  }
}