import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-neutral-500 h-footer">
      <div className="wrapper">
        <nav className="h-full">
          <ul className="flex justify-center items-center gap-6 h-full">
            <li>
              <a href="https://www.linkedin.com/in/dexter-bigueta" target="_blank">
                <figure className="scale-transition">
                  <Image src="/assets/LinkedIn.svg" width="25" height="25" alt="Click here to view my LinkedIn!" />
                </figure>
              </a>
            </li>
            <li>
              <a href="https://github.com/dbigueta" target="_blank">
                <figure className="scale-transition">
                  <Image src="/assets/Github.svg" width="25" height="25" alt="Click here to view my GitHub!" />
                </figure>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
