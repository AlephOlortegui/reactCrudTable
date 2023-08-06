# Crud table

## In order to use json-server

```bash
  npx json-server --watch the_path --port 8000
```

- Port 8000 because React is already using the port 3000
- And `the_path` is the path, where is located your fake data base

### In my case the path would it be
```bash
  npx json-server --watch src/data/db.json --port 8000
```
- ***You need to start json-server before starting react!***

## Packages
```bash
 npm i react-router-dom json-server bootstrap-icons bootstrap
```

# Problems I run to
- in App.js WE CANNOT USE
ThemeContext and ThemeProvider in the same component it crashes the app.

- dependencie array un useFormFx, I put the whole code inside of
useEffect

