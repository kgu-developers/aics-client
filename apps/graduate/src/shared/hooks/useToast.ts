import { App } from 'antd';
import type { ReactNode } from 'react';

export interface ConfirmConfig {
  title: string;
  content?: string;
  onOk: () => void | Promise<void>;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
}

export interface InfoConfig {
  title: string;
  content?: ReactNode;
  okText?: string;
}

export function useToast() {
  const { message, modal } = App.useApp();

  const toast = {
    success: message.success,
    error: message.error,
    warning: message.warning,
    info: message.info,
  };

  const confirm = (config: ConfirmConfig) => {
    modal.confirm({
      ...config,
      okText: config.okText ?? '확인',
      cancelText: config.cancelText ?? '취소',
    });
  };

  const info = (config: InfoConfig) => {
    modal.info({
      ...config,
      okText: config.okText ?? '확인',
    });
  };

  return { toast, confirm, info };
}
