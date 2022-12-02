import type { HelperLike } from '@glint/template';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'page-title': HelperLike<{
      Args: { Positional: string[]; Named: {} };
      Return: void;
    }>;
  }
}

export {};
