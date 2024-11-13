import antfu from '@antfu/eslint-config';

export default antfu(
  {
    unocss: true,
  },
  {
    ignores: ['uni_modules'],
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
    },
  },
  {
    rules:{},
  },
);
