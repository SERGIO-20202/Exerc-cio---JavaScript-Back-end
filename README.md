# Web API Utils

Uma API simples de utilitários para **manipulação de texto** e **processamento de números**, desenvolvida com Node.js e hospedada na [Vercel](https://vercel.com/).

---

## ✨ Funcionalidades

### 🔤 Utilitário de Texto

| Ação       | Descrição               | Exemplo de entrada | Saída esperada     |
|------------|-------------------------|--------------------|--------------------|
| lowercase  | Converte para minúsculo | Lorem Ipsum        | lorem ipsum        |
| uppercase  | Converte para maiúsculo | Lorem Ipsum        | LOREM IPSUM        |

- **Endpoint:** `POST /api/text?action=lowercase|uppercase`
- **Body JSON:**
```json
{
  "text": "Lorem Ipsum"
}
```

---

### 🔢 Utilitário de Número

| Ação      | Descrição                | Exemplo de entrada     | Saída esperada |
|-----------|--------------------------|------------------------|----------------|
| minimum   | Retorna o menor número   | 10, 1, 100             | 1              |
| maximum   | Retorna o maior número   | 10, 1, 100             | 100            |

- **Endpoint:** `GET /api/number?action=minimum|maximum&values=10,1,100`

---

## 🚀 Como usar localmente

```bash
npm install -g vercel
vercel
```

---

## 📦 Deploy

Feito automaticamente com push para o GitHub usando [Vercel](https://vercel.com/).

---

## 🧑‍💻 Autor

Desenvolvido por [Seu Nome Aqui] – inspirado em exercícios do IFPB.