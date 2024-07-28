function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className={`size-6 stroke-white ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

type IconProps = {
  className?: string;
};

function Whatsapp({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" fill="#00D95F" rx="12"></rect>
      <path
        fill="#fff"
        d="M6 17.52l.861-3.198A5.91 5.91 0 018.46 6.727a5.95 5.95 0 017.764.501 5.917 5.917 0 01.603 7.737 5.952 5.952 0 01-7.593 1.693L6 17.52zm3.39-2.059l.2.118a4.81 4.81 0 005.813-.705 4.783 4.783 0 00.803-5.786 4.795 4.795 0 00-2.317-2.044 4.811 4.811 0 00-5.66 1.502 4.78 4.78 0 00-.992 2.922c0 .876.242 1.735.702 2.482l.125.206-.481 1.785 1.807-.48z"></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M14.244 12.29a.99.99 0 00-.848-.193c-.22.09-.363.436-.505.608a.21.21 0 01-.271.061 3.839 3.839 0 01-1.919-1.64.23.23 0 01.03-.318c.16-.156.276-.35.34-.564.014-.236-.04-.47-.156-.676a1.583 1.583 0 00-.491-.74.68.68 0 00-.73.11 1.495 1.495 0 00-.518 1.184c0 .126.017.25.048.372.078.292.2.571.359.828.115.197.24.388.376.572.44.603.994 1.115 1.63 1.508.32.2.661.361 1.017.483.37.168.78.232 1.183.186a1.421 1.421 0 001.072-.794.675.675 0 00.05-.406c-.06-.28-.437-.446-.667-.582z"
        clipRule="evenodd"></path>
    </svg>
  );
}

export const Icons = {
  whatsapp: Whatsapp,
  arrow: ArrowIcon,
};
