function ContactResume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "";
    link.download = "Chidimma_Onuora_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="resumeContainer">
        <button className="btnResume" onClick={handleDownload}>
          Download Resume{" "}          
          <span className="downloadIcon">            
            <svg
              width="40"
              height="40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#a)">
                <circle cx="20" cy="20" r="20" fill="#0A0A0A" />
                <path
                  d="m20 23.333 3.333-4.166h-2.5v-5.834h-1.666v5.834h-2.5L20 23.333Z"
                  fill="#d3e97a"
                />
                <path
                  d="M26.667 25H13.333v-5.833h-1.666V25c0 .92.747 1.667 1.666 1.667h13.334c.919 0 1.666-.748 1.666-1.667v-5.833h-1.666V25Z"
                  fill="#d3e97a"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#d3e97a" d="M0 0h40v40H0z" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}

export default ContactResume;
