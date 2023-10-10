// import { JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest';
// // In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// // which contains the path mapping (ie the `compilerOptions.paths` option):
// import { defaults as tsjPreset } from 'ts-jest/presets';

// import { compilerOptions } from './tsconfig.json';
// // import { defaultsESM as tsjPreset } from 'ts-jest/presets';
// // import { jsWithTs as tsjPreset } from 'ts-jest/presets';
// // import { jsWithTsESM as tsjPreset } from 'ts-jest/presets';
// // import { jsWithBabel as tsjPreset } from 'ts-jest/presets';
// // import { jsWithBabelESM as tsjPreset } from 'ts-jest/presets';

// const jestConfig: JestConfigWithTsJest = {
//     roots: ['./'],
//     modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
//     moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: './' } */),

//     bail: true,
//     cache: true,
//     collectCoverageFrom: [
//         '**/*.{js,jsx,ts,tsx}',
//         '!**/coverage/**',
//         '!**/node_modules/**',
//         '!**/babel.config.js',
//         '!**/jest.setup.js',
//     ],
//     collectCoverage: true,
//     coveragePathIgnorePatterns: ['/node_modules/', '/app/assets/'],
//     globals: {},
//     moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//     preset: 'jest-expo',
//     testEnvironment: 'jsdom',
//     testMatch: [
//         '**/__tests__/**/*.js?(x)',
//         '**/?(*.)(spec|test).js?(x)',
//         '**/tests/**/*.test.(ts|js|tsx|jsx)',
//         '<rootDir?/app/**/*.test.(ts|js|tsx|jsx)',
//     ],
//     transform: {
//         ...tsjPreset.transform,
//         '^.+\\.jsx$': 'babel-jest',
//         '^.+\\.tsx?$': [
//             'ts-jest',
//             {
//                 tsconfig: 'tsconfig.spec.json',
//             },
//         ],
//         '^.+\\.ts?$': [
//             'ts-jest',
//             {
//                 tsconfig: 'tsconfig.spec.json',
//             },
//         ],
//         '^.+\\.(js|jsx|mjs)$': './node_modules/babel-jest',
//     },
//     transformIgnorePatterns: [
//         'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
//     ],
//     verbose: true,
// };

// export default jestConfig;
