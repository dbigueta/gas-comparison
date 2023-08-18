import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-neutral-500 h-footer">
      <div className="wrapper">
        <div className="flex justify-between items-center h-full">
          <a
            href="https://www.gasbuddy.com/gaspricemap?lat=48.83148505788142&lng=-122.48382288765794&z=11"
            target="_blank">
            <figure className="scale-transition">
              <Image src="./assets/gasbuddy.png" width="25" height="25" alt="Click here to see local gas prices!" />
            </figure>
          </a>
          <nav>
            <ul className="flex justify-center items-center gap-6">
              <li>
                <a href="https://www.linkedin.com/in/dexter-bigueta" target="_blank">
                  <figure className="scale-transition">
                    <Image src="./assets/linkedin.svg" width="25" height="25" alt="Click here to view my LinkedIn!" />
                  </figure>
                </a>
              </li>
              <li>
                <a href="https://github.com/dbigueta" target="_blank">
                  <figure className="scale-transition">
                    <Image src="./assets/github.svg" width="25" height="25" alt="Click here to view my GitHub!" />
                  </figure>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
