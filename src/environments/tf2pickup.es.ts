import { version } from 'package.json';
import { entryQueue6v6 } from './entry-queue-6v6';

const discordInvitation = 'https://discord.gg/9YKcMgg';

export const environment = {
  production: true,
  apiUrl: 'https://api.tf2pickup.es',
  wsUrl: 'https://api.tf2pickup.es',
  version,
  headerLinks: [
    { name: 'discord', icon: '/assets/ui_icon_discord.png', target: discordInvitation, tooltip: 'Join us on discord!' },
  ],
  footerLinks: [
    { name: 'github', target: 'https://github.com/tf2pickup-pl' },
    { name: 'discord', target: discordInvitation },
    { name: 'changelog', target: 'https://github.com/tf2pickup-pl/client/blob/master/CHANGELOG.md' },
  ],
  titleSuffix: 'tf2pickup.es • Spanish Team Fortress 2 Pickup-up games',
  entryQueue: entryQueue6v6,
};
