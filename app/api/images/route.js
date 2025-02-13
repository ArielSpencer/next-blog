import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
  region: process.env.CLOUDFLARE_R2_REGION,
  signatureVersion: 'v4',
});

export async function GET(req, res) {
  const bucketName = process.env.CLOUDFLARE_R2_BUCKET_NAME;

  const params = {
    Bucket: bucketName,
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    const images = data.Contents.map(item => ({
      key: item.Key,
      url: `https://${bucketName}.${process.env.CLOUDFLARE_R2_ENDPOINT.replace(/^https?:\/\//, '')}/${item.Key}`,
    }));

    return new Response(JSON.stringify(images), { status: 200 });
  } catch (error) {
    console.error('Erro ao listar imagens:', error);
    return new Response(JSON.stringify({ error: 'Erro ao listar imagens' }), { status: 500 });
  }
}

export async function DELETE(req, res) {
  const { key } = await req.json();

  if (!key) {
    return new Response(JSON.stringify({ error: 'Chave da imagem é obrigatória' }), { status: 400 });
  }

  const bucketName = process.env.CLOUDFLARE_R2_BUCKET_NAME;

  const params = {
    Bucket: bucketName,
    Key: key,
  };

  try {
    await s3.deleteObject(params).promise();
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Erro ao deletar imagem:', error);
    return new Response(JSON.stringify({ error: 'Erro ao deletar imagem' }), { status: 500 });
  }
}