import { NavLink } from "react-router-dom";

// Intentionally ugly shared nav: clashing colors, cramped spacing,
// no responsive handling, weird hover states. Tailwind utilities only.
export default function AppNav() {
  return (
    <nav className="flex gap-1 bg-lime-300 px-2 py-1 border-b-4 border-fuchsia-600 text-xs">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          [
            "px-1 py-0.5 font-black uppercase tracking-widest",
            "text-red-700 bg-yellow-200 border border-black",
            "hover:bg-cyan-400 hover:text-purple-900 hover:italic",
            isActive ? "underline decoration-wavy decoration-pink-600" : "",
          ].join(" ")
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/records"
        className={({ isActive }) =>
          [
            "px-1 py-0.5 font-mono",
            "text-blue-900 bg-orange-300",
            "hover:bg-green-500 hover:text-red-900 hover:line-through",
            isActive ? "outline-4 outline-dotted outline-red-600" : "",
          ].join(" ")
        }
      >
        records
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          [
            "px-1 py-0.5",
            "text-white bg-purple-700 font-serif italic",
            "hover:bg-yellow-400 hover:text-pink-600 hover:not-italic",
            isActive ? "ring-4 ring-lime-600" : "",
          ].join(" ")
        }
      >
        PROFILE
      </NavLink>
    </nav>
  );
}
