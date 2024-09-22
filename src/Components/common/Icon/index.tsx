interface IconPropsType {
  name: string;
  className?: string;
  symbolName?: string;
}

function Icon({
  name,
  className,
  symbolName = "material-symbols-outlined",
}: IconPropsType) {
  return <i className={`${symbolName} text-sm ${className}`}>{name}</i>;
}

export default Icon;
