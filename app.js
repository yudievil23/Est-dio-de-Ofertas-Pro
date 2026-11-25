/*
 * EDITOR DE OFERTAS — COMERCIAL SILVA (VERSÃO COMPLETA)
 * Motor gráfico em Canvas 1200x860 (Exportação 2400x1720px)
 * Inclui Biblioteca de Modelos, Imagem PNG Arrastável, Paletas & Swatches e Tipografia.
 */
(() => {
  'use strict';

  const STORE = {
    ofertas: 'comercial_silva_ofertas_v2',
    rascunho: 'comercial_silva_rascunho_v2',
    logo: 'comercial_silva_logo_v2',
    branding: 'comercial_silva_branding_v2',
    subscriptions: 'comercial_silva_subscriptions_v2'
  };

  const W = 1200;
  const H = 860;
  const EXPORT_SCALE = 2;

  const FONTS = {
    impact: '"Arial Black", Impact, "Anton", sans-serif',
    inter: '"Inter", "Arial Black", sans-serif',
    montserrat: '"Montserrat", "Arial Black", sans-serif',
    oswald: '"Oswald", "Arial Black", sans-serif'
  };

  const PLANS = {
    gratuito: {
      id: 'gratuito',
      name: 'Gratuito',
      days: 5,
      price: 0,
      morse: '',
      benefits: '5 dias de acesso para testar criação e exportação de cartazes.'
    },
    mensal: {
      id: 'mensal',
      name: 'Mensal',
      days: 30,
      price: 180,
      morse: '',
      benefits: '30 dias de acesso completo ao estúdio, modelos e exportação HD.'
    },
    trimestral: {
      id: 'trimestral',
      name: 'Trimestral',
      days: 90,
      price: 350,
      morse: '',
      benefits: '90 dias de acesso contínuo com economia no ciclo trimestral.'
    },
    anual: {
      id: 'anual',
      name: 'Anual',
      days: 365,
      price: 500,
      morse: '',
      benefits: '365 dias de acesso anual completo com maior custo-benefício.'
    }
  };

  const MORSE_MAP = {
    A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.',
    H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.',
    O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-',
    V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
  };

  function toMorse(text) {
    return String(text || '')
      .toUpperCase()
      .split('')
      .map((ch) => MORSE_MAP[ch] || '')
      .filter(Boolean)
      .join(' ');
  }

  const $ = (id) => document.getElementById(id);

  // Paletas Profissionais Prontas
  const COLOR_SWATCHES = [
    { id: 'vermelho', name: 'Vermelho Supermercado', bg: '#dc2626', accent: '#facc15', pricebox: '#1e293b', text: '#ffffff' },
    { id: 'azul', name: 'Azul Comercial', bg: '#1045b2', accent: '#ff7f05', pricebox: '#ffdf00', text: '#ffffff' },
    { id: 'verde', name: 'Verde Hortifrúti', bg: '#16a34a', accent: '#bef264', pricebox: '#052e16', text: '#ffffff' },
    { id: 'laranja', name: 'Laranja Oferta', bg: '#d97706', accent: '#fef08a', pricebox: '#451a03', text: '#ffffff' },
    { id: 'roxo', name: 'Roxo Relâmpago', bg: '#7c3aed', accent: '#ddd6fe', pricebox: '#2e1065', text: '#ffffff' },
    { id: 'black', name: 'Modo Black Elegance', bg: '#0f172a', accent: '#eab308', pricebox: '#334155', text: '#ffffff' },
    { id: 'rosa', name: 'Rosa Liquidação', bg: '#be185d', accent: '#fbcfe8', pricebox: '#500724', text: '#ffffff' },
    { id: 'teal', name: 'Teal Limpeza', bg: '#0d9488', accent: '#99f6e4', pricebox: '#042f2e', text: '#ffffff' }
  ];

  // Biblioteca de Modelos Prontos
  const TEMPLATES_LIBRARY = [
    { id: 1, category: 'tradicional', title: 'Clássico Comercial Silva', badge: 'OFERTA', seal: 'IMPERDÍVEL NESTA SEMANA', product: 'Cerveja Pilsen 350ml', descricao: 'Lata Fardinho c/ 12 unidades', moeda: 'R$', preco: '9,99', unidade: 'APENAS POR UN.', bgColor: '#1045b2', accentColor: '#ff7f05', priceBoxColor: '#ffdf00', textColor: '#ffffff', fonte: 'impact' },
    { id: 2, category: 'tradicional', title: 'Super Oferta Vermelha', badge: 'OFERTA', seal: 'IMPERDÍVEL', product: 'Arroz Branco Tipo 1', descricao: 'Pacote 5kg Selecionado', moeda: 'R$', preco: '24,90', unidade: 'CADA PACOTE', bgColor: '#dc2626', accentColor: '#facc15', priceBoxColor: '#1e293b', textColor: '#ffffff', fonte: 'montserrat' },
    { id: 3, category: 'alimentos', title: 'Grãos & Mercearia', badge: 'ESPECIAL', seal: 'QUALIDADE GARANTIDA', product: 'Feijão Carioca Tipo 1', descricao: 'Pacote 1kg', moeda: 'R$', preco: '7,49', unidade: 'KG / PCT', bgColor: '#b45309', accentColor: '#fef08a', priceBoxColor: '#451a03', textColor: '#ffffff', fonte: 'montserrat' },
    { id: 4, category: 'bebidas', title: 'Festival de Bebidas', badge: 'GELADA', seal: 'PREÇO BAIXO', product: 'Refrigerante Cola 2L', descricao: 'Garrafa Pet', moeda: 'R$', preco: '6,99', unidade: 'UNIDADE', bgColor: '#2563eb', accentColor: '#60a5fa', priceBoxColor: '#172554', textColor: '#ffffff', fonte: 'oswald' },
    { id: 5, category: 'limpeza', title: 'Limpeza Total', badge: 'ECONOMIA', seal: 'SUPER DESCONTO', product: 'Sabão em Pó 1,6kg', descricao: 'Rendimento Máximo', moeda: 'R$', preco: '18,50', unidade: 'CAIXA', bgColor: '#0d9488', accentColor: '#99f6e4', priceBoxColor: '#042f2e', textColor: '#ffffff', fonte: 'inter' },
    { id: 6, category: 'hortifruit', title: 'Hortifrúti Fresquinho', badge: 'FRESCO', seal: 'DIRETO DO CAMPO', product: 'Tomate Longa Vida', descricao: 'Selecionado Extra', moeda: 'R$', preco: '5,99', unidade: 'KG', bgColor: '#16a34a', accentColor: '#bef264', priceBoxColor: '#052e16', textColor: '#ffffff', fonte: 'montserrat' },
    { id: 7, category: 'acougue', title: 'Açougue Nobre', badge: 'AÇOUGUE', seal: 'QUALIDADE SUPREMA', product: 'Alcatra Bovina Resfriada', descricao: 'Peça a Vácuo', moeda: 'R$', preco: '39,90', unidade: 'KG', bgColor: '#991b1b', accentColor: '#fca5a5', priceBoxColor: '#450a0a', textColor: '#ffffff', fonte: 'impact' },
    { id: 8, category: 'padaria', title: 'Padaria & Confeitaria', badge: 'QUENTINHO', seal: 'SAINDO AGORA', product: 'Pão Francês Artesanal', descricao: 'Fresquinho o dia todo', moeda: 'R$', preco: '12,99', unidade: 'KG', bgColor: '#d97706', accentColor: '#fde68a', priceBoxColor: '#451a03', textColor: '#ffffff', fonte: 'oswald' },
    { id: 9, category: 'relampago', title: 'Oferta Relâmpago 24h', badge: 'RELÂMPAGO', seal: 'CORRE QUE ACABA', product: 'Leite Integral UHT 1L', descricao: 'Caixinha Longa Vida', moeda: 'R$', preco: '4,49', unidade: 'UNIDADE', bgColor: '#7c3aed', accentColor: '#ddd6fe', priceBoxColor: '#2e1065', textColor: '#ffffff', fonte: 'impact' },
    { id: 10, category: 'liquidacao', title: 'Feirão de Liquidação', badge: 'LIQUIDA', seal: 'QUEIMA DE ESTOQUE', product: 'Óleo de Soja 900ml', descricao: 'Garrafa Pet Refinado', moeda: 'R$', preco: '6,49', unidade: 'UNIDADE', bgColor: '#be185d', accentColor: '#fbcfe8', priceBoxColor: '#500724', textColor: '#ffffff', fonte: 'montserrat' },
    { id: 11, category: 'moderno', title: 'Moderno Black & Gold', badge: 'DESTAQUE', seal: 'EXCLUSIVO CLIENTE', product: 'Azeite de Oliva Extra 500ml', descricao: 'Vidro Importado', moeda: 'R$', preco: '29,90', unidade: 'UNIDADE', bgColor: '#0f172a', accentColor: '#eab308', priceBoxColor: '#334155', textColor: '#ffffff', fonte: 'inter' },
    { id: 12, category: 'alimentos', title: 'Cantinho do Café', badge: 'CAFÉ', seal: 'AROMA E SABOR', product: 'Café Torrado e Moído 500g', descricao: 'Embalagem a Vácuo', moeda: 'R$', preco: '14,99', unidade: 'PACOTE', bgColor: '#78350f', accentColor: '#fde68a', priceBoxColor: '#291304', textColor: '#ffffff', fonte: 'montserrat' }
  ];

  const CATEGORIES = [
    { id: 'todos', label: 'Todos' },
    { id: 'tradicional', label: 'Tradicionais' },
    { id: 'alimentos', label: 'Alimentos' },
    { id: 'bebidas', label: 'Bebidas' },
    { id: 'limpeza', label: 'Limpeza' },
    { id: 'hortifruit', label: 'Hortifrúti' },
    { id: 'acougue', label: 'Açougue' },
    { id: 'padaria', label: 'Padaria' },
    { id: 'relampago', label: 'Relâmpago' },
    { id: 'liquidacao', label: 'Liquidação' },
    { id: 'moderno', label: 'Modernos' }
  ];

  const defaults = {
    titulo: 'OFERTA',
    subtitulo: 'IMPERDÍVEL NESTA SEMANA',
    produto: 'Cerveja Pilsen 350ml',
    descricao: 'Lata Fardinho c/ 12 unidades',
    moeda: 'R$',
    preco: '9,99',
    unidade: 'APENAS POR UN.',
    fonte: 'inter',
    alinhamento: 'left',
    bgColor: '#1045b2',
    accentColor: '#ff7f05',
    priceBoxColor: '#ffdf00',
    textColor: '#ffffff',
    mostrarValidade: false,
    validade: ''
  };

  function addDaysIso(days) {
    return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
  }

  const defaultSubState = {
    activeUserId: 'user-1',
    isAdmin: true,
    users: [
      {
        id: 'user-1',
        name: 'Usuário Comercial Silva',
        role: 'admin',
        planId: 'gratuito',
        status: 'ativa',
        startedAt: new Date().toISOString(),
        expiresAt: addDaysIso(5),
        value: 0,
        renewals: [],
        payments: [{ id: 'pay-init', planId: 'gratuito', amount: 0, date: new Date().toISOString(), method: 'Cortesia Inicial' }],
        passwordHistory: []
      }
    ]
  };

  let savedOffers = loadJSON(STORE.ofertas, []);
  if (!Array.isArray(savedOffers)) savedOffers = [];

  let brandingState = {
    mainName: 'Comercial Silva',
    secondaryName: 'Estúdio de Ofertas Pro',
    logoUrl: 'assets/logo-comercial-silva.png',
    ...loadJSON(STORE.branding, {})
  };

  let subState = {
    ...defaultSubState,
    ...loadJSON(STORE.subscriptions, {})
  };
  if (!Array.isArray(subState.users) || !subState.users.length) {
    subState.users = defaultSubState.users;
  }

  let editId = null;
  let customLogo = null;
  let defaultLogo = null;
  let toastTimer = null;
  let draftTimer = null;
  let currentCategory = 'todos';

  // Estado da Imagem do Produto PNG (arrastável no Canvas)
  let productImgState = {
    image: null,
    dataUrl: null,
    x: 420,
    y: 540,
    scale: 1.0,
    frontLayer: true,
    isDragging: false,
    dragOffsetX: 0,
    dragOffsetY: 0
  };

  function loadJSON(key, fallback) {
    try {
      const text = localStorage.getItem(key);
      return text ? JSON.parse(text) : fallback;
    } catch {
      return fallback;
    }
  }

  function storeJSON(key, object) {
    try {
      localStorage.setItem(key, JSON.stringify(object));
      return true;
    } catch {
      return false;
    }
  }

  function safeStorageGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }

  function loadImage(source, done) {
    const img = new Image();
    img.onload = () => done(img);
    img.onerror = () => {};
    img.src = source;
  }

  function showToast(message, isError = false) {
    const toast = $('toast');
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.toggle('error', isError);
    toast.hidden = false;
    toastTimer = setTimeout(() => { toast.hidden = true; }, 3600);
  }

  // ==================================================
  // IDENTIDADE VISUAL COMPARTILHADA
  // ==================================================
  function getInitials(name) {
    const parts = String(name || 'CS').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return 'CS';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function applyBrandingUI() {
    const mainName = brandingState.mainName || 'Comercial Silva';
    const secondaryName = brandingState.secondaryName || 'Estúdio de Ofertas Pro';
    const logoSrc = brandingState.logoUrl || 'assets/logo-comercial-silva.png';

    $('sidebar-brand-name').textContent = mainName;
    $('sidebar-brand-caption').textContent = secondaryName;
    $('topbar-brand-name').textContent = mainName;
    $('editor-subcaption').textContent = secondaryName.toUpperCase();
    $('active-template-tag').textContent = mainName;
    $('footer-brand-name').textContent = `${mainName} · ${secondaryName}`;
    $('topbar-avatar').textContent = getInitials(mainName);
    $('topbar-avatar').setAttribute('aria-label', mainName);
    $('sidebar-brand-img').src = logoSrc;
    $('sidebar-brand-img').alt = `Logomarca do ${mainName}`;

    if ($('brand-main-name')) $('brand-main-name').value = mainName;
    if ($('brand-secondary-name')) $('brand-secondary-name').value = secondaryName;

    loadImage(logoSrc, (img) => {
      defaultLogo = img;
      renderPreview();
    });
  }

  function validateImageFile(file) {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/webp'];
    const allowedExts = ['.png', '.jpg', '.jpeg', '.webp'];
    const lowerName = (file.name || '').toLowerCase();
    const hasValidExt = allowedExts.some((ext) => lowerName.endsWith(ext));
    if (!allowedTypes.includes(file.type) || !hasValidExt) {
      return 'Formato inválido. Use PNG, JPG, JPEG ou WEBP.';
    }
    if (file.size > 4 * 1024 * 1024) {
      return 'Arquivo muito grande. Limite de 4 MB.';
    }
    return null;
  }

  function handleBrandLogoFile(file) {
    if (!subState.isAdmin) {
      showToast('Apenas administradores podem alterar a logomarca.', true);
      return;
    }
    const err = validateImageFile(file);
    if (err) {
      showToast(err, true);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      brandingState.logoUrl = reader.result;
      storeJSON(STORE.branding, brandingState);
      applyBrandingUI();
      showToast('Logomarca atualizada em todas as telas!');
    };
    reader.readAsDataURL(file);
  }

  // ==================================================
  // ASSINATURA, PLANOS E PAINEL ADMINISTRATIVO
  // ==================================================
  function getCurrentUser() {
    return subState.users.find((u) => u.id === subState.activeUserId) || subState.users[0];
  }

  function isSubscriptionActive(user) {
    if (!user) return false;
    if (user.status === 'vencida' || user.status === 'pendente') return false;
    return new Date(user.expiresAt).getTime() > Date.now();
  }

  function syncSubscriptionUI() {
    const user = getCurrentUser();
    const plan = PLANS[user.planId] || PLANS.gratuito;
    const active = isSubscriptionActive(user);
    const expDate = new Date(user.expiresAt).toLocaleDateString('pt-BR');

    $('sidebar-plan-status').textContent = `Plano: ${plan.name} (${active ? 'Ativo até ' + expDate : 'Vencido'})`;
    $('current-plan-badge').textContent = `Plano Atual: ${plan.name} · ${active ? 'Ativo' : 'Bloqueado/Vencido'}`;

    const pill = $('topbar-plan-pill');
    pill.classList.toggle('blocked', !active);
    pill.innerHTML = active
      ? '<span class="online-dot"></span> Assinatura ativa'
      : 'Assinatura vencida';

    if ($('sub-user-name')) $('sub-user-name').value = user.name;
    if ($('admin-mode-toggle')) $('admin-mode-toggle').checked = Boolean(subState.isAdmin);

    if ($('subscription-summary-box')) {
      $('subscription-summary-box').innerHTML = `
        <div class="sub-box-title">Resumo da Assinatura</div>
        <p style="margin:4px 0"><strong>Usuário:</strong> ${user.name}</p>
        <p style="margin:4px 0"><strong>Plano:</strong> ${plan.name} (${plan.days} dias — ${formatPrice(plan.price)})</p>
        <p style="margin:4px 0"><strong>Status:</strong> ${active ? 'Ativa' : 'Vencida / Bloqueada'}</p>
        <p style="margin:4px 0"><strong>Vencimento:</strong> ${expDate}</p>
      `;
    }

    renderPlansCards(user);
    renderMorseReference();
    renderAdminPanel();
  }

  function renderPlansCards(user) {
    const grid = $('plans-cards-grid');
    if (!grid) return;
    grid.innerHTML = '';

    Object.values(PLANS).forEach((plan) => {
      const card = document.createElement('div');
      card.className = `plan-card ${user.planId === plan.id ? 'active-plan' : ''}`;
      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center">
          <strong>${plan.name}</strong>
          <span class="template-cat">${plan.days} dias</span>
        </div>
        <div class="plan-price">${plan.price === 0 ? 'Gratuito' : formatPrice(plan.price)}</div>
        <p style="margin:0;font-size:12px;color:var(--text-muted)">${plan.benefits}</p>
        <div class="morse-code">Morse: ${plan.morse}</div>
        <button type="button" class="btn btn-outline btn-sm" data-select-plan="${plan.id}">Selecionar Plano</button>
      `;
      card.querySelector('[data-select-plan]').addEventListener('click', () => {
        $('sub-plan-select').value = plan.id;
        $('sub-activation-code').focus();
        showToast(`Plano ${plan.name} selecionado.`);
      });
      grid.appendChild(card);
    });
  }

  function renderMorseReference() {
    const list = $('morse-reference-list');
    if (!list) return;
    list.innerHTML = '';
    Object.values(PLANS).forEach((plan) => {
      const item = document.createElement('div');
      item.className = 'history-item';
      item.innerHTML = `
        <div class="history-info">
          <strong>${plan.name} (${plan.days} dias)</strong>
          <small>Código Morse da senha do plano: <span style="color:#34d399;font-family:monospace">${toMorse(plan.id === 'gratuito' ? 'GRATIS5' : plan.id === 'mensal' ? 'MENSAL30' : plan.id === 'trimestral' ? 'TRIMESTRAL90' : 'ANUAL365')}</span></small>
        </div>
      `;
      list.appendChild(item);
    });
  }

  function renderAdminPanel() {
    const select = $('admin-user-select');
    const recordsList = $('admin-records-list');
    if (!select || !recordsList) return;

    select.innerHTML = '';
    subState.users.forEach((u) => {
      const opt = document.createElement('option');
      opt.value = u.id;
      opt.textContent = `${u.name} (${u.planId})`;
      select.appendChild(opt);
    });
    select.value = getCurrentUser().id;

    recordsList.innerHTML = '';
    subState.users.forEach((u) => {
      const plan = PLANS[u.planId] || PLANS.gratuito;
      const item = document.createElement('div');
      item.className = 'history-item';
      item.innerHTML = `
        <div class="history-info">
          <strong>${u.name} · Plano ${plan.name} (${u.status.toUpperCase()})</strong>
          <small>Valor: ${formatPrice(u.value || 0)} · Vencimento: ${new Date(u.expiresAt).toLocaleDateString('pt-BR')} · Renovações: ${(u.renewals || []).length} · Pagamentos: ${(u.payments || []).length} · Senhas usadas: ${(u.passwordHistory || []).length}</small>
        </div>
      `;
      recordsList.appendChild(item);
    });
  }

  // ==================================================
  // FORMULÁRIO E SINCRONIZAÇÃO
  // ==================================================
  function readForm() {
    const activeAlignBtn = document.querySelector('.align-btn.active');
    return {
      titulo: $('titulo').value.trim(),
      subtitulo: $('subtitulo').value.trim(),
      produto: $('produto').value.trim(),
      descricao: $('descricao').value.trim(),
      moeda: $('moeda').value.trim() || 'R$',
      preco: $('preco').value.trim(),
      unidade: $('unidade').value.trim(),
      fonte: $('fonte').value,
      alinhamento: activeAlignBtn ? activeAlignBtn.dataset.align : 'left',
      bgColor: $('color-bg').value,
      accentColor: $('color-accent').value,
      priceBoxColor: $('color-pricebox').value,
      textColor: $('color-text').value,
      mostrarValidade: $('mostrar-validade').checked,
      validade: $('validade').value
    };
  }

  function populateForm(offer) {
    const o = { ...defaults, ...offer };
    $('titulo').value = o.titulo;
    $('subtitulo').value = o.subtitulo;
    $('produto').value = o.produto;
    $('descricao').value = o.descricao || '';
    $('moeda').value = o.moeda || 'R$';
    $('preco').value = o.preco;
    $('unidade').value = o.unidade;
    $('fonte').value = o.fonte || 'inter';
    $('color-bg').value = o.bgColor;
    $('color-accent').value = o.accentColor;
    $('color-pricebox').value = o.priceBoxColor;
    $('color-text').value = o.textColor;
    $('mostrar-validade').checked = Boolean(o.mostrarValidade);
    $('validade').value = o.validade || '';
    $('validity-wrapper').hidden = !o.mostrarValidade;

    setAlignmentUI(o.alinhamento || 'left');
    renderPreview();
  }

  function setAlignmentUI(align) {
    document.querySelectorAll('.align-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.align === align);
    });
  }

  function getPrice(value) {
    const raw = String(value ?? '').replace(/R\$|\s/g, '');
    const normalized = raw.includes(',') ? raw.replace(/\./g, '').replace(',', '.') : raw;
    if (!/^\d+(\.\d{0,2})?$/.test(normalized)) return null;
    const number = Number(normalized);
    return Number.isFinite(number) && number >= 0 && number <= 999999.99 ? number : null;
  }

  function formatPrice(price) {
    if (price === null) return 'R$ --';
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function validate(offer) {
    if (!offer.produto) {
      showToast('Digite o nome do produto.', true);
      $('produto').focus();
      return false;
    }
    const value = getPrice(offer.preco);
    if (value === null || value <= 0) {
      showToast('Informe um preço válido. Exemplo: 9,99', true);
      $('preco').focus();
      return false;
    }
    return true;
  }

  // ==================================================
  // UTILITÁRIOS DE COR E DESENHO NO CANVAS
  // ==================================================
  function adjustHexBrightness(hex, percent) {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, Math.max(0, (num >> 16) + amt));
    const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amt));
    const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  }

  function getContrastColor(hex) {
    const c = hex.replace('#', '');
    const r = parseInt(c.substr(0, 2), 16);
    const g = parseInt(c.substr(2, 2), 16);
    const b = parseInt(c.substr(4, 2), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 145 ? '#0f172a' : '#ffffff';
  }

  function roundedPath(ctx, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + width - r, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
    ctx.lineTo(x + width, y + height - r);
    ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    ctx.lineTo(x + r, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  function fillRound(ctx, x, y, width, height, radius, fill) {
    ctx.fillStyle = fill;
    roundedPath(ctx, x, y, width, height, radius);
    ctx.fill();
  }

  function coverText(ctx, str, maxWidth, initialFont, minFont, fontFamily) {
    let font = initialFont;
    do {
      ctx.font = `900 ${font}px ${fontFamily}`;
      if (ctx.measureText(str).width <= maxWidth) break;
      font -= 2;
    } while (font > minFont);
    return Math.max(minFont, font);
  }

  function drawBackground(ctx, offer) {
    const topColor = offer.bgColor;
    const bottomColor = adjustHexBrightness(offer.bgColor, -22);
    const rayLight = adjustHexBrightness(offer.bgColor, 20);
    const rayDark = adjustHexBrightness(offer.bgColor, -35);

    const gradient = ctx.createLinearGradient(0, 0, 980, 860);
    gradient.addColorStop(0, topColor);
    gradient.addColorStop(0.58, bottomColor);
    gradient.addColorStop(1, topColor);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.globalAlpha = 0.16;
    const cx = 660, cy = 548;
    for (let i = 0; i < 23; i++) {
      const a1 = -Math.PI + (i * 2 * Math.PI) / 23;
      const a2 = a1 + (2 * Math.PI) / 46;
      const length = 2400;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a1) * length, cy + Math.sin(a1) * length);
      ctx.lineTo(cx + Math.cos(a2) * length, cy + Math.sin(a2) * length);
      ctx.closePath();
      ctx.fillStyle = i % 2 ? rayLight : rayDark;
      ctx.fill();
    }
    ctx.restore();
  }

  function drawLogo(ctx) {
    const logo = customLogo || defaultLogo;
    const x = 38, y = 39, size = 196;
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.45)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetY = 6;
    ctx.beginPath();
    ctx.arc(x + size / 2, y + size / 2, size / 2 - 1, 0, Math.PI * 2);
    ctx.fillStyle = '#0045a8';
    ctx.fill();
    ctx.restore();

    if (logo) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
      ctx.clip();
      const ratio = Math.max(size / logo.width, size / logo.height);
      const wd = logo.width * ratio;
      const ht = logo.height * ratio;
      ctx.drawImage(logo, x + (size - wd) / 2, y + (size - ht) / 2, wd, ht);
      ctx.restore();
    } else {
      ctx.fillStyle = '#ffffff';
      ctx.font = `900 28px ${FONTS.impact}`;
      ctx.textAlign = 'center';
      ctx.fillText('SILVA', x + size / 2, y + 118);
      ctx.textAlign = 'start';
    }
  }

  function drawHeaders(ctx, offer) {
    const fontFamily = FONTS[offer.fonte] || FONTS.inter;

    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.35)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 7;
    fillRound(ctx, 280, 34, 882, 130, 32, offer.accentColor);
    ctx.restore();

    const title = (offer.titulo || 'OFERTA').toLocaleUpperCase('pt-BR');
    const titleSize = coverText(ctx, title, 780, 106, 38, fontFamily);
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `900 ${titleSize}px ${fontFamily}`;
    ctx.fillStyle = getContrastColor(offer.accentColor);
    ctx.fillText(title, 721, 100);
    ctx.restore();

    const sealBg = offer.priceBoxColor === '#ffdf00' ? '#ffe100' : adjustHexBrightness(offer.accentColor, 18);
    fillRound(ctx, 430, 156, 580, 82, 20, sealBg);

    const subtitle = (offer.subtitulo || 'IMPERDÍVEL').toLocaleUpperCase('pt-BR');
    const fontSize = coverText(ctx, subtitle, 530, 48, 22, fontFamily);
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `900 ${fontSize}px ${fontFamily}`;
    ctx.fillStyle = getContrastColor(sealBg);
    ctx.fillText(subtitle, 720, 198);
    ctx.restore();
  }

  function textLines(ctx, text, width) {
    const normalized = text.toLocaleUpperCase('pt-BR').replace(/\s+/g, ' ').trim();
    const words = normalized.split(' ');
    const lines = [];
    let line = '';
    for (let word of words) {
      while (ctx.measureText(word).width > width && word.length > 1) {
        let splitAt = word.length - 1;
        while (splitAt > 1 && ctx.measureText(word.slice(0, splitAt)).width > width) splitAt--;
        if (line) { lines.push(line); line = ''; }
        lines.push(word.slice(0, splitAt));
        word = word.slice(splitAt);
      }
      const candidate = line ? line + ' ' + word : word;
      if (ctx.measureText(candidate).width <= width) line = candidate;
      else { if (line) lines.push(line); line = word; }
    }
    if (line) lines.push(line);
    return lines.length ? lines : ['PRODUTO'];
  }

  function drawProduct(ctx, offer) {
    const fontFamily = FONTS[offer.fonte] || FONTS.inter;
    const name = (offer.produto || 'NOME DO PRODUTO').trim();
    const desc = (offer.descricao || '').trim();
    const areaLeft = 40;
    const areaWidth = 450;
    const startY = 345;
    const availableHeight = desc ? 260 : 320;

    let anchorX = areaLeft;
    if (offer.alinhamento === 'center') anchorX = areaLeft + areaWidth / 2;
    else if (offer.alinhamento === 'right') anchorX = areaLeft + areaWidth;

    let font = 84;
    let lines = [];
    while (font >= 32) {
      ctx.font = `900 ${font}px ${fontFamily}`;
      lines = textLines(ctx, name, areaWidth);
      if (lines.length * font * 1.12 <= availableHeight && lines.length <= 5) break;
      font -= 2;
    }

    ctx.save();
    ctx.font = `900 ${font}px ${fontFamily}`;
    ctx.fillStyle = offer.textColor;
    ctx.textAlign = offer.alinhamento || 'left';
    ctx.shadowColor = 'rgba(0,0,0,0.45)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 5;

    let lastY = startY;
    for (let i = 0; i < lines.length; i++) {
      lastY = startY + i * font * 1.12;
      ctx.fillText(lines[i], anchorX, lastY);
    }

    if (desc) {
      const descSize = coverText(ctx, desc.toUpperCase(), areaWidth, 34, 18, fontFamily);
      ctx.font = `700 ${descSize}px ${fontFamily}`;
      ctx.fillStyle = offer.textColor;
      ctx.globalAlpha = 0.92;
      ctx.fillText(desc.toUpperCase(), anchorX, lastY + 46);
      ctx.globalAlpha = 1;
    }
    ctx.restore();

    fillRound(ctx, 40, 718, 430, 8, 4, offer.accentColor);

    ctx.save();
    const unit = (offer.unidade || 'UNIDADE').toLocaleUpperCase('pt-BR');
    const unitSize = coverText(ctx, unit, 440, 48, 24, fontFamily);
    ctx.font = `900 ${unitSize}px ${fontFamily}`;
    ctx.fillStyle = offer.textColor;
    ctx.textAlign = offer.alinhamento || 'left';
    ctx.shadowColor = 'rgba(0,0,0,0.4)';
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 2;
    ctx.fillText(unit, anchorX, 788);
    ctx.restore();
  }

  function drawPrice(ctx, offer) {
    const fontFamily = FONTS[offer.fonte] || FONTS.inter;
    const x = 522, y = 278, width = 638, height = 523;

    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.35)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 8;
    fillRound(ctx, x, y, width, height, 52, offer.priceBoxColor);

    ctx.lineWidth = 8;
    ctx.strokeStyle = offer.accentColor;
    roundedPath(ctx, x + 4, y + 4, width - 8, height - 8, 48);
    ctx.stroke();
    ctx.restore();

    const price = getPrice(offer.preco);
    const parts = (price ?? 0).toFixed(2).split('.');
    const integer = Number(parts[0]).toLocaleString('pt-BR');
    const decimal = ',' + parts[1];

    const maxRight = x + width - 38;
    const startX = x + 148;
    let wholeSize = 320, centSize = 152;
    let wholeWidth = 0, centsWidth = 0;

    while (wholeSize > 65) {
      ctx.font = `900 ${wholeSize}px ${fontFamily}`;
      wholeWidth = ctx.measureText(integer).width;
      ctx.font = `900 ${centSize}px ${fontFamily}`;
      centsWidth = ctx.measureText(decimal).width;
      if (startX + wholeWidth + 8 + centsWidth <= maxRight) break;
      wholeSize -= 4;
      centSize -= 2;
    }

    const priceTextColor = getContrastColor(offer.priceBoxColor);

    ctx.save();
    ctx.fillStyle = priceTextColor;
    ctx.font = `900 54px ${fontFamily}`;
    ctx.fillText(offer.moeda || 'R$', x + 38, y + 195);

    ctx.font = `900 ${wholeSize}px ${fontFamily}`;
    ctx.fillText(integer, startX, y + 375);

    ctx.font = `900 ${centSize}px ${fontFamily}`;
    ctx.fillText(decimal, startX + wholeWidth + 4, y + 260);
    ctx.restore();

    if (offer.mostrarValidade && offer.validade) {
      const components = offer.validade.split('-');
      if (components.length === 3) {
        const date = `${components[2]}/${components[1]}/${components[0]}`;
        ctx.save();
        ctx.textAlign = 'center';
        ctx.fillStyle = priceTextColor;
        ctx.font = `800 24px ${fontFamily}`;
        ctx.fillText(`VÁLIDO ATÉ ${date}`, x + width / 2, y + height - 28);
        ctx.restore();
      }
    }
  }

  function drawProductPng(ctx, showGuide = false) {
    if (!productImgState.image) return;
    const img = productImgState.image;
    const baseHeight = 320;
    const ratio = img.width / img.height;
    const drawH = baseHeight * productImgState.scale;
    const drawW = drawH * ratio;
    const drawX = productImgState.x - drawW / 2;
    const drawY = productImgState.y - drawH / 2;

    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.45)';
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 10;
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    ctx.restore();

    if (showGuide && productImgState.isDragging) {
      ctx.save();
      ctx.strokeStyle = '#facc15';
      ctx.lineWidth = 3;
      ctx.setLineDash([10, 6]);
      ctx.strokeRect(drawX, drawY, drawW, drawH);
      ctx.restore();
    }
  }

  function drawBottomWaves(ctx, offer) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, 822);
    ctx.bezierCurveTo(320, 842, 725, 818, 1200, 770);
    ctx.lineTo(1200, 860);
    ctx.lineTo(0, 860);
    ctx.closePath();
    ctx.fillStyle = offer.accentColor;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, 838);
    ctx.bezierCurveTo(390, 856, 875, 825, 1200, 810);
    ctx.lineTo(1200, 860);
    ctx.lineTo(0, 860);
    ctx.closePath();
    ctx.fillStyle = offer.priceBoxColor;
    ctx.fill();
    ctx.restore();
  }

  function drawBanner(canvas, offer, scale = 1, isPreview = false) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.save();
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    ctx.clearRect(0, 0, W, H);

    drawBackground(ctx, offer);
    if (!productImgState.frontLayer) drawProductPng(ctx, isPreview);
    drawHeaders(ctx, offer);
    drawLogo(ctx);
    drawProduct(ctx, offer);
    drawPrice(ctx, offer);
    if (productImgState.frontLayer) drawProductPng(ctx, isPreview);
    drawBottomWaves(ctx, offer);

    ctx.restore();
  }

  function renderPreview() {
    const canvas = $('banner-canvas');
    if (canvas) drawBanner(canvas, readForm(), 1, true);
  }

  // ==================================================
  // ARRASTAR IMAGEM PNG DIRETO NO CANVAS
  // ==================================================
  function setupCanvasDrag() {
    const canvas = $('banner-canvas');
    if (!canvas) return;

    function getCanvasCoords(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: ((clientX - rect.left) / rect.width) * W,
        y: ((clientY - rect.top) / rect.height) * H
      };
    }

    function isInsideProduct(px, py) {
      if (!productImgState.image) return false;
      const img = productImgState.image;
      const drawH = 320 * productImgState.scale;
      const drawW = drawH * (img.width / img.height);
      return (
        px >= productImgState.x - drawW / 2 &&
        px <= productImgState.x + drawW / 2 &&
        py >= productImgState.y - drawH / 2 &&
        py <= productImgState.y + drawH / 2
      );
    }

    canvas.addEventListener('pointerdown', (e) => {
      const pos = getCanvasCoords(e);
      if (isInsideProduct(pos.x, pos.y)) {
        productImgState.isDragging = true;
        productImgState.dragOffsetX = pos.x - productImgState.x;
        productImgState.dragOffsetY = pos.y - productImgState.y;
        canvas.setPointerCapture(e.pointerId);
        renderPreview();
      }
    });

    canvas.addEventListener('pointermove', (e) => {
      const pos = getCanvasCoords(e);
      if (productImgState.isDragging) {
        productImgState.x = Math.max(60, Math.min(W - 60, pos.x - productImgState.dragOffsetX));
        productImgState.y = Math.max(60, Math.min(H - 60, pos.y - productImgState.dragOffsetY));
        renderPreview();
      } else {
        canvas.style.cursor = isInsideProduct(pos.x, pos.y) ? 'grab' : 'default';
      }
    });

    const stopDrag = () => {
      if (productImgState.isDragging) {
        productImgState.isDragging = false;
        renderPreview();
      }
    };
    canvas.addEventListener('pointerup', stopDrag);
    canvas.addEventListener('pointercancel', stopDrag);
  }

  // ==================================================
  // UPLOAD E CONTROLES DO PRODUTO PNG
  // ==================================================
  $('product-png-input').addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      loadImage(reader.result, (img) => {
        productImgState.image = img;
        productImgState.dataUrl = reader.result;
        productImgState.x = 460;
        productImgState.y = 530;
        productImgState.scale = 1.0;
        $('product-img-size-range').value = 100;
        $('product-img-size-val').textContent = '100%';
        $('product-img-controls').hidden = false;
        $('product-img-badge').hidden = false;
        renderPreview();
        showToast('Imagem PNG inserida! Arraste-a livremente na arte.');
      });
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  });

  $('product-img-size-range').addEventListener('input', (e) => {
    const val = Number(e.target.value);
    productImgState.scale = val / 100;
    $('product-img-size-val').textContent = `${val}%`;
    renderPreview();
  });

  $('btn-product-center').addEventListener('click', () => {
    productImgState.x = 480;
    productImgState.y = 520;
    renderPreview();
  });

  $('btn-product-layer').addEventListener('click', () => {
    productImgState.frontLayer = !productImgState.frontLayer;
    $('btn-product-layer').textContent = productImgState.frontLayer ? 'Camada: Frente' : 'Camada: Atrás';
    renderPreview();
  });

  $('btn-product-remove').addEventListener('click', () => {
    productImgState.image = null;
    productImgState.dataUrl = null;
    $('product-img-controls').hidden = true;
    $('product-img-badge').hidden = true;
    renderPreview();
    showToast('Imagem do produto removida.');
  });

  // ==================================================
  // PALETAS & SWATCHES + BIBLIOTECA DE MODELOS
  // ==================================================
  function renderSwatches() {
    const grid = $('palette-swatches-grid');
    grid.innerHTML = '';
    COLOR_SWATCHES.forEach((swatch) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'swatch-btn';
      btn.innerHTML = `
        <span>${swatch.name}</span>
        <span class="swatch-dots">
          <span class="swatch-dot" style="background:${swatch.bg}"></span>
          <span class="swatch-dot" style="background:${swatch.accent}"></span>
          <span class="swatch-dot" style="background:${swatch.pricebox}"></span>
        </span>
      `;
      btn.addEventListener('click', () => {
        $('color-bg').value = swatch.bg;
        $('color-accent').value = swatch.accent;
        $('color-pricebox').value = swatch.pricebox;
        $('color-text').value = swatch.text;
        onFormChange();
        showToast(`Paleta "${swatch.name}" aplicada!`);
      });
      grid.appendChild(btn);
    });
  }

  $('reset-colors-btn').addEventListener('click', () => {
    $('color-bg').value = defaults.bgColor;
    $('color-accent').value = defaults.accentColor;
    $('color-pricebox').value = defaults.priceBoxColor;
    $('color-text').value = defaults.textColor;
    onFormChange();
    showToast('Cores originais restauradas.');
  });

  function renderLibrary() {
    const filterContainer = $('category-filters');
    filterContainer.innerHTML = '';
    CATEGORIES.forEach((cat) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `cat-btn ${currentCategory === cat.id ? 'active' : ''}`;
      btn.textContent = cat.label;
      btn.addEventListener('click', () => {
        currentCategory = cat.id;
        renderLibrary();
      });
      filterContainer.appendChild(btn);
    });

    const grid = $('templates-grid');
    grid.innerHTML = '';
    const filtered = currentCategory === 'todos'
      ? TEMPLATES_LIBRARY
      : TEMPLATES_LIBRARY.filter((t) => t.category === currentCategory);

    filtered.forEach((tmpl) => {
      const card = document.createElement('div');
      card.className = 'template-card';
      card.innerHTML = `
        <div class="template-thumb" style="background:${tmpl.bgColor}">
          <div class="template-thumb-top">
            <span class="template-badge" style="background:${tmpl.accentColor}">${tmpl.badge}</span>
            <span class="template-cat">${tmpl.category}</span>
          </div>
          <div class="template-thumb-body">
            <div class="template-prod" style="color:${tmpl.textColor}">${tmpl.product}</div>
            <div class="template-price" style="color:${tmpl.priceBoxColor === '#1e293b' || tmpl.priceBoxColor === '#0f172a' || tmpl.priceBoxColor === '#451a03' ? tmpl.accentColor : tmpl.priceBoxColor}">
              ${tmpl.moeda} ${tmpl.preco}
            </div>
          </div>
        </div>
        <div class="template-card-footer">
          <span>${tmpl.title}</span>
          <button type="button" class="btn btn-primary btn-sm">Usar</button>
        </div>
      `;
      card.addEventListener('click', () => {
        populateForm({
          titulo: tmpl.badge,
          subtitulo: tmpl.seal,
          produto: tmpl.product,
          descricao: tmpl.descricao,
          moeda: tmpl.moeda,
          preco: tmpl.preco,
          unidade: tmpl.unidade,
          fonte: tmpl.fonte,
          bgColor: tmpl.bgColor,
          accentColor: tmpl.accentColor,
          priceBoxColor: tmpl.priceBoxColor,
          textColor: tmpl.textColor
        });
        $('active-template-tag').textContent = tmpl.title;
        storeJSON(STORE.rascunho, readForm());
        switchScreen('editor');
        showToast(`Modelo "${tmpl.title}" aplicado!`);
      });
      grid.appendChild(card);
    });
  }

  // ==================================================
  // EVENTOS DO FORMULÁRIO, ASSINATURA, ADMIN E NAVEGAÇÃO
  // ==================================================
  function saveDraftSoon() {
    clearTimeout(draftTimer);
    $('save-status').textContent = 'Editando...';
    draftTimer = setTimeout(() => {
      const okay = storeJSON(STORE.rascunho, readForm());
      $('save-status').textContent = okay ? 'Rascunho salvo automaticamente' : 'Pré-visualização ativa';
    }, 350);
  }

  function onFormChange() {
    renderPreview();
    saveDraftSoon();
  }

  ['titulo', 'subtitulo', 'produto', 'descricao', 'moeda', 'preco', 'unidade', 'fonte', 'color-bg', 'color-accent', 'color-pricebox', 'color-text', 'validade'].forEach((id) => {
    $(id).addEventListener('input', onFormChange);
    $(id).addEventListener('change', onFormChange);
  });

  document.querySelectorAll('.align-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setAlignmentUI(btn.dataset.align);
      onFormChange();
    });
  });

  $('mostrar-validade').addEventListener('change', () => {
    $('validity-wrapper').hidden = !$('mostrar-validade').checked;
    onFormChange();
  });

  $('logo-upload').addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => loadImage(reader.result, (image) => {
      const mini = document.createElement('canvas');
      mini.width = 320;
      mini.height = 320;
      const context = mini.getContext('2d');
      const size = Math.min(image.width, image.height);
      context.drawImage(image, (image.width - size) / 2, (image.height - size) / 2, size, size, 0, 0, 320, 320);
      customLogo = mini;
      storeJSON(STORE.logo, mini.toDataURL('image/png'));
      renderPreview();
      showToast('Logomarca do cartaz atualizada!');
    });
    reader.readAsDataURL(file);
  });

  // Upload clicável da logomarca no menu lateral
  $('brand-logo-trigger').addEventListener('click', () => {
    if (!subState.isAdmin) {
      showToast('Somente administradores podem alterar a logomarca.', true);
      return;
    }
    $('brand-logo-file-input').click();
  });

  $('brand-logo-file-input').addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (file) handleBrandLogoFile(file);
    event.target.value = '';
  });

  $('brand-logo-admin-input').addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (file) handleBrandLogoFile(file);
    event.target.value = '';
  });

  $('form-branding').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!subState.isAdmin) {
      showToast('Apenas administradores podem alterar os nomes da empresa.', true);
      return;
    }
    brandingState.mainName = ($('brand-main-name').value || '').trim() || 'Comercial Silva';
    brandingState.secondaryName = ($('brand-secondary-name').value || '').trim() || 'Estúdio de Ofertas Pro';
    storeJSON(STORE.branding, brandingState);
    applyBrandingUI();
    showToast('Identidade visual salva com sucesso!');
  });

  $('form-subscription').addEventListener('submit', (event) => {
    event.preventDefault();
    const user = getCurrentUser();
    const selectedPlanId = $('sub-plan-select').value;
    const plan = PLANS[selectedPlanId];
    const code = ($('sub-activation-code').value || '').trim().toUpperCase();
    const userName = ($('sub-user-name').value || '').trim();

    if (userName) user.name = userName;

    // Aviso: em produção real, a validação de senha e anti-reuso deve ocorrer no backend.
    const expectedCode = {
      gratuito: '-.-. ----- -- ...-- .-. -.-. .---- ....- .-.. ... .---- .-.. ...- ....- --. .-. ....- - ..- .---- - ----- ..... -.. .---- ....- ... ..--- ----- ..--- -.... -..- -.-- --..',
      mensal: '-- ...-- -. ... ....- .-.. ...-- ----- -.. .---- ....- ... .--. .-. ----- ... ...-- --. ..- .-. ....- -. -.-. ....- - ----- - ....- .-.. ----. ---.. --...',
      trimestral: '- .-. .---- -- ...-- ... - .-. ....- .-.. ----. ----- -.. .---- ....- ... ----- ..-. ...-- .-. - ....- ... .... -.. ..--- ....- ----- ----- -..- .---- --... ..--- -----',
      anual: '....- -. ..- ....- .-.. ...-- -.... ..... -.. .---- ....- ... ... ..- .--. ...-- .-. -.-. .... ....- ...- ...-- -- ...-- ... - .-. ....- ..--- ....- ----- ..--- -.... --.. ----.'
    }[selectedPlanId];

    if (!code || code !== expectedCode) {
      showToast('Senha inválida para o plano selecionado.', true);
      return;
    }

    if ((user.passwordHistory || []).includes(`${selectedPlanId}:${code}`)) {
      showToast('Esta senha já foi utilizada para este plano.', true);
      return;
    }

    const baseDate = isSubscriptionActive(user) ? new Date(user.expiresAt) : new Date();
    const nextExpiry = new Date(baseDate.getTime() + plan.days * 24 * 60 * 60 * 1000);
    const isRenewal = user.planId === selectedPlanId;

    user.planId = selectedPlanId;
    user.status = 'ativa';
    user.value = plan.price;
    user.expiresAt = nextExpiry.toISOString();
    user.passwordHistory = [...(user.passwordHistory || []), `${selectedPlanId}:${code}`];
    user.payments = [
      ...(user.payments || []),
      { id: `pay-${Date.now()}`, planId: selectedPlanId, amount: plan.price, date: new Date().toISOString(), code }
    ];
    if (isRenewal) {
      user.renewals = [
        ...(user.renewals || []),
        { id: `ren-${Date.now()}`, planId: selectedPlanId, newExpiresAt: nextExpiry.toISOString(), date: new Date().toISOString() }
      ];
    }

    $('sub-activation-code').value = '';
    storeJSON(STORE.subscriptions, subState);
    syncSubscriptionUI();
    showToast(`Plano ${plan.name} ativado até ${nextExpiry.toLocaleDateString('pt-BR')}!`);
  });

  $('admin-mode-toggle').addEventListener('change', (e) => {
    subState.isAdmin = Boolean(e.target.checked);
    storeJSON(STORE.subscriptions, subState);
    showToast(subState.isAdmin ? 'Modo administrador ativado.' : 'Modo administrador desativado.');
  });

  $('form-admin-user-plan').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!subState.isAdmin) {
      showToast('Operação restrita a administradores.', true);
      return;
    }
    const targetId = $('admin-user-select').value;
    const targetUser = subState.users.find((u) => u.id === targetId) || getCurrentUser();
    const newPlanId = $('admin-plan-select').value;
    const newStatus = $('admin-status-select').value;
    const plan = PLANS[newPlanId] || PLANS.gratuito;

    targetUser.planId = newPlanId;
    targetUser.status = newStatus;
    targetUser.value = plan.price;
    targetUser.expiresAt = newStatus === 'vencida'
      ? new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
      : addDaysIso(plan.days);

    storeJSON(STORE.subscriptions, subState);
    syncSubscriptionUI();
    showToast('Assinatura do usuário atualizada.');
  });

  function switchScreen(screen) {
    const captions = {
      editor: 'Editar Arte',
      library: 'Biblioteca de Modelos',
      history: 'Ofertas Salvas',
      plans: 'Planos e Assinatura',
      admin: 'Painel Admin',
      help: 'Como Usar'
    };
    if (!Object.hasOwn(captions, screen)) return;

    const user = getCurrentUser();
    const active = isSubscriptionActive(user);
    const protectedScreens = ['editor', 'library', 'history'];
    if (!active && protectedScreens.includes(screen)) {
      showToast('Assinatura vencida: acesse Planos e Assinatura para renovar.', true);
      screen = 'plans';
    }

    Object.keys(captions).forEach((key) => {
      $(`screen-${key}`).hidden = key !== screen;
      const nav = $(`nav-${key}`);
      if (nav) {
        nav.classList.toggle('selected', key === screen);
      }
    });

    $('breadcrumb-page').textContent = captions[screen];
    if (screen === 'history') renderHistory();
    if (screen === 'library') renderLibrary();
    if (screen === 'editor') renderPreview();
    if (screen === 'plans' || screen === 'admin') syncSubscriptionUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ['editor', 'library', 'history', 'plans', 'admin', 'help'].forEach((key) => {
    $(`nav-${key}`).addEventListener('click', () => switchScreen(key));
  });

  $('quick-library-btn').addEventListener('click', () => switchScreen('library'));
  $('back-to-editor-btn').addEventListener('click', () => switchScreen('editor'));
  $('go-editor').addEventListener('click', () => switchScreen('editor'));

  function updateCounts() {
    $('side-count').textContent = String(savedOffers.length);
    $('library-count').textContent = `(${savedOffers.length})`;
  }

  function renderHistory() {
    const list = $('history-list');
    list.innerHTML = '';
    updateCounts();

    if (!savedOffers.length) {
      list.innerHTML = `<div class="empty-state"><strong>Nenhuma oferta salva ainda.</strong><p>Salve suas ofertas no editor para reutilizá-las depois.</p></div>`;
      return;
    }

    savedOffers.forEach((entry) => {
      const item = document.createElement('article');
      item.className = 'history-item';
      item.innerHTML = `
        <div class="history-info">
          <strong>${entry.produto}</strong>
          <small>${entry.descricao || ''} · ${entry.unidade}</small>
        </div>
        <div class="history-actions">
          <span class="history-price">${formatPrice(getPrice(entry.preco))}</span>
          <button type="button" class="btn btn-outline btn-sm btn-edit">Editar</button>
          <button type="button" class="btn btn-danger-ghost btn-sm btn-del">Excluir</button>
        </div>
      `;
      item.querySelector('.btn-edit').addEventListener('click', () => {
        editId = entry.id;
        populateForm(entry);
        switchScreen('editor');
        showToast('Oferta carregada!');
      });
      item.querySelector('.btn-del').addEventListener('click', () => {
        savedOffers = savedOffers.filter((o) => o.id !== entry.id);
        storeJSON(STORE.ofertas, savedOffers);
        renderHistory();
        showToast('Oferta excluída.');
      });
      list.appendChild(item);
    });
  }

  function newOffer() {
    editId = null;
    populateForm(defaults);
    switchScreen('editor');
    $('produto').focus();
  }

  $('clear-btn').addEventListener('click', newOffer);
  $('new-from-history').addEventListener('click', newOffer);

  $('form-oferta').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!isSubscriptionActive(getCurrentUser())) {
      showToast('Assinatura vencida. Renove seu plano para salvar ofertas.', true);
      switchScreen('plans');
      return;
    }
    const offer = readForm();
    if (!validate(offer)) return;

    const id = editId || `oferta-${Date.now()}`;
    const data = { ...offer, id, updatedAt: new Date().toISOString() };
    savedOffers = [data, ...savedOffers.filter((item) => item.id !== id)].slice(0, 100);
    storeJSON(STORE.ofertas, savedOffers);
    editId = id;
    updateCounts();
    $('save-status').textContent = 'Oferta salva na biblioteca';
    showToast('Oferta salva com sucesso!');
  });

  // ==================================================
  // EXPORTAÇÃO EM ALTA DEFINIÇÃO (2400x1720)
  // ==================================================
  function exportImage(format) {
    if (!isSubscriptionActive(getCurrentUser())) {
      showToast('Assinatura vencida. Renove seu plano para exportar.', true);
      switchScreen('plans');
      return;
    }
    const offer = readForm();
    if (!validate(offer)) return;

    const output = document.createElement('canvas');
    output.width = W * EXPORT_SCALE;
    output.height = H * EXPORT_SCALE;
    drawBanner(output, offer, EXPORT_SCALE, false);

    const type = format === 'jpg' ? 'image/jpeg' : 'image/png';
    const slug = (offer.produto || 'oferta').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const filename = `comercial-silva-${slug}.${format}`;

    output.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 15000);
      showToast(`Arquivo ${format.toUpperCase()} exportado em Alta Resolução!`);
    }, type, 0.95);
  }

  $('png-btn').addEventListener('click', () => exportImage('png'));
  $('jpg-btn').addEventListener('click', () => exportImage('jpg'));
  $('print-btn').addEventListener('click', () => {
    if (!isSubscriptionActive(getCurrentUser())) {
      showToast('Assinatura vencida. Renove seu plano para imprimir.', true);
      switchScreen('plans');
      return;
    }
    if (validate(readForm())) window.print();
  });

  // INICIALIZAÇÃO
  applyBrandingUI();

  const storedLogo = safeStorageGet(STORE.logo);
  if (storedLogo && storedLogo.startsWith('data:image/')) {
    loadImage(storedLogo, (image) => {
      customLogo = image;
      renderPreview();
    });
  }

  renderSwatches();
  renderLibrary();
  setupCanvasDrag();
  updateCounts();
  syncSubscriptionUI();

  const initialDraft = loadJSON(STORE.rascunho, defaults);
  populateForm(initialDraft && typeof initialDraft === 'object' ? initialDraft : defaults);
})();