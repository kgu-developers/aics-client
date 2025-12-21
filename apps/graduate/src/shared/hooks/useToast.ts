import { App } from 'antd';

export interface ConfirmConfig {
  title: string;
  content?: string;
  onOk: () => void | Promise<void>;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
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

  return { toast, confirm };
}
