
export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="flex h-24 w-full items-center justify-center bg-transparent pb-0 max-md:px-6">
        <p className="mx-auto text-sm md:text-white text-footer text-center">
          Copyright &copy; {year} Matthew Norton{" "}
          <br/>
          <span className="ml-2">All rights reserved.</span>
        </p>
      </footer>
    </>
  );
}
