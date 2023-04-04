#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkDynamodbStack } from '../lib/aws-cdk-dynamodb-stack';

const app = new cdk.App();
new AwsCdkDynamodbStack(app, 'AwsCdkDynamodbStack');
