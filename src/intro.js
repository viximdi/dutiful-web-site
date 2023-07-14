import "./intro.css";

const Intro = () => {
  return (
    <>
      <main>
        <div>
          <form>
            <div>
              <label>
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1229_3252)">
                    <path
                      d="M22.3601 8.27L22.0701 5.5C21.6501 2.48 20.2801 1.25 17.3501 1.25H14.9901H13.5101H10.4701H8.99014H6.59014C3.65014 1.25 2.29014 2.48 1.86014 5.53L1.59014 8.28C1.49014 9.35 1.78014 10.39 2.41014 11.2C3.17014 12.19 4.34014 12.75 5.64014 12.75C6.90014 12.75 8.11014 12.12 8.87014 11.11C9.55014 12.12 10.7101 12.75 12.0001 12.75C13.2901 12.75 14.4201 12.15 15.1101 11.15C15.8801 12.14 17.0701 12.75 18.3101 12.75C19.6401 12.75 20.8401 12.16 21.5901 11.12C22.1901 10.32 22.4601 9.31 22.3601 8.27Z"
                      fill="#C5A3F1"
                    />
                    <path
                      d="M11.3501 16.66C10.0801 16.79 9.12012 17.87 9.12012 19.15V21.89C9.12012 22.16 9.34012 22.38 9.61012 22.38H14.3801C14.6501 22.38 14.8701 22.16 14.8701 21.89V19.5C14.8801 17.41 13.6501 16.42 11.3501 16.66Z"
                      fill="#C5A3F1"
                    />
                    <path
                      d="M21.3699 14.4V17.38C21.3699 20.14 19.1299 22.38 16.3699 22.38C16.0999 22.38 15.8799 22.16 15.8799 21.89V19.5C15.8799 18.22 15.4899 17.22 14.7299 16.54C14.0599 15.93 13.1499 15.63 12.0199 15.63C11.7699 15.63 11.5199 15.64 11.2499 15.67C9.46988 15.85 8.11988 17.35 8.11988 19.15V21.89C8.11988 22.16 7.89988 22.38 7.62988 22.38C4.86988 22.38 2.62988 20.14 2.62988 17.38V14.42C2.62988 13.72 3.31988 13.25 3.96988 13.48C4.23988 13.57 4.50988 13.64 4.78988 13.68C4.90988 13.7 5.03988 13.72 5.15988 13.72C5.31988 13.74 5.47988 13.75 5.63988 13.75C6.79988 13.75 7.93988 13.32 8.83988 12.58C9.69988 13.32 10.8199 13.75 11.9999 13.75C13.1899 13.75 14.2899 13.34 15.1499 12.6C16.0499 13.33 17.1699 13.75 18.3099 13.75C18.4899 13.75 18.6699 13.74 18.8399 13.72C18.9599 13.71 19.0699 13.7 19.1799 13.68C19.4899 13.64 19.7699 13.55 20.0499 13.46C20.6999 13.24 21.3699 13.72 21.3699 14.4Z"
                      fill="#C5A3F1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1229_3252">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <select id="categorySelect">
                  <option selected disabled hidden>
                    Searching for...
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </label>
              <div>.</div>
              <label>
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.5 9.37668C3.5 5.30614 7.34388 2.01608 11.9934 2.01608C16.6561 2.01608 20.5 5.30614 20.5 9.37668C20.5 11.4279 19.657 13.3322 18.2695 14.9462C16.7388 16.7267 14.8522 18.2779 12.7285 19.4955C12.2425 19.7769 11.8039 19.7981 11.2704 19.4955C9.13474 18.2779 7.24809 16.7267 5.7305 14.9462C4.34198 13.3322 3.5 11.4279 3.5 9.37668ZM9.19423 9.60587C9.19423 10.9695 10.4517 12.042 11.9934 12.042C13.5362 12.042 14.8058 10.9695 14.8058 9.60587C14.8058 8.25285 13.5362 7.12815 11.9934 7.12815C10.4517 7.12815 9.19423 8.25285 9.19423 9.60587Z"
                    fill="#C5A3F1"
                  />
                </svg>

                <select id="categorySelect">
                  <option selected disabled hidden>
                    In or around
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </label>
            </div>
            <button>Search</button>
          </form>

          <div className="content">
            <h1>
              Why list with Dutiful?
              <svg
                width="150"
                height="22"
                viewBox="0 0 219 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M47.6638 4.47978C68.4665 3.83543 89.2805 3.4212 110.095 3.2371C130.909 3.053 151.53 3.11437 172.242 3.40586C184.008 3.57462 195.785 3.80474 207.551 4.11158L209.148 0.966528C182.287 1.59554 155.437 2.37796 128.587 3.31381C101.737 4.24965 74.8874 5.33891 48.0375 6.59693C32.9649 7.30265 17.9037 8.03905 2.83106 8.83682C1.94777 8.88285 0.622827 9.18968 0.124559 10.3556C-0.339736 11.4449 0.520908 12.0126 1.23434 11.9819C29.2166 11.0153 57.2215 10.9233 85.2151 11.7211C113.209 12.5188 141.18 14.2218 169.117 16.7992C184.812 18.2413 200.496 19.9749 216.158 21.9847C217.007 22.0921 218.411 21.5244 218.864 20.4658C219.362 19.3152 218.434 18.9163 217.754 18.8396C189.885 15.265 161.948 12.5649 133.989 10.7545C106.029 8.94421 78.0242 8.03905 50.0306 8.02371C34.3012 8.02371 18.5718 8.28452 2.84238 8.83682L1.24566 11.9819C28.0842 10.5551 54.934 9.29707 81.7838 8.17713C108.634 7.07252 135.484 6.106 162.333 5.30823C177.406 4.86332 192.49 4.44909 207.562 4.09623C208.446 4.08089 209.782 3.72803 210.269 2.57741C210.756 1.42678 209.861 0.966528 209.159 0.951186C188.334 0.429568 167.531 0.107392 146.717 0.0306837C125.903 -0.0460248 105.282 0.0920505 84.5696 0.475593C72.8037 0.690377 61.0265 0.981869 49.2606 1.35007C48.3773 1.38075 47.041 1.71827 46.5541 2.8689C46.0898 3.95816 46.9504 4.5258 47.6638 4.49512V4.47978Z"
                  fill="#E2A4FF"
                />
              </svg>
            </h1>

            <p>
              Creating leads, drawing sales, increasing visibility, owning a
              landing page for their business, managing projects, and many other
              things are challenges for many businesses in Nigeria. This is when
              Dutiful steps in. Watch the video to find out more.
            </p>
          </div>
        </div>

        <div className="video-container">
          <svg
            className="deco1"
            width="71"
            height="77"
            viewBox="0 0 71 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_94_2662)">
              <path
                d="M66.8701 26.93L58.5501 14.07L54.5201 7.84999C53.1001 5.65999 51.5101 3.50999 50.2801 1.20999C49.8301 0.379988 50.6701 0.0299881 51.3901 -1.18683e-05C52.3301 -0.0400119 53.5201 0.349988 54.1001 1.11999C55.6901 3.21999 57.0201 5.54999 58.4501 7.75999L62.4801 13.98L70.8101 26.84C71.3501 27.67 70.3401 28.05 69.6601 28.08C68.7501 28.12 67.4001 27.74 66.8701 26.92V26.93Z"
                fill="#E2A4FF"
              />
              <path
                d="M50.9199 40.99C34.5299 35.62 18.0799 30.4 1.74992 24.84C1.17992 24.65 -0.200089 24.16 0.0199127 23.31C0.239914 22.5 1.73991 22.68 2.27991 22.85C18.7299 28.03 35.0799 33.54 51.4699 38.92C52.0699 39.12 53.5099 39.63 53.2699 40.52C53.0499 41.36 51.4699 41.19 50.9099 41L50.9199 40.99Z"
                fill="#E2A4FF"
              />
              <path
                d="M54.26 59.74L41.49 67.89L35.21 71.9C33.05 73.28 30.92 74.79 28.67 76.01C27.9 76.42 26.71 76.11 26 75.74C25.63 75.55 24.46 74.73 25.14 74.22C27.2 72.67 29.47 71.37 31.64 69.99L37.92 65.98L50.9 57.69C52.06 56.95 55.97 58.65 54.27 59.74H54.26Z"
                fill="#E2A4FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_94_2662">
                <rect
                  width="70.96"
                  height="76.21"
                  fill="white"
                  transform="matrix(-1 0 0 1 70.96 0)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            className="deco0"
            width="201"
            height="30"
            viewBox="0 0 231 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="171" height="35" fill="#E2A4FF" />
            <text x="30" y="20" font-size="16" fill="black">
              Watch the video
            </text>
          </svg>

          <iframe
            src="https://www.youtube.com/embed/TpcdSWsVhG8"
            title="YouTube Video Player"
            frameborder="5"
            allowfullscreen></iframe>

          <svg
            className="deco2"
            width="342"
            height="198"
            viewBox="0 0 342 198"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M80.8953 106.3C86.0577 102.721 91.299 99.2355 96.6447 95.941C95.3406 98.7402 94.1617 101.606 93.1227 104.523C62.929 124.629 35.9099 149.653 13.1535 177.642H13.12L12.6698 178.195C10.8932 180.374 7.47276 181.635 4.48331 181.509L4.47313 181.508C3.68213 181.48 2.48177 181.163 1.79588 180.679C1.50215 180.471 1.44922 180.338 1.44317 180.321C1.44631 180.273 1.48262 180.111 1.73048 179.808L1.73723 179.8C9.05347 170.722 16.7596 161.998 24.8912 153.628L24.8915 153.628C41.9347 136.077 60.7561 120.254 80.8951 106.3L80.8953 106.3ZM97.397 101.724C98.5924 98.7753 99.9348 95.8864 101.408 93.075C106.432 90.1282 111.552 87.3715 116.789 84.8838C115.184 87.3928 113.693 89.9834 112.326 92.6585C111.925 92.8856 111.527 93.1137 111.13 93.3425L111.13 93.3427C106.486 96.0225 101.907 98.8182 97.397 101.724ZM120.063 80.0893C114.671 82.4566 109.413 85.1148 104.271 87.9805C116.08 68.3417 134.733 53.266 154.561 41.7567C175.792 29.4537 197.707 20.5986 222.634 13.5708C247.543 6.54812 273.272 2.62973 299.147 1.71177C311.82 1.28817 324.518 1.57099 337.102 2.7697L337.106 2.77C348.123 3.79505 359.314 5.58515 368.948 10.7204L368.95 10.7212C375.28 14.0864 380.194 18.7993 383.706 24.337C379.871 25.4963 376.067 26.7504 372.298 28.0981C367.641 20.5776 360.652 15.8796 352.824 12.9015C343.689 9.42656 333.322 8.25619 323.971 7.65163C279.145 4.72945 233.779 11.999 192.242 29.0724L192.242 29.0726C165.252 40.1767 137.428 56.2033 120.063 80.0893ZM302.5 71.8064C322.558 54.4848 345.921 41.0319 370.941 31.7832C371.22 32.324 371.488 32.8789 371.743 33.4483C372.176 34.4173 372.569 35.3876 372.922 36.3585C363.334 39.9846 354.007 44.3176 345.031 49.3643C329.143 58.2972 312.527 69.5704 300.52 83.6697L300.519 83.671C294.376 90.902 289.795 101.231 295.718 110.752C300.013 117.67 308.768 122.676 317.057 122.524L317.058 122.524C326.883 122.335 335.746 115.692 342.483 110.085C350.561 103.372 358.283 95.8773 364.615 87.4207C375.054 73.4809 381.849 55.9328 376.672 38.1692C380.506 36.7797 384.381 35.5034 388.292 34.3399C390.903 42.8074 390.993 52.2356 388.597 61.354L388.596 61.3546C382.988 82.7301 364.469 101.655 347.511 114.216C339.128 120.425 328.775 125.54 318.345 127.256C307.946 128.967 297.542 127.296 288.824 120.048L288.823 120.047C281.909 114.306 278.953 105.368 281.867 96.8675C285.349 86.7505 294.196 78.9928 302.5 71.8064ZM395.702 29.1837C393.861 29.6526 392.027 30.1455 390.199 30.6626C389.615 29.1199 388.947 27.6113 388.196 26.1444C438.643 11.7585 494.038 13.8825 541.894 35.0583C542.182 35.1861 542.343 35.3047 542.427 35.3854C542.506 35.4607 542.523 35.5064 542.528 35.5194C542.535 35.5395 542.574 35.6816 542.416 36.0293C542.077 36.772 541.187 37.6477 540.379 38.1643C537.748 39.8088 533.895 40.5603 531.253 39.4342C522.677 35.7585 513.915 32.6152 504.896 30.1136L504.895 30.1133C469.377 20.291 431.39 20.078 395.702 29.1837ZM375.737 35.3172C375.361 34.2856 374.943 33.254 374.481 32.2229C374.257 31.7227 374.025 31.2328 373.783 30.7531C377.573 29.407 381.399 28.1567 385.255 27.0034C386.028 28.4589 386.712 29.9615 387.308 31.5027C383.415 32.6636 379.556 33.935 375.737 35.3172ZM93.1499 150.924C89.2857 136.272 90.6851 120.802 95.6199 106.466C100.356 103.333 105.17 100.322 110.058 97.4407C108.001 102.132 106.321 107.07 105.073 112.269C100.394 131.712 102.862 153.177 115.77 169.334L115.772 169.337C126.21 182.349 143.756 193.564 161.931 190.119C171.005 188.4 179.21 183.224 185.968 176.621C192.731 170.012 198.122 161.9 201.564 154.149C208.415 138.719 210.836 120.726 203.968 104.07C197.047 87.2833 181.1 77.5492 162.712 77.2207C146.806 76.9365 131.072 82.6929 117.192 89.9971C118.683 87.4187 120.297 84.9232 122.022 82.5077C128.362 79.7634 134.878 77.4387 141.604 75.6677C160.846 70.6019 182.73 69.7959 199.375 81.3013C214.996 92.115 220.945 110.692 219.094 129.279C217.088 149.407 205.746 168.842 189.679 181.474C173.631 194.091 153 199.831 132.361 192.863C113.407 186.464 98.2269 170.188 93.1499 150.924L93.1499 150.924ZM1.44403 180.337C1.44344 180.338 1.44253 180.333 1.44309 180.323C1.44492 180.332 1.44463 180.337 1.44403 180.337Z"
              fill="#764DAB"
              stroke="#532F82"
              strokeWidth="3"
            />
          </svg>
        </div>
      </main>
    </>
  );
};

export default Intro;
