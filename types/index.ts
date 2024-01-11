// icon buttons
export type IconBtnNameType = string;

export type IconBtnItemType = {
  link?: string;
  linkAria?: string;
  svgAria: string;
  svg: IconBtnNameType;
  text?: string;
};

// books
export type CardBookInfoType = {
  id: string;
  image: string;
  title: string;
  author: string;
  genres: string[];
  available: boolean;
};
