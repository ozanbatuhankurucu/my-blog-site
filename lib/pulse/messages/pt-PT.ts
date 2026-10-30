import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const ptPTMessages: PulseMessages = {
  languageLabel: 'Idioma da página',
  video: {
    ariaLabel: `Apresentação do produto ${PULSE_APP_NAME}`,
    playLabel: 'Reproduzir apresentação',
    unsupported: 'O seu navegador não suporta vídeo incorporado.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Temporizador de foco para iPhone e Mac`,
    metaDescription: `${PULSE_APP_NAME} é um temporizador Pomodoro tranquilo para iPhone e Mac com Focus History, Daily Focus Goals, início de sessão com Apple e Google e sincronização offline-first entre os seus dispositivos.`,
    heroImageAlt: `Temporizador de foco e resumo do histórico semanal do ${PULSE_APP_NAME}`,
    backToProjects: 'Voltar aos projetos',
    availableOnAppStore: 'Disponível na App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Temporizador de foco para iPhone e Mac',
    tagline: 'Um temporizador Pomodoro suave que o ajuda a concentrar-se — no iPhone e na barra de menus do Mac.',
    description: `Inicie uma sessão de Foco, faça uma pausa e leve o seu histórico consigo. Inicie sessão com a Apple ou o Google para que os Daily Focus Goals, o Focus History e as preferências sincronizadas permaneçam associados à sua conta no iPhone e no Mac — enquanto o temporizador continua a funcionar offline.`,
    downloadCta: 'Descarregar na App Store',
    watchDemo: 'Ver em ação',
    supportCta: 'Suporte',
    stats: {
      platformLabel: 'Plataformas',
      platformValue: 'iPhone e Mac',
      languagesLabel: 'Idiomas',
      languagesValue: '48 idiomas',
      dataLabel: 'Sincronização',
      dataValue: 'Offline-first',
      builtWithLabel: 'Criado com',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Uma forma mais tranquila de se concentrar',
      title: 'O temporizador está disponível quando precisa — e desaparece quando não precisa.',
      description: `No Mac, abra o ${PULSE_APP_NAME} a partir da barra de menus, escolha uma sessão e feche a janela popover. No iPhone, inicie o Foco no ecrã principal e continue com Live Activities nos dispositivos compatíveis. O temporizador continua a funcionar enquanto trabalha.`,
      caption:
        'Temporizadores de foco e pausa, Daily Focus Goals, Focus History, acompanhamento de séries, localização em 48 idiomas e alertas de conclusão opcionais.',
    },
    rhythm: {
      eyebrow: 'Um ritmo controlado por si',
      title: 'Concentre-se, faça uma pausa, recupere e repita.',
      description: `O ${PULSE_APP_NAME} sugere o que vem a seguir, mas nunca inicia uma sessão por si. Todas as durações podem ser ajustadas ao seu dia.`,
    },
    featureShowcases: [
      {
        title: 'Foco',
        badge: '1–120 min',
        description:
          'A contagem decrescente decorre silenciosamente enquanto trabalha. Pause, reponha ou ignore — mantém sempre o controlo no iPhone e no Mac.',
        imageFile: 'focus-running.png',
        alt: `Sessão de foco do ${PULSE_APP_NAME} em curso com controlos de pausa e contagem decrescente`,
      },
      {
        title: 'Barra de menus',
        badge: 'Mac',
        description:
          'No Mac, mostre ou oculte o tempo restante na barra de menus. O item de estado de largura fixa mantém-se no lugar sem deslocar a janela popover, até 120:00.',
        imageFile: 'menubar.png',
        alt: `Contagem decrescente do ${PULSE_APP_NAME} apresentada na barra de menus do macOS`,
      },
      {
        title: 'Personalização',
        badge: 'As suas regras',
        description:
          'Durações flexíveis, Daily Focus Goals, sons e animações de conclusão, 48 idiomas da interface e preferências de aspeto.',
        imageFile: 'settings.png',
        alt: `Definições do ${PULSE_APP_NAME} para durações, alertas de conclusão, idioma e objetivos`,
      },
    ],
    history: {
      eyebrow: 'Progresso sem pressão',
      title: 'Veja o trabalho acumular-se.',
      description:
        'Abra o Focus History para consultar totais e séries. Quando tem a sessão iniciada, o histórico pode ser sincronizado entre o iPhone e o Mac para que o progresso o acompanhe.',
      items: ['Tempo total de foco', 'Número de sessões concluídas', 'Série atual', 'Melhor série', 'Daily Focus Goals'],
      imageAlt: `Focus History semanal do ${PULSE_APP_NAME} com número de sessões, horas de foco e série`,
    },
    feedback: {
      eyebrow: 'Feedback suave, à sua maneira',
      title: 'Torne a conclusão gratificante.',
      description: `Escolha entre seis sons de conclusão tranquilos e seis celebrações com animais, ou desative qualquer um deles. O ${PULSE_APP_NAME} apresenta a mensagem adequada quando termina uma sessão de Foco, Pausa curta ou Pausa longa.`,
      items: [
        'Título e subtítulo de conclusão adaptados à sessão',
        'Interface em 48 idiomas com o idioma do sistema por predefinição',
        'Preferências de idioma e aspeto em cada dispositivo',
        'Lembretes de motivação opcionais no iPhone',
      ],
      settingsImageAlt: `Definições do ${PULSE_APP_NAME} para durações, idioma, sons de conclusão e objetivos`,
      celebrationImageAlt: `Animação de celebração com coelho do ${PULSE_APP_NAME} quando uma sessão termina`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Macaco', 'Coala', 'Gato', 'Raposa', 'Panda', 'Coelho'],
    },
    native: {
      eyebrow: 'Nativo por conceção',
      title: 'Criado para se sentir em casa nos dispositivos Apple.',
      description: `O SwiftUI, o AppKit e as convenções do sistema mantêm o ${PULSE_APP_NAME} rápido e familiar — com etiquetas VoiceOver e suporte para Reduzir movimento em toda a aplicação.`,
      features: [
        {
          title: 'Barra de menus do Mac e ecrã principal do iPhone',
          description: 'Um companheiro discreto na barra de menus do Mac e uma experiência de foco no ecrã principal do iPhone.',
        },
        {
          title: 'Mantém-se preciso',
          description:
            'As sessões mantêm-se corretas após suspensão, reativação e reinícios, com o histórico registado no momento real do fim.',
        },
        {
          title: 'Sincronização offline-first',
          description:
            'Continue a concentrar-se sem ligação. Quando voltar a estar online, as alterações com sessão iniciada são sincronizadas com a sua conta.',
        },
        {
          title: 'Fala o seu idioma',
          description:
            'Interface completa em 48 idiomas com o idioma do sistema por predefinição e substituição manual nas Definições.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privado por conceção',
      title: 'O seu foco continua a ser seu.',
      description: `O ${PULSE_APP_NAME} utiliza uma conta para que o histórico possa ser sincronizado entre os seus dispositivos. Guardamos apenas o que a sincronização necessita, nunca vendemos os seus dados e mantemos os dados analíticos separados do Focus History.`,
      items: [
        'Início de sessão com Apple ou Google',
        'Foco offline-first em cada dispositivo',
        'Sincronização na nuvem do histórico e das preferências sincronizadas',
        'Sem redes de publicidade',
        'Elimine a sua conta em qualquer altura nas Definições',
      ],
    },
    closing: {
      title: 'Crie espaço para trabalho focado.',
      description: `Obtenha o ${PULSE_APP_NAME} na App Store para iPhone e Mac, ou consulte a política de privacidade e a página de suporte se precisar de ajuda.`,
      getSupport: 'Obter suporte',
      privacy: 'Privacidade',
    },
  },
  support: {
    metaTitle: `Suporte do ${PULSE_APP_NAME}`,
    metaDescription: `Suporte, perguntas frequentes e ajuda com a conta do ${PULSE_APP_NAME} no iPhone e no Mac — incluindo Pomodoro Pro, compras, Focus Protection, início de sessão, sincronização e eliminação da conta.`,
    title: `Suporte do ${PULSE_APP_NAME}`,
    intro: `O ${PULSE_APP_NAME} é um temporizador Pomodoro tranquilo para iPhone e Mac. Inicie sessão com a Apple ou o Google para sincronizar o Focus History entre os seus dispositivos. No iPhone, o Pomodoro Pro opcional desbloqueia a Focus Protection, etiquetas personalizadas e Tag Insights.`,
    gettingStarted: {
      title: 'Primeiros passos',
      items: [
        {
          question: 'Como inicio uma sessão de Foco?',
          answer:
            'No Mac, clique no ícone da aplicação na barra de menus, escolha Foco, Pausa curta ou Pausa longa e prima Iniciar. No iPhone, abra a aplicação, escolha uma sessão no ecrã principal e prima Iniciar. Pode sair da aplicação enquanto o temporizador está em curso.',
        },
        {
          question: 'Como altero as durações de Foco e das pausas?',
          answer:
            'Abra as Definições e ajuste a duração de Foco, Pausa curta e Pausa longa. Também pode escolher um ritmo predefinido e depois ajustar os minutos.',
        },
        {
          question: 'Como configuro os Daily Focus Goals?',
          answer:
            'Nas Definições, indique quantas sessões de Foco pretende por dia. O progresso aparece no ecrã principal e no Focus History.',
        },
        {
          question: 'Como consulto o Focus History?',
          answer:
            'Abra o Focus History na aplicação (no Mac, a partir da janela popover ou do menu de estado). Verá os totais, as séries e o progresso semanal.',
        },
        {
          question: 'Como altero o idioma e o aspeto?',
          answer:
            'Nas Definições, escolha Idioma (Sistema ou um idioma suportado) e Aspeto (Sistema, Claro ou Escuro). Estas preferências permanecem em cada dispositivo e não são sincronizadas.',
        },
      ],
    },
    accounts: {
      title: 'Contas',
      items: [
        {
          question: 'Porque é necessário iniciar sessão?',
          answer:
            'Uma conta permite que o Focus History, os Daily Focus Goals e as preferências sincronizadas o acompanhem no iPhone e no Mac. As novas instalações pedem-lhe que inicie sessão antes de utilizar o temporizador. Os dispositivos atualizados a partir de versões anteriores podem manter o histórico local utilizável até iniciar sessão. As compras do Pomodoro Pro também permanecem associadas à conta com sessão iniciada.',
        },
        {
          question: 'Como inicio sessão com a Apple ou o Google?',
          answer:
            'No ecrã de início de sessão, escolha Continuar com Apple ou Continuar com Google e conclua o processo do fornecedor. A Apple pode disponibilizar a opção Ocultar o meu e-mail.',
        },
        {
          question: 'Como termino sessão?',
          answer:
            'Abra Definições → Conta → Terminar sessão. Se algumas alterações ainda não tiverem sido sincronizadas, a aplicação pode pedir-lhe que sincronize primeiro ou que termine a sessão mesmo assim. Terminar sessão não elimina a sua conta.',
        },
        {
          question: 'Como volto a iniciar sessão?',
          answer:
            'Utilize o mesmo método da Apple ou do Google no ecrã de início de sessão. O histórico na nuvem dessa conta é restaurado no dispositivo.',
        },
        {
          question: 'O que acontece se utilizar uma conta diferente?',
          answer:
            'Cada conta tem o seu próprio histórico. Iniciar sessão noutra conta não combina históricos distintos. Escolha cuidadosamente antes de confirmar a associação do histórico num dispositivo que já tenha sessões locais.',
        },
        {
          question: 'Posso associar a Apple e o Google à mesma conta?',
          answer:
            'Sim. Em Definições → Conta, pode associar o outro método de início de sessão se ainda não estiver a ser utilizado por uma conta diferente.',
        },
      ],
    },
    cloudSync: {
      title: 'Sincronização na nuvem',
      items: [
        {
          question: 'O que é sincronizado entre dispositivos?',
          answer:
            'O histórico das sessões de foco e pausa (incluindo a etiqueta escolhida), as etiquetas que cria, os registos dos Daily Focus Goals, os dados da conta relacionados com séries e as preferências sincronizadas, como duração das sessões, objetivo diário, som, animações, som de conclusão e animal de celebração.',
        },
        {
          question: 'O que acontece sem Internet?',
          answer:
            'Depois de iniciar sessão, pode continuar a utilizar o temporizador offline. As novas sessões e alterações permanecem no dispositivo até estar disponível uma ligação.',
        },
        {
          question: 'O que acontece quando volto a estar online?',
          answer:
            'A aplicação sincroniza as alterações pendentes com a sua conta. A sincronização é offline-first e acaba por ficar consistente — não se trata de colaboração instantânea em tempo real.',
        },
        {
          question: 'Como utilizo a mesma conta no iPhone e no Mac?',
          answer:
            'Instale a aplicação em ambos os dispositivos e inicie sessão com a mesma conta Apple ou Google. Quando o restauro terminar, o Focus History pode aparecer em ambos.',
        },
        {
          question: 'E se o histórico estiver em falta?',
          answer:
            'Confirme que iniciou sessão na mesma conta, aguarde que o restauro e a sincronização terminem e volte a consultar o Focus History. Se iniciou sessão noutra conta, será apresentado o histórico dessa conta.',
        },
      ],
    },
    migration: {
      title: 'Atualização a partir de uma versão anterior',
      items: [
        {
          question: 'O que acontece ao meu histórico local existente?',
          answer:
            'O histórico local existente não é eliminado silenciosamente. Depois de iniciar sessão, a aplicação pergunta antes de adicionar esse histórico à sua conta.',
        },
        {
          question: 'Como devo associar o meu histórico?',
          answer:
            'Inicie sessão na conta que deve ficar com o histórico, reveja o ecrã Adicionar o seu histórico e escolha Adicionar a esta conta. Utilize outra conta se a conta apresentada estiver errada. As sessões não podem ser transferidas posteriormente para outra conta.',
        },
        {
          question: 'E se as definições do dispositivo e da conta forem diferentes?',
          answer:
            'A aplicação pode perguntar se pretende manter as definições deste dispositivo ou utilizar as definições da conta. O idioma, o aspeto, as notificações e os lembretes de motivação permanecem locais no dispositivo.',
        },
      ],
    },
    notifications: {
      title: 'Notificações',
      items: [
        {
          question: 'Como ativo as notificações no iPhone?',
          answer:
            'Abra Definições → Notificações e escolha Ativar, ou abra as Definições do sistema se a permissão tiver sido recusada anteriormente.',
        },
        {
          question: 'Como funcionam os lembretes de motivação?',
          answer:
            'No iPhone, abra Definições → Lembretes de motivação e ative-os depois de permitir as notificações. Pode colocá-los em pausa ou definir horas de silêncio. São opcionais e estão desativados por predefinição.',
        },
        {
          question: 'E se as notificações estiverem desativadas?',
          answer:
            'Os alertas de fim de sessão e os lembretes de motivação necessitam de permissão para notificações. Utilize Definições → Notificações → Abrir Definições para os ativar nas Definições do iOS.',
        },
        {
          question: 'Como funcionam as Live Activities?',
          answer:
            'Nos iPhones compatíveis, uma Live Activity opcional pode mostrar uma sessão ativa no ecrã bloqueado e na Dynamic Island. A permissão é pedida quando ativa as funcionalidades relacionadas.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: 'O que é o Pomodoro Pro?',
          answer:
            'O Pomodoro Pro é uma compra opcional integrada na aplicação no iPhone. Desbloqueia a Focus Protection, etiquetas personalizadas (com os seus próprios nomes e cores) e Tag Insights (tempo de foco semanal e mensal por etiqueta). O temporizador, as etiquetas integradas, o Focus History e a sincronização continuam disponíveis sem o Pro.',
        },
        {
          question: 'Que opções de compra estão disponíveis?',
          answer:
            'O Pomodoro Pro está disponível através de uma assinatura mensal, uma assinatura anual ou uma compra única vitalícia. As assinaturas são renovadas automaticamente, a menos que cancele pelo menos 24 horas antes do fim do período atual. A opção vitalícia é cobrada uma única vez e não é uma assinatura.',
        },
        {
          question: 'Onde compro ou vejo o Pomodoro Pro?',
          answer:
            'No iPhone, abra Definições → Pomodoro Pro ou toque no botão de proteção no ecrã principal. Tem de ter a sessão iniciada. O Pro permanece associado à sua conta em todos os dispositivos onde iniciar sessão.',
        },
        {
          question: 'Como restauro as compras?',
          answer:
            'Utilize Restaurar compras em falta no ecrã de pagamento ou em Definições → Pomodoro Pro. As compras efetuadas com a mesma Conta Apple são transferidas para a conta na qual tem sessão iniciada. Se não for encontrado nada, confirme que está a utilizar a Conta Apple que comprou o Pro e tente novamente enquanto está online.',
        },
      ],
    },
    purchases: {
      title: 'Assinaturas e compras',
      items: [
        {
          question: 'Como giro ou cancelo uma assinatura?',
          answer:
            'As assinaturas são faturadas pela Apple. No iPhone, abra Definições → Pomodoro Pro → Gerir assinatura, ou aceda a Definições → [o seu nome] → Assinaturas e selecione a aplicação. Cancele pelo menos 24 horas antes da renovação para evitar a cobrança seguinte. Eliminar a aplicação ou a sua conta Pomodoro não cancela uma assinatura.',
        },
        {
          question: 'Como peço um reembolso?',
          answer:
            'Os reembolsos são processados pela Apple. Visite reportaproblem.apple.com, inicie sessão com a Conta Apple utilizada na compra, encontre a transação e envie um pedido de reembolso. Não podemos processar diretamente reembolsos da App Store.',
        },
        {
          question: 'E se uma compra falhar ou o Pro não for desbloqueado?',
          answer:
            'Mantenha a sessão iniciada, verifique a ligação à rede e tente novamente. Se o pagamento estiver pendente, por exemplo devido à funcionalidade Pedir para comprar, o Pro é desbloqueado após a aprovação. Se já pagou, utilize Restaurar compras em falta. Para problemas de pagamento numa assinatura ativa, atualize o método de pagamento nas definições da App Store.',
        },
        {
          question: 'E se comprar a opção vitalícia enquanto uma assinatura está ativa?',
          answer:
            'A opção vitalícia desbloqueia o Pro permanentemente, mas uma assinatura existente não é cancelada automaticamente. Desative a renovação automática nas definições de assinaturas da App Store para não voltar a ser cobrado.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: 'O que é a Focus Protection?',
          answer:
            'A Focus Protection é uma funcionalidade do Pomodoro Pro no iPhone. Utiliza as APIs de Screen Time da Apple para bloquear as aplicações, categorias ou sites que escolher enquanto decorre uma sessão de Foco. As pausas nunca são bloqueadas. Quando a sessão termina, as aplicações bloqueadas são desbloqueadas automaticamente.',
        },
        {
          question: 'Como a configuro?',
          answer:
            'Com o Pro ativo, toque no botão Focus Protection no ecrã principal ou abra-o nas Definições. Autorize o acesso ao Screen Time quando solicitado, escolha o que pretende bloquear e ative a Focus Protection. Inicie uma sessão de Foco para aplicar os bloqueios.',
        },
        {
          question: 'Como a desativo ou desbloqueio aplicações?',
          answer:
            'Abra o painel Focus Protection e escolha Desativar agora, ou desative a funcionalidade. Depois de uma sessão terminar, também pode utilizar Desbloquear aplicações no ecrã de bloqueio. Para remover completamente o acesso da aplicação ao Screen Time, aceda a Definições do iOS → Screen Time → Aplicações com acesso ao Screen Time.',
        },
        {
          question: 'E se a Focus Protection não estiver a funcionar?',
          answer:
            'Confirme que o Pro está ativo, que o acesso ao Screen Time está autorizado e que selecionou aplicações ou categorias para bloquear. A Focus Protection só se aplica durante sessões de Foco, não durante pausas. Se o acesso tiver sido revogado nas Definições do sistema, abra a aplicação e autorize-o novamente. Reiniciar o iPhone pode ajudar após uma alteração de permissões.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Conta e privacidade',
      items: [
        {
          question: 'Como elimino a minha conta?',
          answer:
            'Inicie sessão, abra Definições → Conta → Eliminar conta e confirme. A sua conta e o Focus History sincronizado são eliminados permanentemente da nossa base de dados ativa. Esta ação não pode ser anulada. A eliminação requer uma ligação à rede. Eliminar a conta não cancela uma assinatura da App Store — faça a respetiva gestão nas definições da App Store.',
        },
        {
          question: 'O que é afetado pela eliminação da conta?',
          answer:
            'Os dados sincronizados na nuvem dessa conta são removidos, a autorização Iniciar sessão com Apple é revogada quando estiver guardada, é solicitado ao nosso fornecedor de compras que elimine o registo de compras associado à sua conta e os dados da conta são removidos do dispositivo onde a elimina. As cópias locais noutros dispositivos deixam de poder ser sincronizadas; remova a aplicação ou apague-as nesses dispositivos, se necessário. As cópias de segurança dos fornecedores podem conservar dados eliminados durante um período de recuperação limitado. A Apple mantém os seus próprios registos de transações da App Store.',
        },
        {
          question: 'Como exporto os meus dados?',
          answer:
            'Definições → Conta → Exportar os meus dados guarda um ficheiro JSON com as sessões, os objetivos diários, as definições sincronizadas e o perfil da conta. Os dados locais ainda não associados também podem ser exportados a partir do ecrã de início de sessão.',
        },
        {
          question: 'Onde está a Política de Privacidade?',
          answer:
            'Abra a Política de Privacidade no site do produto ou utilize a ligação de privacidade nas páginas de produto deste site.',
        },
      ],
    },
    requirements: {
      title: 'Requisitos',
      body: 'iPhone: iOS 17 ou posterior. Mac: macOS 14.6 ou posterior. As compras do Pomodoro Pro e a Focus Protection estão disponíveis no iPhone.',
    },
    contact: {
      title: 'Contacto',
      body: 'Para obter ajuda, enviar feedback ou comunicar erros:',
    },
    privacyPolicyLink: 'Política de Privacidade',
  },
  privacy: {
    metaTitle: `Política de Privacidade do ${PULSE_APP_NAME}`,
    metaDescription: `Política de privacidade do ${PULSE_APP_NAME}, que abrange o início de sessão com Apple e Google, a sincronização na nuvem, as compras do Pomodoro Pro através da RevenueCat, a Focus Protection, os dados analíticos e a eliminação da conta no Mac e no iPhone.`,
    title: 'Política de Privacidade',
    subtitle: `${PULSE_APP_NAME} — Temporizador Pomodoro para Mac e iPhone`,
    lastUpdated: 'Última atualização: 26 de outubro de 2026',
    summary: {
      title: 'Resumo',
      body: `Quando inicia sessão com a Apple ou o Google, a sua conta mantém o Focus History, os objetivos diários e as definições do temporizador sincronizados entre o Mac e o iPhone. Guardamos apenas o que a aplicação necessita para esse efeito: o seu endereço de e-mail, um identificador da conta e os dados de foco que cria. Nunca os vendemos, nunca os utilizamos para publicidade e nunca os partilhamos com o nosso fornecedor de dados analíticos. Se comprar o Pomodoro Pro no iPhone, o nosso fornecedor de compras, a RevenueCat, mantém o seu histórico de compras associado à sua conta para que o Pro funcione em todos os dispositivos onde iniciar sessão. As escolhas de aplicações da Focus Protection nunca saem do seu iPhone. Pode exportar os seus dados ou eliminar a sua conta em qualquer altura nas Definições. Separadamente, a aplicação pode enviar dados de utilização anónimos e respeitadores da privacidade para podermos melhorar os fluxos de foco.`,
    },
    localData: {
      title: 'Dados guardados no seu dispositivo',
      body: 'As definições do temporizador, as preferências de sessão e o Focus History são guardados localmente no Mac ou iPhone através do armazenamento normal do sistema, para que o temporizador continue a funcionar offline. Cada conta com sessão iniciada num dispositivo tem o seu próprio armazenamento local separado. A sua sessão é guardada no Porta-chaves do sistema. O idioma, o aspeto, Abrir ao iniciar sessão, as notificações e os lembretes de motivação permanecem em cada dispositivo e não são sincronizados. O conteúdo do Focus History não é carregado para o nosso fornecedor de dados analíticos.',
      migrationSafety:
        'Quando inicia sessão pela primeira vez num dispositivo que já tenha Focus History, a aplicação pergunta antes de transferir esse histórico para a sua conta. Até a transferência ser confirmada nos nossos servidores, acrescida de 90 dias, a aplicação mantém a cópia local anterior e um ficheiro de cópia de segurança local no dispositivo como medida de segurança, eliminando-os depois automaticamente.',
    },
    accountAndSync: {
      title: 'A sua conta e os dados sincronizados',
      intro: 'Se iniciar sessão, tratamos:',
      items: [
        'Informações de contacto: o endereço de e-mail partilhado por Sign in with Apple (que pode ser um endereço de reencaminhamento privado através de Hide My Email) ou pelo Google. Não pedimos o seu nome.',
        'Identificadores: um ID de conta criado no início de sessão e um ID aleatório para cada instalação, utilizados apenas para sincronizar e identificar o dispositivo que efetuou uma alteração.',
        'Dados de foco: sessões de foco e pausa concluídas e eliminadas (horas, durações, dia local e fuso horário e a etiqueta escolhida), as etiquetas que cria (nome e cor), objetivos diários, a sua melhor série e as definições sincronizadas (duração das sessões, objetivo diário, som, animações, som de conclusão e animal de celebração).',
      ],
      closing:
        'Estes dados são utilizados apenas para disponibilizar funcionalidades de sincronização, histórico e conta. Estão associados à sua conta, não são utilizados para seguimento e não são partilhados com terceiros para além dos subcontratantes abaixo indicados.',
    },
    processors: {
      title: 'Subcontratantes e local de armazenamento',
      bodyBeforeSupabase: 'Os dados da conta e de sincronização são armazenados na',
      bodyAfterSupabase: '(base de dados e autenticação) na União Europeia. O início de sessão é tratado pela',
      orWord: 'ou pelo',
      bodyAfterProviders: ', consoante a opção escolhida. As compras do Pomodoro Pro são geridas através da',
      bodyAfterRevenueCat:
        '(consulte Compras abaixo). Os dados são encriptados em trânsito e o acesso é limitado para que cada conta só possa ler os seus próprios dados.',
    },
    purchases: {
      title: 'Compras (iPhone)',
      bodyBeforeRevenueCat:
        'O Pomodoro Pro é vendido através da App Store; a Apple trata do pagamento e nunca vemos os seus dados de pagamento. Para desbloquear o Pro em todos os dispositivos onde iniciar sessão, a aplicação partilha o ID da sua conta com a',
      bodyAfterRevenueCat:
        ', que mantém o seu histórico de compras (produtos comprados, datas de compra e renovação e estado da assinatura) associado a esse ID. Estes dados são utilizados apenas para conceder e restaurar o acesso ao Pro, não são utilizados para seguimento e não são partilhados com o nosso fornecedor de dados analíticos. O Pro requer uma conta com sessão iniciada; nada é enviado para a RevenueCat antes de iniciar sessão.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'A Focus Protection utiliza a framework Screen Time da Apple (Family Controls) para bloquear as aplicações, categorias e sites que escolher enquanto decorre uma sessão de foco. A Apple fornece à aplicação apenas tokens opacos para as suas escolhas: não conseguimos ver que aplicações ou sites escolheu, como os utiliza nem quaisquer outros dados de Screen Time. As suas escolhas permanecem nesse iPhone, nunca são carregadas ou sincronizadas e não são enviadas ao nosso fornecedor de dados analíticos. Pode desativar a Focus Protection na aplicação em qualquer altura ou remover o acesso da aplicação em Definições → Screen Time → Aplicações com acesso ao Screen Time.',
    },
    retention: {
      title: 'Conservação, cópias de segurança e eliminação',
      items: [
        'Os seus dados sincronizados são conservados enquanto a sua conta existir.',
        'Eliminar conta (Definições → Conta → Eliminar conta) elimina permanentemente a sua conta e todos os dados sincronizados da nossa base de dados ativa, revoga a autorização Iniciar sessão com Apple da aplicação quando existir uma guardada, solicita à RevenueCat que elimine o registo de compras associado à sua conta e remove os dados dessa conta do dispositivo onde a elimina. As cópias locais nos seus outros dispositivos deixam de poder ser sincronizadas e permanecem nesses dispositivos até eliminar a aplicação ou removê-las a partir do ecrã de início de sessão quando essa opção for apresentada.',
        'O nosso fornecedor de bases de dados mantém cópias de segurança diárias durante 7 dias. Os dados eliminados podem permanecer nessas cópias até expirarem; as cópias de segurança são utilizadas apenas para recuperação após desastre. Também podemos manter uma cópia de segurança semanal encriptada por um período máximo de 90 dias para a mesma finalidade.',
        'Eliminar a sua conta não cancela uma assinatura da App Store; faça a respetiva gestão ou cancelamento nas definições da sua Conta Apple. A Apple mantém o seu próprio registo das suas transações na App Store.',
        'Terminar sessão não elimina nada. As alterações que ainda não tenham sido sincronizadas permanecem no dispositivo até a mesma conta voltar a iniciar sessão.',
        'Os registos analíticos são tratados pela TelemetryDeck de acordo com as respetivas práticas de conservação e não são utilizados para restaurar o seu Focus History.',
      ],
    },
    export: {
      title: 'Exportação',
      body: 'Definições → Conta → Exportar os meus dados guarda um ficheiro JSON com as suas sessões, objetivos diários, definições sincronizadas e perfil da conta. Os dados que ainda não tenham sido transferidos para uma conta também podem ser exportados a partir do ecrã de início de sessão.',
    },
    analytics: {
      title: 'Dados analíticos',
      introBeforeLink: 'Utilizamos a',
      introAfterLink:
        ', um serviço de dados analíticos centrado na privacidade, para compreender como a aplicação é utilizada (por exemplo: sessões de foco ou pausa iniciadas ou concluídas, alterações aos objetivos diários e às definições, resultados das permissões de notificações, eventos de lembretes de motivação e conclusão da integração inicial). Os sinais não incluem texto livre, nomes, endereços de e-mail nem o conteúdo do seu Focus History.',
      identifier:
        'A TelemetryDeck identifica instalações através de um identificador com hash específico do dispositivo e pode anexar metadados não pessoais do dispositivo, como o modelo, a versão do sistema operativo e a região. Estes dados são utilizados apenas para fins analíticos, não são associados por nós à sua identidade e não são utilizados para o seguir em aplicações ou sites de outras empresas.',
      learnMore: 'Saiba mais:',
      faqLabel: 'Perguntas frequentes sobre privacidade da TelemetryDeck',
    },
    appStoreUpdates: {
      title: 'Atualizações da App Store',
      body: 'Se utilizar “Procurar atualizações” nas Definições, a aplicação pode contactar a Apple para verificar se está disponível uma versão mais recente na App Store.',
    },
    launchAtLogin: {
      title: 'Abrir ao iniciar sessão (Mac)',
      body: 'Se ativar Abrir ao iniciar sessão nas Definições do Mac, a aplicação utiliza as APIs do sistema macOS para se registar como um elemento de início de sessão. Esta preferência é controlada por si e pode ser desativada em qualquer altura.',
    },
    notifications: {
      title: 'Notificações e Live Activities (iPhone)',
      body: 'No iPhone, as notificações locais opcionais, os lembretes de motivação e as Live Activities ajudam-no a ver quando uma sessão termina ou a voltar suavemente ao foco. A permissão só é solicitada quando decide ativar estas funcionalidades. O conteúdo das notificações permanece no seu dispositivo.',
    },
    whatWeDoNotDo: {
      title: 'O que não fazemos',
      items: [
        'Sem redes de publicidade',
        'Sem venda de informações pessoais',
        'Sem acesso aos seus contactos, fotografias, localização precisa, câmara ou microfone para fins analíticos',
      ],
    },
    children: {
      title: 'Crianças',
      body: `O ${PULSE_APP_NAME} não recolhe intencionalmente informações pessoais de crianças para além do que uma conta necessita para a sincronização, conforme descrito acima. Os sinais analíticos são anónimos e não incluem conteúdo pessoal.`,
    },
    changes: {
      title: 'Alterações',
      body: 'Se esta política for alterada, a versão atualizada será publicada neste URL.',
    },
    contact: {
      title: 'Contacto',
      body: 'Questões sobre esta política:',
    },
  },
}
