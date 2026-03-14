**<h2>EcoDrive - Gestão Inteligente de Combustível</h2>**

O EcoDrive Web é uma solução digital desenvolvida para transformar a forma como motoristas lidam com o consumo de combustível. Mais do que uma simples planilha de gastos, o sistema atua como um assistente inteligente, fornecendo dados analíticos e previsões de autonomia para incentivar uma direção mais consciente e econômica.

**<h2>Funcionalidades Principais</h2>**

**O sistema foi projetado para atender às necessidades reais do motorista brasileiro:**

**Dashboard de Consumo:** Visualização clara de médias e gastos através de gráficos intuitivos.

**Simulador de Autonomia Preditiva:** Cálculo em tempo real de quanto tempo o combustível durará com base na velocidade informada pelo usuário.

**Registro de Abastecimentos:** Controle detalhado de litros, valores, quilometragem e postos utilizados.

**Garagem Virtual:** Cadastro e gerenciamento de veículos, incluindo placa e capacidade total do tanque.

**Filtros de Histórico:** Consulta de gastos e médias organizadas por períodos específicos (Mês e Ano).

**<h2>Tecnologias utilizadas</h2>**

**Para garantir um sistema rápido, seguro e escalável, a stack tecnológica inclui:**

**Framework:** Next.js (App Router) para alta performance e carregamento rápido.

**Linguagem:** TypeScript para garantir a integridade dos dados e redução de bugs.

**Estilização:** Tailwind CSS para uma interface 100% responsiva (Mobile-First).

**Backend & Segurança:** Firebase (Auth e Firestore) para autenticação segura e sincronização em nuvem.

**<h2>Regras de Negócio e Segurança</h2>**

**Privacidade Total:** Cada usuário só tem acesso aos seus próprios dados, garantindo o sigilo das informações via Firebase Auth.

**Consistência de Dados:** O sistema impede registros de quilometragem inconsistentes com o histórico anterior do veículo.

**Cálculos Precisos:** A média de consumo é processada automaticamente a partir do segundo abastecimento registrado para o mesmo veículo.

**<h2>Como rodar o projeto localmente</h2>**

**1 - Clone este repositório:**

git clone https://github.com/RobertPS213/Projeto-EcoDrive.git

**2 - Instale as dependências:**

npm install

**3 - Inicie o servidor de desenvolvimento:**

npm run dev

**4 - Acesse no navegador:**

http://localhost:3000
