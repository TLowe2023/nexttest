import { getUsers } from "@/rest/server.endpoints";
import { User } from "@/rest/dtos";
import { call } from "@/rest/rest.service";

// tests out NextJS server side data pulls and rendering
export default async function Test2() {
  const users = await call<User[]>(getUsers());

  return (
    <div className="container">
      <div className="row mb-3">
        This is a test of a backend component making a call to get the list of
        DB users and displaying them. It calls to the NestJS local server and
        renders the list of users.
      </div>
      <div className="row">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
