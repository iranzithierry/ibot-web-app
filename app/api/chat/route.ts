import axios from 'axios';
import { ROOT_URL } from '@/constants';
import { NextRequest } from 'next/server';

const client = axios.create({
    headers: {
        "Content-Type": "multipart/form-data"
    }
})
const API_URL = `${ROOT_URL}/prompt`;

export async function POST(req: NextRequest) {
    const json = await req.json()
    try {
        const { prompt } = json
        const response = await client.post(API_URL, { prompt: prompt});
        return new Response(response.data.response, { status: 200 });
    } catch (err) {
        return new Response(
            // @ts-ignore
            JSON.stringify(error?.response?.data), { status: error?.status }
        );
    }
}