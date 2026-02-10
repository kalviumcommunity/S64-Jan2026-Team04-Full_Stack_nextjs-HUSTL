const secrets = await getSecrets();

jwt.sign(payload, secrets.JWT_SECRET);
