import Projects from "./projects/page";

export default function Home() {
  return (
    <main>
      <h2>srbgl</h2>
      <div>
        <p>
          H, I'm SilviaRbgl, web developer and video editor. After 10 years
          working as an audiovisual editor, both in companies and freelance, I
          decided to change my career and studied a bootcamp as a full-stack
          developer.
        </p>
      </div>

      <div>
        <Projects />
      </div>
    </main>
  );
}
