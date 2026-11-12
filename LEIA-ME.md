# BOW Studio — resumo financeiro mensal

Atualização de 12/11/2026, preparada sobre o index.html atual do GitHub (blob d4312231ad69f277cd819b8a61e99526d66872d1).

## Instalar

Extraia o ZIP e substitua **index.html** e **sw.js** na raiz do repositório b0wstudiorioclaro/bowstudiogestao. Os outros arquivos existentes, incluindo pwa.js, manifest.json e os ícones, continuam sendo utilizados. Não envie o ZIP fechado como página do site. A pasta tests e este documento são opcionais para a hospedagem.

A conexão GitHub consultada permanece somente leitura; esta atualização ainda não foi enviada automaticamente nem publicada. Depois do envio, aguarde a publicação da hospedagem e recarregue o aplicativo.

## Indicadores

- Saldo atual: cálculo de caixa existente, com entradas recebidas e saídas pagas.
- Contratos ativos: quantidade e valores já calculados pelo aplicativo.
- A receber — total: contas pendentes de todos os meses, incluindo vencidas e futuras.
- Despesas — total: todas as despesas cadastradas, pagas e pendentes, incluindo pró-labore, com divisão dos valores abaixo. Movimentações manuais de caixa continuam afetando o saldo, sem serem contadas novamente como despesas cadastradas.
- Resumo do mês: começa automaticamente no mês atual do aparelho. Os botões anterior/próximo, o campo de mês/ano e o botão Mês atual alteram somente os dois indicadores mensais.
- A receber no mês: contas ainda não recebidas com vencimento no mês selecionado; valores já recebidos são excluídos.
- Despesas do mês: pagas e pendentes com vencimento no mês selecionado, com detalhamento de quanto foi pago e quanto falta pagar.

Os cálculos mensais usam vencimento e não data de pagamento. Os meses futuros mostram lançamentos já cadastrados; não criam cobranças ou despesas recorrentes automaticamente. Lançamentos sem vencimento válido entram nos totais gerais e geram um aviso de exclusão do resumo mensal.

## Validação

12 testes automatizados aprovados: separação por mês/ano, centavos, contas recebidas, despesas pagas/pendentes, virada de ano, meses sem dados, datas inválidas e preservação dos registros. Execute com Node: `node --test tests/dashboard.test.cjs`.

Troca de mês e retorno ao mês atual também conferidos no navegador; layout verificado em desktop e em janela de 390 px, com dados fictícios e sem acessar ou modificar a base financeira real. Login e sincronização existentes foram preservados.
