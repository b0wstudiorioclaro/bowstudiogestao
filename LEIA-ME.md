# BOW Studio | Importação de cronograma em Markdown

Substitua `index.html` e `sw.js` na raiz do repositório bowstudiogestao. Aguarde a publicação do site e recarregue o aplicativo.

No painel do cliente, abra Cronograma e cole a mensagem no Gerador de cronograma. A lista simples continua funcionando. No formato Markdown, uma linha como `Seg 30/11, ter 01/12 · 18h: Stories` cria uma tarefa por data. Vários horários na mesma linha geram tarefas com os respectivos conteúdos. Títulos, divisões de semana e orientações sem data ficam fora da importação.

O app usa o ano do período informado na mensagem e mantém a hora do texto. Se uma ação estiver condicionada ao expediente, o gerador lista as ações pendentes antes da importação. Depois de confirmar o expediente, retire a ressalva do texto para incluí-las. Uma promoção com “Stories + tráfego pago” no mesmo horário entra como tarefa conjunta.

Execute `node --test tests/*.cjs` para verificar o parser e a sintaxe. A publicação está pendente de permissão de escrita no GitHub.
