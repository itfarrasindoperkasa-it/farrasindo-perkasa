import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy API Route untuk Next.js 16
 *
 * Cara penggunaan:
 * GET: /api/proxy?url=https://api.example.com/endpoint
 * POST: /api/proxy dengan body JSON
 */

// Daftar domain yang diizinkan (whitelist untuk keamanan)
const ALLOWED_DOMAINS = [
  "api.example.com",
  "jsonplaceholder.typicode.com",
  "dummyjson.com",
  // Tambahkan domain API Anda di sini
];

function isAllowedDomain(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return ALLOWED_DOMAINS.some(
      (domain) =>
        urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const targetUrl = searchParams.get("url");

    if (!targetUrl) {
      return NextResponse.json(
        { error: "Parameter URL diperlukan" },
        { status: 400 }
      );
    }

    // Validasi domain untuk keamanan
    if (!isAllowedDomain(targetUrl)) {
      return NextResponse.json(
        { error: "Domain tidak diizinkan" },
        { status: 403 }
      );
    }

    // Forward request ke target URL
    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Next.js Proxy",
      },
      cache: "no-store", // Disable caching untuk fresh data
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Target API error: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
      headers: {
        "Cache-Control": "no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Proxy GET error:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data dari target URL" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      url: targetUrl,
      method = "POST",
      data: requestData,
      headers: customHeaders = {},
    } = body;

    if (!targetUrl) {
      return NextResponse.json(
        { error: "URL diperlukan dalam request body" },
        { status: 400 }
      );
    }

    // Validasi domain untuk keamanan
    if (!isAllowedDomain(targetUrl)) {
      return NextResponse.json(
        { error: "Domain tidak diizinkan" },
        { status: 403 }
      );
    }

    // Forward request ke target URL
    const response = await fetch(targetUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Next.js Proxy",
        ...customHeaders,
      },
      body: requestData ? JSON.stringify(requestData) : undefined,
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Target API error: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
      headers: {
        "Cache-Control": "no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Proxy POST error:", error);
    return NextResponse.json(
      { error: "Gagal mengirim data ke target URL" },
      { status: 500 }
    );
  }
}

// Handle preflight CORS requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
    },
  });
}
