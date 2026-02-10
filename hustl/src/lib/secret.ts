import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

const client = new SecretsManagerClient({
  region: process.env.AWS_REGION,
});

export async function getSecrets() {
  const command = new GetSecretValueCommand({
    SecretId: process.env.SECRET_ARN!,
  });

  const response = await client.send(command);

  if (!response.SecretString) {
    throw new Error("Secret not found");
  }

  return JSON.parse(response.SecretString);
}
