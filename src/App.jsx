import { A } from "@solidjs/router";

export default function App(props) {
  return (
    <div class="container app">
      <div class="card">
        <nav>
          <div>
            <A href="/" active="active" inactive="inactive">
              Home
            </A>
          </div>
          <div>
            <A href="/user">User</A>
          </div>
        </nav>
        <h1>App</h1>
        {props.children}
      </div>
    </div>
  );
}
