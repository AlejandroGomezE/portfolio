export default function SourceControl({ height, width }: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M28.009 10.962a4.983 4.983 0 10-6.407 4.75 3.985 3.985 0 01-3.558 2.226h-3.986a5.941 5.941 0 00-3.986 1.554V9.864a4.983 4.983 0 10-1.993 0v12.157a5.034 5.034 0 102.422.132 3.985 3.985 0 013.557-2.223h3.986a5.979 5.979 0 005.632-4.051 4.982 4.982 0 004.333-4.917zM6.086 4.983a2.99 2.99 0 115.98 0 2.99 2.99 0 01-5.98 0zm5.98 21.923a2.99 2.99 0 11-5.98 0 2.99 2.99 0 015.98 0zm10.96-12.954a2.99 2.99 0 11.001-5.98 2.99 2.99 0 010 5.98z"
      ></path>
    </svg>
  );
}
