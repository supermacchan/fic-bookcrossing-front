// icon buttons
export type IconBtnNameType = string;

export type IconBtnItemType = {
  link?: string;
  linkAria?: string;
  svgAria: string;
  svg: IconBtnNameType;
  text?: string;
  navLink?: string;
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

// form
export type InputType = {
  name: string;
  label: string | null;
  placeholder: string;
  type: string;
  dataField: string;
  required: boolean;
  autocomplete: string;
  warning?: string;
};
