module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@containers': './src/containers',
          '@components': './src/components',
          '@constants': './src/constants',
          '@common': './src/common',
          '@assets': './src/assets',
          '@actions': './src/actions',
          '@reducers': './src/reducers',
          '@sagas': './src/sagas',
          '@helpers': './src/helpers',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
