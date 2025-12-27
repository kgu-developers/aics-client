import { clearTokens } from './token';

export default function logout(): void {
  clearTokens();
  window.location.reload();
}
