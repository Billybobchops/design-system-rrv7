import { reactRouter } from '@react-router/dev/vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// import commonjs from '@rollup/plugin-commonjs';
// import { federation } from '@module-federation/vite';

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production';

    return {
        css: {
            postcss: {
                plugins: [tailwindcss, autoprefixer],
            },
        },
        resolve: {
            alias: {
                '@styles': '/app/styles',
                // '@mui/x-date-pickers/AdapterDayjs': path.resolve(
                //     import.meta.dirname,
                //     'node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js'
                // ),
            },
        },
        plugins: [
            reactRouter(),
            tsconfigPaths(),
			// commonjs(), // just caused a different build error ... 
            // federation({
            //     name: isProduction
            //         ? 'remoteDesignSystem'
            //         : 'remoteDesignSystemDev',
            //     filename: 'remoteEntry.js',
            //     exposes: {
            //         './VisuallyHidden': './app/components/accessibility/VisuallyHidden.tsx',
            //         './CTAButton': './app/components/button/CTAButton.tsx',
            //         './PrimaryButton': './app/components/button/PrimaryButton.tsx',
            //     },
            //     remotes: {
            //         remote: {
            //             type: 'module', // Indicate that the remote is an ES module
            //             name: 'remoteDesignSystem', // Name of the remote exposed module
            //             entry: `${process.env.VITE_REMOTE_ORIGIN}/remoteEntry.js`, // Dynamic entry URL based on the environment variable
            //         },
            //     },
            //     shared: {
            //         react: {
            //             singleton: true, // Ensure only one React instance is used etc.
            //             requiredVersion: '^19.0.0',
            //         },
            //         'react-dom': {
            //             singleton: true,
            //             requiredVersion: '^19.0.0',
            //         },
            //     },
            // }),
        ],
        // server: {
        //     origin: isProduction
        //         ? 'https://your-production-domain.com'
        //         : 'http://localhost:3000',
        // },
        build: {
            target: 'chrome89', // Maintain compatibility with modern browsers
        },
    };
});
