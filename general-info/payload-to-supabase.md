Setting up [Payload](https://payloadcms.com/) with [Supabase](https://supabase.com/dashboard/sign-in?returnTo=%2Forganizations)

## Set up Supabase account

1. Go to [Supabase](https://supabase.com/dashboard/sign-in?returnTo=%2Forganizations), and log in / create an account
	- For some reason my Github did not connect... I ended up using my personal email

2. If it is your first time in Supabase, create an organization, then create a project under the organization. 

3. When generating a Database Password, create a randomized password 
	- This will increase security to the database
	- ***Copy that password and save it for future reference***

4. Once the project is created, click on the `connect` button at the top of the screen 

5. Scroll to the bottom where it says 'Session pooler', and copy the `URI`

## Set up Payload Application


6. Open your terminal

7. Type in `npx create-payload-app` and hit enter

8. Enter a project name

9. Choose either `blank` or `website` for project template

10. Select `PostegreSQL`

11. Replace the connection string with the `URI` that Supabase has provided you in Step 5

12. In the `URI`, replace `[YOUR-PASSWORD]` with the password you generated in Step 3

13. Once loaded, you can double check by entering `npm run dev` or `pnpm dev` and create a user under the `/admin` page. The user information should be updated onto Supabase automatically. 
