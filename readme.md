# Accounts and Access Key Setup
# Serverless.js

1. Sign into the AWS console using the credentials we passed around: https://eclassworkshop.signin.aws.amazon.com/console
2. Change your zone to US-West2 (Oregon)

# Setup

1. Make sure you have node js installed: https://nodejs.org/en/
2. Install serverless (if you don't have it already): 
npm install serverless -g
3. Add your credentials to serverless
call serverless config credentials --provider aws --key AKIAUMR --secret 805Y0syS23dLMJa/Km -o --profile workshop
3. Create your project directory by running the following command (with your ccid replacing 'yourccid' in the path): serverless create --template-url https://github.com/ualberta-eclass/tsqs-template/tree/master/tsqs-template --path yourccid
4. Go into your directory: cd yourccid
5. Install packages: npm install
6. Open the yourccid in VS Code or your favourite IDE. 



# LTI

1. Set up lti from eClass

# MYSQL 

1. Set up MYSQL Databases
2. We will do some of this manually just to get a feel from trouble shooting in AWS console