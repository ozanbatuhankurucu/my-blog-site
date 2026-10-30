import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const ptBRMessages: PulseMessages = {
  languageLabel: 'Idioma da página',
  video: {
    ariaLabel: `Tour do produto ${PULSE_APP_NAME}`,
    playLabel: 'Reproduzir tour',
    unsupported: 'Seu navegador não suporta vídeo incorporado.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Timer de foco para iPhone e Mac`,
    metaDescription: `${PULSE_APP_NAME} é um timer Pomodoro tranquilo para iPhone e Mac, com Histórico de Foco, Metas Diárias de Foco, login com Apple e Google e sincronização offline-first entre seus dispositivos.`,
    heroImageAlt: `${PULSE_APP_NAME} timer de foco e visão geral do histórico semanal`,
    backToProjects: 'Voltar aos projetos',
    availableOnAppStore: 'Disponível na App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Timer de foco para iPhone e Mac',
    tagline: 'Um timer Pomodoro suave que ajuda você a focar — no iPhone e na barra de menus do Mac.',
    description: `Inicie uma sessão de Foco, faça uma pausa e leve seu histórico com você. Entre com Apple ou Google para que Metas Diárias de Foco, Histórico de Foco e preferências sincronizadas fiquem na sua conta no iPhone e no Mac — enquanto o timer continua funcionando offline.`,
    downloadCta: 'Baixar na App Store',
    watchDemo: 'Ver em ação',
    supportCta: 'Suporte',
    stats: {
      platformLabel: 'Plataformas',
      platformValue: 'iPhone e Mac',
      languagesLabel: 'Idiomas',
      languagesValue: '48 idiomas',
      dataLabel: 'Sincronização',
      dataValue: 'Offline-first',
      builtWithLabel: 'Feito com',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Uma forma mais tranquila de focar',
      title: 'Seu timer está lá quando você precisa — e some quando não precisa.',
      description: `No Mac, abra o ${PULSE_APP_NAME} pela barra de menus, escolha uma sessão e feche o popover. No iPhone, inicie o Foco na Home e continue com Live Activities em dispositivos compatíveis. O timer segue enquanto você trabalha.`,
      caption:
        'Timers de foco e pausa, Metas Diárias de Foco, Histórico de Foco, sequências, localização em 48 idiomas e alertas opcionais ao concluir.',
    },
    rhythm: {
      eyebrow: 'Um ritmo que você controla',
      title: 'Foco, pausa, recuperação, repetição.',
      description: `${PULSE_APP_NAME} sugere o que vem a seguir, mas nunca inicia uma sessão por você. Cada duração pode ser ajustada ao seu dia.`,
    },
    featureShowcases: [
      {
        title: 'Foco',
        badge: '1–120 min',
        description:
          'A contagem regressiva corre em silêncio enquanto você trabalha. Pause, reinicie ou pule — você mantém o controle no iPhone e no Mac.',
        imageFile: 'focus-running.png',
        alt: `${PULSE_APP_NAME} sessão de foco em execução com controles de pausa e contagem regressiva`,
      },
      {
        title: 'Barra de menus',
        badge: 'Mac',
        description:
          'No Mac, mostre ou oculte o tempo restante na barra de menus. O item de status de largura fixa permanece no lugar sem deslocar o popover, até 120:00.',
        imageFile: 'menubar.png',
        alt: `${PULSE_APP_NAME} contagem regressiva exibida na barra de menus do macOS`,
      },
      {
        title: 'Personalização',
        badge: 'Suas regras',
        description:
          'Durações flexíveis, Metas Diárias de Foco, sons e animações ao concluir, 48 idiomas de interface e preferências de aparência.',
        imageFile: 'settings.png',
        alt: `${PULSE_APP_NAME} configurações de durações, alertas ao concluir, idioma e metas`,
      },
    ],
    history: {
      eyebrow: 'Progresso sem pressão',
      title: 'Veja o trabalho se acumulando.',
      description:
        'Abra o Histórico de Foco para revisar totais e sequências. Quando você está conectado, o histórico pode sincronizar entre iPhone e Mac para que o progresso te acompanhe.',
      items: ['Tempo total de foco', 'Contagem de sessões concluídas', 'Sequência atual', 'Melhor sequência', 'Metas Diárias de Foco'],
      imageAlt: `${PULSE_APP_NAME} histórico semanal de foco com contagem de sessões, horas focadas e sequência`,
    },
    feedback: {
      eyebrow: 'Feedback suave, do seu jeito',
      title: 'Faça a conclusão parecer recompensadora.',
      description: `Escolha entre seis sons calmos ao concluir e seis celebrações com animais, ou desative cada um. O ${PULSE_APP_NAME} mostra a mensagem certa quando uma sessão de Foco, Pausa Curta ou Pausa Longa termina.`,
      items: [
        'Título e subtítulo de conclusão conforme a sessão',
        'Interface em 48 idiomas com idioma do sistema como padrão',
        'Preferências de idioma e aparência em cada dispositivo',
        'Lembretes de motivação opcionais no iPhone',
      ],
      settingsImageAlt: `${PULSE_APP_NAME} configurações de durações, idioma, sons ao concluir e metas`,
      celebrationImageAlt: `${PULSE_APP_NAME} animação de celebração com coelho ao concluir uma sessão`,
      soundNames: ['Pássaros da floresta', 'Sino de cristal', 'Marimba suave', 'Gotas de chuva', 'Sino suave', 'Gong zen'],
      animalNames: ['Macaco', 'Coala', 'Gato', 'Raposa', 'Panda', 'Coelho'],
    },
    native: {
      eyebrow: 'Nativo por design',
      title: 'Feito para parecer em casa nos dispositivos Apple.',
      description: `SwiftUI, AppKit e convenções do sistema mantêm o ${PULSE_APP_NAME} rápido e familiar — com rótulos VoiceOver e suporte a Reduzir Movimento em todo o app.`,
      features: [
        {
          title: 'Barra de menus no Mac e Home no iPhone',
          description: 'Um companheiro discreto na barra de menus no Mac e uma experiência focada na Home no iPhone.',
        },
        {
          title: 'Permanece preciso',
          description:
            'As sessões permanecem corretas após suspensão, retorno e relançamentos, com histórico registrado no prazo real.',
        },
        {
          title: 'Sincronização offline-first',
          description:
            'Continue focando sem conexão. Quando voltar online, alterações da conta conectada sincronizam com sua conta.',
        },
        {
          title: 'Fala seu idioma',
          description:
            'Interface completa em 48 idiomas com padrão do sistema e substituição manual em Ajustes.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privado por design',
      title: 'Seu foco continua sendo seu.',
      description: `${PULSE_APP_NAME} usa uma conta para que o histórico possa sincronizar entre seus dispositivos. Armazenamos apenas o necessário para a sincronização, nunca vendemos seus dados e mantemos análises separadas do histórico de foco.`,
      items: [
        'Entrar com Apple ou Google',
        'Foco offline-first em cada dispositivo',
        'Sincronização na nuvem de histórico e preferências sincronizadas',
        'Sem redes de publicidade',
        'Exclua sua conta a qualquer momento em Ajustes',
      ],
    },
    closing: {
      title: 'Abra espaço para trabalho focado.',
      description: `Obtenha o ${PULSE_APP_NAME} na App Store para iPhone e Mac, ou leia a política de privacidade e a página de suporte se precisar de ajuda.`,
      getSupport: 'Obter suporte',
      privacy: 'Privacidade',
    },
  },
  support: {
    metaTitle: `Suporte ${PULSE_APP_NAME}`,
    metaDescription: `Suporte, FAQ e ajuda com conta para ${PULSE_APP_NAME} no iPhone e Mac — incluindo Pomodoro Pro, compras, Focus Protection, login, sincronização e exclusão de conta.`,
    title: `Suporte ${PULSE_APP_NAME}`,
    intro: `${PULSE_APP_NAME} é um timer Pomodoro tranquilo para iPhone e Mac. Entre com Apple ou Google para sincronizar o Histórico de Foco entre seus dispositivos. No iPhone, o Pomodoro Pro opcional desbloqueia Focus Protection, tags personalizadas e Tag Insights.`,
    gettingStarted: {
      title: 'Primeiros passos',
      items: [
        {
          question: 'Como inicio uma sessão de Foco?',
          answer:
            'No Mac, clique no ícone do app na barra de menus, escolha Foco, Pausa Curta ou Pausa Longa e pressione Iniciar. No iPhone, abra o app, escolha uma sessão na Home e pressione Iniciar. Você pode sair do app enquanto o timer roda.',
        },
        {
          question: 'Como altero as durações de Foco e Pausa?',
          answer:
            'Abra Ajustes e ajuste os comprimentos de Foco, Pausa Curta e Pausa Longa. Você também pode escolher um ritmo predefinido e depois refinar os minutos.',
        },
        {
          question: 'Como configuro Metas Diárias de Foco?',
          answer:
            'Em Ajustes, defina quantas sessões de Foco você quer por dia. O progresso aparece na Home e no Histórico de Foco.',
        },
        {
          question: 'Como vejo o Histórico de Foco?',
          answer:
            'Abra o Histórico de Foco pelo app (no Mac, pelo popover ou menu de status). Você verá totais, sequências e progresso semanal.',
        },
        {
          question: 'Como altero idioma e aparência?',
          answer:
            'Em Ajustes, escolha Idioma (Sistema ou um idioma suportado) e Aparência (Sistema, Claro ou Escuro). Essas preferências ficam em cada dispositivo e não são sincronizadas.',
        },
      ],
    },
    accounts: {
      title: 'Contas',
      items: [
        {
          question: 'Por que o login é obrigatório?',
          answer:
            'Uma conta faz com que Histórico de Foco, Metas Diárias de Foco e preferências sincronizadas fiquem com você no iPhone e no Mac. Instalações novas pedem login antes de usar o timer. Dispositivos que atualizam de versões antigas podem continuar usando histórico local até você entrar. As compras do Pomodoro Pro também ficam com a conta em que você entrou.',
        },
        {
          question: 'Como entro com Apple ou Google?',
          answer:
            'Na tela de login, escolha Continuar com Apple ou Continuar com Google e conclua o fluxo do provedor. A Apple pode oferecer Ocultar Meu E-mail.',
        },
        {
          question: 'Como saio da conta?',
          answer:
            'Abra Ajustes → Conta → Sair. Se houver alterações ainda não sincronizadas, o app pode pedir para sincronizar primeiro ou sair mesmo assim. Sair não exclui sua conta.',
        },
        {
          question: 'Como entro novamente?',
          answer:
            'Use o mesmo método Apple ou Google na tela de login. Seu histórico na nuvem é restaurado para essa conta no dispositivo.',
        },
        {
          question: 'O que acontece se usar outra conta?',
          answer:
            'Cada conta tem seu próprio histórico. Entrar em outra conta não mescla históricos não relacionados. Escolha com cuidado antes de confirmar a reivindicação de histórico em um dispositivo que já tem sessões locais.',
        },
        {
          question: 'Posso vincular Apple e Google à mesma conta?',
          answer:
            'Sim. Em Ajustes → Conta você pode vincular o outro método de login quando ele não estiver em uso por outra conta.',
        },
      ],
    },
    cloudSync: {
      title: 'Sincronização na nuvem',
      items: [
        {
          question: 'O que sincroniza entre dispositivos?',
          answer:
            'Histórico de sessões de foco e pausa (incluindo a tag escolhida), as tags que você cria, registros de Meta Diária de Foco, dados de conta relacionados a sequências e preferências sincronizadas como durações, meta diária, som, animações, som ao concluir e animal de celebração.',
        },
        {
          question: 'O que acontece sem internet?',
          answer:
            'Depois de entrar, você pode continuar usando o timer offline. Novas sessões e alterações ficam no dispositivo até haver conexão.',
        },
        {
          question: 'O que acontece quando volto online?',
          answer:
            'O app sincroniza alterações pendentes com sua conta. A sincronização é offline-first e eventualmente consistente — não é colaboração em tempo real instantânea.',
        },
        {
          question: 'Como uso a mesma conta no iPhone e no Mac?',
          answer:
            'Instale o app nos dois dispositivos e entre com a mesma conta Apple ou Google. Após a restauração terminar, o Histórico de Foco pode aparecer nos dois.',
        },
        {
          question: 'E se o histórico estiver faltando?',
          answer:
            'Confirme que entrou na mesma conta, aguarde a restauração/sincronização terminar e verifique o Histórico de Foco novamente. Se entrou em outra conta, ela mostrará seu próprio histórico.',
        },
      ],
    },
    migration: {
      title: 'Atualizando de uma versão antiga',
      items: [
        {
          question: 'O que acontece com meu histórico local existente?',
          answer:
            'O histórico local existente não é excluído silenciosamente. Após o login, o app pergunta antes de adicionar esse histórico à sua conta.',
        },
        {
          question: 'Como devo reivindicar meu histórico?',
          answer:
            'Entre na conta que deve possuir o histórico, revise a tela Adicionar seu histórico e escolha Adicionar a esta conta. Use outra conta se a exibida estiver errada. Sessões não podem ser movidas para outra conta depois.',
        },
        {
          question: 'E se as configurações do dispositivo e da conta forem diferentes?',
          answer:
            'O app pode perguntar se mantém as configurações deste dispositivo ou usa as da conta. Idioma, aparência, notificações e lembretes de motivação permanecem locais ao dispositivo.',
        },
      ],
    },
    notifications: {
      title: 'Notificações',
      items: [
        {
          question: 'Como ativo notificações no iPhone?',
          answer:
            'Abra Ajustes → Notificações e escolha Ativar, ou abra Ajustes do sistema se a permissão foi negada antes.',
        },
        {
          question: 'Como funcionam os lembretes de motivação?',
          answer:
            'No iPhone, abra Ajustes → Lembretes de motivação e ative depois que notificações forem permitidas. Você pode pausá-los ou definir horários silenciosos. São opcionais e desativados por padrão.',
        },
        {
          question: 'E se as notificações estiverem desativadas?',
          answer:
            'Alertas de fim de sessão e lembretes de motivação precisam de permissão de notificação. Use Ajustes → Notificações → Abrir Ajustes para ativá-las nos Ajustes do iOS.',
        },
        {
          question: 'Como funcionam as Live Activities?',
          answer:
            'Em iPhones compatíveis, uma Live Activity opcional pode mostrar uma sessão ativa na Tela Bloqueada e na Dynamic Island. A permissão é solicitada quando você ativa recursos relacionados.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'O que é o Pomodoro Pro?',
          answer:
            'Pomodoro Pro é uma compra opcional no app no iPhone. Desbloqueia Focus Protection, tags personalizadas (seus próprios nomes e cores) e Tag Insights (tempo de foco por tag na semana e no mês). O timer, tags integradas, Histórico de Foco e sincronização continuam disponíveis sem Pro.',
        },
        {
          question: 'Quais opções de compra estão disponíveis?',
          answer:
            'Pomodoro Pro é oferecido como assinatura Mensal, assinatura Anual (Yearly) ou compra única Lifetime. As assinaturas renovam automaticamente, a menos que você cancele pelo menos 24 horas antes do fim do período atual. Lifetime é cobrado uma vez e não é assinatura.',
        },
        {
          question: 'Onde compro ou vejo o Pomodoro Pro?',
          answer:
            'No iPhone, abra Ajustes → Pomodoro Pro ou toque no chip de proteção na Home. É necessário estar conectado. O Pro permanece com sua conta em todos os dispositivos em que você entrar.',
        },
        {
          question: 'Como restauro compras?',
          answer:
            'Use Restaurar compras na paywall ou em Ajustes → Pomodoro Pro. Compras feitas com a mesma Apple Account passam para a conta em que você está conectado. Se nada for encontrado, confirme que está usando a Apple Account que comprou o Pro e tente novamente online.',
        },
      ],
    },
    purchases: {
      title: 'Assinaturas e compras',
      items: [
        {
          question: 'Como gerencio ou cancelo uma assinatura?',
          answer:
            'As assinaturas são cobradas pela Apple. No iPhone, abra Ajustes → Pomodoro Pro → Gerenciar assinatura ou vá em Ajustes → [seu nome] → Assinaturas e selecione o app. Cancele pelo menos 24 horas antes da renovação para evitar a próxima cobrança. Excluir o app ou sua conta Pomodoro não cancela uma assinatura.',
        },
        {
          question: 'Como solicito reembolso?',
          answer:
            'Reembolsos são tratados pela Apple. Visite reportaproblem.apple.com, entre com a Apple Account usada na compra, encontre a transação e envie um pedido de reembolso. Não podemos processar reembolsos da App Store.',
        },
        {
          question: 'E se uma compra falhar ou o Pro não desbloquear?',
          answer:
            'Permaneça conectado, verifique a conexão de rede e tente novamente. Se o pagamento estiver pendente (por exemplo, Pedir para Comprar), o Pro desbloqueia após aprovação. Se você já pagou, use Restaurar compras. Para problemas de pagamento em uma assinatura ativa, atualize a forma de pagamento nos ajustes da App Store.',
        },
        {
          question: 'E se eu comprar Lifetime com uma assinatura ativa?',
          answer:
            'Lifetime desbloqueia o Pro permanentemente, mas uma assinatura existente não é cancelada automaticamente. Desative a renovação automática nos ajustes de assinatura da App Store para não ser cobrado novamente.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'O que é Focus Protection?',
          answer:
            'Focus Protection é um recurso do Pomodoro Pro no iPhone. Usa as APIs de Screen Time da Apple para bloquear os apps, categorias ou sites que você escolher enquanto uma sessão de Foco estiver em andamento. Pausas nunca são bloqueadas. Quando a sessão termina, os apps bloqueados desbloqueiam automaticamente.',
        },
        {
          question: 'Como configuro?',
          answer:
            'Com o Pro ativo, toque no chip Focus Protection na Home (ou abra em Ajustes). Permita acesso ao Screen Time quando solicitado, escolha o que bloquear e ative o Focus Protection. Inicie uma sessão de Foco para aplicar os escudos.',
        },
        {
          question: 'Como desativo ou desbloqueio apps?',
          answer:
            'Abra a folha Focus Protection e escolha Desativar agora ou desligue o recurso. Após o fim da sessão, você também pode usar Desbloquear apps na tela de escudo. Para remover totalmente o acesso ao Screen Time do app, vá em Ajustes do iOS → Screen Time → Apps com acesso ao Screen Time.',
        },
        {
          question: 'E se o Focus Protection não funcionar?',
          answer:
            'Confirme que o Pro está ativo, o acesso ao Screen Time está permitido e você selecionou apps ou categorias para bloquear. Focus Protection só se aplica durante sessões de Foco, não em pausas. Se o acesso foi revogado nos Ajustes do sistema, abra o app e permita novamente. Reiniciar o iPhone pode ajudar após uma mudança de permissão.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Conta e privacidade',
      items: [
        {
          question: 'Como excluo minha conta?',
          answer:
            'Entre, abra Ajustes → Conta → Excluir conta e confirme. Sua conta e o histórico de foco sincronizado são excluídos permanentemente do nosso banco de dados ativo. Isso não pode ser desfeito. A exclusão exige conexão de rede. Excluir sua conta não cancela uma assinatura da App Store — gerencie isso nos ajustes da App Store.',
        },
        {
          question: 'O que a exclusão da conta afeta?',
          answer:
            'Dados sincronizados na nuvem dessa conta são removidos, a autorização do Entrar com Apple é revogada quando armazenada, o registro de compra vinculado à sua conta é solicitado para exclusão no nosso provedor de compras, e os dados da conta são removidos do dispositivo onde você exclui. Cópias locais em outros dispositivos não podem mais sincronizar; remova o app ou limpe-as lá se necessário. Backups do provedor podem reter dados excluídos por um período limitado de recuperação. A Apple mantém seus próprios registros de transações da App Store.',
        },
        {
          question: 'Como exporto meus dados?',
          answer:
            'Ajustes → Conta → Exportar meus dados salva um arquivo JSON com sessões, metas diárias, configurações sincronizadas e perfil da conta. Dados locais não reivindicados também podem ser exportados na tela de login.',
        },
        {
          question: 'Onde está a Política de Privacidade?',
          answer:
            'Abra a Política de Privacidade no site do produto ou use o link de privacidade nas páginas do produto neste site.',
        },
      ],
    },
    requirements: {
      title: 'Requisitos',
      body: 'iPhone: iOS 17 ou posterior. Mac: macOS 14.6 ou posterior. Compras do Pomodoro Pro e Focus Protection estão disponíveis no iPhone.',
    },
    contact: {
      title: 'Contato',
      body: 'Para ajuda, feedback ou relatos de bug:',
    },
    privacyPolicyLink: 'Política de Privacidade',
  },
  privacy: {
    metaTitle: `Política de Privacidade ${PULSE_APP_NAME}`,
    metaDescription: `Política de privacidade do ${PULSE_APP_NAME}, cobrindo login com Apple e Google, sincronização na nuvem, compras Pomodoro Pro via RevenueCat, Focus Protection, análises e exclusão de conta no Mac e iPhone.`,
    title: 'Política de Privacidade',
    subtitle: `${PULSE_APP_NAME} — Timer Pomodoro para Mac e iPhone`,
    lastUpdated: 'Última atualização: 26 de outubro de 2026',
    summary: {
      title: 'Resumo',
      body: `Quando você entra com Apple ou Google, sua conta mantém histórico de foco, metas diárias e configurações do timer sincronizados entre Mac e iPhone. Armazenamos apenas o que o app precisa: seu endereço de e-mail, um identificador de conta e os dados de foco que você cria. Nunca vendemos, nunca usamos para publicidade e nunca compartilhamos com nosso provedor de análises. Se você comprar Pomodoro Pro no iPhone, nosso provedor de compras RevenueCat mantém seu histórico de compras vinculado à sua conta para o Pro funcionar em todos os dispositivos em que você entrar. As escolhas de apps do Focus Protection nunca saem do seu iPhone. Você pode exportar seus dados ou excluir sua conta a qualquer momento em Ajustes. Separadamente, o app pode enviar análises de uso anônimas e que preservam privacidade para melhorarmos os fluxos de foco.`,
    },
    localData: {
      title: 'Dados armazenados no seu dispositivo',
      body: 'Suas configurações de timer, preferências de sessão e histórico de foco são salvos localmente no Mac ou iPhone usando armazenamento padrão do sistema, para o timer continuar offline. Cada conta conectada em um dispositivo tem seu próprio armazenamento local separado. Sua sessão de login fica no Keychain do sistema. Configurações de idioma, aparência, Abrir ao iniciar sessão, notificação e lembretes de motivação ficam em cada dispositivo e não são sincronizadas. O conteúdo do histórico de foco em si não é enviado ao nosso provedor de análises.',
      migrationSafety:
        'Quando você entra pela primeira vez em um dispositivo que já tem histórico de foco, o app pergunta antes de mover esse histórico para sua conta. Até a movimentação ser confirmada em nossos servidores, mais 90 dias, o app mantém a cópia local anterior e um arquivo de backup local no dispositivo como rede de segurança e depois os remove automaticamente.',
    },
    accountAndSync: {
      title: 'Sua conta e dados sincronizados',
      intro: 'Se você entrar, processamos:',
      items: [
        'Informações de contato: o endereço de e-mail compartilhado pelo Entrar com Apple (que pode ser um endereço de retransmissão privada via Ocultar Meu E-mail) ou Google. Não solicitamos seu nome.',
        'Identificadores: um ID de conta criado no login e um ID aleatório por instalação, usados apenas para sincronizar e identificar qual dispositivo fez uma alteração.',
        'Dados de foco: sessões de foco e pausa concluídas e excluídas (horários, durações, dia local e fuso horário e a tag escolhida), as tags que você cria (nome e cor), metas diárias, sua melhor sequência e configurações sincronizadas (durações, meta diária, som, animações, som ao concluir, animal de celebração).',
      ],
      closing:
        'Esses dados são usados apenas para fornecer sincronização, histórico e recursos de conta. Estão vinculados à sua conta, não são usados para rastreamento e não são compartilhados com terceiros além dos processadores abaixo.',
    },
    processors: {
      title: 'Processadores e local de armazenamento',
      bodyBeforeSupabase: 'Dados de conta e sincronização são armazenados com',
      bodyAfterSupabase:
        '(banco de dados e autenticação) na União Europeia. O login é feito por',
      orWord: 'ou',
      bodyAfterProviders:
        ', conforme a opção que você escolher. As compras do Pomodoro Pro são gerenciadas com',
      bodyAfterRevenueCat:
        ' (veja Compras abaixo). Os dados são criptografados em trânsito e o acesso é restrito para que cada conta leia apenas seus próprios dados.',
    },
    purchases: {
      title: 'Compras (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro é vendido pela App Store; a Apple processa o pagamento e nunca vemos seus dados de pagamento. Para desbloquear o Pro em todos os dispositivos em que você entrar, o app compartilha seu ID de conta com',
      bodyAfterRevenueCat:
        ', que mantém seu histórico de compras (produtos comprados, datas de compra e renovação e status da assinatura) vinculado a esse ID. Esses dados são usados apenas para conceder e restaurar acesso Pro, não são usados para rastreamento e não são compartilhados com nosso provedor de análises. Pro exige conta conectada; nada é enviado ao RevenueCat antes do login.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection usa o framework Screen Time da Apple (Family Controls) para bloquear os apps, categorias e sites que você escolher enquanto uma sessão de foco estiver em andamento. A Apple dá ao app apenas tokens opacos das suas escolhas: não podemos ver quais apps ou sites você escolheu, como os usa ou qualquer outro dado de Screen Time. Suas escolhas ficam nesse iPhone, nunca são enviadas ou sincronizadas e não vão ao nosso provedor de análises. Você pode desativar o Focus Protection no app a qualquer momento ou remover o acesso do app em Ajustes → Screen Time → Apps com acesso ao Screen Time.',
    },
    retention: {
      title: 'Retenção, backups e exclusão',
      items: [
        'Seus dados sincronizados são mantidos enquanto sua conta existir.',
        'Excluir conta (Ajustes → Conta → Excluir conta) exclui permanentemente sua conta e todos os dados sincronizados do nosso banco de dados ativo, revoga a autorização do Entrar com Apple do app quando armazenada, solicita que a RevenueCat exclua o registro de compra vinculado à sua conta e remove os dados dessa conta do dispositivo onde você exclui. Cópias locais em outros dispositivos não podem mais sincronizar e permanecem até você excluir o app nesses dispositivos ou removê-las na tela de login quando oferecido.',
        'Nosso provedor de banco de dados mantém backups diários por 7 dias. Dados excluídos podem permanecer nesses backups até expirarem; backups são usados apenas para recuperação de desastres. Também podemos manter um backup semanal criptografado por até 90 dias para o mesmo fim.',
        'Excluir sua conta não cancela uma assinatura da App Store; gerencie ou cancele nos ajustes da sua Apple Account. A Apple mantém seu próprio registro das transações da App Store.',
        'Sair não exclui nada. Alterações ainda não sincronizadas ficam no dispositivo até a mesma conta entrar novamente.',
        'Registros de análises são tratados pela TelemetryDeck conforme suas práticas de retenção e não são usados para restaurar seu histórico de foco.',
      ],
    },
    export: {
      title: 'Exportação',
      body: 'Ajustes → Conta → Exportar meus dados salva um arquivo JSON com suas sessões, metas diárias, configurações sincronizadas e perfil da conta. Dados que ainda não foram movidos para uma conta também podem ser exportados na tela de login.',
    },
    analytics: {
      title: 'Análises',
      introBeforeLink: 'Usamos',
      introAfterLink:
        ', um serviço de análises focado em privacidade, para entender como o app é usado (por exemplo: sessões de foco ou pausa iniciadas ou concluídas, alterações de meta diária, alterações de configurações, resultados de permissão de notificação, eventos de lembrete de motivação e se o onboarding terminou). Os sinais não incluem texto livre, nomes, e-mails ou conteúdo do histórico de foco.',
      identifier:
        'A TelemetryDeck identifica instalações com um identificador com hash no escopo do dispositivo e pode anexar metadados não pessoais do dispositivo (como modelo, versão do SO e locale). Esses dados são usados apenas para análises, não são vinculados à sua identidade por nós e não são usados para rastreamento em apps ou sites de outras empresas.',
      learnMore: 'Saiba mais:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'Atualizações da App Store',
      body: 'Se você usar "Verificar atualizações" em Ajustes, o app pode contatar a Apple para ver se há uma versão mais recente na App Store.',
    },
    launchAtLogin: {
      title: 'Abrir ao iniciar sessão (Mac)',
      body: 'Se você ativar Abrir ao iniciar sessão em Ajustes no Mac, o app usa APIs do sistema macOS para se registrar como item de login. Essa preferência é controlada por você e pode ser desativada a qualquer momento.',
    },
    notifications: {
      title: 'Notificações e Live Activities (iPhone)',
      body: 'No iPhone, notificações locais opcionais, lembretes de motivação e Live Activities ajudam a ver quando uma sessão termina ou voltar suavemente ao foco. A permissão é solicitada apenas quando você escolhe ativar esses recursos. O conteúdo das notificações permanece no seu dispositivo.',
    },
    whatWeDoNotDo: {
      title: 'O que não fazemos',
      items: [
        'Sem redes de publicidade',
        'Sem venda de informações pessoais',
        'Sem acesso aos seus contatos, fotos, localização precisa, câmera ou microfone para análises',
      ],
    },
    children: {
      title: 'Crianças',
      body: `${PULSE_APP_NAME} não coleta intencionalmente informações pessoais de crianças além do que uma conta precisa para sincronizar, conforme descrito acima. Sinais de análises são anônimos e não incluem conteúdo pessoal.`,
    },
    changes: {
      title: 'Alterações',
      body: 'Se esta política mudar, a versão atualizada será publicada nesta URL.',
    },
    contact: {
      title: 'Contato',
      body: 'Perguntas sobre esta política:',
    },
  },
}
