const Footer: React.FC = () => {
  return (
    <>
      <div className="flex grow"></div>
      <footer className="border border-zinc-200 py-6">
        <div className="container mx-auto flex justify-center">
          <span
            className="text-sm font-bold text-black tracking-tight"
            aria-label="Copyright notice"
          >
            All rights reserved &#169; Guillermo Jimenez 2024
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
