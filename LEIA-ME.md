# Editor de Ofertas — Comercial Silva | Código comentado

## O que é

Site para o encarregado do supermercado criar banners promocionais pelo navegador,
seguindo a identidade visual do exemplo fornecido. Nesta versão, tudo funciona
no computador do funcionário (HTML, CSS e JavaScript) sem backend e sem banco de dados.

## Abrir no VS Code

1. Extraia este ZIP. **Não execute o projeto de dentro do ZIP.**
2. Abra o Visual Studio Code e clique em **Arquivo > Abrir Pasta**.
3. Selecione a pasta `Editor_Ofertas_Comercial_Silva_Codigo_Comentado`.
4. Na lateral do VS Code, abra `index.html` para estudar a estrutura.
5. Para testar, clique com o botão direito em `index.html` e escolha **Reveal in File Explorer / Mostrar no Explorador**, depois dê dois cliques no arquivo. Ele funciona no navegador sem Node.js.
6. Opcionalmente, use a extensão **Live Server** no VS Code e escolha **Open with Live Server**. Isso facilita atualizar a página enquanto edita.

## Arquivos do projeto

```text
Editor_Ofertas_Comercial_Silva_Codigo_Comentado/
├── index.html              # campos, botões, telas e Canvas
├── styles.css              # cores, posições, layout e celular
├── app.js                  # regras de negócio, desenho e downloads
├── assets/
│   ├── logo-comercial-silva.png  # logomarca padrão
│   └── modelo-referencia.jpg     # arte recebida como referência
└── LEIA-ME.md              # este manual
```

## Para entender o código (ordem recomendada)

- **index.html:** procure `id="produto"`, `id="preco"`, `id="banner-canvas"` e `id="png-btn"`.
- **styles.css:** procure `:root`, `.editor-grid`, `.preview-stage` e os blocos `@media`.
- **app.js:** siga o fluxo `readForm() -> renderPreview() -> drawBanner()`.
- Depois, estude `validate()` (regras), `storeJSON()` (salvamento), `renderHistory()` (biblioteca) e `exportImage()` (download).

## Como usar

1. Preencha nome, preço (ex.: `8,50`) e unidade.
2. Veja o banner se atualizar conforme digita.
3. Personalize os textos, tema ou logomarca, caso necessário.
4. Clique em **Salvar oferta** para guardá-la no histórico deste navegador.
5. Clique em **Baixar PNG** ou **Baixar JPG** para obter o banner em **2400 × 1720 px**.
6. Clique em **Imprimir / PDF** e selecione **Salvar como PDF** na impressão do navegador.

## Para alterar o visual

- **Cores do sistema:** altere os valores `--navy`, `--blue`, `--orange` em `:root` no CSS.
- **Cores do banner:** altere `PALETTES` no JavaScript.
- **Posição de preço, logo e faixas:** veja as funções `drawPrice`, `drawLogo` e `drawHeaders` em `app.js`.
- **Campos e textos:** altere `index.html` (mantenha os `id` usados em `app.js`).

## Limitações importantes

- Não há login, servidor, PostgreSQL nem sincronização entre computadores.
- As ofertas são salvas no `localStorage` do navegador e podem ser perdidas se os dados do navegador forem limpos.
- Navegação privada ou políticas do navegador podem impedir o armazenamento.
- O modelo é uma recriação visual programática do banner fornecido, não uma cópia idêntica pixel a pixel.
- A logomarca deve ser utilizada somente com a autorização do estabelecimento.

## Teste rápido

- Abra `index.html` e escolha o produto de exemplo Óleo Serra Verde.
- Altere o preço para `9,90`: a caixa amarela deve mudar imediatamente.
- Salve a oferta, entre em **Ofertas salvas**, clique em **Editar** e confirme os valores.
- Volte ao editor, clique em **Baixar PNG** e confira o arquivo gerado.

> Dica de aula: abra o inspetor do navegador com `F12`, vá à guia **Console** e verifique se existem mensagens de erro.
