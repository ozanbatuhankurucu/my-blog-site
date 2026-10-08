import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const ptBRMessages: PulseMessages = {
  languageLabel: 'Idioma da página',
  video: {
    ariaLabel: `Apresentação do produto ${PULSE_APP_NAME}`,
    playLabel: 'Reproduzir apresentação',
    unsupported: 'Seu navegador não oferece suporte a vídeo incorporado.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Timer Pomodoro da barra de menus para macOS`,
    metaDescription: `${PULSE_APP_NAME} é um timer Pomodoro nativo para macOS, com popover redesenhado, histórico completo de foco, alertas por sessão e suporte a 12 idiomas.`,
    heroImageAlt: `Timer de foco e visão geral do histórico semanal do ${PULSE_APP_NAME}`,
    backToProjects: 'Voltar aos projetos',
    availableOnAppStore: 'Disponível na Mac App Store',
    eyebrow: 'Timer Pomodoro da barra de menus',
    tagline: 'Um timer Pomodoro discreto que vive na sua barra de menus.',
    description: `Mantenha o foco sem bagunçar a área de trabalho. Inicie uma sessão de foco, faça uma pausa e deixe o ${PULSE_APP_NAME} acompanhar seu progresso com o histórico completo de foco — em silêncio, em segundo plano.`,
    downloadCta: 'Baixar na Mac App Store',
    watchDemo: 'Ver em ação',
    supportCta: 'Suporte',
    stats: {
      platformLabel: 'Plataforma',
      platformValue: 'macOS nativo',
      languagesLabel: 'Idiomas',
      languagesValue: '12 idiomas',
      dataLabel: 'Coleta de dados',
      dataValue: 'Nenhuma',
      builtWithLabel: 'Feito com',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Uma forma mais quieta de focar',
      title: 'Seu timer está lá quando você precisa—e some quando não precisa.',
      description: `Abra o ${PULSE_APP_NAME} pela barra de menus, escolha uma sessão e feche o popover. O timer continua enquanto você trabalha. No primeiro lançamento, uma breve introdução mostra onde encontrá-lo — respeitando o Reduce Motion quando ativado.`,
      caption:
        'Controles de sessão redesenhados, histórico completo de foco, localização em 12 idiomas, alertas de conclusão por sessão e configurações.',
    },
    rhythm: {
      eyebrow: 'Um ritmo sob o seu controle',
      title: 'Foco, pausa, recuperação, repetição.',
      description: `O ${PULSE_APP_NAME} sugere o próximo passo, mas nunca inicia uma sessão por você. Cada duração pode ser ajustada ao seu dia.`,
    },
    featureShowcases: [
      {
        title: 'Foco',
        badge: '1–120 min',
        description:
          'A contagem regressiva roda em silêncio enquanto você trabalha. Pause, reinicie ou pule — o timer da barra de menus permanece ancorado.',
        imageFile: 'focus-running.png',
        alt: `Sessão de foco do ${PULSE_APP_NAME} com controles de pausa e contagem regressiva na barra de menus`,
      },
      {
        title: 'Barra de menus',
        badge: 'Contagem estável',
        description:
          'Mostre ou oculte o tempo restante na hora. O item de status de largura fixa fica no lugar sem deslocar o popover, até 120:00.',
        imageFile: 'menubar.png',
        alt: `Contagem regressiva do ${PULSE_APP_NAME} na barra de menus do macOS`,
      },
      {
        title: 'Personalização',
        badge: 'Suas regras',
        description:
          'Durações flexíveis, sons e animações de conclusão, 12 idiomas de interface e abertura ao iniciar a sessão.',
        imageFile: 'settings.png',
        alt: `Configurações do ${PULSE_APP_NAME} para durações, alertas de conclusão, idioma e abertura ao iniciar a sessão`,
      },
    ],
    history: {
      eyebrow: 'Progresso sem pressão',
      title: 'Veja o trabalho se acumulando.',
      description:
        'Abra a janela de histórico completo pelo popover ou pelo menu de status. Totais e sequências mostram seu progresso sem transformar o foco em mais um painel para gerenciar.',
      items: ['Tempo total de foco', 'Sessões concluídas', 'Sequência atual', 'Melhor sequência'],
      imageAlt: `Histórico semanal de foco do ${PULSE_APP_NAME} com sessões, horas de foco e sequência`,
    },
    feedback: {
      eyebrow: 'Feedback suave, do seu jeito',
      title: 'Faça terminar valer a pena.',
      description: `Escolha entre seis sons de conclusão calmos e seis celebrações com animais, ou desative qualquer um deles. O ${PULSE_APP_NAME} mostra a mensagem certa quando uma sessão de Foco, Pausa Curta ou Pausa Longa termina.`,
      items: [
        'Título e subtítulo de conclusão conforme a sessão',
        'Interface em 12 idiomas com o idioma do sistema como padrão',
        'Sobreposição de idioma em Ajustes: Sistema ou qualquer idioma compatível',
      ],
      settingsImageAlt: `Configurações do ${PULSE_APP_NAME} para durações, idioma, sons de conclusão e abertura ao iniciar a sessão`,
      celebrationImageAlt: `Animação de celebração do coelho do ${PULSE_APP_NAME} ao concluir uma sessão`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Macaco', 'Coala', 'Gato', 'Raposa', 'Panda', 'Coelho'],
    },
    native: {
      eyebrow: 'Nativo por design',
      title: 'Feito para se sentir em casa no seu Mac.',
      description: `SwiftUI, AppKit e as convenções do sistema macOS mantêm o ${PULSE_APP_NAME} rápido, familiar e confiável — com rótulos VoiceOver e suporte a Reduce Motion em toda a app.`,
      features: [
        {
          title: 'Vive na barra de menus',
          description: 'Sem ícone no Dock e sem janela principal disputando sua atenção.',
        },
        {
          title: 'Permanece preciso',
          description:
            'As sessões continuam corretas após sono, despertar e reinicializações; o histórico é registrado no prazo real.',
        },
        {
          title: 'Mantém os dados no dispositivo',
          description: 'Seus ajustes e o histórico de foco nunca saem do seu Mac.',
        },
        {
          title: 'Fala o seu idioma',
          description:
            'Interface completa em 12 idiomas com o idioma do sistema como padrão e substituição manual em Ajustes.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privado por padrão',
      title: 'Seu foco não é um ponto de dados.',
      description: `O ${PULSE_APP_NAME} não coleta dados. Sem contas, analytics, publicidade ou requisições de rede. Tudo fica no seu Mac.`,
      items: [
        'Sem login',
        'Sem sincronização na nuvem',
        'Sem rastreamento',
        'Sem acesso a arquivos pessoais',
        'Nenhum dado sai do seu Mac',
      ],
    },
    closing: {
      title: 'Abra espaço para o trabalho focado.',
      description: `Baixe o ${PULSE_APP_NAME} na Mac App Store ou leia a política de privacidade e a página de suporte se precisar de ajuda.`,
      getSupport: 'Obter suporte',
      privacy: 'Privacidade',
    },
  },
  support: {
    metaTitle: `Suporte do ${PULSE_APP_NAME}`,
    metaDescription: `Suporte e guia de primeiros passos do ${PULSE_APP_NAME}, um timer Pomodoro da barra de menus para Mac.`,
    title: `Suporte do ${PULSE_APP_NAME}`,
    intro: `O ${PULSE_APP_NAME} é um timer Pomodoro simples da barra de menus para Mac.`,
    gettingStarted: {
      title: 'Primeiros passos',
      steps: [
        'Clique no ícone do app na barra de menus (canto superior direito da tela).',
        'Escolha Foco, Pausa Curta ou Pausa Longa.',
        'Toque em Iniciar. Você pode fechar o popover enquanto o timer estiver rodando.',
      ],
    },
    settings: {
      title: 'Ajustes',
      body: 'Abra a aba Ajustes para alterar as durações das sessões, sons de conclusão, animações da barra de menus e Abertura ao iniciar a sessão.',
    },
    history: {
      title: 'Histórico completo de foco',
      body: 'Abra o Histórico Completo pelo popover ou pelo menu de status da barra de menus para ver o tempo total de foco, as sessões concluídas, a sequência atual e a melhor sequência.',
    },
    requirements: {
      title: 'Requisitos',
      body: 'macOS 14.6 ou posterior.',
    },
    contact: {
      title: 'Contato',
      body: 'Para ajuda, feedback ou relatos de bugs:',
    },
  },
  privacy: {
    metaTitle: `Política de Privacidade do ${PULSE_APP_NAME}`,
    metaDescription: `Política de privacidade do ${PULSE_APP_NAME}, um timer Pomodoro para Mac e iPhone.`,
    title: 'Política de Privacidade',
    subtitle: `${PULSE_APP_NAME} — Timer Pomodoro para Mac e iPhone`,
    lastUpdated: 'Última atualização: 24 de setembro de 2026',
    summary: {
      title: 'Resumo',
      body: `O ${PULSE_APP_NAME} não exige uma conta e não coleta nomes, e-mails ou conteúdo pessoal. O app pode enviar analytics de uso anônimos e que respeitam a privacidade para melhorarmos os fluxos de foco. As configurações do timer e o histórico de foco permanecem no seu dispositivo.`,
    },
    localData: {
      title: 'Dados armazenados no seu dispositivo',
      body: 'As configurações do timer, as preferências de sessão e o histórico de foco são salvos localmente no seu Mac ou iPhone usando o armazenamento padrão do sistema. O conteúdo do histórico de foco em si não é enviado ao nosso provedor de analytics.',
    },
    analytics: {
      title: 'Analytics',
      introBeforeLink: 'Usamos o',
      introAfterLink:
        ', um serviço de analytics focado em privacidade, para entender como o app é usado (por exemplo: sessões de foco ou pausa iniciadas ou concluídas, mudanças na meta diária, alterações de configurações e se o onboarding foi concluído). Os sinais não incluem texto livre, nomes, e-mails nem o conteúdo do seu histórico de foco.',
      identifier:
        'O TelemetryDeck identifica instalações com um identificador com hash limitado ao dispositivo e pode anexar metadados de dispositivo não pessoais (como modelo, versão do sistema operacional e localidade). Esses dados são usados apenas para analytics, não são vinculados à sua identidade por nós e não são usados para rastreamento entre apps ou sites de outras empresas.',
      learnMore: 'Saiba mais:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'Atualizações da App Store',
      body: 'Se você usar “Verificar atualizações” em Ajustes, o app pode entrar em contato com a Apple para ver se há uma versão mais recente disponível na App Store.',
    },
    launchAtLogin: {
      title: 'Abrir ao iniciar a sessão (Mac)',
      body: 'Se você ativar Abrir ao iniciar a sessão em Ajustes no Mac, o app usa as APIs do sistema macOS para se registrar como item de login. Essa preferência fica sob o seu controle e pode ser desativada a qualquer momento.',
    },
    notifications: {
      title: 'Notificações e Live Activities (iPhone)',
      body: 'No iPhone, notificações locais opcionais e Live Activities ajudam você a ver quando uma sessão termina. A permissão só é solicitada quando você escolhe ativar esses recursos. O conteúdo das notificações permanece no seu dispositivo.',
    },
    whatWeDoNotDo: {
      title: 'O que não fazemos',
      items: [
        'Sem conta nem login',
        'Sem redes de publicidade',
        'Sem venda de informações pessoais',
        'Sem acesso aos seus contatos, fotos, localização precisa, câmera ou microfone para analytics',
      ],
    },
    children: {
      title: 'Crianças',
      body: `O ${PULSE_APP_NAME} não coleta intencionalmente informações pessoais de crianças. Os sinais de analytics são anônimos e não incluem conteúdo pessoal.`,
    },
    changes: {
      title: 'Alterações',
      body: 'Se esta política mudar, a versão atualizada será publicada neste URL.',
    },
    contact: {
      title: 'Contato',
      body: 'Dúvidas sobre esta política:',
    },
  },
}
