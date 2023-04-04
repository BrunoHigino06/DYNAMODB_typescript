import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class AwsCdkDynamodbStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const mapfre_pipefy = new dynamodb.Table(this, 'mapfre_pipefy', { 
      partitionKey: { name: 'test', type: dynamodb.AttributeType.STRING },
      sortKey: {name: 'test', type: dynamodb.AttributeType.NUMBER},
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    mapfre_pipefy.addLocalSecondaryIndex({
      indexName: 'TB_TRIAGEM_CONSULTA_HISTORICO',
      sortKey: {name: 'test', type: dynamodb.AttributeType.STRING},
      projectionType: dynamodb.ProjectionType.ALL
    });

    mapfre_pipefy.addLocalSecondaryIndex({
    indexName: 'TB_TRIAGEM_EXECUCAO_HISTORICO',
    sortKey: {name: 'test', type: dynamodb.AttributeType.STRING},
    projectionType: dynamodb.ProjectionType.ALL
    });

    const mapfre_pipefy_analyliics = new dynamodb.Table(this, 'mapfre_pipefy_analyliics', { 
      partitionKey: { name: 'Name', type: dynamodb.AttributeType.STRING },
      sortKey: {name: 'createdAt', type: dynamodb.AttributeType.NUMBER},
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });
  }
}