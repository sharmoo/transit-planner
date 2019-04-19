# Running the API Server
The entry point to the server is located at `src/server/index.js`. You start it with:
If you need to change the backend port, be sure to change the `proxy` setting in `src/client/package.json` to match.

```
cd src/server
npm install
PORT=3001 npm start
```

## Testing (Jasmine)
Tests can be found in `server/spec/api/...`. The structure mirrors the actual api at `server/api/...`. You can run them with:

```
cd src/server
npm test
```

# Running the React Front End (TODO)
```
cd src/client
npm install
PORT=3000 npm start
```

# Docker (coming soon...)