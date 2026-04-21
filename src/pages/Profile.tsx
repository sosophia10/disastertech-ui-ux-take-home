import { type FormEvent, useState } from "react";

type Role = "Admin" | "Editor" | "Viewer";

type ProfileData = {
  displayName: string;
  email: string;
  role: Role;
};

const DEFAULTS: ProfileData = {
  displayName: "Ada Lovelace",
  email: "ada@example.com",
  role: "Editor",
};

export default function Profile() {
  const [data, setData] = useState<ProfileData>(DEFAULTS);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Saved: " + JSON.stringify(data));
  }

  return (
    <main>
      <h1>Profile</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="profile-display-name">Display name</label>
          <input
            id="profile-display-name"
            type="text"
            required
            value={data.displayName}
            onChange={(e) => setData({ ...data, displayName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="profile-email">Email</label>
          <input
            id="profile-email"
            type="email"
            required
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="profile-role">Role</label>
          <select
            id="profile-role"
            required
            value={data.role}
            onChange={(e) => setData({ ...data, role: e.target.value as Role })}
          >
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setData(DEFAULTS)}>
            Reset
          </button>
        </div>
      </form>
    </main>
  );
}
