# BOW Studio — correção da instalação

Preparado em 10/11/2026, a partir do commit `55b086118b6e814c90adbe4c80b8755999c54198` do repositório `b0wstudiorioclaro/bowstudiogestao` e da conversa anexada em PDF.

## Alterações

- HTML conectado ao favicon existente e ao ícone glass em PNG.
- Ícones 192×192 e 512×512 derivados do original, sem redesenhar a marca.
- Manifesto com caminhos relativos compatíveis com hospedagem em subpasta. Retirada a declaração maskable do ícone que não foi desenhado para esse recorte.
- Banner responsivo com botão de fechar, tratamento de cancelamento e remoção após instalar.
- Service worker com cache real dos arquivos da interface, atualização pela rede e resposta offline. Requisições ao Firebase e dados financeiros não passam por esse cache.
- Retirado o evento de clique duplicado do login. Senha existente mantida.

O código atual já tinha corrigido a tag script duplicada e o seletor CSS global citados no PDF. Os módulos de gestão, a sincronização e as chaves do armazenamento local foram preservados.

## Validação

12 testes automatizados passaram (`node --test tests/pwa.test.cjs`): sintaxe, senha válida/inválida, dimensões e referências dos ícones, cache offline, isolamento das requisições e ciclo do botão de instalação. Interface conferida no navegador em desktop e em uma janela de 390 px, com conexão à nuvem simulada e sem dados reais.

A instalação final como aplicativo no Android ainda precisa ser conferida em um aparelho após publicar. O navegador e o sistema decidem se oferecem instalação ou atalho; não se promete remoção do selo em todos os dispositivos. Fontes e exportação de PDF dependem das bibliotecas externas existentes. Esta alteração não cria fila offline de sincronização financeira.

## Publicação pendente

O GitHub recusou escrita com `403 Resource not accessible by integration`. Nenhum arquivo remoto foi alterado e não houve implantação.

Para envio automático, a conexão GitHub usada no ChatGPT precisa ter acesso de escrita ao repositório. Como alternativa, extraia este ZIP e envie os arquivos da raiz ao mesmo repositório, incluindo `pwa.js` e os dois novos ícones. A pasta `tests` e este documento são opcionais para a hospedagem.

Depois da publicação, recarregue o site e use “Instalar app” quando o navegador disponibilizar a opção. O atalho antigo não muda automaticamente para uma instalação nova. Não limpe os dados do navegador sem antes exportar um backup do app.

Referência técnica: https://web.dev/learn/pwa/web-app-manifest
