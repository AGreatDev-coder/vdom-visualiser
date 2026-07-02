/**
 * data/samples.js
 * -----------------
 * Same sample set the frontend ships locally in
 * frontend/src/samples/sampleComponents.js. Exposing it over the API means
 * samples can be edited/extended server-side (e.g. loaded from a DB later)
 * without a frontend redeploy — the frontend falls back to its local copy
 * if the API is unreachable.
 */
export const SAMPLES = [
  {
    id: "greeting",
    name: "Greeting card",
    description: "A simple prop update — watch the h1 and button turn yellow.",
    before: `function Greeting() {
  return (
    <div className="card">
      <h1 title="hello">Hello, Alex</h1>
      <p>Welcome back.</p>
      <button type="button">Continue</button>
    </div>
  );
}`,
    after: `function Greeting() {
  return (
    <div className="card">
      <h1 title="hi">Hello, Priya</h1>
      <p>Welcome back.</p>
      <button type="submit">Continue</button>
    </div>
  );
}`,
  },
  {
    id: "todo-list",
    name: "Keyed list reorder",
    description: "Same three items, reordered — keys let React move instead of rebuild.",
    before: `function TodoList() {
  return (
    <ul className="list">
      <li key="a">Buy milk</li>
      <li key="b">Walk dog</li>
      <li key="c">Read book</li>
    </ul>
  );
}`,
    after: `function TodoList() {
  return (
    <ul className="list">
      <li key="c">Read book</li>
      <li key="a">Buy milk</li>
      <li key="b">Walk dog</li>
      <li key="d">Water plants</li>
    </ul>
  );
}`,
  },
  {
    id: "conditional",
    name: "Conditional element swap",
    description: "Changing tag type forces React to unmount and remount.",
    before: `function Alert() {
  return (
    <div className="alert">
      <span>Status:</span>
      <p>Everything is fine.</p>
    </div>
  );
}`,
    after: `function Alert() {
  return (
    <div className="alert">
      <span>Status:</span>
      <strong>Action required!</strong>
    </div>
  );
}`,
  },
  {
    id: "nested",
    name: "Nested structure change",
    description: "An inserted wrapper shifts everything below it.",
    before: `function Panel() {
  return (
    <section className="panel">
      <header>
        <h2>Settings</h2>
      </header>
      <p>Manage your preferences here.</p>
    </section>
  );
}`,
    after: `function Panel() {
  return (
    <section className="panel">
      <header>
        <h2>Settings</h2>
        <span className="badge">New</span>
      </header>
      <div className="body">
        <p>Manage your preferences here.</p>
      </div>
    </section>
  );
}`,
  },
];
