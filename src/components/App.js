// import React, { useState } from "react";
// import Header from "./Header";
// import Profile from "./Profile";

// function App() {
//   const [theme, setTheme] = useState("dark");
//   const [user, setUser] = useState(null);
//   return (
//     <main className={theme}>
//       <Header theme={theme} setTheme={setTheme} user={user} setUser={setUser} />
//       <Profile theme={theme} user={user} />
//     </main>
//   );
// }

// export default App;
// App.js
import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { ThemeProvider } from "../context/theme";


function App() {
  const [user, setUser] = useState(null);
  return (
    <ThemeProvider>
      <main>
        <Header user={user} setUser={setUser} />
        <Profile user={user} />
      </main>
    </ThemeProvider>
  );
}

export default App;
