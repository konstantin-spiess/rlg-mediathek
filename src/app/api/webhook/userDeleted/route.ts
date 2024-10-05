export async function POST(request: Request) {
  try {
    const text = await request.text();
    // Process the webhook payload
  } catch (error) {
    return new Response(`Webhook error: ${(error as Error).message}`, {
      status: 400,
    });
  }

  return new Response('Success!', {
    status: 200,
  });
}
