export type ModalSize = 'sm' | 'md';

export const MODAL_MAX = {
  sm: { width: 400, heightVh: 50 } as const,
  md: { width: 600, heightVh: 85 } as const,
} satisfies Record<ModalSize, { width: number; heightVh: number }>;

export function modalStyles(size: ModalSize) {
  const { width, heightVh } = MODAL_MAX[size];
  return {
    width,
    styles: {
      body: {
        maxHeight: `${heightVh}vh`,
        overflow: 'auto' as const,
      },
    },
  } as const;
}
