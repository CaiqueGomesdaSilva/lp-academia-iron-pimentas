export const nav = {
  logo: 'Iron Pimentas',
  links: [
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Planos', href: '#planos' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ],
  ctaLabel: 'Começar agora',
  ctaHref: '#planos',
}

export const hero = {
  imagemUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
  titulo: 'Resultados que\nvocê consegue ver.',
  subtitulo:
    'Academia de musculação em Guarulhos. Equipamentos de qualidade, instrutores presentes e planos que cabem no seu bolso.',
  btnPrimario: 'Quero começar agora',
  btnSecundario: 'Ver planos',
  stats: [
    { valor: '3', label: 'unidades' },
    { valor: '+2.000', label: 'alunos ativos' },
    { valor: '2008', label: 'no mercado' },
  ],
}

export const diferenciais = {
  titulo: 'Por que a Iron Pimentas?',
  items: [
    {
      titulo: 'Equipamentos novos',
      descricao: 'Renovamos o parque em 2024. Sem fila, sem máquina quebrada.',
    },
    {
      titulo: 'Instrutores presentes',
      descricao: 'Equipe no salão o tempo todo. Seu treino acompanhado de verdade.',
    },
    {
      titulo: 'Sem taxa de matrícula',
      descricao: 'Você paga só o plano. Sem surpresa na hora de assinar.',
    },
  ],
}

export const planos = {
  titulo: 'Escolha seu plano',
  subtitulo: 'Sem taxa de matrícula. Sem letras miúdas.',
  btnLabel: 'Assinar agora',
  items: [
    {
      nome: 'Mensal',
      preco: '89',
      periodo: 'por mês',
      destaque: false,
      beneficios: ['Acesso livre à musculação', 'Avaliação física', 'Armário incluso'],
    },
    {
      nome: 'Trimestral',
      preco: '74',
      periodo: 'por mês · cobrado a cada 3 meses',
      destaque: true,
      beneficios: [
        'Tudo do Mensal',
        'Aulas coletivas inclusas',
        'Consulta nutricional',
        '1 semana grátis',
      ],
    },
    {
      nome: 'Semestral',
      preco: '64',
      periodo: 'por mês · cobrado a cada 6 meses',
      destaque: false,
      beneficios: ['Tudo do Trimestral', 'Camiseta Iron Pimentas', 'Prioridade na renovação'],
    },
  ],
}

export const modalidades = {
  titulo: 'O que você vai encontrar aqui',
  items: [
    {
      nome: 'Musculação',
      foto: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    },
    {
      nome: 'Spinning',
      foto: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    },
    {
      nome: 'Funcional',
      foto: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80',
    },
    {
      nome: 'Luta',
      foto: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
    },
  ],
}

export const depoimentos = {
  titulo: 'Quem treina, aprova',
  items: [
    {
      nome: 'Fernanda R.',
      tempo: 'Aluna há 8 meses',
      texto:
        'Perdi 12kg em 4 meses. Os instrutores fazem diferença — sempre ali te puxando quando você quer desistir.',
      iniciais: 'FR',
    },
    {
      nome: 'Diego M.',
      tempo: 'Aluno há 1 ano',
      texto:
        'Já treinei em várias academias em Guarulhos. Iron Pimentas é outra categoria. Equipamento bom e instrutores que realmente entendem.',
      iniciais: 'DM',
    },
    {
      nome: 'Patrícia S.',
      tempo: 'Aluna há 6 meses',
      texto: 'Fui pelo preço, fiquei pelo resultado. Plano justo e estrutura que não decepciona.',
      iniciais: 'PS',
    },
  ],
}

export const cta = {
  titulo: 'Primeira semana grátis.',
  subtitulo: 'Vem conhecer sem compromisso. Se gostar, a gente cuida do resto.',
  btnLabel: 'Quero minha semana grátis',
}

export const footer = {
  texto: 'Academia Iron Pimentas © 2025 · Guarulhos, SP · (11) 99999-0000',
}

export const whatsappUrl =
  'https://wa.me/5511999990000?text=Olá,%20quero%20saber%20mais%20sobre%20os%20planos'
