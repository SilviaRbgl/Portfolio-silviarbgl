import Projects from "./projects/page";

export default function Home() {
  return (
    <main>
      <h2>srbgl</h2>
      <div>
        <p>
          Hi! I’m a frontend developer and a video editor, based in Berlin.
          After 10 years of experience as a video editor, I decided to change
          career and on 2022 I joined a full-stack developer bootcamp to align
          my skill set with the latest tech trends.
        </p>
        <a href="/about">
          <p>See more about me</p>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
          </svg>
        </a>
      </div>

      <div>
        <Projects />
      </div>
    </main>
  );
}
