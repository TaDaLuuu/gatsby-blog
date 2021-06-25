export type Page<T> = React.FC<T> & {
  layout: React.FC<any>;
};
