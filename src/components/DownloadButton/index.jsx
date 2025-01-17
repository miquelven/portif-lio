import { useRef } from "react";
import "./downloadButton.css";

import downloadCV from "../../../assets/cv/miquelven-CV.pdf";

export default function DownloadButton() {
  const downloadIcon = useRef(null);
  const downloadLoader = useRef(null);
  const downloadCheckMark = useRef(null);
  const downloadText = useRef(null);

  const animationEnd = () => {
    if (
      downloadLoader.current &&
      downloadCheckMark.current &&
      downloadText.current &&
      downloadIcon.current
    ) {
      downloadLoader.current.classList.add("hidden");
      downloadCheckMark.current.classList.remove("hidden");
      downloadText.current.innerHTML = "Baixado";
      setTimeout(() => {
        downloadText.current.innerHTML = "Currículo";
        downloadCheckMark.current.classList.add("hidden");
        downloadIcon.current.classList.remove("hidden");
      }, 1000);
    }
  };

  const animationStart = () => {
    if (
      downloadIcon.current &&
      downloadLoader.current &&
      downloadText.current
    ) {
      downloadIcon.current.classList.add("hidden");
      downloadLoader.current.classList.remove("hidden");
      downloadText.current.innerHTML = "Baixando";
      setTimeout(animationEnd, 1000);
    }
  };

  return (
    <div className="flex mx-auto justify-center w-1/3 m-auto shadow-md shadow-black transition-all duration-300 left-4 right-4 z-10 rounded-lg  bg-white  text-[#fcfcfc] backdrop-blur font-bold  hover:shadow-[#090909] hover:-translate-x-[1px] hover:-translate-y-[5px] max-md:w-1/2 max-sm:border-[#245276] max-sm:text-[#245276] max-sm:hover:shadow-black">
      <a
        aria-label="download button"
        role="link"
        href={downloadCV}
        download
        target="_blank"
        onClick={animationStart}
        className="transform active:scale-95 bg-[#d9e8f3] text-[#080808] px-16 py-2 rounded-lg font-bold tracking-widest w-full max-sm:bg-[#d9e8f3] max-sm:text-[#245276] "
      >
        <div className="flex justify-center items-center relative">
          <div className="svg-container">
            <svg
              role="img"
              ref={downloadIcon}
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="download-arrow stroke-[#080808]"
                d="M13 9L9 13M9 13L5 9M9 13V1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="stroke-[#080808]"
                d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div
              data-testid="download-loader"
              ref={downloadLoader}
              id="download-loader"
              className="text-[#080808] hidden "
            ></div>
            <svg
              data-testid="checkmark"
              ref={downloadCheckMark}
              className="hidden"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-[#080808] "
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z"
              />
            </svg>
          </div>
          <div
            ref={downloadText}
            className="pl-2 text-sm leading-none uppercase font-semibold max-lg:text-xs"
          >
            Currículo
          </div>
        </div>
      </a>
    </div>
  );
}
