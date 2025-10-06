export default function Footer() {
  return (
    <footer className="bg-[#092C4C]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between md:items-start">
          <div className="flex flex-col md:flex-row md:space-x-12 md:w-2/3">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                  Movies
                </span>
              </a>
            </div>
            {/* About Us */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                About Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-lg text-sm leading-relaxed">
                Movies is a free TV shows streaming website with zero ads, it allows you 
                to watch TV shows online, watch TV shows online free in high quality 
                for free. You can also download full TV shows and watch it later if you want.
              </p>
              <p className="text-gray-600 dark:text-gray-400 max-w-lg mt-2 text-sm leading-relaxed">
                This site does not store any files on our server, we only link to the media 
                which is hosted on 3rd party services.
              </p>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Follow Us
            </h2>
            <div className="flex space-x-6">
              {/* Facebook */}
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12Z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-gray-500 hover:text-pink-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10Zm-5 3a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.5-.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="text-gray-500 hover:text-sky-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.5 3h3l-7.5 8.5L21 21h-6l-4.5-5-4.5 5H2l7.9-9.1L2.5 3h6l4 4.5 4-4.5Z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="text-gray-500 hover:text-red-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.8-1.6-.8-2-1C17.9 2.5 12 2.5 12 2.5h-.1s-5.9 0-8.7.4c-.4.2-1.2.2-2 1-.6.7-.8 2.3-.8 2.3S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.8 2.3c.8.8 1.9.8 2.4.9 1.8.2 7.6.4 7.6.4s5.9 0 8.7-.4c.4-.2 1.2-.2 2-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8ZM9.6 14.3V7.7l6.5 3.3-6.5 3.3Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="#" className="hover:underline">Movies</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
