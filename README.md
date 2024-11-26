# Sistema de Autenticação com Next.js

Este é um projeto de sistema de autenticação desenvolvido utilizando as tecnologias modernas do ecossistema JavaScript. O foco principal é oferecer um fluxo de autenticação robusto, com suporte a provedores como GitHub, além de autenticação local com senhas seguras.

---

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework React para aplicações web modernas.
- **[NextAuth.js](https://next-auth.js.org/)**: Biblioteca para autenticação em Next.js.
- **[Prisma](https://www.prisma.io/)**: ORM moderno para banco de dados.
- **[MongoDB](https://www.mongodb.com/)**: Banco de dados não relacional usado como base de dados principal.
- **[BCrypt](https://github.com/kelektiv/node.bcrypt.js)**: Para criptografia de senhas.
- **Provedores de autenticação como GitHub**.

---

## ⚙️ Funcionalidades

- **Autenticação Local**:
  - Cadastro de usuários com criptografia de senhas usando BCrypt.
  - Login utilizando JWT para sessões seguras.
- **Autenticação com Provedores**:
  - Login via GitHub (e facilmente expansível para outros provedores).
- **Gerenciamento de Sessões**:
  - Sessões seguras e gerenciadas automaticamente com NextAuth.
- **Integração com MongoDB**:
  - Persistência dos dados de usuários e sessões.
- **Segurança**:
  - Senhas criptografadas.
  - Tokens seguros.

---

## 🛠️ Configuração e Execução

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (ou utilize um serviço na nuvem como o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Um editor de código, como o [VS Code](https://code.visualstudio.com/).

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto e preencha as variáveis necessárias:

   ```env
   DATABASE_URL="mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/<nome_do_banco>?retryWrites=true&w=majority"
   NEXTAUTH_SECRET="<uma_chave_secreta>"
   NEXTAUTH_URL="http://localhost:3000"
   GITHUB_CLIENT_ID="<seu_client_id_do_github>"
   GITHUB_CLIENT_SECRET="<seu_client_secret_do_github>"
   ```

4. **Execute as migrações com Prisma:**

   ```bash
   npx prisma db push
   ```

5. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

---

## 🖥️ Estrutura do Projeto

- **`/pages/api/auth`**: Rotas da API de autenticação NextAuth.
- **`/lib/prisma.ts`**: Configuração do cliente Prisma.
- **`/components`**: Componentes reutilizáveis da interface.
- **`/models`**: Schemas para o banco de dados com Prisma.

---

## 💡 Personalização

Se quiser adicionar novos provedores de autenticação, basta atualizar o arquivo `next-auth.js`:

```javascript
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // Adicione outros provedores aqui
  ],
});
```

---

## 🛡️ Segurança

- Certifique-se de utilizar variáveis de ambiente para segredos e credenciais sensíveis.
- Sempre utilize HTTPS em produção.

---

## 📚 Documentação Complementar

- [Next.js](https://nextjs.org/docs)
- [NextAuth.js](https://next-auth.js.org/getting-started/introduction)
- [Prisma](https://www.prisma.io/docs)
- [MongoDB](https://docs.mongodb.com/)

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

## 📜 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

**Desenvolvido por [Felipe Melo](https://github.com/seu-usuario)**. 😊
