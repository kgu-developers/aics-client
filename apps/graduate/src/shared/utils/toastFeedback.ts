import { message as staticMessage } from 'antd';

import parseError from './error';
import { getMessageInstance } from '../providers/AntdMessageBridge';

const DURATION_SEC = 4;

function msg() {
  return getMessageInstance() ?? staticMessage;
}

export function notifyError(error: unknown, fallbackMessage?: string): void {
  const text = fallbackMessage ?? parseError(error).message;
  msg().error({ content: text, duration: DURATION_SEC });
}

export function notifyWarning(text: string): void {
  msg().warning({ content: text, duration: DURATION_SEC });
}

export function notifySuccess(text: string): void {
  msg().success({ content: text, duration: DURATION_SEC });
}

export function notifyInfo(text: string): void {
  msg().info({ content: text, duration: DURATION_SEC });
}
