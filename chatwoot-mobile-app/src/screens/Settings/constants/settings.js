const preferencesSections = [
  {
    leftIcon: 'arrow-swap-outline',
    title: 'Trocar de Conta',
    rightIcon: 'arrow-chevron-right-outline',
    routeName: 'SwitchAccount',
  },

  {
    leftIcon: 'bell-outline',
    title: 'Preferência de Notificação',
    rightIcon: 'arrow-chevron-right-outline',
    routeName: 'NotificationPreferences',
  },
  {
    leftIcon: 'globe-outline',
    title: 'Mudar Idioma',
    rightIcon: 'arrow-chevron-right-outline',
    routeName: 'ChangeLanguage',
  },
  // {
  //   leftIcon: 'color-palette-outline',
  //   title: 'Appearance',
  //   rightIcon: 'arrow-chevron-right-outline',
  //   routeName: 'ChangeAppearance',
  // },
];

const supportSection = [
  {
    leftIcon: 'book-open-globe-outline',
    title: 'Read Docs',
    rightIcon: 'open-outline',
    routeName: 'ReadDocs',
  },
  {
    leftIcon: 'chat-help-outline',
    title: 'Chat with Us',
    rightIcon: 'open-screen-outline',
    routeName: 'ChatWithUs',
  },
];

export default {
  preferencesSections,
  supportSection,
};
