import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'design'],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [0, 'always', []],
    'subject-empty': [2, 'never'],
  },
};

module.exports = Configuration;
