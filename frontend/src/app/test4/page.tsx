"use client";

import { useState } from "react";
import { getUser } from "@/rest/client.endpoints";
import { User } from "@/rest/dtos";
import { call } from "@/rest/rest.service";

// tests out browser to NextJS server to NestJS server to DB and back
export default function Test4() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState<User | null>(null);

  const fetchData = async (targetUserId: string) => {
    const user = await call<User>(getUser(targetUserId));

    console.log(user);

    setUser({ ...user });
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    // this should be done using an effect
    fetchData(userId);
  }

  function onChange(e: any) {
    setUserId(e.target.value);
  }

  return (
    <div className="container">
      <div className="row mb-3">
        This forms allows you to look up the details of a user. It makes a call
        to the NextJS api route which in turn makes a call to the local NestJS
        server to get the user details.
      </div>
      <div className="row">
        <div className="col-6">
          <form method="post" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="userId"
                placeholder="User ID"
                onChange={onChange}
              ></input>
              <small id="userIdHelp" className="form-text text-muted">
                Enter the user id of the user to look up.
              </small>
            </div>
            <div className="p-3">
              <button type="submit" className="btn btn-primary m-1">
                Submit
              </button>
              <button type="reset" className="btn btn-secondary m-1">
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="col-6">
          <ul>
            <li>{user?.id}</li>
            <li>{user?.name}</li>
            <li>{user?.email}</li>
            <li>{user?.gender}</li>
            <li>{user?.status}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
