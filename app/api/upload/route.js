import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const s3 = new AWS.S3({
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
  region: process.env.CLOUDFLARE_R2_REGION,
  signatureVersion: 'v4',
});

export async function POST(req, res) {
  const { fileName, fileType } = await req.json();

  if (!fileName || !fileType) {
    return new Response(JSON.stringify({ error: 'Nome do arquivo e tipo do arquivo são obrigatórios' }), { status: 400 });
  }

  const fileKey = `${uuidv4()}-${fileName}`;
  const bucketName = process.env.CLOUDFLARE_R2_BUCKET_NAME;

  const params = {
    Bucket: bucketName,
    Key: fileKey,
    Expires: 60 * 5, // URL válida por 5 minutos
    ContentType: fileType,
  };

  try {
    const uploadUrl = await s3.getSignedUrlPromise('putObject', params);
    const fileUrl = `https://${process.env.CLOUDFLARE_R2_BUCKET_NAME}.${process.env.CLOUDFLARE_R2_ENDPOINT}/${fileKey}`;

    return new Response(JSON.stringify({ uploadUrl, fileUrl }), { status: 200 });
  } catch (error) {
    console.error('Erro ao gerar URL de upload:', error);
    return new Response(JSON.stringify({ error: 'Erro ao gerar URL de upload' }), { status: 500 });
  }
}