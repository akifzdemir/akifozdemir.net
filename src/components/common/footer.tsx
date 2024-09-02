export default function Footer() {
  return (
    <footer>
      <div className="flex justify-around items-center h-20">
        <div className="flex flex-row gap-2 items-center">
          <a
            href="https://www.linkedin.com/in/mehmet-akif-ozdemir/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/akifzdemir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            Github
          </a>
          <a
            href="mailto:akifzdemir@icloud.com"
            target="_blank"
            className="text-gray-500 hover:text-gray-700"
          >
            E-Mail
          </a>
        </div>
      </div>
    </footer>
  );
}
