import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          <a href="#!" className="me-6 text-2xl text-blue-500 hover:text-blue-600">
            <FaTwitter />
          </a>
          <a href="#!" className="me-6 text-2xl text-blue-500 hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="#!" className="me-6 text-2xl text-blue-500 hover:text-blue-600">
            <FaInstagram />
          </a>
          <a href="#!" className="me-6 text-2xl text-blue-500 hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="#!" className="text-2xl text-blue-500 hover:text-blue-600">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="me-3 text-2xl text-blue-500">
                <FaTwitter />
              </span>
              TW Elements
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a href="#!">Angular</a>
            </p>
            <p className="mb-4">
              <a href="#!">React</a>
            </p>
            <p className="mb-4">
              <a href="#!">Vue</a>
            </p>
            <p>
              <a href="#!">Laravel</a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!">Pricing</a>
            </p>
            <p className="mb-4">
              <a href="#!">Settings</a>
            </p>
            <p className="mb-4">
              <a href="#!">Orders</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 text-2xl text-blue-500">
                <FaTwitter />
              </span>
              New York, NY 10012, US
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 text-2xl text-blue-500">
                <FaFacebook />
              </span>
              info@example.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 text-2xl text-blue-500">
                <FaInstagram />
              </span>
              + 01 234 567 88
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <span className="me-3 text-2xl text-blue-500">
                <FaLinkedin />
              </span>
              + 01 234 567 89
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black/5 p-6 text-center">
        <span>© 2023 Copyright:</span>
        <a className="font-semibold" href="https://tw-elements.com/">TW Elements</a>
      </div>
    </footer>
  );
}

export default Footer;
