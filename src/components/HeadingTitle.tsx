type H1Props = {
  children: React.ReactNode;
  className?: string;
};

function HeadingTitle({ children }: H1Props) {
  return (
    <h1 className="text-4xl md:text-5xl font-bold text-center capitalize">
      {children}
    </h1>
  );
}

export default HeadingTitle;
