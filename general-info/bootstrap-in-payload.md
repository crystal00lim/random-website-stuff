1. Open Payload Application

2. Open new Terminal

3. Enter `npm install bootstrap@5.2.3` 
	- Adding a version number can make the bootstrap package run more stable when newer versions of bootstrap updates down the line
	- If `npm` doesn't work, it might be because you ran the dev with `pnpm` or before, so try `pnpm install bootstrap@5.2.3` instead

4. In the layout.tsx file under (frontend) folder, add lines:
```
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
```
