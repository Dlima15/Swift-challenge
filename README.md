SWIFT+

Aplicativo gamificado para engajamento e motivação de colaboradores.

👥 Equipe
Danilo Lima
Ariel
Amanda Diacis
📌 Contexto

Este projeto foi desenvolvido como solução para um Challenge da FIAP em parceria com a Swift, visando resolver problemas de desmotivação dos funcionários em ambientes corporativos e de varejo.

A ideia central é transformar a rotina dos colaboradores em uma jornada gamificada, recompensadora e estimulante, utilizando elementos como pontos, níveis, desafios e recompensas.

🎯 Objetivo

O SWIFT+ busca aumentar a produtividade e o engajamento dos colaboradores, alinhando metas, campanhas e desempenho de forma clara, transparente e divertida.

🔎 Diagnóstico

Principais problemas identificados:

Desalinhamento entre campanhas online e físicas.
Falta de visibilidade de desempenho em tempo real.
Ausência de incentivos imediatos.
Dificuldade em manter padrão de atendimento em picos de demanda.
💡 Solução Proposta
Painel centralizado de metas e campanhas
Gamificação contínua com pontos, níveis e recompensas instantâneas
Feedback imediato via QR code ou link de avaliação
Desafios personalizados e rankings (loja, região e geral)
📈 Impacto Esperado
Aumento de conversão no ponto de venda
Elevação do ticket médio
Redução de avaliações negativas
Retenção de talentos e melhoria do clima organizacional
📚 Fundamentação Teórica

Baseado em Gamificação Corporativa (Werbach & Hunter, 2012), utilizando:

Rankings e desafios
Recompensas tangíveis
Feedback imediato
Trilhas de crescimento personalizadas
🛠️ Tecnologias Utilizadas
Banco de Dados: Oracle / PostgreSQL
Frontend Web/Mobile: HTML, CSS, Bootstrap, React Native
Backend: JavaScript (Node.js + Express), Python
Hospedagem: AWS ou Firebase
Autenticação: JWT
📑 Especificação do Software
✅ Requisitos Funcionais
Cadastro de funcionários e lojas
Registro de metas diárias/semanais/mensais
Sistema de avaliação (1 a 5 estrelas)
Recompensas automáticas
Rankings (loja, região, geral)
Painel administrativo para campanhas
Notificações de desafios e feedbacks
Histórico de desempenho e conquistas
⚙️ Requisitos Não Funcionais
Interface amigável e responsiva
Compatibilidade Android e iOS
Alta disponibilidade (99,9%)
Criptografia de dados
Integração com sistemas internos
📜 Regras de Negócio
Cada avaliação 5⭐ = 5 pontos
Meta diária batida = 10 pontos
Pontuação cumulativa define níveis:
🟢 Iniciante (0–199 pts)
🔵 Profissional (200–499 pts)
🟣 Especialista (500–999 pts)
🟡 Líder (1000+ pts)
🏗️ Arquitetura do Sistema
Cliente: App Mobile (React Native)
Servidor: Node.js + Express
Banco de Dados: PostgreSQL
Admin Panel: React / Next.js Web App
Fluxo:
Usuário → App → API → Banco de Dados → Painel Admin → Notificações Push

📌 Casos de Uso
Avaliar Atendimento – cliente usa QR code e gera pontos ao colaborador.
Atingir Meta Diária – sistema registra pontos automáticos.
Subir de Nível – funcionário desbloqueia recompensas.
Participar de Desafios – desafios criados pelo admin com recompensas.
🖼️ Protótipo (Wireframes)
Tela de Login e Cadastro
Dashboard de Desempenho
Ranking (loja, região, geral)
Metas e progresso
Recompensas disponíveis
Missões e desafios
Perfil do colaborador
Painel administrativo
📆 Cronograma de Desenvolvimento
Etapa	Período	Descrição
Levantamento de requisitos	Maio/2025	Escopo e reuniões
Prototipação	Junho/2025	Wireframes e protótipos no Figma
MVP	Jul–Ago/2025	Backend, frontend, banco e autenticação
Testes	Set/2025	Usabilidade e ajustes
Beta	Out/2025	Lançamento para grupos de teste
Final	Nov/2025	Release oficial
✅ Conclusão

O SWIFT+ representa uma ferramenta estratégica de gamificação corporativa, promovendo engajamento, produtividade e retenção de talentos. Ao unir tecnologia, inovação e gestão de desempenho, oferece à Swift uma vantagem competitiva real na valorização de seus colaboradores.
