# MongoDB Atlas Setup Guide for Online Bookstore

## Quick Start

Follow these steps to connect your Online Bookstore application to MongoDB Atlas.

## Step 1: Create MongoDB Atlas Account

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up with your email or Google account
3. Complete the registration process

## Step 2: Create a Free Cluster

1. After logging in, click **"Build a Database"**
2. Select **"Shared"** (Free tier - M0)
3. Choose your cloud provider (AWS, Google Cloud, or Azure)
4. Select a region closest to you
5. Keep the cluster name as default or customize it
6. Click **"Create Cluster"** (this may take 3-5 minutes)

## Step 3: Create Database User

1. In the left sidebar, click **"Database Access"**
2. Click **"Add New Database User"**
3. Select **"Password"** as authentication method
4. Enter a username (e.g., `bookstoreAdmin`)
5. Click **"Autogenerate Secure Password"** or create your own
6. **IMPORTANT**: Copy and save the password securely
7. Under "Database User Privileges", select **"Read and write to any database"**
8. Click **"Add User"**

## Step 4: Configure Network Access

1. In the left sidebar, click **"Network Access"**
2. Click **"Add IP Address"**
3. For development:
   - Click **"Allow Access from Anywhere"**
   - This adds `0.0.0.0/0` to the whitelist
4. For production:
   - Enter your specific IP address
5. Click **"Confirm"**

## Step 5: Get Your Connection String

1. Go back to **"Database"** in the left sidebar
2. Click **"Connect"** button on your cluster
3. Select **"Connect your application"**
4. Choose **"Node.js"** as the driver
5. Copy the connection string (it looks like this):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

## Step 6: Configure Your Application

1. Open the `.env` file in the root of your project
2. Update the `MONGODB_URI` with your connection string:
   ```
   MONGODB_URI=mongodb+srv://bookstoreAdmin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/bookstore?retryWrites=true&w=majority
   ```
3. Replace:
   - `<username>` with your database username
   - `<password>` with your database password
   - Add `/bookstore` before the `?` to specify the database name
4. Update the `JWT_SECRET` with a secure random string:
   ```
   JWT_SECRET=my_super_secret_jwt_key_12345
   ```

## Step 7: Test the Connection

1. Install dependencies (if not already done):
   ```
   npm install
   ```

2. Start the server:
   ```
   npm start
   ```

3. You should see:
   ```
   Server running on port 5000
   MongoDB Atlas Connected Successfully
   ```

## Common Issues and Solutions

### Issue: "MongoServerError: bad auth"
**Solution**: Double-check your username and password in the `.env` file. Make sure there are no extra spaces.

### Issue: "MongooseServerSelectionError: connect ETIMEDOUT"
**Solution**: 
- Verify your IP address is whitelisted in Network Access
- Check your internet connection
- Try using `0.0.0.0/0` for development

### Issue: "Connection string is invalid"
**Solution**: 
- Ensure the connection string format is correct
- Make sure you added the database name (e.g., `/bookstore`) before the `?`
- Check for special characters in password that need URL encoding

### Issue: Special Characters in Password
If your password contains special characters like `@`, `#`, `$`, etc., you need to URL encode them:
- `@` becomes `%40`
- `#` becomes `%23`
- `$` becomes `%24`
- Or regenerate a password without special characters

## Database Collections

Once connected, MongoDB Atlas will automatically create these collections:
- `users` - Stores user accounts
- `books` - Stores book inventory

You can view and manage these collections in the MongoDB Atlas dashboard under "Browse Collections".

## Next Steps

1. Add sample books using the API endpoint
2. Test user registration and login
3. Monitor your database usage in the Atlas dashboard
4. Set up automated backups (available in paid tiers)

## Security Best Practices

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Use strong passwords** for database users
3. **Restrict IP access** in production environments
4. **Rotate JWT secrets** regularly
5. **Enable MongoDB Atlas alerts** for unusual activity

## Resources

- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [MongoDB Connection String Format](https://docs.mongodb.com/manual/reference/connection-string/)
