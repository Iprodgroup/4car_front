import instance from '@/utils/instance';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const res = await instance.post('/login', formData);

    return Response.json(res.data);
  } catch (error) {
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
    });
  }
}