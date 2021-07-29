import { unlockAccountImpl } from "./ethereum/unlockAccount"
export async function unlockAccount() {
  return unlockAccountImpl();
}

