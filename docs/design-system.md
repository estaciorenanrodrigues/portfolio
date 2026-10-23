# Design system do portfólio

## Fundações

`src/designTokens.ts` define a unidade de espaçamento (8 px), os raios de borda, a duração dos movimentos, a tipografia de destaque e as medidas recorrentes de layout. `src/theme.ts` aplica essas decisões ao Material UI e expõe variáveis CSS para os estilos de layout em `src/styles.css`.

As cores semânticas são definidas por modo no tema: `primary`, `background.default`, `background.paper`, `text.primary`, `text.secondary` e `divider`. O CSS utiliza `--color-interactive` e `--color-focus`, que acompanham o modo ativo. Não copie os valores hexadecimais para novos componentes.

## Uso

```tsx
// Espaçamento em múltiplos da unidade do tema; cores com significado.
<Box sx={{ p: 3, bgcolor: 'background.paper', color: 'text.primary' }}>
  <Typography variant="h2">Título da seção</Typography>
  <Typography color="text.secondary">Texto de apoio.</Typography>
</Box>

// Componente compartilhado para as seções principais.
<SectionTitle number="03" label="TRABALHOS" title="Interfaces em ação." />

// Hierarquia de ações.
<Button variant="contained">Ação principal</Button>
<Button variant="outlined">Ação secundária</Button>
<Button variant="text">Ação complementar</Button>
```

Use `h1` uma vez na apresentação, `h2` nos títulos de seção e `h3`/`h4` para seus conteúdos. `variant` define a aparência e `component` pode ajustar a semântica. A classe `eyebrow` recebe a tipografia de identificação de seção pelo tema. Títulos editoriais podem ter variações locais de tamanho; a base compartilhada permanece no tema.

## Componentes e estados

- **Button e IconButton:** usar as variantes do Material UI e um nome acessível para ações apenas com ícone. O tema define raio e espaçamento dos botões.
- **ProjectCard:** recebe um projeto, sua posição e `onSelect`. O texto visível compõe seu nome acessível, sem substituí-lo por um `aria-label` incompleto. `aria-haspopup` indica que abre um diálogo.
- **ProjectDialog:** recebe o projeto selecionado e `onClose`. Tem título associado, região rolável focalizável e comportamento de foco e Escape gerenciado pelo Material UI.
- **Menu mobile:** o botão expõe estado expandido e associação com o Drawer, que possui nome associado ao título visível.
- **Links:** hover usa a cor interativa do modo ativo; foco visível usa um contorno de 3 px. Links externos usam os atributos compartilhados de `src/utils/links.ts`.
- **Movimento reduzido:** a preferência do sistema desativa animações, transições e rolagem suave. Os `!important` restantes no CSS são exclusivos dessa preferência, para prevalecer também sobre as transições da biblioteca.

## Responsividade e verificação

O layout acompanha os limites padrão do Material UI: 600 px e 900 px. As media queries usam 599 px e 899 px para as faixas inferiores. Revise tema e CSS juntos se os breakpoints forem personalizados.

Ao alterar componentes, verifique os dois temas, hover, foco por teclado, mobile, menu aberto e modal aberto. Confirme ausência de rolagem horizontal, leitura dos títulos e retorno do foco ao fechar o diálogo. Execute `npm run build` para checar tipos e compilação. A análise automatizada de acessibilidade complementa a revisão manual; não certifica conformidade integral.
