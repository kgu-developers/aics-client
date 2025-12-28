import CryptoJS from 'crypto-js';
export const encrypt = (payload: string): string => {
  const secret_key =
    (import.meta.env.ENCRYPTION_SECRET as string) || 'default_secret_key';
  const encrypted = CryptoJS.AES.encrypt(payload, secret_key).toString();
  return encrypted;
};
export const decrypt = (encrypted: string): string => {
  const secret_key =
    (import.meta.env.ENCRYPTION_SECRET as string) || 'default_secret_key';
  const decrypted_bytes = CryptoJS.AES.decrypt(encrypted, secret_key);
  const decrypted = decrypted_bytes.toString(CryptoJS.enc.Utf8);
  return decrypted;
};
