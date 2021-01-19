import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigw from "@aws-cdk/aws-apigateway";

// import * as s3 from "@aws-cdk/aws-s3";
// import * as cloudfront from "@aws-cdk/aws-cloudfront";
// import * as origins from "@aws-cdk/aws-cloudfront-origins";
// import * as s3deploy from "@aws-cdk/aws-s3-deployment";

export class Step01HelloLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const fn = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'index.handler',
    });

    new apigw.LambdaRestApi(this, 'my gateway api', {
      handler:  fn,
    });

  

    // const websiteBucket = new s3.Bucket(this, "WebsiteBucket", {
    //   versioned: true,
    // });

    // // create a CDN to deploy your website
    
    // const distribution = new cloudfront.Distribution(this, "Distribution", {
    //   defaultBehavior: {
    //     origin: new origins.S3Origin(websiteBucket),
    //   },
    //   defaultRootObject: "index.html",
    // });

    // // Prints out the web endpoint to the terminal

    // new cdk.CfnOutput(this, "DistributionDomainName", {
    //   value: distribution.domainName,
    // });

    // // housekeeping for uploading the data in bucket 

    // new s3deploy.BucketDeployment(this, "DeployWebsite", {
    //   sources: [s3deploy.Source.asset("./website")],
    //   destinationBucket: websiteBucket,
    //   distribution,
    //   distributionPaths: ["/*"],
    // });

    




  }
}
