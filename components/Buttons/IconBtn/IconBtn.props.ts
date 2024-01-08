import { IconBtnItemType } from '@/types';

export interface IconBtnProps {
  item: IconBtnItemType;
  actionHandler?: () => void;
  className?: string | undefined;
}
