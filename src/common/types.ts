export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export type ScrollTextProps = {
  text?: string;
};

export type OverlayProps = {
  children?: React.ReactNode;
};

export type FullWidthPicProps = {
  src?: string;
  alt?: string;
};

export type HeaderProps = {
  title: string;
  description: string;
};
