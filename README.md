# Local development

## Setting up HTTPS
### Step: 1
Install mkcert tool - macOS; you can see the mkcert repo for details
```bash
brew install mkcert
```

### Step: 2
Install nss (only needed if you use Firefox)
```bash
brew install nss
```

### Step: 3
Setup mkcert on your machine (creates a CA)
```bash
mkcert -install
```

### Step: 4
Generate certificates for dev environment
```bash
npm run cert:generate
```

### Step: 5
Run Webapp on https://localhost:3001
```bash
npm run dev:ssl
```


# NextJS + Typescript + Tailwind

Open[https://localhost:3001](https://localhost:3001) with your browser to see the result.

