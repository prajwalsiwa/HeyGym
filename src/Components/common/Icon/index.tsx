interface IconPropsType {
    name: string;
    className?: string
}

function Icon({ name, className }: IconPropsType) {
  return (
 
      <i className={`material-symbols-outlined text-sm ${className}`}>{name}</i>
  );
}

export default Icon;
