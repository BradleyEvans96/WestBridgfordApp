module.exports = (api) => {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@components': './src/components',
                        '@screens': './src/screens',
                        '@context': './src/context',
                        '@helpers': './src/helpers'
                    }
                }
            ],
            ['inline-dotenv']
        ]
    };
};
