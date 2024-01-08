import githubIcon from '@/public/icons/github.svg';
import linkedinIcon from '@/public/icons/linkedin.svg';
import telegramIcon from '@/public/icons/telegram.svg';

import { IconBtnNameType } from '@/types';

function getIconByName(icon: IconBtnNameType): any | null {
  let iconRef = null;

  switch (icon.toLowerCase()) {
    case 'linkedin':
      iconRef = linkedinIcon;

      break;
    case 'github':
      iconRef = githubIcon;
      break;

    case 'telegram':
      iconRef = telegramIcon;
      break;

    default:
      break;
  }

  return { iconRef };
}

export default getIconByName;
