# BOW Studio — painel de clientes

Atualização preparada em 13/11/2026 para b0wstudiorioclaro/bowstudiogestao.

## Instalar

1. Extraia o ZIP.
2. Na raiz do repositório, substitua somente `index.html` e `sw.js` pelos arquivos deste pacote e confirme o commit.
3. Aguarde a publicação pelo mecanismo de hospedagem já utilizado no projeto e recarregue o app.

Não substitua seus ícones, manifest.json ou pwa.js. Este pacote utiliza esses arquivos já existentes no repositório. Os testes e este documento são opcionais para a publicação.

O pacote não contém dados de demonstração. Os cadastros existentes permanecem na mesma base de dados. A conexão GitHub disponível nesta sessão permite apenas leitura; esta atualização ainda não foi publicada no repositório.

## Painel de cada cliente

- Logo e nome no cabeçalho; use Cadastro e logo para alterá-los.
- Situação, descrição, data de início e previsão: clique no status do projeto.
- Progresso geral e por grupo calculados pelas tarefas concluídas. Tarefas canceladas ficam separadas e não entram no denominador.
- Escopo e Tarefas: adicionar, editar e remover grupos e tarefas, marcar conclusão, alterar status, buscar títulos e filtrar por situação.
- As tarefas anteriores aparecem em Sem grupo; basta editá-las e escolher um grupo. Remover um grupo mantém suas tarefas em Sem grupo.
- Cronograma: usa as mesmas tarefas do calendário interativo. Alterações de data e status são compartilhadas. Inclui navegação mensal, arrastar para remarcar, importação em texto e exportação do cronograma em PDF.
- Equipe: adicionar, editar e remover pessoas e definir responsáveis pelas tarefas. É um cadastro interno, sem envio de convites e sem criação de contas de acesso.
- Arquivos: anexar, baixar, editar e remover. Limite de 5 MB por arquivo e 15 MB de anexos por cliente.
- Links: cadastrar e abrir pastas ou arquivos do Google Drive e outros endereços HTTP/HTTPS. O acesso ao Drive segue as permissões do próprio link; não é uma sincronização com a conta Google.
- Observações: briefing e orientações persistentes por cliente.
- Financeiro: recebimentos, despesas, contratos e geração de cobrança preservados.

As alterações utilizam a sincronização existente do aplicativo e o cache local. O aviso no rodapé indica o estado da conexão. Os testes usaram dados isolados, sem gravar na base de produção.

## Validação

24 testes automatizados aprovados, incluindo regressão do resumo financeiro mensal, progresso, isolamento por cliente, tarefas, exclusão de grupos/pessoas, links e limites dos anexos.

Teste pela interface: criação de grupo, equipe e tarefa; conclusão e progresso; calendário; link; envio e download de arquivo; observações; persistência após recarregar; layout desktop e celular.

Para executar os testes: `node --test tests/*.test.cjs`.

Base da atualização: index.html com SHA e630c9ff751baa533db4d1b31b3b7ead7bf5825e. Cache do aplicativo atualizado para v89.

## Atualização do gerador e equipe

Gerador aberto acima do calendário: aceita DD/MM ou DD/MM/AAAA, reconhece os formatos de conteúdo, cria uma tarefa por horário e evita duplicatas de mesmo título/data/horário. O ano padrão é editável. Linhas inválidas são indicadas antes de importar qualquer tarefa. O grupo é reconhecido pelo conteúdo e escopo do cliente ou selecionado manualmente; grupos ausentes são criados automaticamente. O texto completo é preservado para não perder instruções.

Equipe: o formulário permite escolher um integrante de Pró-labore e preencher nome/função/e-mail disponíveis, ou cadastrar manualmente. Isso não gera pagamentos.

Esta revisão usa cache v90 e passou em 27 testes automatizados. A publicação continua pendente de envio de index.html e sw.js ao repositório.
