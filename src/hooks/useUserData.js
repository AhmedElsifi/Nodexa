import { useContext } from "react";
import { UserDataContext } from "../context/UserDataContext.js";

export function useUserData() {
  const ctx = useContext(UserDataContext);
  if (!ctx) throw new Error("useUserData must be used within a UserDataProvider");
  return ctx;
}
