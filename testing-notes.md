//theme:

file: styled.d.ts

### TESTING:

# //npm:

> npm i msw

or

npm install msw --save-dev

# // files:

> setupTests.ts

> mocks/handlers/<name>handlers
> mocks/handlers/index.js
> mocks/server.js

> common/test-utils.tsx
> common/test-data.tsx

> // jest.config.js:

- ADD:

        moduleNameMapper: {
            axios: "axios/dist/node/axios.cjs",
        },

> // package.json

- ADD:

        "test": "react-scripts test --transformIgnorePatterns \"node_modules/(?!axios)/\"",

///// zamiana np komponentu:

                jest.mock('../tree/FileIcon', () => {
                        return () => {
                                return 'File Icon Component'
                        }
                })
