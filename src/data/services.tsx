import { 
  MonitorDot, 
  Network, 
  Wrench, 
  ShieldAlert, 
  Printer, 
  PhoneCall, 
  Cloud, 
  Server, 
  Cpu 
} from 'lucide-react';
import React from 'react';

export type CategoryType = {
  id: string;
  name: string;
  description: string;
};

export type ServiceType = {
  slug: string;
  categoryId: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string[];
  features: string[];
  benefits: string[];
  heroImage: string;
};

export const categories: CategoryType[] = [
  {
    id: 'computadores-equipamentos',
    name: 'Computadores e Equipamentos',
    description: 'Soluções completas para manter seus dispositivos operando com máxima eficiência e performance.'
  },
  {
    id: 'infraestrutura-redes',
    name: 'Infraestrutura e Redes',
    description: 'Projetos e manutenções focados na conectividade e comunicação contínua da sua empresa.'
  },
  {
    id: 'sistemas-seguranca',
    name: 'Sistemas e Segurança',
    description: 'Proteção de dados e sistemas operacionais de ponta para a tranquilidade do seu negócio.'
  }
];

export const servicesData: ServiceType[] = [
  {
    slug: 'manutencao-de-computadores',
    categoryId: 'computadores-equipamentos',
    icon: <Wrench />,
    title: 'Manutenção de Computadores',
    shortDesc: 'Montagem, formatação, configuração e reparos essenciais para prolongar a vida útil dos seus equipamentos.',
    longDesc: [
      'Seus computadores estão lentos, travando ou apresentando erros frequentes? A manutenção adequada é a chave para evitar paradas inesperadas que custam tempo e dinheiro para a sua empresa.',
      'Na GGO Informática, oferecemos um serviço completo de diagnóstico e reparo de computadores. Vamos além da simples formatação: otimizamos o sistema, removemos softwares maliciosos e garantimos que o hardware esteja operando em sua capacidade máxima.',
      'Com nossos técnicos especialistas, seus equipamentos terão a vida útil prolongada, evitando gastos desnecessários com a compra de novas máquinas. Deixe o motor tecnológico do seu negócio em nossas mãos.'
    ],
    features: [
      'Diagnóstico completo de hardware e software',
      'Limpeza interna preventiva e troca de pasta térmica',
      'Formatação e reinstalação de sistema operacional',
      'Otimização de velocidade e desempenho'
    ],
    benefits: [
      'Aumento imediato na velocidade de trabalho da equipe',
      'Redução de custos com compra de novos equipamentos',
      'Prevenção contra perda de dados por falhas no disco',
      'Suporte técnico ágil e eficiente'
    ],
    heroImage: '/hero_3.jpg'
  },
  {
    slug: 'manutencao-em-impressoras',
    categoryId: 'computadores-equipamentos',
    icon: <Printer />,
    title: 'Manutenção em Impressoras',
    shortDesc: 'Serviço especializado para manter suas impressões nítidas e evitar interrupções no fluxo de trabalho.',
    longDesc: [
      'Poucas coisas são tão frustrantes no ambiente de trabalho quanto uma impressora que falha no momento em que você mais precisa imprimir um documento importante. Papel atolado, falha na tinta, ruídos estranhos e erros de conexão atrasam toda a operação.',
      'Nossa equipe especializada realiza a manutenção preventiva e corretiva de impressoras de diversos modelos e marcas. Identificamos e resolvemos problemas mecânicos e lógicos com precisão e rapidez.',
      'Garantimos que o seu fluxo documental nunca pare, mantendo a qualidade de impressão sempre nítida e os custos com tintas e peças de reposição sempre sob controle.'
    ],
    features: [
      'Desobstrução e limpeza de cabeçotes de impressão',
      'Troca de componentes desgastados (rolos tracionadores, fusores)',
      'Configuração em rede para compartilhamento otimizado',
      'Ajustes de calibragem para economia de tinta/toner'
    ],
    benefits: [
      'Fim das interrupções por atolamento ou falha',
      'Impressões sempre nítidas e profissionais',
      'Aumento da vida útil do equipamento',
      'Economia no consumo de suprimentos'
    ],
    heroImage: '/hero_1.jpg'
  },
  {
    slug: 'montagem-de-maquinas-gamer-e-alto-desempenho',
    categoryId: 'computadores-equipamentos',
    icon: <Cpu />,
    title: 'Montagem de Máquinas de Alto Desempenho',
    shortDesc: 'Workstations e PCs Gamer sob medida para entregar a potência exata que o seu trabalho ou jogo exige.',
    longDesc: [
      'Seja para renderização de vídeos, arquitetura, design gráfico avançado ou para rodar os jogos mais pesados do mercado, um computador comum não é suficiente. Você precisa de uma máquina construída sob medida, onde cada componente trabalha em harmonia para entregar o máximo de performance.',
      'A GGO Informática é especialista na montagem de workstations corporativas e setups gamers de alto desempenho. Selecionamos rigorosamente os melhores processadores, placas de vídeo, memórias e sistemas de refrigeração para o seu orçamento.',
      'Nós cuidamos de toda a montagem física, do cable management (organização dos cabos) perfeito e das configurações finas de BIOS e sistema operacional, entregando uma verdadeira máquina de elite pronta para uso.'
    ],
    features: [
      'Consultoria na escolha das melhores peças',
      'Montagem profissional com cable management impecável',
      'Testes de stress térmico e de estabilidade (Benchmark)',
      'Configuração de perfis de ventilação e otimização de BIOS'
    ],
    benefits: [
      'Performance brutal em tarefas pesadas',
      'Máquina perfeitamente balanceada (sem gargalos)',
      'Estabilidade térmica mesmo em uso extremo',
      'Garantia de montagem segura e profissional'
    ],
    heroImage: '/hero_3.jpg'
  },
  {
    slug: 'infraestrutura-de-redes',
    categoryId: 'infraestrutura-redes',
    icon: <Network />,
    title: 'Infraestrutura de Redes',
    shortDesc: 'Administração e projetos de redes seguras e eficientes, cabeada ou wireless, para seu negócio.',
    longDesc: [
      'Uma rede instável, que cai a todo momento ou com pontos cegos de Wi-Fi, paralisa a produtividade da sua equipe. A base de qualquer empresa moderna é uma infraestrutura de rede robusta, rápida e altamente segura.',
      'Realizamos desde o planejamento estrutural até a passagem de cabos, configuração de switches, roteadores e access points. Desenhamos a rede da sua empresa para suportar o tráfego de dados necessário sem gargalos.',
      'Acabe com os problemas de conexão. Tenha uma infraestrutura profissional onde a internet chega com qualidade em todas as estações de trabalho, garantindo que sua comunicação interna e externa flua perfeitamente.'
    ],
    features: [
      'Cabeamento estruturado e certificação de rede',
      'Configuração de redes sem fio (Wi-Fi) corporativas de alta cobertura',
      'Instalação e gerenciamento de Roteadores, Switches e Firewalls',
      'Segmentação de rede (VLANs) para maior segurança e performance'
    ],
    benefits: [
      'Conexão de internet estável e de alta velocidade',
      'Fim dos "pontos cegos" de Wi-Fi no escritório',
      'Rede organizada e livre de "gambiarras"',
      'Maior segurança contra invasões e vazamento de dados'
    ],
    heroImage: '/hero_2.jpg'
  },
  {
    slug: 'suporte-e-manutencao-de-servidores',
    categoryId: 'infraestrutura-redes',
    icon: <Server />,
    title: 'Suporte e Manutenção de Servidores',
    shortDesc: 'Garantimos a estabilidade e a segurança do coração do seu negócio com suporte especializado.',
    longDesc: [
      'O servidor é o cérebro da sua empresa. Se ele parar, toda a operação para. É nele que rodam seus sistemas de gestão (ERP), banco de dados e arquivos mais sensíveis.',
      'Na GGO Informática, oferecemos suporte técnico especializado e gerenciamento contínuo para servidores Windows e Linux. Cuidamos do monitoramento de recursos, atualização de segurança, gestão de usuários e permissões de acesso.',
      'Atuamos de forma proativa, identificando possíveis falhas antes que elas causem tempo de inatividade. Tenha a tranquilidade de saber que os dados críticos da sua empresa estão sob a proteção de especialistas.'
    ],
    features: [
      'Implementação e administração de servidores Windows Server e Linux',
      'Gestão de Active Directory (AD) e controle de acessos',
      'Monitoramento contínuo de hardware (CPU, Memória, Discos)',
      'Configuração de redundância (RAID) e virtualização'
    ],
    benefits: [
      'Disponibilidade máxima dos sistemas da empresa (Uptime elevado)',
      'Segurança rigorosa sobre quem acessa quais arquivos',
      'Prevenção ativa contra falhas catastróficas',
      'Resposta rápida a incidentes críticos'
    ],
    heroImage: '/about_datacenter.jpg'
  },
  {
    slug: 'pabx-virtual',
    categoryId: 'infraestrutura-redes',
    icon: <PhoneCall />,
    title: 'PABX Virtual',
    shortDesc: 'Modernize sua comunicação corporativa com telefonia em nuvem, reduzindo custos e integrando equipes.',
    longDesc: [
      'Sua empresa ainda sofre com linhas telefônicas ocupadas, fios espalhados e altos custos em ligações? O PABX Virtual (Telefonia IP em Nuvem) é a evolução definitiva para a comunicação do seu negócio.',
      'Sem a necessidade de equipamentos caros na parede, o PABX Virtual permite que seus colaboradores atendam ramais pelo computador, smartphone ou telefone IP, de qualquer lugar do mundo. Ideal para equipes em home office ou filiais.',
      'Tenha recursos de grandes corporações por uma fração do preço: URAs (atendimento automático "digite 1 para vendas..."), gravação de chamadas, fila de atendimento e relatórios completos de produtividade.'
    ],
    features: [
      'Configuração de URA personalizada e filas de atendimento',
      'Ramais em smartphones (Softphones) ou Computadores',
      'Gravação de chamadas e relatórios detalhados',
      'Portabilidade do seu número fixo atual'
    ],
    benefits: [
      'Redução drástica na conta de telefone mensal',
      'Profissionalização do atendimento ao cliente',
      'Mobilidade total: atenda seu ramal de qualquer lugar',
      'Zero custo com manutenção de centrais físicas antigas'
    ],
    heroImage: '/hero_2.jpg'
  },
  {
    slug: 'instalacao-de-sistemas',
    categoryId: 'sistemas-seguranca',
    icon: <MonitorDot />,
    title: 'Instalação de Sistemas',
    shortDesc: 'Implementação de sistemas operacionais e softwares com configuração perfeita para máxima eficiência.',
    longDesc: [
      'A instalação incorreta de um sistema operacional ou software vital pode gerar instabilidades crônicas, travamentos e vulnerabilidades de segurança que afetam diretamente a produção.',
      'Realizamos a instalação limpa e a configuração avançada de sistemas operacionais (Windows, Linux, macOS), pacotes de produtividade (Office, Adobe) e softwares de gestão específicos da sua área de atuação.',
      'Entregamos o computador ou servidor pronto para uso, com todos os drivers atualizados, políticas de segurança aplicadas e totalmente otimizado para não desperdiçar um segundo de tempo de inicialização ou processamento.'
    ],
    features: [
      'Instalação limpa de Windows, Linux ou macOS',
      'Configuração de pacotes corporativos (Office 365, etc)',
      'Atualização rigorosa de drivers e firmware',
      'Configuração de inicialização rápida e remoção de bloatwares'
    ],
    benefits: [
      'Sistemas rodando com a máxima fluidez possível',
      'Eliminação de erros de incompatibilidade',
      'Equipamento pronto para trabalho imediato',
      'Maior segurança com sistemas atualizados e originais'
    ],
    heroImage: '/hero_1.jpg'
  },
  {
    slug: 'suporte-preventivo',
    categoryId: 'sistemas-seguranca',
    icon: <ShieldAlert />,
    title: 'Suporte Preventivo',
    shortDesc: 'Visitas periódicas para evitar falhas críticas, garantindo que seu negócio funcione sem interrupções.',
    longDesc: [
      'Esperar um equipamento quebrar para só então chamar o suporte de TI é o modelo mais caro e ineficiente que uma empresa pode adotar. O tempo de máquina parada representa dinheiro perdido.',
      'Com os contratos de Suporte Preventivo da GGO Informática, nós cuidamos da saúde da sua infraestrutura antes que os problemas aconteçam. Realizamos visitas periódicas ou acessos remotos programados para auditoria e manutenção.',
      'Limpamos logs, atualizamos antivírus, verificamos a integridade dos discos rígidos e antecipamos a necessidade de substituição de peças. Tenha um departamento de TI altamente qualificado à sua disposição, operando nos bastidores para que você brilhe no palco.'
    ],
    features: [
      'Acesso remoto rápido e suporte presencial programado',
      'Verificação contínua da saúde dos discos rígidos e sistemas',
      'Atualização de patches de segurança e antivírus',
      'Inventário completo e planejamento de vida útil da TI'
    ],
    benefits: [
      'Redução drástica de incidentes de TI no dia a dia',
      'Custos de TI previsíveis e controlados (Contrato Mensal)',
      'Atendimento prioritário e resoluções rápidas',
      'Foco total do cliente no seu negócio, sem se preocupar com tecnologia'
    ],
    heroImage: '/hero_2.jpg'
  },
  {
    slug: 'backup-em-nuvem',
    categoryId: 'sistemas-seguranca',
    icon: <Cloud />,
    title: 'Backup em Nuvem',
    shortDesc: 'Proteção absoluta dos dados da sua empresa contra ataques cibernéticos, sequestros (Ransomware) e falhas.',
    longDesc: [
      'Qual seria o prejuízo se a sua empresa perdesse todos os arquivos, planilhas financeiras e banco de dados hoje? Ataques de Ransomware (sequestro de dados), incêndios, furtos ou queimas de HD são ameaças reais.',
      'A solução definitiva é o Backup em Nuvem da GGO Informática. Implementamos rotinas automáticas de cópias de segurança que enviam seus dados criptografados para datacenters altamente seguros, distantes da sua empresa.',
      'Não dependa mais de HDs externos esquecidos em gavetas ou pendrives suscetíveis a vírus. Tenha a certeza de que a história e o valor da sua empresa estão blindados, e em caso de desastre, a recuperação será rápida e total.'
    ],
    features: [
      'Rotinas automatizadas de backup (diárias, semanais, etc)',
      'Criptografia de nível militar durante o envio e armazenamento',
      'Retenção de múltiplas versões (Versioning) de arquivos',
      'Testes periódicos de restauração (Restore) para garantir integridade'
    ],
    benefits: [
      'Blindagem contra ataques de hackers e Ransomware',
      'Recuperação rápida de arquivos apagados acidentalmente',
      'Zero preocupação com rotinas manuais',
      'Atendimento à LGPD quanto à segurança da informação'
    ],
    heroImage: '/about_datacenter.jpg'
  }
];
